import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
} from "@dnd-kit/core";
import { useState } from "react";
import { Column } from "./components/Column.jsx";
import "./App.css";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Input from './Input.jsx';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "now i'm leaking" },
    { id: 2, title: "i graduated" },
    { id: 3, title: "I just started" },
  ]);
  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };
  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    setTasks((tasks) => {
      const orginalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, orginalPos, newPos);
    });
  };
  const Sensors = useSensor(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <div className="App">
      <h1>Dnd kit</h1>
      <DndContext
        sensors={Sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Column tasks={tasks} />
      </DndContext>
<Input onSubmit={addTask}/>
    </div>
  );
}

export default App;
