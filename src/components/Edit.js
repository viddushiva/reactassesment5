import React, {useContext,useEffect,useState} from "react";

import { Link, useNavigate ,useParams} from "react-router-dom";
import { StudentContext } from "./Createcontext";


const Edit = () => {
    const {id} =useParams();
    const [data , setData] = useContext(StudentContext);
    const [student,setStudent]=useState({name:"",age:"",course:"",batch:""})
    const navigate=useNavigate();

    useEffect(()=>{
        data.forEach(val=>{
            if(val.id===id){
                setStudent({
                    name:val.name,
                    age:val.age,
                    course:val.course,
                    batch:val.batch,
                })
            }
        })
    },[id,data])

    const handleInput=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }

    const submitUpdate=()=>{
        setData((data)=>data.map((val,index)=>
        val.id===id ? {
            id:id,
            name:student.name,
            age:student.age,
            course:student.course,
            batch:student.batch,
        }:val))
        navigate("/student")
    }
    
  return (
    <>
      <form>
      <label>name</label>
      <input type="text" name="name" value={student.name} onChange={handleInput}/><br/>
      <label>Age</label>
      <input type="number" name="age" value={student.age} onChange={handleInput}/><br/>
      <label>Course</label>
      <input type="text" name="course" value={student.course} onChange={handleInput}/><br/>
      <label>Batch</label>
      <input type="batch" name="age" value={student.batch} onChange={handleInput}/><br/>

    </form>
      {/* <Box component="form"sx={{"& >:not(style)": { m: 1, width: "25ch" }}}noValidate autoComplete="off" className="Box">

        <TextField id="outlined-basic" label="Name" name="name"  variant="outlined" className="tf1" value={student.name} onChange={handelInput} />
        <TextField id="outlined-basic" label="Age" name="age" variant="outlined" className="tf2" value={student.age} onChange={handelInput}/>
        <TextField id="outlined-basic" label="Course" name="course" variant="outlined" className="tf3" value={student.course} onChange={handelInput}/>
        <TextField id="outlined-basic" label="Batch" name="batch" variant="outlined" className="tf4" value={student.batch} onChange={handelInput} />

      </Box> */}

      <div>
        <button ><Link to="/student">Close</Link></button>
        <button  onClick={submitUpdate}>Update</button>
      </div>
    </>
  );
};

export default Edit;