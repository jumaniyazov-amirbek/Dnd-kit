import { Task } from "../Task/Task";
import "../components/Column.css";

import {
  SortableContext,
  VerticalListSortingStrategy
} from "@dnd-kit/sortable";

export const Column = ({ tasks }) => {
  return (
    <div className="all">
      <div className="Column-all">
        <div className="Column">
          <SortableContext items={tasks} strategy=
          {VerticalListSortingStrategy}>
            {tasks.map((task) => (
              <Task id={task.id} title={task.title} key=
              {task.id} />
            ))}
          </SortableContext>
        </div>
      </div>
    </div>
  );
};
