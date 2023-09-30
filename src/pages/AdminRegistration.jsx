import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  ChakraProvider,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink, Link as ReactRouterLink } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../firebase/config';

function RegisterAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showIdNumberForm, setShowIdNumberForm] = useState(false);
  const [idNumber, setIdNumber] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [enteredCode, setEnteredCode] = useState('');

  const handleInputChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
      checkPasswordMatch();
    } else if (e.target.id === 'confirmPassword') {
      setConfirmPassword(e.target.value);
      checkPasswordMatch();
    } else if (e.target.id === 'idNumber') {
      setIdNumber(e.target.value);
    } else if (e.target.id === 'verificationCode') {
      setEnteredCode(e.target.value);
    }
  };

  const generateRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleGetCode = async () => {
    if (email && password && passwordsMatch) {
      const newVerificationCode = generateRandomCode();

      const mailOptions = {
        from: '', 
        to: email,
        subject: 'Verification Code',
        text: `Your admin verification code is: ${newVerificationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email: ', error);
        } else {
          console.log('Email sent: ' + info.response);

          setVerificationCode(newVerificationCode);
          setCodeSent(true);
        }
      });
    } else {
      console.log('Please fill in both email, password, and confirm password fields.');
    }
  };

  const handleSignUp = async () => {
    try {
      if (enteredCode === verificationCode) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(Auth, email, password);

        console.log('User registered successfully with idNumber:', idNumber);

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIdNumber('');
        setVerificationCode('');
        setShowIdNumberForm(false);
        setEnteredCode('');
      } else {
        console.log('Incorrect verification code.');
      }
    } catch (error) {
      console.error('Error registering user: ', error.message);
    }
  };

  const checkPasswordMatch = () => {
    setPasswordsMatch(password === confirmPassword);
  };

  if ((!email || !password || !confirmPassword) && showIdNumberForm) {
    setShowIdNumberForm(false);
  }

  const areFieldsValid = () => {
    return email && password && confirmPassword && passwordsMatch;
  };

  return (
    <ChakraProvider>
      <Flex height="100vh" maxW="1500px">
       
        <Box
          flex="1"
          bg="green.500"
          display={['none', 'block']} 
        >

        {/*Butang carousel image diri*/}

        </Box>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"  
            height="100vh"
            p={{ base: 4, md: 8, lg: 12, xl: 16 }}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={5}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Register As Admin
              </Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              p={8}
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <Stack spacing={2}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={handleInputChange}
                        onBlur={checkPasswordMatch}
                      />
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl id="confirmPassword" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <Input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange}
                        onBlur={checkPasswordMatch}
                      />
                    </InputGroup>
                  </FormControl>
                  {!passwordsMatch && (
                    <Text color="red.500">Passwords do not match.</Text>
                  )}
                  {showIdNumberForm && (
                    <FormControl id="idNumber" isRequired>
                      <FormLabel>Admin Code</FormLabel>
                      <Input
                        type="number"
                        id="idNumber"
                        value={idNumber}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                  )}
                  {codeSent && (
                    <FormControl>
                      <FormLabel>Verification Code</FormLabel>
                      <Input
                        type="text"
                        id="verificationCode"
                        value={enteredCode}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                  )}
                  <Stack spacing={10} pt={2}>
                    {!codeSent && (
                      <Button
                        onClick={handleGetCode}
                        size="lg"
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}
                        isDisabled={!areFieldsValid()}
                      >
                        Get Code
                      </Button>
                    )}
                    {codeSent && (
                      <Button
                        onClick={handleSignUp}
                        size="lg"
                        bg={'green.400'}
                        color={'white'}
                        _hover={{
                          bg: 'green.500',
                        }}
                        isDisabled={!enteredCode || enteredCode !== verificationCode}
                      >
                        Sign Up
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </form>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link color={'blue.400'} as={ReactRouterLink} to="/adminLogin">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default RegisterAccount;
