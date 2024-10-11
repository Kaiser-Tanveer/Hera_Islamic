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
        const content = `
            <div style="font-family: Arial, sans-serif; margin: 20px;">
                    <h1 style="text-align: center; color: #1D4ED8; background-color: red;">Hera Islamic Academy</h1>
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="${user?.Photo}" alt="${user?.Name}" style="width: 50%; border-radius: 8px; border: 8px solid #1D4ED8;" />
                    </div>
                <p style="text-align: center; font-style: italic;">SIGNATURE</p>
                <div style="margin: 10px 0;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Name:</span>
                        <span>${user?.Name}</span>
                    </div>
                    ${user?.UserType === "Student" ? `
                        <div style="display: flex; justify-content: space-between;">
                            <span>Class:</span>
                            <span>${user?.Class} (${user?.Section})</span>
                        </div>
                    ` : `
                        <p style="text-align: center; font-weight: bold;">(${user?.UserType})</p>
                    `}
                    <div style="display: flex; justify-content: space-between;">
                        <span>ID No.:</span>
                        <span>${user?.id}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>Phone:</span>
                        <span>${user?.Phone}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>Address:</span>
                        <span>${user?.Address}</span>
                    </div>
                </div>
                <p style="text-align: center; margin-top: 20px;">Location: Beside Jan Muhammad Mosque, Arakan Housing Society, Badurtola, Shulokbahar, Bahaddarhat, Chattogram.</p>
                <p style="text-align: center;">Contact: <a href="tel:01xxxxxxxxx">01xxxxxxxxx</a></p>
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
                        }
                        .card {
                            width: 100%;
                            height: 800px;
                            max-width: 400px;
                            margin: auto;
                            border: 2px solid black;
                        }
                        h4, p {
                            margin: 0;
                        }
                        @media print {
                            .card {
                                background-color: #1D4ED8; /* Set background color for print */
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="card">${content}</div>
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
