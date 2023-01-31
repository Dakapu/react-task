import React from 'react';
import '../css/TodoList.css';
import { Todo } from '../model/Todo';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className='todos'>
            {
                todos.map((t) => (
                    <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
                ))
            }
        </div>
    )
}

export default TodoList