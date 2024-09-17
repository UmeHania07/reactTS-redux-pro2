import logo from './logo.svg';
import './App.css';
import { increment , decrement } from './reduxStore/Slices/Counter/Index'; 
import { useAppDispatch , useAppSelector } from './reduxStore/Hooks/Hooks';

function App() {
  
  const counter = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1>Count is {counter}</h1>
         {/* ye function callable hoty hn */}
         <button onClick={() => dispatch(increment())}>Increment</button>
         <button onClick={() => dispatch(decrement())}>Decrement</button>

      </header>
    </div>
  );
}

export default App;
