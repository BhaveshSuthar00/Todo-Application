import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from '../footer/Footer';
import { Task } from './Task';

const TaskCard = ({taskList, remaining, handleChange, completedTask}) => {
    return (
        <Box>
            <Box>
                {
                    taskList.map((task)=> {
                        return <Task key={task.id} task={task} />
                    })
                }
            </Box>
            <Footer handleChange={handleChange} remaining={remaining} completedTask={completedTask} />
        </Box>
    )
}

export default TaskCard