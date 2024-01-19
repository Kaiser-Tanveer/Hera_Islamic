import React from 'react';
import QuranClasses from './QuranClasses';
import AcademicClass from './AcademicClass';
import bg from '../../../Assets/background3.jpg';

const Classes = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            paddingTop: "48px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cover"
        }}>
            <QuranClasses />
            <AcademicClass />
        </div>
    );
};

export default Classes;