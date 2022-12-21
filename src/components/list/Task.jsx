import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus, checkClick, deleteTask, updateTask } from '../../redux/action';
import { Box, Icon, Input, Text } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';
export const Task = ({ task }) => {
    const dispatch = useDispatch();
    const textRef = useRef(task.task);
    const {click} = useSelector((store)=> store);
    const [changeEdit, setChangeEdit] = useState(false);
    const [removeBtn, setRemoveBtn] = useState(false);
    const handleStatus = (id)=>{
        dispatch(changeStatus(id));
    }
    const handleDelete = (id)=>{
        dispatch(deleteTask(id));
    }
    const handleClick = ({ detail }) => {
        switch (detail) {
        case 1:
            dispatch(checkClick(false));
            break;
        case 2:
            setChangeEdit(!changeEdit);
            dispatch(checkClick(true));
            break;
        default:
            return;
        }
    };
    const handleEdit = (event, id)=>{
        event.preventDefault();
        setChangeEdit(!changeEdit);
        if(textRef.current.length === 0){
            dispatch(deleteTask(id))
            return;
        } else {
            dispatch(updateTask({id : task.id, task : textRef.current}));
        }
    };
    const keyPress = ()=>{
        dispatch(checkClick(false));
    };
    useEffect(()=>{
        if(!click && changeEdit){
            setChangeEdit(false);
            if(textRef.current !== 0 && textRef.current !== task.task){
                dispatch(updateTask({id : task.id, task : textRef.current}));
            }
        }
    },[click])
    return (
        <Box boxShadow='md' display='flex' m={4} fontSize='21px' p={2}  alignItems='center' onMouseEnter={()=> setRemoveBtn(true)} onMouseLeave={()=> setRemoveBtn(false)}>
            {
                !changeEdit && (
                    <Icon as={task.status ? BsCheckCircle : BsCircle}   ml={2}  onClick={()=> handleStatus(task.id)} />
                )
            }
            <Box ml={4} flex='1' fontWeight='bold'>
                {
                    changeEdit ? 
                    <Box as='form' onSubmit={(event)=> handleEdit(event, task.id)} onBlur={()=> keyPress()}>
                        <Input 
                        autoFocus
                        boxShadow='inset 0  0 5px black'
                        _focus={{boxShadow : '0px 0 10px 1000px rgba(0,0,0,0.4)', outline : "none"}}
                        fontWeight='bold' fontSize='21px' defaultValue={task.task} onChange={(e)=> textRef.current = e.target.value} 
                        />
                    </Box>
                    :
                    <Text 
                        textDecoration={task.status ? 'line-through' : 'none' } 
                        color={!task.status ? 'blackAlpha.700' : 'blackAlpha.400'}
                        onClick={(e)=> handleClick(e,task.id)}
                    >
                        {task.task}
                    </Text>
                }
            </Box>
            <Box justifySelf={'flex-end'} mr={2}>
                {
                    !changeEdit && removeBtn && (
                        <Icon as={MdCancel} color='red' onClick={()=>handleDelete(task.id)} />
                    )
                }
            </Box>
        </Box>
    )
}
