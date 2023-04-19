import TaskItem from "./TaskItem";
import {useSelector} from 'react-redux';

const TasksList = () => {
  const tasks = useSelector((selector) => selector.todo)
  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
