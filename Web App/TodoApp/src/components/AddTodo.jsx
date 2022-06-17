import React, {useState} from 'react'
import { HStack, IconButton , Input, FormControl, useToast} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
const AddTodo = ({addTask}) => {
    const [newTask, setNewTask] = useState('');
    const toast = useToast()
    function handleSubmit(event) {
        event.preventDefault()
        if(!newTask){
            toast({
                title: "Can't create without Task ",
                description: "Make sure you type your task in the box ",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: 'top'
              })
            return
        }

        addTask(newTask)
        toast({
            title: "Added to your list ! ",
            description: "Successfull add new task",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top'
          })
        setNewTask('')
        return
    }
    
    return (
        <FormControl 
        w={{base:'90vw', sm:'80vw', lg: '50vw', xl:'40vw'}}>
            <HStack mt={8}>
                <Input 
                isRequired
                variant='filled' 
                placeholder='Add new task'
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)} />
                <IconButton
                icon={<FaPlus />}
                px={7} 
                colorScheme= 'green' 
                type='submit'
                onClick={(event)=>handleSubmit(event)}
                />
                </HStack>
        </FormControl>
    )
}

export default AddTodo
