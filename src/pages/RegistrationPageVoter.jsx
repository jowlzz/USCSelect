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
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../firebase/config';
import registrationBG from '../assets/backgrounds/Registration for Voters.png';

function RegisterAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {

      const auth = getAuth();
      await createUserWithEmailAndPassword(Auth, email, password);

  
      console.log('User registered successfully.');

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error registering user: ', error.message);
    }
  };

  return (
    <ChakraProvider>
      <Box
        backgroundImage={registrationBG}
        height="100vh"
        backgroundPosition="center"
        objectFit="cover"
        backgroundSize="cover"
      >

      <Flex
        minH='100vh'
        align={'center'}
        justify={'center'}
        float={'left'}
       >

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6} pl={50} >
         
          
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={50}
            rounded="25px"
            >

          <Stack align={'center'} pb={10}>
            <Heading fontSize={'3xl'} textAlign={'center'}>
              Register As Voter
            </Heading>
          </Stack>
          
            <form onSubmit={handleSignUp}>
              <Stack spacing={4} w={300}>
              <FormControl id="name">
                      <FormLabel><b>Name</b></FormLabel>
                      <Input type="text" placeholder="Your name..."/>
                    </FormControl>
                    <FormControl id="idNumber">
                      <FormLabel><b>ID Number</b></FormLabel>
                      <Input type="number" placeholder="Your ID..."/>
                    </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel><b>Email address</b></FormLabel>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Your usc email..."
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel><b>Password</b></FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={handleInputChange}
                      placeholder="Your password..."
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
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg="#FEC146"
                    color={'white'}
                    _hover={{
                      bg: '#134D0F',
                    }}>
                    <b>Sign Up</b>
                  </Button>
                </Stack>
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a voter? <Link color='#134D0F' fontSize={'17'}><b>Login</b></Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default RegisterAccount;
