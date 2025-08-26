// import {useState} from 'react';
import '../styles/sections.css';
import GISection from './general-info';
import EduSection from './education';
import WorkSection from './work';

export default function Sections() {
    return (
        <>
            <h2 className='titles'>General Information</h2>
            <GISection />
            <h2 className='titles'>Educational Experience</h2>
            <EduSection />
            <h2 className='titles'>Practical Experience</h2>
            <WorkSection />
        </>
    )
}




