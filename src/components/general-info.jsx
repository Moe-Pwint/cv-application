import React from "react";
import { useState } from "react";
import '../styles/sections.css';


export default function GISection() {
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