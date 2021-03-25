import logo from './logo.svg';
import './App.css';
import Inline from './components/Inline'
import Greet from './components/Greet'
import Greet1 from './components/Greet1'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import Fragments from './components/Fragments';



function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}



      {/* <Greet name="kumar" >
        <p>its ok</p>
      </Greet>
      <Greet name="nitin" />
      <Hello name="yadav" />
      <Welcome /> */}
      {/* <Message /> */}

      {/* <Greet1 name="nitin 123" /> */}
      {/* <Counter /> */}



      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <Stylesheet primary={true} /> */}

      {/* <Inline></Inline> */}

      {/* <Form /> */}

      <Fragments />
    </div>
  );
}

export default App;


