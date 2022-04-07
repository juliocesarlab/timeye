import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useAuth } from '../../Hooks/useAuth';
import {
  deleteTask,
  updateTaskName,
  updateTaskSample,
} from '../../services/api';
import { Timer } from '../Timer/Timer';
import { TaskBox } from './style';

export function Task({ task, taskList, setTaskList, animate }) {
  const { user } = useAuth();
  const [taskName, setTaskName] = useState(task.name || '');
  const [taskSample, setTaskSample] = useState(task.sample || '');
  const [deleteAnimate, setDeleteAnimate] = useState(false);

  async function handleTaskName() {
    const response = await updateTaskName(taskName, user.id, task._id);
    console.log(response);
  }

  async function handleTaskSample() {
    const response = await updateTaskSample(taskSample, user.id, task._id);
    console.log(response);
  }

  async function handleDeleteTask() {
    try {
      const response = await deleteTask(user.id, task._id);
    } catch (e) {
      console.log(e);
    }
    setDeleteAnimate(true);
    setTimeout(() => removeTaskFromDom(task._id), 300);
  }

  function removeTaskFromDom(taskId) {
    const filteredTasks = taskList.filter(task => task._id != taskId);
    setTaskList(filteredTasks);
  }

  return (
    <TaskBox
      className={
        deleteAnimate ? 'delete-animate' : animate ? 'show-animate' : ''
      }
    >
      <div className="editable">
      <input
        type="text"
        id={task._id}
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        onBlur={handleTaskName}
      />
      </div>
      <div className="editable">
      <input
        type="text"
        className="sample-input"
        value={taskSample}
        onChange={e => setTaskSample(e.target.value)}
        onBlur={handleTaskSample}
      />
      </div>
      <Timer userId={user.id} taskId={task._id} timeSpent={task.timeSpent} />

      <div className="options">
        <span className="delete-btn" onClick={handleDeleteTask}>
          <AiFillDelete />
        </span>
      </div>
    </TaskBox>
  );
}
