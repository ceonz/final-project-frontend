import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../store/actions/shelterActions';

function TaskForm({ task, onSave }) {
  const initialFormState = {
    name: '', 
    id: '',  
    assignedTo: '', 
    description: '', 
    dueDate: '', 
    status: '', 
    priority: '', 
    animal: ''
  };
  const [formData, setFormData] = useState(task || initialFormState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(updateTask(task.id, formData)); 
    } else {
      dispatch(addTask(formData)); 
    }
    if (onSave) onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="assignedTo" value={formData.assignedTo} onChange={handleChange} placeholder="Assigned To" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} placeholder="Due Date" />
      <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="Status" />
      <input type="text" name="priority" value={formData.priority} onChange={handleChange} placeholder="Priority" />
      <input type="text" name="animal" value={formData.animal} onChange={handleChange} placeholder="Animal" />
      <button type="submit">{task ? 'Update' : 'Add'} Task</button>
    </form>
  );
}

export default TaskForm;