import { Box, Button, ButtonGroup, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompletedTasks } from '../../redux/action';

const Footer = ({ handleChange, remaining, completedTask }) => {
    const dispatch = useDispatch();
    const {todos} = useSelector((store)=> store);
    if(todos.length === 0) return;
    return (
        <Stack  flexDirection="row" justifyContent='space-between' display='flex' alignItems='center' p={4}>
            <Box w='20%'>
                <Text>{ remaining > 0 ? remaining : 0 } items left</Text>
            </Box>
            <ButtonGroup spacing="1" fontSize='sm' w='46%'>
                <Button variant='outline' onClick={()=> handleChange('showAll')}>All</Button>
                <Button variant='outline' onClick={()=> handleChange('showNotCompleted')}>Active</Button>
                <Button variant='outline' onClick={()=> handleChange('showCompleted')}>Completed</Button>
            </ButtonGroup>
            <Box w={'30%'}>
                {
                    completedTask  > 0 && (
                        <Button variant='link' onClick={()=> dispatch(deleteCompletedTasks())}>Clear completed</Button>
                    )
                }
            </Box>
        </Stack>
    )
}

export default Footer