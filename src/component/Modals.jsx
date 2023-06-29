import React, { useState } from "react";
import { randomId } from "@mieuteacher/meomeojs";
import { useDispatch, useSelector } from "react-redux";
import { updates } from "../ToDoList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import toast, { Toaster } from "react-hot-toast";


export default function Modals(props) {
    console.log("🚀 ~ file: Modals.jsx:10 ~ Modals ~ props:", props)
    const list = useSelector((state) => state.list);
    console.log("🚀 ~ file: Modals.jsx:12 ~ Modals ~ list:", list)
    
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    console.log("🚀 ~ file: Modals.jsx:13 ~ Modals ~ editTitle:", editTitle)
    const [completed, setCompleted] = useState(false);
    const [selectValue, setSelectValue] = useState("Incomplete");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEditChange = (e) => setEditTitle(e.target.value);
    const handleSelectValue = (e) => setSelectValue(e.target.value);
    const uphhh = () => {
        toast.success("This is a update toast!", {
            position: "top-center",
        });
    };
     const handleClicks = (idList) => {
         handleClose();
         handleUpdate(idList);
     };
    const handleUpdate = (idList) => {
        handleClose();
        dispatch(
            updates({
                id: idList,
                title: editTitle,
                completed: completed,
                status: selectValue,
            })
        );
    };

    return (
        <div>
            <button onClick={handleShow}>
                <i className="fa-solid fa-pen"></i>
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add Title"
                                autoFocus
                                value={editTitle}
                                onChange={handleEditChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={selectValue}
                                onChange={handleSelectValue}
                            >
                                <option value="Incomplete">Incomplete</option>
                                <option value="Complete">Complete</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="add-in">
                    <Button
                        variant="primary"
                        onClick={() => {handleClicks(props.idList); uphhh()}}
                    >
                        Add Task
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    );
}
