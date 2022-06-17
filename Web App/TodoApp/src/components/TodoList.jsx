import React from 'react'
import { VStack, HStack, IconButton, Text, StackDivider, Spacer} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
const TodoList = ({tasks, deleteTask}) => {
    
    return (
        <VStack 
        align='flex-start'
        divider={<StackDivider/>}
        border="1px solid lightgray"
        borderRadius='md'
        p={4}
        w={{base:'90vw', sm:'80vw', lg: '50vw', xl:'40vw'}}>
            {tasks.map(item => {
                return(
                    <HStack key={item.id} alignSelf='stretch' p={1}>

                        <Text>{item.task}</Text>
                        <Spacer />
                        <IconButton 
                        icon={<FaTrashAlt />} 
                        isRound= 'true'
                        onClick={()=>deleteTask(item.id)}/>

                    </HStack>
                )
            })}
        </VStack>
    )
}

export default TodoList
