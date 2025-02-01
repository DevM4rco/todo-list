import { Check, Pencil, Trash2 } from 'lucide-react';
import { TodoTypes } from '../types/Todo';

interface ListContainerProps {
  todo: TodoTypes;
  onToggleComplete: (todo: TodoTypes) => void;
  onEdit: (todo: TodoTypes) => void;
  onDelete: (id: string) => void;
}

export const ListContainer = ({
  todo,
  onToggleComplete,
  onEdit,
  onDelete,
}: ListContainerProps) => {
  return (
    <li>
      <div className="flex items-center justify-between gap-5 rounded-lg bg-white p-4 shadow">
        <div
          className={`${todo.completed ? 'text-gray-500 line-through' : ''} text-xl`}
        >
          {todo.title}
        </div>
        <div className="space-x-2">
          <button
            className="cursor-pointer rounded border bg-green-500 p-1 text-white hover:bg-green-700"
            onClick={() => onToggleComplete(todo)}
          >
            <Check />
          </button>
          <button
            className="cursor-pointer rounded border bg-yellow-500 p-1 text-white hover:bg-yellow-700"
            onClick={() => onEdit(todo)}
          >
            <Pencil />
          </button>
          <button
            className="cursor-pointer rounded border bg-red-500 p-1 text-white hover:bg-red-700"
            onClick={() => onDelete(todo.id)}
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </li>
  );
};
