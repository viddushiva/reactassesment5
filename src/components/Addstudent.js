import React, {useContext,useState} from "react";

import { Link, useNavigate } from "react-router-dom";

import { StudentContext } from "./Createcontext";

const AddStudent = () => {
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [course,setCourse] = useState("");
  const [batch,setBatch] = useState("");

  const [data , setData] = useContext(StudentContext);
  const navigate=useNavigate();

  const handleInput=(e)=>{
      setName(e.target.value)
      console.log(name);
  }

    const submitHandel=(e) => {
        e.preventDefault();
        setData([...data,
            {
                id:(data.length+1).toString(),
                name:name,
                age:age,
                course:course,
                batch:batch,
            }
        ])
        navigate("/student");
        console.log("Navigated");
        
    }

  return (
    <>
    <form>
      <label>name</label>
      <input type="text" name="name" value={name} onChange={handleInput}/><br/>
      <label>Age</label>
      <input type="number" name="age" value={age} onChange={(e)=>setAge(e.target.value)}/><br/>
      <label>Course</label>

      <input type="text" name="course" value={course} onChange={(e)=>setCourse(e.target.value)}/><br/>
      <label>Batch</label>

      <input type="batch" name="age" value={batch} onChange={(e)=>setBatch(e.target.value)}/><br/>

    </form>
    

      <div>
        <button className="close"><Link to="/student">Close</Link></button>
        <button className="update" onClick={submitHandel} >Submit</button>
      </div>
    </>
  );
};

export default AddStudent;
