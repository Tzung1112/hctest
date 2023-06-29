import { randomId } from "@mieuteacher/meomeojs";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector} from "react-redux";
import {addList, update} from "../ToDoList"
import toast, { Toaster } from "react-hot-toast";

function Example() {
    const dispatch=useDispatch()
    const [title,setTitle]=useState(null);
    const list = useSelector((state) => state.list);
    const [currentHour, setCurrentHour] = useState(null);
    const [currentMinute, setCurrentMinute] = useState(null);
    const [currentDay, setCurrentDay] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(null);
    const [currentYear, setCurrentYear] = useState(null);
    const [ampm, setAMPM] = useState("");
    const [selectValue, setSelectValue] = useState(null);
    const [completed, setCompleted]=useState(false) ;
    useEffect(() => {
        getCurrentDateTime();
    }, []);
    const [show, setShow] = useState(false);
    const handleSelectValue=(e)=>setSelectValue(e.target.value)
    const handleClick=()=>{
        handleClose();
        handleAdd()
    }
    const handleAdd=()=>{
        getCurrentDateTime();
        dispatch(
            addList({
                id: randomId(),
                title: title,
                completed: completed,
                hour: currentHour,
                minute: currentMinute,
                day: currentDay,
                month: currentMonth,
                year: currentYear,
                ampm: ampm,
                status:selectValue
            })
        );

    }
  const addhhh = () => {
      toast.success("This is a add toast!", {
          position: "top-center",
      });
  };
    const handleClose = () =>setShow(false);
    const handleShow = () => setShow(true);
    
    const handleChange = (e) =>setTitle(e.target.value)
//    set time
    const getAMPM = (hour) => {
        if (hour >= 12) {
            return "PM";
        } else {
            return "AM";
        }
    };
    const getCurrentDateTime = () => {
        const currentDate = new Date();
        const hour = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const ampmValue = getAMPM(hour);
        setCurrentHour(hour);
        setCurrentMinute(minute);
        setAMPM(ampmValue);
        setCurrentDay(currentDate.getDate());
        setCurrentMonth(currentDate.getMonth() + 1);
        setCurrentYear(currentDate.getFullYear());
    };   
    return (
        <div className="list-header">
            <div className="list-header-button">
                <div className="modals">
                    <Button
                        className="add"
                        variant="primary"
                        onClick={handleShow}
                    >
                        ADD TODO
                    </Button>
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
                                        onChange={handleChange}
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
                                        <option value="Incomplete">
                                            Incomplete
                                        </option>
                                        <option value="Complete">
                                            Complete
                                        </option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer className="add-in">
                            <Button variant="primary" onClick={()=>{handleClick() ; addhhh()}}>
                                Add Task
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Toaster />
                </div>
            </div>
            <div className="list-header-select">
                <Form.Select aria-label="Default select example">
                    <option value="1">All</option>
                    <option value="2">Complete</option>
                    <option value="3"> Incomplete</option>
                </Form.Select>
            </div>
        </div>
    );
}

export default Example;
