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
import {StyleSheet} from "./MyComponents/StyleSheet"
import {InlineStyle} from "./MyComponents/InlineStyle";
import styles from "./MyComponents/appStyles.module.css"
import {NewForm} from "./MyComponents/NewForm";
import {FragmentDemo} from "./MyComponents/FragmentDemo";
import {Table} from "./MyComponents/Table";
import {MemosParent} from "./MyComponents/MemosParent";
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
    {/* <ListIterating/>  </> */}
    {/* <StyleSheet primary = {false}/>
    <InlineStyle/>
    <h1 className = "error">Error</h1>
    better way to use css in react is to make xyz.module.css
    <span className = {styles.success}>Success</span> */}
    {/* <NewForm /> */}
    {/* <FragmentDemo /> */}
    {/* <Table /> */}
    <MemosParent />
    </>
  );
}

export default App;
