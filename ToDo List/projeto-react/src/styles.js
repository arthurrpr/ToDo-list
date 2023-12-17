import styled from "styled-components";

import { FaTrashAlt, FaRocket } from "react-icons/fa"; 

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
export const ToDoList = styled.div`
  background: #fff;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 30px;
  font-family: "Roboto", sans-serif;
  width: 340px;
`;
export const Button = styled.button`
  border-radius: 5px;
  background: #8052ec;
  border: none;
  color: #fff;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  height: 40px;
  font-family: "Roboto", sans-serif;
  width: 130px;
  cursor: pointer;
`;
export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#E8FF8B" : "#E4E4E4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
  width: 500px;

  li {
    list-style: none;
  }
`;

export const Trash = styled(FaTrashAlt)`
    cursor: pointer;
    color: red;
`

export const Rocket = styled(FaRocket)`
    cursor: pointer;
    color: green;
`