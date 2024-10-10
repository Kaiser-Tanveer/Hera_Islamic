import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './UserIdCard.css';
import { MdFlipCameraAndroid } from 'react-icons/md';

const UserIdCard = ({ user }) => {
    const [flipped, setFlipped] = useState(false);
    const cardRef = useRef(null);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleDownload = () => {
        if (cardRef.current) {
            html2canvas(cardRef.current, { scale: 2 }).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = `${user?.Name}-id-card.png`;
                link.click();
            });
        }
    };

    return (
        <div className='rounded-md h-full group'>
            <div ref={cardRef} className={`card-inner rounded-md ${flipped ? 'rotateY-180' : ''}`}>
                {/* Front Side */}
                <div className='card-front'>
                    <button onClick={handleFlip} className='absolute top-2 right-2 bg-transparent'>
                        <MdFlipCameraAndroid className='text-2xl font-extrabold text-white bg-transparent hover:animate-spin duration-500 rounded-full'/>
                    </button>
                    <button onClick={handleDownload} className='absolute top-2 left-2 bg-transparent'>
                        <span className='text-2xl font-extrabold text-white'>⬇️</span> {/* Simple download icon */}
                    </button>
                    <div className={user?.UserType === "Student" ? 'bg-sky-500 h-[160px] mb-[90px] rounded-t-md' : 'bg-gray-500 h-[160px] mb-[90px] rounded-t-md'}>
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
