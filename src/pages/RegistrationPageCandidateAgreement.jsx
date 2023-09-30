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
  Select
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../firebase/config';
import registrationBG from '../assets/backgrounds/Registration for Candidate Agreement1.png';

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
       >

        <Stack spacing={8} mx={'auto'} width={700} py={6} px={6}>
         
          
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={50}
            rounded="25px"
            >

          <Stack align={'center'} pb={10}>
            <Heading fontSize={'3xl'} textAlign={'center'}>
              Register As Candidate
            </Heading>
          </Stack>
            <form onSubmit={handleSignUp}>
              <Stack spacing={5} >
                <HStack spacing={10}>
                  <Box>
                    <FormControl id="name">
                      <FormLabel><b>Name</b></FormLabel>
                      <Input type="text" placeholder="Your name..."/>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="idNumber">
                      <FormLabel><b>ID Number</b></FormLabel>
                      <Input type="number" placeholder="Your ID..."/>
                    </FormControl>
                  </Box>
                </HStack>
                <HStack spacing={10}>
                  <Box>
                    <FormControl id="program">
                      <FormLabel><b>Program</b></FormLabel>
                      <Input type="text" placeholder="Your program..."/>
                    </FormControl>
                  </Box>
                  <Box>
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
                  </Box>
                </HStack>
                <HStack spacing={10}>
                  <Box>
                    <FormControl id="phonenumber">
                      <FormLabel><b>Phone Number</b></FormLabel>
                      <Input type="text" placeholder="Your phone..."/>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="address" isRequired>
                      <FormLabel><b>Address</b></FormLabel>
                      <Input type="number" placeholder="Your address..."
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <HStack spacing={15}>
                    <Stack width="45%">
                      <h1><b>Party Association</b></h1>
                      <Select placeholder='Select party'>
                        <option value='option1' width='10'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                    </Stack>
                    <Stack width="45%">
                      <h1><b>Party Association</b></h1>
                      <Select placeholder='Select party'>
                        <option value='option1' width='10'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                    </Stack>
                </HStack>

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
          </Box>
        </Stack>
      </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default RegisterAccount;


