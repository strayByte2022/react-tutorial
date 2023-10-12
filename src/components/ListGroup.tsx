//import { MouseEvent } from "react";
import {useState} from "react"
let items = [
  { name: "John", id: 1 },
  { name: "Alice", id: 2 },
  { name: "Bob", id: 3 },
];

const checkLength = () => {
  if (items.length === 0) {
    return <p>No items found</p>;
  }
  return null;
};
//const handleClick = (Event: MouseEvent)=>console.log(Event.buttons) 

function ListGroup() {
 
  const [selectedIndex,setSelectedIndex] = useState (-1); //set selectedIndex to -1
  
  
  
  return (
    <>
      {/* THIS CAN ALSO BE INCLUDED IN A FRAGMENT PAIR, BUT SOMEHOW IT DOES NOT WORK
            SO JUST PUT IT IN AN EMPTY BRACKET */}
      
      <h1>Group list</h1>
      {checkLength()}
      {/* There is another interesting way to deal with condition in jsx 
          Technically, this method use true false logic 
          {items.length === 0 && <p>no items found</p>} 
          
          this is the same as true && 1 => true or false  && 'ajax' => false
          */}
      <ul className="list-group">
        {/* list of items with key */}
        {items.map((a,index) => (
          <li
            key={a.id}
            
            className={selectedIndex === index ? 'list-group-item active':'list-group-item'}
            // onClick={() => console.log(`${a.name} ${a.id} `)}
            onClick={() => setSelectedIndex(index)} //set selected index to index 
          >
            Name: {a.name}, ID: {a.id}
          </li>
        ))}
      </ul> 
    </>
  );
}
export default ListGroup;
