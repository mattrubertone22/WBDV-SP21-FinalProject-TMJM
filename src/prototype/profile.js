import React, {useEffect, useState} from 'react'
import NavBar from "./NavBar";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Text,
    Heading,
    VStack, Select
} from "@chakra-ui/react";
import userService from "../services/user-service";

const Profile = () => {
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [statusCode, setStatusCode] = useState('')
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })
    }, [statusCode])
       return(
           <div>
               <VStack>
                   <Heading fontSize='70px' color='darkblue' fontStyle='italic'>Profile</Heading>
                   <Box p="4" borderRadius='lg' width='lg'>
                       <FormControl mb='1rem'>
                           <FormLabel fontSize='20px'>Username</FormLabel>
                           <Input type="text" value={currentUser.userName}/>
                       </FormControl>
                       {
                           !editing &&
                               <>
                                   <FormControl mb='1rem'>
                                       <FormLabel fontSize='20px'>Password</FormLabel>
                                       <Input type="password" value={currentUser.password}/>
                                   </FormControl>

                                   <FormControl mb='1rem'>
                                       <FormLabel fontSize='20px'>Are you a team manager/coach?</FormLabel>
                                       <Select value={currentUser.role}>
                                           <option>Yes</option>
                                           <option>No</option>
                                       </Select>
                                   </FormControl>
                               </>

                       }

                       {
                           editing &&
                           <>
                               <FormControl mb='1rem'>
                                   <FormLabel fontSize='20px'>Password</FormLabel>
                                   <Input type="password" onChange={(e) => setCurrentUser({...currentUser, password: e.target.value})}
                                          value={currentUser.password}/>
                               </FormControl>

                               <FormControl mb='1rem'>
                                   <FormLabel fontSize='20px'>I am currently a team member</FormLabel>
                                   <Select
                                       onChange={(e) => {
                                       setCurrentUser( currentUser=>  ({...currentUser, role: e.target.options[e.target.selectedIndex].value}))
                                       console.log(e.target.options[e.target.selectedIndex].value)

                                   }}
                                       value={currentUser.role}>
                                       <option value={'Yes'}>Yes</option>
                                       <option value={'No'}>No</option>
                                   </Select>
                               </FormControl>
                           </>

                       }




                       <Stack direction="column" spacing={7} align='center' pt='2rem'>
                           <Button onClick={() => {setEditing(true)}} colorScheme='purple' size='lg' width='xs'>Edit Profile</Button>
                       </Stack>

                       <Stack direction="column" spacing={7} align='center' pt='2rem'>
                           <Button colorScheme='purple' size='lg' width='xs'>Update Profile</Button>
                       </Stack>

                   </Box>

                   <div className="table-responsive">
                       <table className="table text-nowrap">
                           <thead>
                           <tr>
                               <th>MatchId</th>
                               <th>Comments</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                               <td>5951040787</td>
                               <td><textarea>Nigma vs Secret</textarea></td>
                               <i onClick={() => {
                                   // setEditing(true)
                               }} className="fas fa-cog"></i>
                           </tr>
                           <tr>
                               <td>5950735072</td>
                               <td><textarea>Brame vs Thurda</textarea></td>
                               <i onClick={() => {
                                   // setEditing(true)
                               }} className="fas fa-cog"></i>
                           </tr>

                           </tbody>
                       </table>
                   </div>
               </VStack>
           </div>




       )
   }

   export default Profile