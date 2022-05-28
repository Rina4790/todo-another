import {
  useDispatch,
  useSelector,
} from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Form } from "../Form/Form";
import { TodoItem } from "./TodoItem";
import { ITodosState } from "../../redux/reducers/todosReducer";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const todos = useSelector(
    (state: ITodosState) => state.todos
  );
  const dispatch = useDispatch();

  const onClickDelete = (id: string) => {
    dispatch({ type: "DELETE_TODO", id: id });
  };

  const addNewTodo = (text: string) => {
    if (text !== "") {
      dispatch({ type: "ADD_TODO", text: text });
    } else {
      alert("Введите текст");
    }
  };

  return (
    <div className={styles.todoList}>
      <Form addNewTodo={addNewTodo} />
      <div className={styles.listGroup}>
      	<ListGroup>
	        {todos.map((item) => {
	          return (
	            <ListGroup.Item
	              action
	              variant="success"
	            >
	              <TodoItem
	                key={item.id}
	                text={item.text}
	                onDelete={() =>
	                  onClickDelete(item.id)
	                }
	                time={item.time}
	              />
	            </ListGroup.Item>
	          );
	        })}
	      </ListGroup>
      </div>
    </div>
  );
};
