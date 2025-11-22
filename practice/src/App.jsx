import User from"./components/User"
import College  from"./components/College"
import Fooditem from"./components/Fooditem"
import Errormessage from"./components/Errormessage"
function App() {
  let Object={
      name:"som",
      age:"21",
      email:"som@23",}
  let Object2={
    name:"hari",
    age:"34",
    email:"rase@3"
  }
  let Object3={
    name:"rtyuu",
    age:"12",
    email:"rdr@23",
  }
  let Object4={
    name:"git",
    age:"12",
    email:"rdr@23",
  }
  let collegename=["iit","hug","yhu"]
  let Fooditems=[];
   
  return (
    <>
      <College coll={collegename[0]}/>
      <User Data={Object}/>
      
      <User Data={Object2}/>

      <User Data= {Object3}/>
      <User Data= {Object4}/>
      <h1>food list</h1>
    <Errormessage items={Fooditems}></Errormessage>
      <Fooditem items={Fooditems}></Fooditem>
    </>
  )
}

export default App
