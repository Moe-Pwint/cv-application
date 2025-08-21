import {useState} from 'react';
import '../styles/sections.css';


export default function Sections() {
    return (
        <>
            <h2 className='titles'>General Information</h2>
            <GISection />
            <h2 className='titles'>Educational Experience</h2>
            <h2 className='titles'>Practical Experience</h2>
        </>
    )
}

function GISection() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [generalInfoStat, setGeneralInfoStat] = useState('filling');

    const formSubmitted = () => {
        setGeneralInfoStat('submitted');
    }

    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        setLastName(e.target.value)
    }
    if (generalInfoStat === 'filling') {
    return (
            <GIForm 
            firstName={firstName}
            cFN={changeFirstName}
            lastName={lastName}
            cLN={changeLastName}
            generalInfoStat={formSubmitted}
            />
    )} else if (generalInfoStat === 'submitted') {
        return (
            <GIDisplay 
            fN={firstName}
            lN={lastName}
            />
        )
    }
}

function GIForm({firstName, cFN, lastName, cLN, generalInfoStat}) {

    function handleSubmit(e) {
        e.preventDefault();
        generalInfoStat();
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="firstName" typeof='text'>First Name: </label>
            <input 
            required
            type="text" 
            id='firstName' 
            value={firstName} 
            onChange={cFN} />

            <label htmlFor='lastName' typeof='text'>Last Name: </label>
            <input 
            required
            type="text"
            id='lastName'
            value={lastName}
            onChange={cLN} />
            <button type='submit'>Submit</button>
        </form>
    )
}

function GIDisplay({fN, lN}){
    return (
        <>
        <p>Full Name: {fN + " " + lN}</p>
        </>
    )
}