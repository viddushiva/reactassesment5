import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [students, setStudents] = useState([
    {
      name: "a",
      age: 2,
      course: "aa",
      batch: "bbb",
      id: "1",
    },
    {
      name: "yyy",
      age: 555,
      course: "ooo",
      batch: "ijj",
      id: "2",
    },
    {
      name: "viddu",
      age: 99,
      course: "chem",
      batch: "jan",
      id: "3",
    },
   
  ]);

  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentContext.Provider>
  );
};
