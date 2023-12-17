import { v4 as uuid } from "uuid";
import React, { useState } from "react";
  
import { Container, ToDoList, Input, Button, ListItem, Trash, Rocket } from "./styles";

export function App() {
  const [list, setList] = useState([
    { id: uuid(), task: "Levar Deco para passear", finished: true},
  ]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task: inputTask, finished: false }]);
  }

  function finalizarTarefa(id){
    
    const newList = list.map( item => ( item.id === id ? { ...item, finished: !item.finished} : item ) )

    setList(newList)

  }

  function deleteTask(id){
    const newList = list.filter( item => item.id != id)

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input
          className="input-value"
          onChange={inputMudou}
          type="text"
          placeholder="O que tenho para fazer..."
        />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem isFinished={item.finished} key={item.id}>  
              <Rocket onClick={() => finalizarTarefa(item.id)} />
              <li>{item.task}</li>
              <Trash onClick={() => deleteTask(item.id)} />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}
