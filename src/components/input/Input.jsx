import { v4 as uuid } from 'uuid';
import { 
    Box,
    Icon,
    Input 
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateAllTasks } from '../../redux/action';
import { BsCaretDown } from 'react-icons/bs';
const InputComponent = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector((store)=> store);
    const completed = useSelector((store)=> store.todos.filter((item)=> item.status === true));
    const inputRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const taskObject = {
            id : uuid(),
            task : inputRef.current,
            status : false,
        }
        document.getElementById('inputField').value = null;
        dispatch(addTask(taskObject));
    }
    const handleChange = ()=>{
        dispatch(updateAllTasks());
    };
    return (
        <Box display='flex' alignItems='center' m={4} p={2} justifyContent="space-between" >
            <Box alignItems='center' justifyContent="center" width="10%">
                {
                    todos.length > 0 && (
                        <Icon as={BsCaretDown} color={completed.length === todos.length ? 'blackAlpha.700': 'blackAlpha.400'} fontSize='32' onClick={()=> handleChange()} />
                    )
                }
            </Box>
            <Box as="form" onSubmit={(event)=> handleSubmit(event)} width="90%">
                <Input type="text" autoFocus placeholder='Enter your task' width='100%' id='inputField' onChange={(e)=> inputRef.current = e.target.value} />
            </Box>
        </Box>
    )
}

export default InputComponent