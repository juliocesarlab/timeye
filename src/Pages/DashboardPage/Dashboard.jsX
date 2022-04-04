import { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Navbar } from '../../Compoents/Navbar/Navbar';
import { Task } from '../../Compoents/Task/task';
import { useAuth } from '../../Hooks/useAuth';
import { createTask, getTasks } from '../../services/api';
import { CreateArea, DashboardView } from './style';

export function DashboardPage() {
  const { logout, user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    (async function () {
      const response = await getTasks(user.id);
      setTasks(response.data.tasks);
    })();
  }, []);

  async function handleAddTask() {
    const response = await createTask(user.id, newTaskName);
    const task = response.data.createdTask;

    setTasks([...tasks, task]);
  }

  return (
    <>
      <Navbar options={[{ name: 'Logout', goTo: '/', onclick: logout }]} />
      <div className="default-container">
        <CreateArea>
          <div className="title">
            <h1>Create Task</h1>
          </div>
          <div className="input-area">
            <input
              type="text"
              value={newTaskName}
              onChange={e => setNewTaskName(e.target.value)}
            />
            <span className="add-task" onClick={handleAddTask}>
              <AiFillPlusCircle />
            </span>
          </div>
        </CreateArea>
        <DashboardView>
          <div className="dashboard-heading">
            <h1>My Tasks</h1>
          </div>
          <div className="dashboard-body">
            {tasks.map(task => (
              <Task task={task} key={task._id} />
            ))}
          </div>
        </DashboardView>
      </div>
    </>
  );
}
