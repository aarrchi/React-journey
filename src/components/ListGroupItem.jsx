import { ListGroup } from "react-bootstrap";

/* function ListGroupItem (props) {
    console.log(props.data);
    return(
        <>
        <ListGroup.Item>{props.data.name}</ListGroup.Item>
        </>
    );
}; */

function ListGroupItem({ name }) {
  console.log(name);
  return (
    <>
      <ListGroup.Item>{name}</ListGroup.Item>
    </>
  );
}

export default ListGroupItem;
