import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from "../../../model/TodoItem"; // Assuming TodoItem is imported properly from the correct path

interface Props {
    item: TodoItem
}

const TodoItemUi: React.FC<Props> = ({ item }) => {
    return (
        <div>
            <span>{item.text}</span>
        </div>
    );
};

TodoItemUi.propTypes = {
    item: PropTypes.instanceOf(TodoItem).isRequired
};

export default TodoItemUi;
