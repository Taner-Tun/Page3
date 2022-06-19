import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import './View.css';

const View = () => {
  const[user, setUser] = useState({});

  const {id} = useParams();

  useEffect(() => {
    axios
    .get(`http://localhost:5000/api/get/${id}`)
    .then((resp) => setUser({...resp.data[0]}));
 }, [id]);
  return (
    <div style={{marginTop: "50px"}}>
        <div className="card">
          <div className="card-header">
            <p>User Course Detail</p>
          </div>
          <div className="container">
            <strong> ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong> Name: </strong>
            <span>{user.name}</span>
            <br />
            <br />
            <strong> Teacher: </strong>
            <span>{user.teacher}</span>
            <br />
            <br />
            <strong> Duration: </strong>
            <span>{user.duration}</span>
            <br />
            <br />
            <strong> Description: </strong>
            <span>{user.description}</span>
            <br />
            <br />
            <Link to="/">
            <div className="btn btn-edit">Go Back</div>
            </Link>
          </div>
        </div>
    </div>   
  );
};

export default View