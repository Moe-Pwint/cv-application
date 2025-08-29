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

    function updateWorkInfo (key, sectionId, e) {
        setWorkInfo(workInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, [key]: e.target.value}
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
                updateWorkInfo={updateWorkInfo}
                removeObj={removeObj}
                />
                )
            )}
        </>
    )
}

function IndieWorkSection ({obj, updateWorkInfo, removeObj}) {
    const [formStatus, setFormStatus] = useState('filling');

    function updateForm(status) {
        setFormStatus(status);
    }

    if (formStatus === 'filling') {
        return (
            < WorkForm
            obj={obj}
            updateWorkInfo={updateWorkInfo}
            updateForm={updateForm}
            removeObj={removeObj}
            />
        )
    }

    if (formStatus === 'submitted') {
        return (
            <WorkDisplay 
            obj={obj}
            updateForm={updateForm}
            removeObj={removeObj}
            />
        )
    }
}

function WorkForm ({obj, updateWorkInfo, updateForm, removeObj}) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            updateForm('submitted');
        }}>
            <div className="infoDiv">
                <label htmlFor="Company">Name of the Company: </label>
                <input type="text" name="Company" value={obj.Company} 
                onChange={(e) => {
                    updateWorkInfo('Company' ,obj.id,e)
                }} />
            </div>
            <div className="infoDiv">
                <label htmlFor="Position">Job Position: </label>
                <input type="text" name="Position" value={obj.Position} onChange={(e) => {
                    updateWorkInfo('Position' ,obj.id,e)
                }} />
            </div>

            <div className="infoDiv">
                <label htmlFor="roles">Job Roles: </label>
                <input type="text" name="roles" value={obj.roles} onChange={(e) => {
                    updateWorkInfo('roles' ,obj.id,e)
                }} />
            </div>

            <div className="infoDiv">
                <label htmlFor="dateStart">Date Started: </label>
                <input type="text" name="dateStart" value={obj.dateStart} onChange={(e) => {
                    updateWorkInfo('dateStart' ,obj.id,e)
                }}  />
            </div>
            <div className="infoDiv">
                <label htmlFor="dateEnd">Date Ended: </label>
                <input type="text" name="dateEnd" value={obj.dateEnd} onChange={(e) => {
                    updateWorkInfo('dateEnd' ,obj.id,e)
                }}  />
            </div>
            <button className='submitBtn' type='submit'>Submit</button>
            <button onClick={() => removeObj(obj.id)} className='removeBtn'>Remove</button>
        </form>
    )
}

function WorkDisplay ({obj, updateForm, removeObj}) {
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
            <button className='editBtn' onClick={() => updateForm('filling')}>Edit</button>
            <button onClick={() => removeObj(obj.id)} className='removeBtn'>Remove</button>
        </div>
    )
}