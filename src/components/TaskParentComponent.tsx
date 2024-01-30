import { AddCircleOutlined } from '@mui/icons-material';
import { DeleteOutline } from '@mui/icons-material';
import {
  Button,
  IconButton,
  ListItem,
} from '@mui/material';
import React, { useState } from 'react';
import TaskComponent from './TaskComponent';

const TaskParentComponent: React.FC = () => {

  const uniqueId = () => Math.random().toString(36).substring(7);

  const [projects, setProjects] = useState<{ id: string; value: string }[]>([{id: uniqueId(), value: ''}])

  const addProject = () => {
    setProjects([...projects, { id: uniqueId(), value: '' }])
  }

  const deleteField = (index: number) => {
    if (index !== 0) {
      const updatedFields = [...projects];
      updatedFields.splice(index, 1);
      setProjects(updatedFields);
    }
  }
  
  return (
    <>
      {projects.map((field, index) => (
        <ListItem
          secondaryAction={index !==0 &&
            <IconButton
              edge="start"
              aria-label="delete"
              onClick={() => deleteField(index)}
            >
              <DeleteOutline color='error' />
            </IconButton>
          } 
          >
            <div key={field.id}>
              <TaskComponent />
            </div>
        </ListItem>
      ))}
      <Button
        variant="outlined"
        color='success'
        startIcon={<AddCircleOutlined />}
        size='small'
        sx={{ml:'auto'}}
        onClick={addProject}
      >
        Project
      </Button>
    </>
  )
}

export default TaskParentComponent;