import { ChangeEvent, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { ITodosState } from "../../redux/reducers/todosReducer";

interface IProps {
  addNewTodo: (text: string) => void;
}

export const Form = ({ addNewTodo }: IProps) => {
  const [text, setText] = useState<string>("");

  const onChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value);
  };
	
  const todos = useSelector(
	(state: ITodosState) => state.todos
 );

	const handleAddNewTodo = () => {
		if (todos.length > 9) {
			alert("Ой, максимальное количество задач - 10")
			setText("");
		} else {
			addNewTodo(text.trim());
			setText("");
		}
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Дабавить новую задачу"
          aria-describedby="basic-addon2"
          value={text}
          onChange={onChange}
        />
        <Button
          variant="outline-success"
          id="button-addon2"
          onClick={handleAddNewTodo}
        >
          Добавить
        </Button>
      </InputGroup>
    </div>
  );
};
