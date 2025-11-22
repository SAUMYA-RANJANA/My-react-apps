import Item from"./Item"
function Fooditem({items}){
   
  return(
    
    <ul>
     {items.map((items)=>(<Item Key={Item}Fooditems={items}></Item>))}
    </ul>
  )
  
};
export default Fooditem
