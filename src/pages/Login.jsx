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
    Center, 
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
                <Box
                    display="flex"
                    alignItems="center"
                    height="100vh"
                >
                    <Box
                        flex="1"
                        bg="green.400"
                        height="100%"
                    >

                        {/*put images here*/}


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
                                    <Stack spacing="4">
                                        <HStack spacing="4" align="center">
                                            <Divider />
                                            <Text
                                                textStyle="sm"
                                                whiteSpace="nowrap"
                                                color="fg.muted"
                                            >
                                                SIGN IN THROUGH GOOGLE
                                            </Text>
                                            <Divider />
                                        </HStack>

                                        <Button
                                            leftIcon={<FaGoogle />}
                                            colorScheme="green"
                                            variant="solid"
                                            onClick={signInWithGooglePopup}
                                        >
                                            Continue with Google
                                        </Button>
                                    </Stack>

                                    <Center>
                                        <Text color="fg.muted">
                                            Register as Admin?{" "}
                                            {
                                                <Link
                                                    as={ReactRouterLink}
                                                    to="/registerAdmin"
                                                >
                                                    Sign up!
                                                </Link>
                                            }
                                        </Text>
                                    </Center>
                                </Stack>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
            </ChakraProvider>
        </>
    );
}

export default LoginPage;
