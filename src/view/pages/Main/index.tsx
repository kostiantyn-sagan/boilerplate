// Core
import React, { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ErrorBoundary, Todo } from '../../components';

// Api
import { useTodosQuery, useTodosMutations } from '../../../bus/todos';

// Redux
import { useTogglersRedux } from '../../../bus/client/togglers';

// Elements
import { Button, Spinner } from '../../elements';

// Styles
import { Container, Header } from './styles';

// Global styles for SelfEducation

import  { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`;

const Main: FC = () => {
    const [ text, setText ] = useState<string>('');
    const headerRef = useRef<HTMLElement>(null);
    const { togglersRedux: { isOnline }} = useTogglersRedux();
    const { data, loading } = useTodosQuery();
    const { createTodo, updateTodo, deleteTodo } = useTodosMutations();

    if (loading) {
        return <Spinner />;
    }

    const onCreate = () => {
        if (text !== '') {
            createTodo({ body: { text }});
            setText('');
        }
    };

    return (
        <Container>
            {false && <Spinner absolute />}
            <Header ref = { headerRef }>
                <nav />
                <input
                    value = { text }
                    onChange = { (event) => void setText(event.target.value) }
                />
                <nav>


                    <Button
                        disabled = { !isOnline }
                        title = 'Create TODO'
                        onClick = { onCreate }>
                        CREATE
                    </Button>
                    <Link to = '/self-education'>Self-education</Link>
                </nav>
            </Header>
            <main>
                {
                    data.map((todo, index) => (
                        <Todo
                            isColor = { Boolean(index % 2) }
                            key = { todo.id }
                            { ...todo }
                            deleteHandler = { () => void deleteTodo({ todoId: todo.id }) }
                            updateHandler = { () => void updateTodo({
                                todoId: todo.id,
                                body:   { isCompleted: !todo.isCompleted },
                            }) }
                        />
                    ))
                }
            </main>

            <Global/>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
