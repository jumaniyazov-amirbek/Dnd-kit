import { DndContext, closestCorners } from "@dnd-kit/core";
import { useState } from "react";
import { Column } from "./components/Column.jsx";
import './App.css';
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "now i'm leaking" },
    { id: 2, title: "i graduated" },
    { id: 3, title: "I just started" },
  ]);

  return (
    <div className="App">
      <h1>Dnd kit</h1>
      <DndContext collisionDetection={closestCorners}
      >
        <Column tasks={tasks}/>
      </DndContext>
    </div>
  );
};

export default App;
