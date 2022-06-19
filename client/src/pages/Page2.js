import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Page2.css";
import {toast} from "react-toastify";
import axios from "axios";

const Page2 = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteCourse = (id) => {
     if(window.confirm("Are you sure you want to delete this course ?")
     ){
       axios.delete(`http://localhost:5000/api/remove/${id}`);
       toast.success("Course Deleted Successfully");
       setTimeout(() => loadData(), 500);
     }
  }
  return (
    <div style={{marginTop:"50px"}}>
      <h2>Courses</h2> 
      <Link to="/addCourse">
        <button className="btn btn-course">Add Course</button>
      </Link>
      
      <table className="styled-table">
        <thead>
           <tr>
             <th style={{textAlign:"center"}}>No</th>
             <th style={{textAlign:"center"}}>Name</th>
             <th style={{textAlign:"center"}}>Teacher</th>
             <th style={{textAlign:"center"}}>Duration</th>
             <th style={{textAlign:"center"}}>Description</th>
             <th style={{textAlign:"center"}}>Action</th>
           </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>{
             return (
                <tr key={item.id}>
                   <th scope="row">{index+1}</th>
                   <td>{item.name}</td>
                   <td>{item.teacher}</td>
                   <td>{item.duration}</td>
                   <td>{item.description}</td>
                   <td>
                      <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                      </Link>
                      <button className="btn btn-delete" onClick={() => deleteCourse(item.id)}>Delete</button>
                      <Link to={`/view/${item.id}`}>
                       <button className="btn btn-view">View</button>
                      </Link>
                   </td>
               </tr>
             );
          })}
        </tbody>
      </table>      
    </div>
  );
};

export default Page2;