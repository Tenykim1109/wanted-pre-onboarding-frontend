import React, { useState } from "react";
import { TodoContainer, TodoInput } from "../../components";
import { API } from "../../utils";

const TodoItem = ({ id, contents, isCompleted }) => {
  const [editable, setEditable] = useState(false);
  const [complete, setComplete] = useState(isCompleted);
  const [content, setContent] = useState(contents);

  const updateTodo = async () => {
    try {
      const { status, data } = await API.put(`/todos/${id}`, {
        todo: content,
        isCompleted: complete,
      });

      console.log("수정");
      console.log(status);
      console.log(data);
    } catch (e) {
      alert(`오류 발생: ${e.message}`);
    }
  };

  const deleteTodo = async () => {
    try {
      const { status } = await API.delete(`/todos/${id}`);

      console.log(status);
    } catch (e) {
      alert(`오류 발생: ${e.message}`);
    }
  };

  return (
    <TodoContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          name="isCompleted"
          style={{ margin: "4px" }}
          checked={complete}
          onChange={() => setComplete(!complete)}
        />
        {editable ? (
          <TodoInput
            value={content}
            onChange={(e) => setContent(e.target.value.trim())}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateTodo();
                setEditable(!editable);
              }
            }}
          />
        ) : (
          <span>{content}</span>
        )}
      </div>
      <div>
        <button onClick={() => setEditable(!editable)}>수정</button>
        <button onClick={() => deleteTodo()}>삭제</button>
      </div>
    </TodoContainer>
  );
};

export default TodoItem;
