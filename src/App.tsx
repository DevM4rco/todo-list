import { useRef, useState } from 'react';
import { TodoTypes } from './types/Todo';
import { useFetchTodos } from './hooks/useFetchTodos';
import { useUpdateTodo } from './hooks/useUpdateTodo';
import { useCreateTodo } from './hooks/useCreateTodo';
import { useDeleteTodo } from './hooks/useDeleteTodo';
import { FormContainer } from './components/FormContainer';
import { ListContainer } from './components/ListContainer';

const App = () => {
  const [editingTodo, setEditingTodo] = useState<TodoTypes | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: todoData, isLoading } = useFetchTodos();
  const updateMutation = useUpdateTodo();
  const addMutation = useCreateTodo();
  const deleteMutation = useDeleteTodo();

  const handleSubmit = (title: string) => {
    if (editingTodo) {
      updateMutation.mutate(
        { ...editingTodo, title },
        { onSuccess: () => setEditingTodo(null) }
      );
    } else {
      addMutation.mutate(title);
    }
  };

  const handleEditTodo = (todo: TodoTypes) => {
    setEditingTodo(todo);
    if (inputRef.current) {
      inputRef.current.value = todo.title;
      inputRef.current.focus();
    }
  };

  const handleToggleComplete = (todo: TodoTypes) => {
    updateMutation.mutate({ ...todo, completed: !todo.completed });
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-2 bg-zinc-800 pt-5">
      <h1 className="mb-6 text-2xl font-bold text-white">Todo List with Api</h1>
      <FormContainer onSubmit={handleSubmit} editingTodo={editingTodo} />
      <div className="flex w-full max-w-md justify-center">
        {isLoading ? (
          <div className="mb-6 w-full max-w-md rounded-lg bg-white p-5 text-center text-xl font-semibold">
            Carregando...
          </div>
        ) : (
          <ul className="w-full space-y-3">
            {todoData?.map(todo => (
              <li key={todo.id}>
                <ListContainer
                  todo={todo}
                  onToggleComplete={handleToggleComplete}
                  onEdit={handleEditTodo}
                  onDelete={id => deleteMutation.mutate(id)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
