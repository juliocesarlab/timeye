import { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Task } from '../../Components/Task/task';
import { useAuth } from '../../Hooks/useAuth';
import { createTask, getTasks } from '../../services/api';
import { CreateArea, DashboardView } from './style';

export function DashboardPage() {
  const { logout, user } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskSample, setNewTaskSample] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [animateTask, setAnimateTask] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await getTasks(user.id);
      const tasks = response?.data?.tasks;

      if (tasks) setTasks(response.data.tasks);
      setIsLoading(false);
    })();
  }, []);

  async function handleAddTask() {
    const response = await createTask(user.id, newTaskName, newTaskSample);
    const task = response.data.createdTask;
    setAnimateTask(true);
    setTasks([...tasks, task]);
  }

  return (
    <>
      <Navbar
        options={[
          { name: 'MyStats', goTo: '/stats' },
          { name: 'Logout', goTo: '/', onclick: logout },
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
          {isLoading && (
            <>
              <h3>Loading your tasks...</h3>
            </>
          )}
          {tasks.length > 0 ? (
            <>
              <div className="dashboard-heading">
                <h1>My Tasks</h1>
                <div className="tasks-header">
                  <h3>Name</h3>
                  <h3>Sample</h3>
                  <h3>Timer</h3>
                  <h3>Options</h3>
                </div>
              </div>
            </>
          ) : (
            <div className="no-tasks">
              <h3>No tasks here, you should create a new one !</h3>
            </div>
          )}
          {!isLoading && (
            <>
              <div>
                {tasks.map(task => (
                  <Task
                    animate={animateTask ? 'animate-task' : ''}
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
