import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    ChakraProvider,
    Checkbox
  } from "@chakra-ui/react"
  import { PasswordField } from "../components/passwordField"
  
  function A_login() {
    return (
      <ChakraProvider>
        <Box display="flex" alignItems="center" height="100vh">
          <Box flex="1" bg="green.400" height="100%">
            {/* Put carousel here */}
          </Box>

          <Container maxW="500px">
            <Stack spacing="10">
              <Box
                py={{
                  base: "0",
                  sm: "8",
                }}
                px={{
                  base: "4",
                  sm: "10",
                }}
                bg={{
                  base: "transparent",
                  sm: "bg.surface",
                }}
                boxShadow={{
                  base: "none",
                  sm: "md",
                }}
                borderRadius={{
                  base: "none",
                  sm: "xl",
                }}
              >
                <Stack spacing="4">
                <Heading>Admin Login</Heading>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" type="email" />
                  </FormControl>
                  <PasswordField />
                  <HStack justify="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button variant="link" size="sm">
                      Forgot password?
                    </Button>
                  </HStack>
                  <Button colorScheme="green" size="lg" type="submit">
                    Login
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
      </ChakraProvider>
    );
  }
  
  export default A_login;
  