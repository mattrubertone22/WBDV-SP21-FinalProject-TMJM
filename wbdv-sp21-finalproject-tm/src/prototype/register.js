import React, {useState, useEffect} from "react"
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



/**
 * The sign up component which allows users to create an account, including username, password, email, gender, age and city
 */
const SignUp = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToMatch, setPasswordToMatch] = useState('');
    const [invalid, setInvalid] = useState(false);
    const [role, setRole] = useState('');
    const toast = useToast();

    useEffect(() => {
        if (password !== passwordToMatch) {
            setInvalid(true);
        } else {
            setInvalid(false);
        }
    }, [passwordToMatch, password])

    const handleSignUp = async () => {
        if (!(userName && password && passwordToMatch)) {
            toast({
                title: "Sign up failed",
                description: "Please complete all required fields",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            return;
        }
        if (invalid === true) {
            toast({
                title: "Sign up failed",
                description: "Password does not match",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            return;
        }
    }

    return (
        <>

            <VStack>
                <Heading fontSize='70px' color='darkblue' fontStyle='oblique'>Register</Heading>
                <Box p="4" borderRadius='lg' width='lg'>
                    <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Username</FormLabel>
                        <Input value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </FormControl>
                    <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Password</FormLabel>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                    <FormControl mb='1rem' isRequired>
                        <FormLabel fontSize='20px'>Re-enter Password</FormLabel>
                        <Input type="password" value={passwordToMatch} onChange={(e) => setPasswordToMatch(e.target.value)} isInvalid={invalid}/>
                    </FormControl>
                    <FormControl mb='1rem'>
                        <FormLabel fontSize='20px'>Roles</FormLabel>
                        <Select placeholder="Are you a team member or manager" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option>Yes</option>
                            <option>No</option>
                        </Select>
                    </FormControl>
                    <Stack direction="column" spacing={7} align='center' pt='2rem'>
                        <Button colorScheme='green' size='lg' width='xs' onClick={handleSignUp}>Sign up</Button>
                    </Stack>
                </Box>
            </VStack>
        </>
    )
}
export default SignUp