import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from './PatientReducer';

const PatientManagement = () => {
    const nameRef =useRef();
    const [state,dispatch] = useReducer(patientReducer,patientState);
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch({
            type:'ADD_PATIENT',
            name:nameRef.current.value,
            id:state.patients.length
        })
        nameRef.current.value =''
    }
    
    return (
        <div>
            <h1>Patient management:{state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
                </form>
                {
                    state.patients.map(p=><li onClick={()=>dispatch({type:'REMOVE_PATIENT',id:p.id})} key={p.length}>{p.name}</li>)
                }
        </div>
    );
};

export default PatientManagement;