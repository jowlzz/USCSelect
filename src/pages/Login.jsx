import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import { PasswordField } from "../components/passwordField.jsx";
import { NavLink, Link as ReactRouterLink } from "react-router-dom";
import "../main.jsx";
import { FaGoogle } from "react-icons/fa";
import { signInWithGooglePopup } from "../firebase/signinwithGooglePopup.js";

function LoginPage() {
  return (
    <>
      <ChakraProvider>
        <form action="" className="Login-Form">
          <Container maxW="600px" marginTop={"100px"} centerContent>
            <Stack spacing="8">
              <Stack spacing="6">
                <Stack
                  spacing={{
                    base: "2",
                    md: "3",
                  }}
                  textAlign="center"
                >
                  <Heading
                    size={{
                      base: "xs",
                      md: "sm",
                    }}
                  >
                    Log in to your account
                  </Heading>
                </Stack>
              </Stack>
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
                <Stack spacing="2">
                  <Stack spacing="2">
                    <FormControl>
                      <center>
                        <FormLabel htmlFor="email">Name</FormLabel>
                      </center>
                      <Input id="email" type="email" />
                    </FormControl>
                    <FormControl>
                      <center>
                        <FormLabel htmlFor="number">ID Number</FormLabel>
                      </center>
                      <Input id="Id_number" type="number" />
                    </FormControl>
                    <PasswordField />
                  </Stack>
                  <HStack justify="space-between">
                    <Button variant="text" size="sm">
                      Forgot password?
                    </Button>
                  </HStack>
                  <Stack spacing="2">
                    <Button>Login</Button>
                    <Text color="fg.muted">
                      Register as Admin?{" "}
                      {
                        <Link as={ReactRouterLink} to="/registerAdmin">
                          Sign up!
                        </Link>
                      }
                    </Text>
                    <HStack spacing="2" align="center">
                      <Divider />
                      <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                        or continue with
                      </Text>
                      <Divider />
                    </HStack>
                    {/* Google Account authn */}
                    <Button
                      leftIcon={<FaGoogle />}
                      colorScheme="green"
                      variant="solid"
                      onClick={signInWithGooglePopup}
                    >
                      Continue with Google
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </form>
      </ChakraProvider>
    </>
  );
}

export default LoginPage;
