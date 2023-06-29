import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletes} from "../ToDoList";
import { randomId } from "@mieuteacher/meomeojs";
import Modals from "./Modals";
import toast, { Toaster } from "react-hot-toast";



function BodyOnlyExample() {
    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();
     const detetehhh = () => {
         toast.success("This is a delete toast!", {
             position: "top-center",
         });
     };
 
    return (
        <div className="lists-body">
            {list?.length > 0 ? (
                list.map((item) => (
                    <div key={randomId()}>
                        <div className="body-item">
                            <div className="checkbox">
                                <Form.Check aria-label="option 1" />
                            </div>

                            <div className="card">
                                <Card>
                                    <Card.Body>
                                        <span>{item.title} </span>
                                        <br />
                                        <span>
                                            <span>
                                                {item.hour}:{item.minute}
                                                {item.ampm}
                                            </span>
                                            <span>
                                                {item.day}/{item.month}/
                                                {item.year}
                                            </span>
                                            <span></span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="clear">
                                <button
                                    variant="outline-warning"
                                    onClick={() => {dispatch(deletes(item.id)); detetehhh();}}
                                >
                                    <i class="fa-solid fa-trash"></i>
                                    <Toaster />
                                </button>
                            </div>
                            <div className="update">
                                <Modals idList={item.id}></Modals>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="body-item">
                    <h3>No Tasks</h3>
                </div>
            )}
        </div>
    );
}

export default BodyOnlyExample;
