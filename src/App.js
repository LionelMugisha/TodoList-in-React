import { Route,Routes,useNavigate } from 'react-router-dom';
import {useState} from "react";
import Home from './page/Home';
import Add from './page/Add';
import Contact from './page/Contact';
import About from './page/About';
import NotFound from './page/NotFound';

import Title from "./component/TitleComponent";
import Footer from "./component/FooterComponent";

function App() {
  const TodoTask = [
    { name: "Go to gym", period: "Friday at 8AM",done: false },
    { name: "Do chores", period: "Wednesday at 3PM", done: true },
    { name: "Playing football", period: "Monday at 7PM", done:false }
  ];
    const [todos, setTodos] = useState(TodoTask);
    const navigate = useNavigate();
    const addTodo = (todo) => {
      console.log(todo);
      setTodos([...todos,todo]);
      navigate('/');
    }

    const handleBntClick = ({ type, index }) => {
        const newTodoButton = todos.slice();
        if (type === "remove") newTodoButton.splice(index, 1);
        else if (type === "completed") newTodoButton[index].done = true;
        return setTodos(newTodoButton);
    };
  return (
    <div className="App">
      <div className="navigation">
        <div className=" border border-blue-500 max-w-2xl mx-auto rounded-sm mt-20 ml-92">
          <Title />
          <Routes>
            <Route path="/" element={<Home todos={todos} handleBntClick={handleBntClick} />} />
            <Route path="/add" element={<Add addTodo={addTodo} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
