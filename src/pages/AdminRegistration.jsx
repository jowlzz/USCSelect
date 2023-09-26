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
  const [showIdNumberForm, setShowIdNumberForm] = useState(false);
  const [idNumber, setIdNumber] = useState('');

  const handleInputChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    } else if (e.target.id === 'idNumber') {
      setIdNumber(e.target.value);
    }
  };

  const handleGetCode = () => {
    
    if (email && password) {
      setShowIdNumberForm(true);
    } else {
    
      console.log('Please fill in both email and password fields.');
    }
  };

  const handleSignUp = async () => {
   
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(Auth, email, password);

 
      console.log('User registered successfully with idNumber:', idNumber);

     
      setEmail('');
      setPassword('');
      setIdNumber('');
      setShowIdNumberForm(false); 
    } catch (error) {
      console.error('Error registering user: ', error.message);
    }
  };

  if ((!email || !password) && showIdNumberForm) {
    setShowIdNumberForm(false);
  }

  return (
    <ChakraProvider>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Register As Admin
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Stack spacing={4}>
                <HStack>
                  <Box></Box>
                </HStack>
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
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

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

                <Stack spacing={10} pt={2}>
                  <Button
                    onClick={handleGetCode}
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    isDisabled={!email || !password}>
                    Get Code
                  </Button>
                  {showIdNumberForm && (
                    <Button
                      onClick={handleSignUp}
                      size="lg"
                      bg={'green.400'}
                      color={'white'}
                      _hover={{
                        bg: 'green.500',
                      }}>
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
      </Flex>
    </ChakraProvider>
  );
}

export default RegisterAccount;
