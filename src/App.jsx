import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import { Column } from "./components/Column/Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Input } from "./Input";

function App() {
  const [tasks, setTask] = useState(
    [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit.",
    },
  ]
);

  const addTask = (title) => {
    setTask((tasks) => [...tasks, 
      { id: tasks.length + 1, title: title }
    ]);
  };

  console.log(tasks);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over.id) {
      return;
    }

    setTask((tasks) => {
      const orginialPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, orginialPos, newPos);
    });
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="App">
      <h1 className="h1">Dnd kit</h1>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Input addTask={addTask}/>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;
