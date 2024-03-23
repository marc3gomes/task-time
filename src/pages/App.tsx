import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import Timer from '../components/Timer';
import { useState } from 'react';
import { ITasks } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [select, setSelect] = useState<ITasks>()

  function selectTask(taskSelect: ITasks) {
    setSelect(taskSelect)
    setTasks(tasksOld => tasksOld.map(task => ({
      ...task,
      select: task.id === taskSelect.id ? true : false
    })))
  }

  function finishTask() {
    if(select) {
      setSelect(undefined)
      setTasks(tasksOld => tasksOld.map(task => {
        if(task.id === select.id) {
          return {
            ...task,
            select: false,
            completed: true
          }
        }
        return task
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks}
         selectTask={selectTask}
      />
      <Timer 
        select={select}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
