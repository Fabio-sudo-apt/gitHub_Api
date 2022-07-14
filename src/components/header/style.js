import styled from "styled-components";

export const display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 0px 0px 20px 0;
`;

export const input = styled.input`
  width: 50%;
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  border: 1px solid rgba(25, 83, 95, 0.25);
  outline: none;
`;

export const button = styled.button`
  background-color: transparent;
  color: rgb(25, 83, 95);
  font-weight: 700;
  border: 1px solid rgba(25, 83, 95, 0.25);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  &:active {
    background-color: rgb(25, 83, 95);
    color: #fff
  }
`;
