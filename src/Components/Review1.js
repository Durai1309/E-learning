import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Review1() {
    const [comment, setcomment] = useState('');
    const [username, setusername] = useState('');
    const [coursename, setcoursename] = useState('');
    const handle = async () => {
        const r = await axios.post("http://localhost:8081/AddReview",
            {
                comment, username, coursename
            }
        )
    }

    return (

        <nav className="navbar navbar-light bg-light ">
            <div className="container-fluid">
                <a className="navbar-brand pe-4 " href="#"></a>
                <button type="button" className="btn btn-outline-info " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add a Review </button>


                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">


                                        <label for="username-name" className="col-form-label"   >username:</label>
                                        <input type="text" className="form-control" id="recipient-name" value={username} onChange={(e) => setusername(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="coursename-name" className="col-form-label"   >coursename:</label>
                                        <input type="text" className="form-control" id="recipient-name" value={coursename} onChange={(e) => setcoursename(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label"   >comment:</label>
                                        <textarea className="form-control" id="message-text" value={comment} onChange={(e) => setcomment(e.target.value)}></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={handle} className="btn btn-primary" data-bs-dismiss="modal" >Send Review </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Review1