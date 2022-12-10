import React, { memo, useState, useCallback } from "react";
import { TodoContainer, TodoInput, TodoButton } from "../styles";
import { API } from "../../utils";

const TodoItem = ({ item }) => {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(item);

  const updateTodo = useCallback(
    async (content) => {
      try {
        if (!content.todo.length) throw new Error("내용을 입력해주세요.");

        const { data } = await API.put(`/todos/${content.id}`, {
          todo: content.todo,
          isCompleted: content.isCompleted,
        });
      } catch (e) {
        alert(`오류 발생: ${e.message}`);
        setContent(item);
      }
    },
    [content, item]
  );

  const deleteTodo = useCallback(
    async (id) => {
      try {
        const { status } = await API.delete(`/todos/${id}`);

        if (status === 204) window.location.reload();
      } catch (e) {
        alert(`오류 발생: ${e.message}`);
      }
    },
    [item]
  );

  return (
    <TodoContainer>
      {editable ? (
        <>
          <TodoInput
            value={content.todo}
            onChange={(e) => setContent({ ...content, todo: e.target.value })}
          />
          <div>
            <TodoButton
              onClick={() => {
                updateTodo(content);
                setEditable(false);
              }}
            >
              제출
            </TodoButton>
            <TodoButton
              onClick={() => {
                setContent({ ...content, todo: item.todo });
                setEditable(false);
              }}
            >
              취소
            </TodoButton>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              name="isCompleted"
              style={{ margin: "4px" }}
              checked={content.isCompleted}
              onChange={() => {
                setContent({ ...content, isCompleted: !content.isCompleted });
                updateTodo({ ...content, isCompleted: !content.isCompleted });
              }}
            />
            <span>{content.todo}</span>
          </div>
          <div>
            <TodoButton onClick={() => setEditable(true)}>수정</TodoButton>
            <TodoButton color="danger" onClick={() => deleteTodo(content.id)}>
              삭제
            </TodoButton>
          </div>
        </>
      )}
    </TodoContainer>
  );
};

export default memo(TodoItem);
