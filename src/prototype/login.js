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
import {connect} from 'react-redux'

const SignIn = (    {
                     attemptUserLogin,
                 }
             ) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [alertVisible, setAlertVisible] = useState(false)
    const validateForm = () => userName.length > 0 && password.length > 0;
    const [userName, setUsername] = useState("");
        const [password, setPassword] = useState("");
    const toast = useToast();
    const [credentials, setCredentials] = useState({userName: '', password: ''})
    const history = useHistory();
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
    const handleSubmit = async () => {
        await attemptUserLogin({userName: userName, password: password})
            .then((response) => {
                if (response.user === null) {
                    setAlertVisible(true)
                } else {
                    history.push("/home")
                }
            }
            )
    };
    return (
        <>
            <VStack>
                <Heading fontSize='70px' color='#25274D' fontStyle='italic'>Login</Heading>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='4rem'>
                        <FormLabel fontSize='30px'>Username</FormLabel>
                        <Input placeholder="Enter Username" variant="flushed" value={userName} onChange = {(e) =>  setUsername(e.target.value)}/>
                        <FormLabel mt='50px' fontSize='30px'>Password</FormLabel>
                        <InputGroup>
                            <Input type={show ? "text" : "password"} variant="flushed" value={password} onChange={(e) =>setPassword(e.target.value)} />
                            <InputRightElement width="4rem" pb='10px'>
                                <Button onClick={handleClick} size='sm'>{show ? "Hide" : "Show"}</Button>
                              </InputRightElement>
                        </InputGroup>
                        <Stack direction="column" mt='3rem' align='center'>
                            <Button colorScheme='teal' size='lg' width='xs' onClick = {async () => {
                                                                                                            validateForm();
                                                                                                            await handleSubmit()
                                                                                                        }}>Log in</Button>
                        </Stack>
                    </FormControl>
                </Box>
            </VStack>

        </>

    )
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser
})

const dtpm = (dispatch) => ({
    attemptUserLogin: (credentials) =>
        userService.login(credentials)
            .then(user => dispatch({
                type: "LOGIN_USER",
                user: user
            })),
    getCurrentUser: () =>
        userService.getCurrentUser()
            .then(user => dispatch({
                type: "CURRENT_USER",
                user: user
            }))
})

export default connect(
        stpm,
        dtpm)
    (SignIn)