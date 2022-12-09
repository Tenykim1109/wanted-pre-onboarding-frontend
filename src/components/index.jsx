import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: #f3f3f3;
  border-radius: 20px;
  border: 0;
  font-size: 20px;
  padding: 16px;
  margin: 8px;
`;

export const Button = styled.button`
  background: #ea1d1d;
  border-radius: 20px;
  border: 0;
  margin: 8px;
  font-size: 24px;
  color: white;
  text-align: center;
  padding: 16px;

  ${(props) =>
    props.disabled
      ? css`
          background: gray;
          color: #ebebeb;
        `
      : css`
          &:hover {
            background: #bf1d1d;
            cursor: pointer;
          }
        `}
`;

export const Link = styled.span`
  font-size: 24px;
  color: #8d8d8d;

  &:hover {
    text-decoration: underline;
    cursor: default;
  }
`;

export const Text = styled.span`
  font-size: 16px;

  ${(props) =>
    css`
      color: ${props.color};
    `}
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 308px;
  height: 40px;
  margin: 8px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-color: gray;
  border-radius: 20px;
`;

export const TodoButton = styled.button``;

export const TodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 20px;
  background: #f3f3f3;
`;
