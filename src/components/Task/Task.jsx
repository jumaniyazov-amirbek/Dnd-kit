import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities'
export function Task({ title, id }) {


  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <div
      className="divv"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ transform:CSS.Transform.toString(transform) , transition }}
    >
      <p>
        {id} {title}
      </p>
    </div>
  );
}
