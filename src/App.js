import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Category from './Component/Category';
import ReducerCount from './UseReducer/ReducerCount';
import PatientManagement from './PatientManagement/PatientManagement';
export const CategoryContext = createContext();

function App() {
  const [cat,setCat] = useState('Laptop');
  return (
    <div>
      <h1>main page:</h1>
      <CategoryContext.Provider value={[cat,setCat]}>
      <Home></Home>
      <Category></Category>
    </CategoryContext.Provider>
    <ReducerCount></ReducerCount>
    <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
