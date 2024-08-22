import logo from './logo.svg';
import './App.css';
import { Greet } from './MyComponents/Greet';
import {Welcome} from './MyComponents/Welcome'
import {Hello} from './MyComponents/Hello';
import {Message} from "./MyComponents/Message";
import {Counter} from "./MyComponents/Counter";
import {Click} from "./MyComponents/Click";
import {ClassClick} from "./MyComponents/ClassClick";
import {EventBind} from "./MyComponents/EventBind";
import {ParentComponent} from "./MyComponents/ParentComponent";
import {UserGreet} from "./MyComponents/UserGreet";
import {ListIterating} from "./MyComponents/ListIterating";

function App() {
  return (
    <>
    {/* <Greet name="Amber" heroName="LionSlayer" />
    <Welcome name = "Amber Tripathi"/>
    <Hello name="Amber Bhai" last="Tripathi" standard="10"/>
    <Message/>
    <Counter/>
    <Click/>
    <ClassClick/> */}
    {/* <EventBind /> */}
    {/* <ParentComponent/> */}
    {/* <UserGreet/> */}
    <ListIterating/>  </>
  );
}

export default App;
