import React from 'react';
import heroBG from '../../Assets/freepik-export-20241022103957HxdM.png';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className='flex justify-center mx-auto w-[80vw] h-[60vh] items-center mt-[20vh]' >
            <div className='w-[50%] h-full'>
                <img src={heroBG} alt="" className='w-full h-full' />
            </div>
            <div className='w-[50%] h-full'>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;