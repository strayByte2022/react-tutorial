//import { MouseEvent } from "react";
import { useState } from "react"
type itemList =
  {
    name: string;
    id: number;

  }
interface Props  //define the interface of an object -> reuse
{
  items: itemList[];
  heading: string;
  onSelectedItem: (item: string) => void;

}

// const checkLength = () => {
//   if (items.length === 0) {
//     return <p>No items found</p>;
//   }
//   return null;
// };
//const handleClick = (Event: MouseEvent)=>console.log(Event.buttons) 

function ListGroup({ items, heading, onSelectedItem }: Props) {
  // hook 
  // hook is a function that allows to use built-in function in react

  const [selectedIndex, setSelectedIndex] = useState(-1); //set selectedIndex to -1

  //variable  variableUpdater

  return (
    <>
      {/* THIS CAN ALSO BE INCLUDED IN A FRAGMENT PAIR, BUT SOMEHOW IT DOES NOT WORK
            SO JUST PUT IT IN AN EMPTY BRACKET */}

      <h1>{heading}</h1>

      {/* There is another interesting way to deal with condition in jsx 
          Technically, this method use true false logic 
          {items.length === 0 && <p>no items found</p>} 
          
          this is the same as true && 1 => true or false  && 'ajax' => false
          */}
      <ul className="list-group">
        {/* list of items with key */}
        {items.map((a, index) => (
          <li
            key={a.id}

            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            // onClick={() => console.log(`${a.name} ${a.id} `)}
            onClick={() => { setSelectedIndex(index); onSelectedItem(`${a.name} ${a.id}`) }} //set selected index to index 
          >
            Name: {a.name}, ID: {a.id}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
