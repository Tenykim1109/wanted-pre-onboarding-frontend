import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { API } from "../../utils";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/");

    const getTodo = async () => {
      try {
        const { data } = await API.get("/todos");

        setTodoList(data);
      } catch (e) {
        alert(`오류 발생: ${e.message}`);
      }
    };

    getTodo();
  }, []);

  const createTodo = async () => {
    try {
      const { data } = await API.post("/todos", {
        todo,
      });

      console.log(data);
    } catch (e) {
      alert(`오류 발생: ${e.message}`);
    }
  };

  return (
    <>
      <div>투두 리스트</div>
      <Input
        placeholder="내용을 입력해주세요."
        value={todo}
        onChange={(e) => setTodo(e.target.value.trim())}
        onKeyDown={(e) => {
          if (e.key === "Enter") createTodo();
        }}
      />
      <div style={{ marginTop: "80px" }}>
        {todoList.map((value) => (
          <TodoItem
            key={value.id}
            id={value.id}
            contents={value.todo}
            isCompleted={value.isCompleted}
          />
        ))}
      </div>
    </>
  );
};

export default Todolist;
