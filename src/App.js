import { Provider} from 'react-redux';
import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";
import { store } from "./redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <article>
          <TasksHeader/>
          <TasksList/>
          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}
