import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import "./Column.css";
import { Task } from "../Task/Task";

export function Column({ tasks }) {
  return (
    <div className="all">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        <div className="tasks">
          {tasks.map((item) => (
            <Task  id={item.id} title={item.title} key={item.id}/>
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
