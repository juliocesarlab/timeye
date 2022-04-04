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
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskSample, setNewTaskSample] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const response = await getTasks(user.id);
      const tasks = response?.data?.tasks;

      if (tasks) setTasks(response.data.tasks);
      console.log(tasks);
      setIsLoading(false);
    })();
  }, []);

  async function handleAddTask() {
    const response = await createTask(user.id, newTaskName, newTaskSample);
    const task = response.data.createdTask;

    setTasks([...tasks, task]);
  }

  return (
    <>
      <Navbar
        options={[
          { name: 'Logout', goTo: '/', onclick: logout },
          { name: 'MyStats', goTo: '/stats' },
        ]}
      />
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
              placeholder="Task name"
            />
            <input
              type="number"
              className="sample-input"
              value={newTaskSample}
              onChange={e => setNewTaskSample(e.target.value)}
              placeholder="Sample(optional)"
            />
            <span className="add-task" onClick={handleAddTask}>
              <AiFillPlusCircle />
            </span>
          </div>
        </CreateArea>
        <DashboardView>
          <div className="dashboard-heading">
            <h1>My Tasks</h1>
            <div className="tasks-header">
              <h3>Name</h3>
              <h3>Sample</h3>
              <h3>Timer</h3>
              <h3>Options</h3>
            </div>
          </div>
          {isLoading && (
            <>
              <h3>Loading your tasks...</h3>
            </>
          )}

          {!isLoading && (
            <>
              <div className="dashboard-body">
                {tasks.map(task => (
                  <Task
                    task={task}
                    id={task._id}
                    key={task._id}
                    taskList={tasks}
                    setTaskList={setTasks}
                  />
                ))}
              </div>
            </>
          )}
        </DashboardView>
      </div>
    </>
  );
}
