import React, {useContext, useEffect, useState} from 'react';
import {TodoContext} from "../../contexts/TodoContext";
import {
    Button,
    ButtonAppearance,
    Form,
    Input,
    Label,
    MainTable,
    Modal,
} from "@canonical/react-components";
import {Add, Delete} from "@mui/icons-material";
import {Priority, TodoItem} from "../../model/TodoItem";

const TodoList = () => {
    const {items, addItem, addingItem, setAddingItem, removeItem} = useContext(TodoContext);
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState(Priority.LOW);

    useEffect(() => {}, [items, addingItem, removeItem]);

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const newItem = new TodoItem(task, priority);
        addItem(newItem);
        setAddingItem(false);
        setTask('');
        setPriority(Priority.LOW);
    };

    return (
        <div className={"u-align--center"}>
            {addingItem &&
                <Modal
                    title={"Add item"}
                    children={
                        <Form
                            onSubmit={handleFormSubmit}
                            children={
                            <>
                                <div className={"row u-align--left"}>
                                    <Input
                                        id="task"
                                        label="Task"
                                        placeholder=""
                                        type="text"
                                        required={true}
                                        value={task}
                                        onChange={(event) => setTask(event.target.value)}
                                    />
                                    <div>
                                        <Label>Priority</Label>
                                        <Input
                                            name="priority"
                                            label="Low"
                                            type="radio"
                                            value={Priority.LOW}
                                            checked={priority === Priority.LOW}
                                            onChange={() => setPriority(Priority.LOW)}
                                        />
                                        <Input
                                            name="priority"
                                            label="Medium"
                                            type="radio"
                                            value={Priority.MEDIUM}
                                            checked={priority === Priority.MEDIUM}
                                            onChange={() => setPriority(Priority.MEDIUM)}
                                        />
                                        <Input
                                            name="priority"
                                            label="High"
                                            type="radio"
                                            value={Priority.HIGH}
                                            checked={priority === Priority.HIGH}
                                            onChange={() => setPriority(Priority.HIGH)}
                                        />
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    appearance={ButtonAppearance.POSITIVE}
                                >
                                    Submit
                                </Button>
                            </>
                        }/>}
                    close={() => setAddingItem(false)}
                />
            }
            {items.size ?
                <MainTable
                    headers={[{content: "Task"}, {content: "Priority"}, {content: "Delete"}]}
                    rows={[...items].map(
                        itemPair =>
                            ({
                                columns: [
                                    {
                                        content: itemPair[1].text
                                    },
                                    {
                                        content: itemPair[1].priorityText
                                    },
                                    {
                                        content: <Button
                                            appearance={ButtonAppearance.NEGATIVE}
                                            onClick={() => removeItem(itemPair[1])}
                                        >
                                            <Delete/>
                                        </Button>
                                    }
                                ]
                            })
                    )}
                />
                : <p className={"u-align-text--center"}>No items are in your to-do list.</p>
            }
            <Button
                aria-description={"Add an item to your todo list"}
                appearance={ButtonAppearance.POSITIVE}
                disabled={addingItem}
                onClick={() => setAddingItem(true)}
            >
                <Add/>
            </Button>
        </div>
    );
};

export default TodoList;