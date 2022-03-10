import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

import { StudentContext } from './Createcontext';



// const rows = [
//     //

//     // ('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     // ('Eclair', 262, 16.0, 24, 6.0),
//     // ('Cupcake', 305, 3.7, 67, 4.3),
//     // ('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

const Student = () => {
  const [data] = useContext(StudentContext);
  return (
      <div className='studentstatic'>
        <h1>student details</h1>
      <div className='addstudent'><Link to='addstudent'>add student</Link></div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> name</TableCell>
            <TableCell align="right">age</TableCell>
            <TableCell align="right">course&nbsp;</TableCell>
            <TableCell align="right">batch&nbsp;</TableCell>
            <TableCell align="right">change&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
               key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right"><Link to={`/edit/${row.id}`}>edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    
    </div>
  )
}

export default Student