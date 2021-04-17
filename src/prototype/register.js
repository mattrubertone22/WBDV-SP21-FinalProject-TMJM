import React, {useState, useEffect} from "react"
import {Link, useHistory} from 'react-router-dom'
import {
    VStack,
    Input,
    Button,
    FormControl,
    FormLabel,
    Box,
    Stack,
    Heading,
    Select,
    useToast,
} from "@chakra-ui/react"

import NavBar from "./NavBar";
import userService from '../services/user-service'

const SignUp = () => {

    const [credentials, setCredentials] = useState({userName: '', password: '', role: ''})
    const history = useHistory()
    const signup = () => {
        userService.signup(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("username already taken")
                } else {
                    history.push("/profile")
                }
            })
    }


    return (
        <>
            <NavBar/>
            <VStack>
                <Heading fontSize='70px' color='darkblue' fontStyle='italic'>Register</Heading>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Username</FormLabel>
                        <Input value={credentials.userName} onChange={(e) => {setCredentials({...credentials, userName: e.target.value})}}/>
                    </FormControl>
                    <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Password</FormLabel>
                        <Input type="password" value={credentials.password} onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}/>
                    </FormControl>
                    {/* <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Re-enter Password</FormLabel>
                        <Input type="password" value={passwordToMatch} onChange={(e) => setPasswordToMatch(e.target.value)} isInvalid={invalid}/>
                    </FormControl> */}
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Roles</FormLabel>
                        <Select placeholder="Are you a team member" value={credentials.role} onChange={(e) => {setCredentials({...credentials, role: e.target.value})}}>
                            <option>Yes</option>
                            <option>No</option>
                        </Select>
                    </FormControl>
                    <Stack direction="column" spacing={7} align='center' pt='2rem'>
                        <Button colorScheme='green' size='lg' width='xs' onClick={signup}>Sign up</Button>
                    </Stack>
                </Box>
            </VStack>
        </>
    )
}
export default SignUp