import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123" , done: false},
    { id: 1, content: "코딩 공부하기", done: true },
    { id: 2, content: "잠 자기", done: false },
  ]);

  return (
    <>
      <div className="app-container">
        <h1>할일 목록</h1>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <hr />
        <TodoInput todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}
      >
        추가하기
      </button>
    </>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState("");
  const [stateClass, setClass] = useState("input_hide");
  return (
    <li className="todo-list">
      <input type="checkbox" onChange={(e)=>
      {
        const check = structuredClone(todo);
        check.done = e.target.checked;

        setTodoList((prev)=>
         prev.map((el) =>
           el.id === todo.id ? check : el
          )
        );
      }

    }
      checked = {todo.done}
      ></input>

      {todo.content}
      <input
        value={inputValue}
        className= {stateClass}
        onChange={(event) => setInputValue(event.target.value)}
      />


      <button
        id="adj"
        onClick={() => {
          if(stateClass === "input_hide"){
            setClass("input_show");
            return;
          }

          if(inputValue ===''){
            alert("빈문자열 입니다.")
            return;
          }

          setTodoList((prev) =>
            prev.map((el) =>
              el.id === todo.id ? { ...el, content: inputValue } : el
            )
          );
          setInputValue('');

          setClass("input_hide")
        }}
      >
        수정
      </button>


      <button
        id="del"
        onClick={() => {
          setTodoList((prev) => {
            return prev.filter((el) => el.id !== todo.id);
          });
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default App;
