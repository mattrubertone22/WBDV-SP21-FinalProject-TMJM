import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {
    Text,
    VStack,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl,
    Heading,
    FormLabel,
    Box,
    Stack,
    useToast,
} from "@chakra-ui/react"
import NavBar from "./NavBar";
import {useState} from 'react';
import userService from '../services/user-service';
export default function SignIn() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const toast = useToast();
    const [credentials, setCredentials] = useState({userName: '', password: ''})
    const history = useHistory()
    const login = () => {
        userService.login(credentials)
            .then((user) => {
                console.log(credentials)
                if(user === 0) {
                    toast({
                        title: "Login failed",
                        description: "Username or password incorrect",
                        status: "error",
                        duration: 3000,
                        isClosable: true
                    });
                }
                else {
                    history.push("/profile")
                }

            })

    }

    return (
        <>
            <VStack>
                <Heading fontSize='70px' color='darkblue' fontStyle='italic'>Login</Heading>
                <Box p="4" borderRadius='sm' width='lg'>
                    <FormControl mb='4rem'>
                        <FormLabel fontSize='30px'>Username</FormLabel>
                        <Input placeholder="Enter Username" variant="flushed" value={credentials.userName} onChange={(e) => {setCredentials({...credentials, userName: e.target.value})}}/>
                        <FormLabel mt='50px' fontSize='30px'>Password</FormLabel>
                        <InputGroup>
                            <Input type={show ? "text" : "password"} variant="flushed" value={credentials.password} onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}/>
                            <InputRightElement width="4rem" pb='10px'>
                                <Button onClick={handleClick} size='sm'>{show ? "Hide" : "Show"}</Button></InputRightElement>
                        </InputGroup>
                        <Stack direction="column" mt='3rem' align='center'>
                            <Button colorScheme='teal' size='lg' width='xs' onClick={login}>Log in</Button>
                        </Stack>
                    </FormControl>
                </Box>
            </VStack>

        </>

    )
}