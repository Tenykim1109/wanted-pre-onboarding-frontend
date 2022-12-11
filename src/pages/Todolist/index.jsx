import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Title } from "../../components/styles";
import TodoItem from "../../components/Todolist/TodoItem";
import { useAuth } from "../../hooks";
import { API } from "../../utils";

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const navigate = useNavigate();

  useAuth();

  useEffect(() => {
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
    if (!todo.length) {
      alert("내용을 입력해주세요.");
      return;
    }

    try {
      const { data } = await API.post("/todos", {
        todo,
      });

      if (data) {
        window.location.reload();
      }
    } catch (e) {
      alert(`오류 발생: ${e.message}`);
    }
  };

  return (
    <>
      <Title>투두 리스트</Title>
      <div>
        <Input
          placeholder="내용을 입력해주세요."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return;
            if (e.key === "Enter") createTodo();
          }}
        />
        <Button onClick={() => createTodo()}>추가</Button>
      </div>
      <div
        style={{
          margin: "30px 8px 60px 8px",
          height: "512px",
          overflow: "auto",
        }}
      >
        {todoList.map((value) => (
          <TodoItem key={value.id} item={value} />
        ))}
      </div>
      <Button
        onClick={() => {
          localStorage.removeItem("accessToken");
          navigate("/");
        }}
      >
        로그아웃
      </Button>
    </>
  );
};

export default Todolist;
