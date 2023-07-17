import "bootstrap/dist/css/bootstrap.css";
//import {Button} from './Button';
import { ListGroup } from "react-bootstrap";
import ListGroupItem from "./components/ListGroupItem";

function AppComponent() {
  const todoList = [
    {
      id: 1,
      name: "shopping",
    },
    {
      id: 2,
      name: "Reading",
    },
    {
      id: 3,
      name: "Writing",
    },
    {
      id: 4,
      name: "Playing",
    },
    {
      id: 5,
      name: "Gaming",
    },
  ];

  return (
    <ListGroup>
      {todoList.map((todo) => {
        //console.log(todo);
        return (
          //<ListGroupItem key = {todo.id} data = {todo} />
          <ListGroupItem key={todo.id} name={todo.name}></ListGroupItem>

          //<ListGroup.Item key={todo.id}> {todo.name} </ListGroup.Item>
        );
      })}
    </ListGroup>
  );

  /*  return(
<>
  <ul className='list-group'>
    <li className='list-group-item'>1</li>
    <li className='list-group-item'>2</li>
    <li className='list-group-item'>3</li>
    <li className='list-group-item'>4</li>
  </ul>
</>
 )  */

  /* return(
  <>
    <Button name='cancel'  ></Button>
    <Button name='primary'/>
    <Button name='secondary'/>
    <Button name='danger' />
    <Button name='warning'/>
    </>
 ) */
}

export default AppComponent;
