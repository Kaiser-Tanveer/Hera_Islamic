import React, { useState, useRef } from 'react';
import './UserIdCard.css';
import { MdFlipCameraAndroid } from 'react-icons/md';

const UserIdCard = ({ user }) => {
    const [flipped, setFlipped] = useState(false);
    const cardRef = useRef(null);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        const frontID = `
        <div style="font-family: Arial, sans-serif; height: 340px; width: 213px; margin: auto; margin-top: 40vh; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
            <div style="background: #00bfff; width: 100%; padding-top: 10px; height: 120px; border-radius: 12px 12px 0 0;">
                <h1 style="text-align: center; color: #ffffff; font-size: 16px; font-weight: bold;">Hera Islamic Academy</h1>
                <div style="text-align: center;">
                    <img src="${user?.Photo}" alt="${user?.Name}" style="width: 80px; height: 80px; margin: 0 auto; border-radius: 8px 8px 0 0; border: 8px solid rgb(3 105 161); background-color: #ffffff; padding: 8px;"/>
                </div>
            </div>
            <div style="margin-top: 60px">
                <div style="width: 60%; margin: auto; margin-top: 6px; height: 4px; background: linear-gradient(to right, rgb(3 105 161), #00bfff, #8fdfeb)"></div>
                <div style="width: 60%; margin: auto; margin-top: 6px; display: flex; align-items: center; justify-content: space-between; font-size: 10px;">
                    <span style="width: 40%; text-align: left;">Name:</span>
                    <span style="width: 60%; text-align: left; margin-left: 10px;">${user?.Name}</span>
                </div>
                ${user?.UserType === "Student" ? `
                    <div style="width: 60%; margin: auto; margin-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 10px;">
                        <span style="width: 40%; text-align: left;">Class:</span>
                        <span style="width: 60%; text-align: left; margin-left: 10px;">${user?.Class} (${user?.Section})</span>
                    </div>
                ` : `
                    <p style="text-align: center; font-weight: bold; padding: 2px; font-size: 10px; background-color: #8fdfeb;">(${user?.UserType})</p>
                `}
                <div style="width: 60%; margin: auto; margin-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 10px;">
                    <span style="width: 40%; text-align: left;">ID No.:</span>
                    <span style="width: 60%; text-align: left; margin-left: 10px;">${user?.id}</span>
                </div>
                <div style="width: 60%; margin: auto; margin-top: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 10px;">
                    <span style="width: 40%; text-align: left;">Phone:</span>
                    <span style="width: 60%; text-align: left; margin-left: 10px;">${user?.Phone}</span>
                </div>
                <div style="width: 60%; margin: auto; margin-top: 4px; display: flex; align-items: start; justify-content: space-between; font-size: 10px;">
                    <span style="width: 40%; text-align: left;">Address:</span>
                    <span style="width: 60%; text-align: left; margin-left: 10px;">${user?.Address}</span>
                </div>
            </div>
            <p style="width: 35%; margin-left: auto; margin-bottom: 0; padding-bottom: 0; text-align: right; font-size: 8px; border-top: 1px solid #000000; margin-right: 2px; margin-top: ${user?.UserType === "Student" ? '36.5px' : '21px'};">
                Authority's Signature
            </p>
            <div style="margin-top: 2px; padding-top: 0; height: 12px; background: linear-gradient(to right, rgb(3 105 161), #00bfff, #8fdfeb); border-radius: 0 0 12px 12px;"></div>
        </div>
    `;

        const backID = `
        <div style="font-family: Arial, sans-serif; height: 340px; width: 213px; margin: auto; margin-top: 40vh; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
            <h1 style="text-align: center; border-radius: 12px 12px 0 0; font-size: 16px; color: #00bfff; background-color: white; font-weight: bold; padding: 24px 0;">Hera Islamic Academy</h1>
            <p style="font-size: 12px; margin: 0 24px; text-align: justify;">Location: Beside Jan Muhammad Mosque, Arakan Housing Society, Badurtola, Shulokbahar, Bahaddarhat, Chattogram.</p>
            <p style="font-size: 12px; margin: 0 24px; text-align: left;">Contact: <a href='tel:01xxxxxxxxx'>01xxxxxxxxx</a></p>

            <div style="margin-top: 10.5rem; padding-top: 0; height: 12px; background: linear-gradient(to right, rgb(3 105 161), #00bfff, #8fdfeb); border-radius: 0 0 12px 12px;"></div>
        </div>
    `;

    
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print User ID Card</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 20px;
                            font-family: Arial, sans-serif;
                            background-color: #ffffff; /* White background for print */
                        }
                        h1 {
                            color: #00bfff; /* Text color */
                            background-color: #00bfff; /* Background color */
                            padding: 10px; /* Padding for visual balance */
                        }
                        img {
                            width: 50%; /* Ensure the image scales */
                            border-radius: 8px; /* Maintain border radius */
                            border: 8px solid #00bfff; /* Border color */
                        }
                    </style>
                </head>
                <body>
                    <div>${frontID}</div>
                        <div style="page-break-before: always;"></div> <!-- Break between front and back -->
                    <div>${backID}</div>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };
    
    
    
    
    return (
        <div className='rounded-md h-full group'>
            <div ref={cardRef} className={`card-inner rounded-md ${flipped ? 'rotateY-180' : ''}`}>
                {/* Front Side */}
                <div className='card-front'>
                    <button onClick={handleFlip} className='absolute top-2 right-2 bg-transparent'>
                        <MdFlipCameraAndroid className='text-2xl font-extrabold text-white bg-transparent hover:animate-spin duration-500 rounded-full'/>
                    </button>
                    <button onClick={handlePrint} className='absolute top-2 left-2 bg-transparent'>
                        <span className='text-2xl font-extrabold text-white'>🖨️</span> {/* Print icon */}
                    </button>
                    <div className={user?.UserType === "Student" ? 'card bg-sky-500 h-[160px] mb-[90px] rounded-t-md' : 'card bg-gray-500 h-[160px] mb-[90px] rounded-t-md'}>
                        <h4 className='text-xl text-center font-bold py-6 text-white rounded-t-md'>Hera Islamic Academy</h4>
                        <img src={user?.Photo} alt={user?.Name} className={user?.UserType === "Student" ? 'w-[50%] mx-auto rounded-t-md border-8 border-sky-200 p-2 bg-white' : 'w-[50%] mx-auto rounded-t-md border-8 border-gray-700 p-2 bg-gray-50'} />
                    </div>
                    <div className='w-[74%] mx-auto pt-4 pb-2 text-justify'>
                        <p className='text-4xl italic pb-2 text-center'>SIGNATURE</p>
                        <div className={user?.UserType === "Student" ? 'font-semibold text-sky-500 flex items-start' : "flex items-start font-semibold text-gray-700"}>
                            <p className='w-[35%] flex items-center justify-between'><span>Name</span> <span>:</span></p>
                            <p className='w-[60%] ml-2'>{user?.Name}</p>
                        </div>
                        {user?.UserType === "Student" ? (
                            <div className='flex items-start'>
                                <p className='w-[35%] flex items-center justify-between'><span>Class</span> <span>:</span></p>
                                <p className='w-[60%] ml-2'>{user?.Class} &#40;{user?.Section}&#41;</p>
                            </div>
                        ) : (
                            <p className='text-center font-semibold py-0 bg-gray-500 text-white'>&#40;{user?.UserType}&#41;</p>
                        )}
                        <div className='flex items-start'>
                            <p className='w-[35%] flex items-center justify-between'><span>ID No.</span> <span>:</span></p>
                            <p className='w-[60%] ml-2'>{user?.id}</p>
                        </div>
                        <div className='flex items-start'>
                            <p className='w-[35%] flex items-center justify-between'><span>Phone</span> <span>:</span></p>
                            <p className='w-[60%] ml-2'>{user?.Phone}</p>
                        </div>
                        <div className='flex items-start'>
                            <p className='w-[35%] flex items-center justify-between'><span>Address</span> <span>:</span></p>
                            <p className='w-[60%] ml-2'>{user?.Address}</p>
                        </div>
                    </div>
                    <div className={user?.UserType === "Student" ? 'bg-sky-500 h-6 rounded-b-md' : 'bg-gray-500 h-6 rounded-b-md border-b-[12px] border-gray-700'}></div>
                </div>

                {/* Back Side */}
                <div className={`card-back bg-white rounded-md w-full h-full shadow-md ${flipped ? '' : 'rotateY-180'}`}>
                    <button onClick={handleFlip} className='absolute top-2 right-2 bg-white rounded'>
                        <MdFlipCameraAndroid className='text-2xl font-extrabold text-sky-500 bg-white hover:animate-spin duration-500 rounded-full'/>
                    </button>
                    <div className='p-6 w-full h-[466px]'>
                        <h4 className='text-xl text-sky-500 font-bold py-6'>Hera Islamic Academy</h4>
                        <p className='flex gap-2 items-start text-left'>Location: <address>Beside Jan Muhammad Mosque, Arakan Housing Society, Badurtola, Shulokbahar, Bahaddarhat, Chattogram.</address></p>
                        <p className='text-left'>Contact: <a href='tel:01xxxxxxxxx'>01xxxxxxxxx</a></p>
                    </div>
                    <div className='h-6 rounded-b-md bg-gradient-to-r from-sky-500 via-gray-500 to-black'></div>
                </div>
            </div>
        </div>
    );
};

export default UserIdCard;
