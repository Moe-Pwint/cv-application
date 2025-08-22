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
            <GIForm 
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
    const [eduInfo, setEduInfo] = useState({
        institute: '',
        studyName: '',
        dateStart: '',
        dateEnd: '',
    });
    const [eduInfoStat, setEduInfoStat] = useState('filling');

    const changeInstitute = (e) => {
        setEduInfo({...eduInfo, 
            institute: e.target.value})
    }
    const changeStudyName = (e) => {
        setEduInfo({...eduInfo, 
            studyName: e.target.value})
    }

    const changeDateStart = (e) => {
        setEduInfo({...eduInfo,
            dateStart: e.target.value
        })
    }

    const changeDateEnd = (e) => {
        setEduInfo({...eduInfo,
            dateEnd: e.target.value
        })
    }

    const formSubmitted = () => {
        setEduInfoStat('submitted');
    }

    const formEdit = () => {
        setEduInfoStat('filling');
    }

    if (eduInfoStat === 'filling') {
    return (
            <EduForm 
            eduInfo={eduInfo}
            changeInstitute={changeInstitute}
            changeStudyName={changeStudyName}
            changeDateStart={changeDateStart}
            changeDateEnd={changeDateEnd}
            formSubmit={formSubmitted}
            />
    )} else if (eduInfoStat === 'submitted') {
        return (
            <EduDisplay 
            eduInfo={eduInfo}
            formEdit={formEdit}
            />
        )
    }
}

function EduForm({eduInfo, changeInstitute, changeStudyName, changeDateStart, changeDateEnd, formSubmit}) {

    function handleSubmit(e) {
        e.preventDefault();
        formSubmit();
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className='infoDiv'>
                <label htmlFor="institute">Institute Name: </label>
                <input
                required
                type="text"
                id='institute'
                value={eduInfo.institute}
                onChange={changeInstitute} />
            </div>

            <div className='infoDiv'>
                <label htmlFor='study'>Study Name: </label>
                <input
                required
                type="text"
                id='study'
                value={eduInfo.studyName}
                onChange={changeStudyName} />
            </div>

            <div className='infoDiv'>
                <label htmlFor="dateStart">Date Started: </label>
                <input
                type="text"
                id='dateStart'
                value={eduInfo.dateStart}
                onChange={changeDateStart}
                 />
            </div>

            <div className='infoDiv'>
                <label htmlFor="dateEnd">Date Ended: </label>
                <input
                type='text'
                id='dateEnd'
                value={eduInfo.dateEnd}
                onChange={changeDateEnd}
                 />
            </div>

            <button className='submitBtn' type='submit'>Submit</button>
        </form>
    )
}

function EduDisplay({eduInfo, formEdit}){
    return (
        <div className='display'>
            <div className='displayDiv - light'>
                <span className='displayField'>Institute Name: </span>
                <span className='displayInfo'>{eduInfo.institute}</span>
            </div>
            <div className='displayDiv'>
                <span className='displayField'>Study Name: </span>
                <span className='displayInfo'>{eduInfo.studyName}</span>
            </div>
            <div className='displayDiv - light'>
                <span className='displayField'>Date Started: </span>
                <span className='displayInfo'>{eduInfo.dateStart}</span>
            </div>
            <div className='displayDiv'>
                <span className='displayField'>Date Ended: </span>
                <span className='displayInfo'>{eduInfo.dateEnd}</span>
            </div>
            <button className='editBtn' onClick={formEdit}>Edit</button>
        </div>
    )
}