import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { LogOut } from "lucide-react-native";

import { api } from "@services/api";

import { UserPhoto } from "./UserPhoto";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

import { useAuth } from "@hooks/useAuth";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  // Adicione esta lógica para criar a URL com o timestamp
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/avatar/${user.avatar}?t=${Date.now()}`
    : null;

  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={user.avatar ? { uri: avatarUrl } : defaultUserPhotoImg}
        w="$16"
        h="$16"
        alt="Imagem do usuário"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity onPress={signOut} activeOpacity={0.7}>
        <Icon as={LogOut} color="$gray200" size="xl" />
      </TouchableOpacity>
    </HStack>
  );
}
