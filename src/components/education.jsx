import React from "react";
import '../styles/sections.css';
import { useState } from "react";

export default function EduSection() {
    const [eduInfo, setEduInfo] = useState([{
        id: crypto.randomUUID(),
        institute: '',
        studyName: '',
        dateStart: '',
        dateEnd: ''
    }]);

    function addEduSection() {
        setEduInfo(prev => [...prev,
            {id: crypto.randomUUID(),
            institute: '',
            studyName: '',
            dateStart: '',
            dateEnd: ''}])
    }

    function updateEduInfo (key, sectionId, e) {
        setEduInfo(eduInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, [key]: e.target.value}
            }
            return obj;
        }))
    }

    function removeObj (sectionId) {
        setEduInfo(eduInfo.filter((obj) => {
            if (obj.id !== sectionId) {
                return obj;
            }
        }))
    }

    return (
        <>
            <button className='addSectionBtn' onClick={addEduSection}>Add Education</button>
            {eduInfo.map( obj => (
                <IndieEduSection key={obj.id}
                obj={obj}
                updateEduInfo={updateEduInfo}
                removeObj={removeObj}
                />
                )
            )}
        </>
    )
}

function IndieEduSection ({obj, updateEduInfo, removeObj}) {
    const [formStatus, setFormStatus] = useState('filling');

    function updateFormStatus(status) {
        setFormStatus(status);
    }

    if (formStatus === 'filling') {
        return (
            < EduForm
            obj={obj}
            updateEduInfo={updateEduInfo}
            updateFormStatus={updateFormStatus}
            removeObj={removeObj}
            />
        )
    }

    if (formStatus === 'submitted') {
        return (
            <EduDisplay 
            obj={obj}
            updateFormStatus={updateFormStatus}
            removeObj={removeObj}
            />
        )
    }
}

function EduForm ({obj, updateEduInfo, updateFormStatus, removeObj}) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            updateFormStatus('submitted');
        }}>
            <div className="infoDiv">
                <label htmlFor="institute">Name of the Institute: </label>
                <input type="text" name="institute" value={obj.institute} 
                onChange={(e) => {
                    updateEduInfo('institute', obj.id,e)
                }} />
            </div>
            <div className="infoDiv">
                <label htmlFor="studyName">Name of the Study: </label>
                <input type="text" name="studyName" value={obj.studyName} onChange={(e) => {
                    updateEduInfo('studyName', obj.id,e)
                }} />
            </div>
            <div className="infoDiv">
                <label htmlFor="dateStart">Date Started: </label>
                <input type="text" name="dateStart" value={obj.dateStart} onChange={(e) => {
                    updateEduInfo('dateStart',obj.id,e)
                }}  />
            </div>
            <div className="infoDiv">
                <label htmlFor="dateEnd">Date Ended: </label>
                <input type="text" name="dateEnd" value={obj.dateEnd} onChange={(e) => {
                    updateEduInfo('dateEnd',obj.id,e)
                }}  />
            </div>
            <button className='submitBtn' type='submit'>Submit</button>
            <button onClick={() => removeObj(obj.id)} className='removeBtn'>Remove</button>
        </form>
    )
}

function EduDisplay({obj, updateFormStatus, removeObj}) {
    return (
        <div className="display">
            <div className="displayDiv light">
                <span className="displayField">Name of the Institute: </span>
                <span className="displayInfo">{obj.institute}</span>
            </div>
            <div className="displayDiv">
                <span className="displayField">Name of the Study: </span>
                <span className="displayInfo">{obj.studyName}</span>
            </div>
            <div className="displayDiv light">
                <span className="displayField">Date Started: </span>
                <span className="displayInfo">{obj.dateStart}</span>
            </div>
            <div className="displayDiv">
                <span className="displayField">Date Ended: </span>
                <span className="displayInfo">{obj.dateEnd}</span>
            </div>
            <button className='editBtn' onClick={() => updateFormStatus('filling')}>Edit</button>
            <button onClick={() => removeObj(obj.id)} className='removeBtn'>Remove</button>
        </div>
    )
}