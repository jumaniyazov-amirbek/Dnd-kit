import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import {CSS} from '@dnd-kit/utilities';

export const Task = ({id, title}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div className="divv" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <input type="checkbox" />
      <span>{title}</span>
    </div>
  );
};
