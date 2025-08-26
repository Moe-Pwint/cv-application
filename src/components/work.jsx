import React from "react";
import '../styles/sections.css';
import { useState } from "react";

export default function WorkSection() {
    const [workInfo, setWorkInfo] = useState([{
        id: crypto.randomUUID(),
        Company: '',
        Position: '',
        roles: '',
        dateStart: '',
        dateEnd: ''
    }]);

    function addWorkSection() {
        setWorkInfo(prev => [...prev,
            {id: crypto.randomUUID(),
            Company: '',
            Position: '',
            roles: '',
            dateStart: '',
            dateEnd: ''}])
    }

    function updateCompany (sectionId, e) {
               
        setWorkInfo(workInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, Company: e.target.value}
            }
            return obj;
        }))
    }

    function updatePosition (sectionId, e) {
               
        setWorkInfo(workInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, Position: e.target.value}
            }
            return obj;
        }))
    }

    function updateRoles (sectionId, e) {
               
        setWorkInfo(workInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, roles: e.target.value}
            }
            return obj;
        }))
    }

    function updateDateStart (sectionId, e) {
               
        setWorkInfo(workInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, dateStart: e.target.value}
            }
            return obj;
        }))
    }

    function updateDateEnd (sectionId, e) {
               
        setWorkInfo(workInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, dateEnd: e.target.value}
            }
            return obj;
        }))
    }

    function removeObj (sectionId) {
        setWorkInfo(workInfo.filter((obj) => {
            if (obj.id !== sectionId) {
                return obj;
            }
        }))
    }

    return (
        <>
            <button className='addSectionBtn' onClick={addWorkSection}>Add Work</button>
            {workInfo.map( obj => (
                <IndieWorkSection key={obj.id}
                obj={obj}
                updateCompany={updateCompany}
                updatePosition={updatePosition}
                updateRoles={updateRoles}
                updateDateStart={updateDateStart}
                updateDateEnd={updateDateEnd}
                removeObj={removeObj}
                />
                )
            )}
        </>
    )
}

function IndieWorkSection ({obj, updateCompany, updatePosition, updateRoles, updateDateStart, updateDateEnd, removeObj}) {
    const [formStatus, setFormStatus] = useState('filling');

    function submitForm() {
        setFormStatus('submitted');
    }

    function fillForm() {
        setFormStatus('filling');
    }

    if (formStatus === 'filling') {
        return (
            < WorkForm
            obj={obj}
            updateCompany={updateCompany}
            updatePosition={updatePosition}
            updateRoles={updateRoles}
            updateDateStart={updateDateStart}
            updateDateEnd={updateDateEnd}
            submitForm={submitForm}
            removeObj={removeObj}
            />
        )
    }

    if (formStatus === 'submitted') {
        return (
            <WorkDisplay 
            obj={obj}
            fillForm={fillForm}
            removeObj={removeObj}
            />
        )
    }
}

function WorkForm ({obj, updateCompany, updatePosition, updateDateStart, updateRoles, updateDateEnd, submitForm, removeObj}) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            submitForm();
        }}>
            <div className="infoDiv">
                <label htmlFor="Company">Name of the Company: </label>
                <input type="text" name="Company" value={obj.Company} 
                onChange={(e) => {
                    updateCompany(obj.id,e)
                }} />
            </div>
            <div className="infoDiv">
                <label htmlFor="Position">Job Position: </label>
                <input type="text" name="Position" value={obj.Position} onChange={(e) => {
                    updatePosition(obj.id,e)
                }} />
            </div>

            <div className="infoDiv">
                <label htmlFor="roles">Job Roles: </label>
                <input type="text" name="roles" value={obj.roles} onChange={(e) => {
                    updateRoles(obj.id,e)
                }} />
            </div>

            <div className="infoDiv">
                <label htmlFor="dateStart">Date Started: </label>
                <input type="text" name="dateStart" value={obj.dateStart} onChange={(e) => {
                    updateDateStart(obj.id,e)
                }}  />
            </div>
            <div className="infoDiv">
                <label htmlFor="dateEnd">Date Ended: </label>
                <input type="text" name="dateEnd" value={obj.dateEnd} onChange={(e) => {
                    updateDateEnd(obj.id,e)
                }}  />
            </div>
            <button className='submitBtn' type='submit'>Submit</button>
            <button onClick={() => removeObj(obj.id)} className='removeBtn'>Remove</button>
        </form>
    )
}

function WorkDisplay ({obj, fillForm, removeObj}) {
    return (
        <div className="display">
            <div className="displayDiv light">
                <span className="displayField">Name of the Company: </span>
                <span className="displayInfo">{obj.Company}</span>
            </div>
            <div className="displayDiv">
                <span className="displayField">Job Position: </span>
                <span className="displayInfo">{obj.Position}</span>
            </div>
            <div className="displayDiv light">
                <span className="displayField">Job Roles: </span>
                <span className="displayInfo">{obj.roles}</span>
            </div>
            <div className="displayDiv">
                <span className="displayField">Date Started: </span>
                <span className="displayInfo">{obj.dateStart}</span>
            </div>
            <div className="displayDiv light">
                <span className="displayField">Date Ended: </span>
                <span className="displayInfo">{obj.dateEnd}</span>
            </div>
            <button className='editBtn' onClick={fillForm}>Edit</button>
            <button onClick={() => removeObj(obj.id)} className='removeBtn'>Remove</button>
        </div>
    )
}