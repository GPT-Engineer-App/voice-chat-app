import { Container, VStack, Button, Text, useToast } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const startVoiceChat = () => {
    toast({
      title: "Voice Chat Started",
      description: "You are now connected to the voice chat.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Voice Chat App</Text>
        <Button leftIcon={<FaMicrophone />} colorScheme="blue" onClick={startVoiceChat}>
          Start Voice Chat
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
