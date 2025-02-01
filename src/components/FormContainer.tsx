import { FormEvent, useEffect, useRef } from 'react';
import { TodoTypes } from '../types/Todo';

interface FormContainerProps {
  onSubmit: (title: string) => void;
  editingTodo: TodoTypes | null;
}

export const FormContainer = ({
  editingTodo,
  onSubmit,
}: FormContainerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodo && inputRef.current) {
      inputRef.current.value = editingTodo.title;
      inputRef.current.focus();
    }
  }, [editingTodo]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const inputCurrent = inputRef.current;

    if (inputCurrent?.value.trim()) {
      onSubmit(inputCurrent.value);
      inputCurrent.value = '';
    }
  };
  return (
    <form
      className="mb-6 w-full max-w-md rounded-lg bg-white p-5"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-4">
        <input
          type="text"
          ref={inputRef}
          placeholder="Add some todo"
          className="flex-1 rounded bg-zinc-200 p-2 text-black outline-none"
        />
        <button className="cursor-pointer rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
          {editingTodo ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>
    </form>
  );
};
