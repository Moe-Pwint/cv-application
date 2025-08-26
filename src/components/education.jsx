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

    function updateInstitute (sectionId, e) {
               
        setEduInfo(eduInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, institute: e.target.value}
            }
            return obj;
        }))
    }

    function updateStudyName (sectionId, e) {
               
        setEduInfo(eduInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, studyName: e.target.value}
            }
            return obj;
        }))
    }

    function updateDateStart (sectionId, e) {
               
        setEduInfo(eduInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, dateStart: e.target.value}
            }
            return obj;
        }))
    }

    function updateDateEnd (sectionId, e) {
               
        setEduInfo(eduInfo.map((obj) => {
            if (obj.id === sectionId) {
               return {...obj, dateEnd: e.target.value}
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
                updateInstitute={updateInstitute}
                updateStudyName={updateStudyName}
                updateDateStart={updateDateStart}
                updateDateEnd={updateDateEnd}
                removeObj={removeObj}
                />
                )
            )}
        </>
    )
}

function IndieEduSection ({obj, updateInstitute, updateStudyName, updateDateStart, updateDateEnd, removeObj}) {
    const [formStatus, setFormStatus] = useState('filling');

    function submitForm() {
        setFormStatus('submitted');
    }

    function fillForm() {
        setFormStatus('filling');
    }

    if (formStatus === 'filling') {
        return (
            < EduForm
            obj={obj}
            updateInstitute={updateInstitute}
            updateStudyName={updateStudyName}
            updateDateStart={updateDateStart}
            updateDateEnd={updateDateEnd}
            submitForm={submitForm}
            removeObj={removeObj}
            />
        )
    }

    if (formStatus === 'submitted') {
        return (
            <EduDisplay 
            obj={obj}
            fillForm={fillForm}
            removeObj={removeObj}
            />
        )
    }
}

function EduForm ({obj, updateInstitute, updateStudyName, updateDateStart, updateDateEnd, submitForm, removeObj}) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            submitForm();
        }}>
            <div className="infoDiv">
                <label htmlFor="institute">Name of the Institute: </label>
                <input type="text" name="institute" value={obj.institute} 
                onChange={(e) => {
                    updateInstitute(obj.id,e)
                }} />
            </div>
            <div className="infoDiv">
                <label htmlFor="studyName">Name of the Study: </label>
                <input type="text" name="studyName" value={obj.studyName} onChange={(e) => {
                    updateStudyName(obj.id,e)
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

function EduDisplay({obj, fillForm, removeObj}) {
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
            <button className='editBtn' onClick={fillForm}>Edit</button>
            <button onClick={() => removeObj(obj.id)} className='removeBtn'>Remove</button>
        </div>
    )
}