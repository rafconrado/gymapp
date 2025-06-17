import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  Center,
  Heading,
  useToast,
  Text,
  VStack,
  Toast,
  ToastTitle,
} from "@gluestack-ui/themed";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as yup from "yup";

import { api } from "@services/api";
import { AppError } from "@utils/AppError";

import { useAuth } from "@hooks/useAuth";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ToastMessage } from "@components/ToastMessage";

type FormDataProps = {
  name: string;
  email: string;
  password: string | null;
  old_password: string | null;
  confirm_password: string | null;
};

const profileSchema = yup.object({
  name: yup.string().required("Informe o nome."),

  email: yup.string().required(),

  old_password: yup
    .string()
    .nullable()
    // Garante que o valor padrão seja null, eliminando a possibilidade de 'undefined'
    .default(null)
    .transform((value) => (!!value ? value : null)),

  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 dígitos.")
    .nullable()
    // Garante que o valor padrão seja null
    .default(null)
    .transform((value) => (!!value ? value : null)),

  confirm_password: yup
    .string()
    .nullable()
    // Garante que o valor padrão seja null
    .default(null)
    .transform((value) => (!!value ? value : null))
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais.")
    .when("password", {
      is: (val: string | null | undefined) => !!val,
      then: (schema) =>
        schema
          .required("Informe a confirmação da senha.")
          .nullable()
          .transform((value) => (!!value ? value : null)),
      otherwise: (schema) => schema,
    }),
});

export function Profile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  const toast = useToast();
  const { user, updateUserProfile } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email,
      old_password: null,
      password: null,
      confirm_password: null,
    },
    resolver: yupResolver(profileSchema),
  });

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      // Se o usuário cancela o upload não retorna nada.
      if (photoSelected.canceled) {
        return;
      }

      // Verificação de segurança: garante que o array 'assets' existe e tem itens.
      if (photoSelected.assets && photoSelected.assets.length > 0) {
        const photoUri = photoSelected.assets[0].uri;

        // Usamos 'FileSystem.getInfoAsync' para pegar o tamanho do arquivo.
        const photoInfo = await FileSystem.getInfoAsync(photoUri);

        // Checa se a informação do tamanho está disponível.
        if (photoInfo.exists && photoInfo.size) {
          const photoSizeInMB = photoInfo.size / 1024 / 1024;

          if (photoSizeInMB > 5) {
            return toast.show({
              placement: "top",
              render: ({ id }) => (
                <ToastMessage
                  id={id}
                  action="error"
                  title="Imagem muito grande."
                  description="Escolha uma imagem de até 5MB."
                  onClose={() => toast.close(id)}
                />
              ),
            });
          }
        }

        const fileExtension = photoUri.split(".").pop();

        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          uri: photoUri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any;

        const userPhotoUploadForm = new FormData();
        userPhotoUploadForm.append("avatar", photoFile);

        const avatarUpdatedResponse = await api.patch(
          "/users/avatar",
          userPhotoUploadForm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const userUpdated = {
          ...user,
          avatar: avatarUpdatedResponse.data.avatar
        };
        userUpdated.avatar = avatarUpdatedResponse.data.avatar;
        updateUserProfile(userUpdated);

        toast.show({
          placement: "top",
          render: () => (
            <Toast
              backgroundColor="$green500"
              action="success"
              variant="outline"
              style={{ marginTop: 20 }}
            >
              <ToastTitle color="$white">Foto atualizada!</ToastTitle>
            </Toast>
          ),
        });
      }
    } catch (error) {
      console.log(error);

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title="Erro ao selecionar a imagem."
            description="Ocorreu um problema ao carregar a foto, por favor, tente novamente."
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setPhotoIsLoading(false);
    }
  }

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);

      const userUpdated = user;
      userUpdated.name = data.name;

      await api.put("/users", data);

      await updateUserProfile(userUpdated);

      toast.show({
        placement: "top",
        render: () => (
          <Toast
            backgroundColor="$green500"
            action="success"
            variant="outline"
            style={{ marginTop: 20 }}
          >
            <ToastTitle color="$white">
              Perfil atualizado com sucesso!
            </ToastTitle>
          </Toast>
        ),
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível atualizar o perfil. Tente novamente mais tarde.";

      toast.show({
        placement: "top",
        render: () => (
          <Toast backgroundColor="$red500" action="error" variant="outline">
            <ToastTitle color="$white">{title}</ToastTitle>
          </Toast>
        ),
      });
    } finally {
      setIsUpdating(false);
    }
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/avatar/${user.avatar}?t=${Date.now()}`
    : null;

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={
              user.avatar
                ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
                : defaultUserPhotoImg
            }
            alt="Foto do usuário"
            size="xl"
          />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input
                bg="$gray600"
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                bg="$gray600"
                placeholder="E-mail"
                isReadOnly
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$12"
            mb="$2"
          >
            Alterar senha
          </Heading>

          <Controller
            control={control}
            name="old_password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha antiga"
                bg="$gray600"
                secureTextEntry
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Nova senha"
                bg="$gray600"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Confirme a nova senha"
                bg="$gray600"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.confirm_password?.message}
              />
            )}
          />

          <Center w="$full" gap="$4">
            <Button
              title="Atualizar"
              onPress={handleSubmit(handleProfileUpdate)}
              isLoading={isUpdating}
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
