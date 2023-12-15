
// import { MouseEvent } from "react";
import { useState } from "react";
import Navbar from "../Navbar";
interface Props{
    items: string[];
    heading: string;
    onSelectItem:(item: string) => void;
}
function ListGroup({items, heading, onSelectItem}:Props) {
    
    //Hook
    const [selectedIndex,setSelectedIndex]= useState(-1);
    
   
    return(
    <>
        <h1  bg-danger text-white>{heading}</h1>
        <div><Navbar></Navbar></div>
        <div>
            
            
        </div>
        <div className="btn-group btn-group-lg " aria-label="" >
         {items.map((item,index)=> <button type="button" className = "btn btn-primary" key= {item}  onClick={()=> {setSelectedIndex(index);onSelectItem(item);}}>{item}</button>)}
          </div>
    </>
    );
}

export default ListGroup;