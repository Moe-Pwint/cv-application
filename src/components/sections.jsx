import {useState} from 'react';
import '../styles/sections.css';


export default function Sections() {
    return (
        <>
            <h2 className='titles'>General Information</h2>
            <GISection />
            <h2 className='titles'>Educational Experience</h2>
            <EduSection />
            <h2 className='titles'>Practical Experience</h2>
        </>
    )
}

function GISection() {
    const [GeneralInfo, setGeneralInfo] = useState({
        id: crypto.randomUUID(),
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [generalInfoStat, setGeneralInfoStat] = useState('filling');

    const changeFirstName = (e) => {
        setGeneralInfo({...GeneralInfo, 
            firstName: e.target.value})
    }
    const changeLastName = (e) => {
        setGeneralInfo({...GeneralInfo, 
            lastName: e.target.value})
    }

    const changeEmail = (e) => {
        setGeneralInfo({...GeneralInfo,
            email: e.target.value
        })
    }

    const changePh = (e) => {
        setGeneralInfo({...GeneralInfo,
            phone: e.target.value
        })
    }

    const formSubmitted = () => {
        setGeneralInfoStat('submitted');
    }

    const formEdit = () => {
        setGeneralInfoStat('filling');
    }

    if (generalInfoStat === 'filling') {
    return (
            <GIForm key={GeneralInfo.id}
            GeneralInfo={GeneralInfo}
            changeFirstName={changeFirstName}
            changeLastName={changeLastName}
            changeEmail={changeEmail}
            changePh={changePh}
            formSubmit={formSubmitted}
            />
    )} else if (generalInfoStat === 'submitted') {
        return (
            <GIDisplay 
            GeneralInfo={GeneralInfo}
            formEdit={formEdit}
            />
        )
    }
}

function GIForm({GeneralInfo, changeFirstName, changeLastName, changeEmail, changePh, formSubmit}) {

    function handleSubmit(e) {
        e.preventDefault();
        formSubmit();
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className='infoDiv'>
                <label htmlFor="firstName">First Name: </label>
                <input
                required
                type="text"
                id='firstName'
                value={GeneralInfo.firstName}
                onChange={changeFirstName} />
            </div>

            <div className='infoDiv'>
                <label htmlFor='lastName'>Last Name: </label>
                <input
                required
                type="text"
                id='lastName'
                value={GeneralInfo.lastName}
                onChange={changeLastName} />
            </div>

            <div className='infoDiv'>
                <label htmlFor="email">Email: </label>
                <input
                type="email"
                id='email'
                value={GeneralInfo.email}
                onChange={changeEmail}
                 />
            </div>

            <div className='infoDiv'>
                <label htmlFor="phone">Phone Number: </label>
                <input
                type='tel'
                id='phone'
                value={GeneralInfo.phone}
                onChange={changePh}
                 />
            </div>

            <button className='submitBtn' type='submit'>Submit</button>
        </form>
    )
}

function GIDisplay({GeneralInfo, formEdit}){
    return (
        <div className='display'>
            <div className='displayDiv - light'>
                <span className='displayField'>Full Name: </span>
                <span className='displayInfo'>{GeneralInfo.firstName + " " + GeneralInfo.lastName}</span>
            </div>
            <div className='displayDiv'>
                <span className='displayField'>Email: </span>
                <span className='displayInfo'>{GeneralInfo.email}</span>
            </div>
            <div className='displayDiv - light'>
                <span className='displayField'>Phone Number: </span>
                <span className='displayInfo'>{GeneralInfo.phone}</span>
            </div>
            <button className='editBtn' onClick={formEdit}>Edit</button>
        </div>
    )
}

function EduSection() {
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
            <button id='addEduBtn' onClick={addEduSection}>Add Education</button>
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


