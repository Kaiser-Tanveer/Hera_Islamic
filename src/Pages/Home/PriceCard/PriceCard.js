import React from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';

const PriceCard = () => {
    const services = [
        {
            id: "01",
            price: "4500",
            title: "3 Classes Per Week",
            info: "20+ Students Enrolled",
            details: [
                {
                    id: "01",
                    detail: "13 Classes Per Month",
                },
                {
                    id: "02",
                    detail: "6 Months = 25,650 BDT",
                },
                {
                    id: "04",
                    detail: "Save 5%",
                },
                {
                    id: "03",
                    detail: "12 Months = 50,220 BDT",
                },
                {
                    id: "04",
                    detail: "Save 7%",
                },
            ]
        },
        {
            id: "02",
            price: "5000",
            title: "4 Classes Per Week",
            info: "30+ Students Enrolled",
            details: [
                {
                    id: "01",
                    detail: "13 Classes Per Month",
                },
                {
                    id: "02",
                    detail: "6 Months = 25,650 BDT",
                },
                {
                    id: "04",
                    detail: "Save 5%",
                },
                {
                    id: "03",
                    detail: "12 Months = 50,220 BDT",
                },
                {
                    id: "04",
                    detail: "Save 7%",
                },
            ],
        },
        {
            id: "03",
            price: "5500",
            title: "5 Classes Per Week",
            info: "13+ Students Enrolled",
            details: [
                {
                    id: "01",
                    detail: "13 Classes Per Month",
                },
                {
                    id: "02",
                    detail: "6 Months = 25,650 BDT",
                },
                {
                    id: "04",
                    detail: "Save 5%",
                },
                {
                    id: "03",
                    detail: "12 Months = 50,220 BDT",
                },
                {
                    id: "04",
                    detail: "Save 7%",
                },
            ],
        },
        {
            id: "04",
            price: "6000",
            title: "6 Classes Per Week",
            info: "7+ Students Enrolled",
            details: [
                {
                    id: "01",
                    detail: "13 Classes Per Month",
                },
                {
                    id: "02",
                    detail: "6 Months = 25,650 BDT",
                },
                {
                    id: "04",
                    detail: "Save 5%",
                },
                {
                    id: "03",
                    detail: "12 Months = 50,220 BDT",
                },
                {
                    id: "04",
                    detail: "Save 7%",
                },
            ],
        },
    ]
    return (
        <div>
            <div>
                <h4 className='text-xl font-bold text-center uppercase mt-12 pb-6 text-primary'>Our Offers</h4>
                <h1 className='text-4xl font-bold text-center pb-6'>Why to choose Hera Islamic  Academy</h1>
                <div className='md:grid grid-cols-4 gap-8 mx-6'>
                    {
                        services?.map(service =>
                            <div
                                key={service._id}
                                className="bg-emerald-300 border-2 border-primary shadow-lg mb-6 text-[#121212] rounded-lg text-center duration-500">
                                <h1 className='text-4xl text-primary pt-6 font-bold'><span className='font-extrabold'>৳</span> {service.price}</h1>
                                <article className='px-4 py-6'>
                                    <h2 className='text-xl mb-2 text-white rounded-t-lg font-semibold py-1 bg-primary'>{service?.title}</h2>
                                    <ul>
                                        {
                                            service?.details?.map(detail =>
                                                <li key={detail.id} className='pb-1 text-left flex items-center font-medium'>
                                                    <FaRegCircleCheck className='text-primary font-bold mr-2' />
                                                    <span className='opacity-70'>{detail && detail.detail}</span>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <button className='bg-white w-3/4 mx-auto rounded-xl border-2 text-primary py-2 my-6 font-semibold border-primary hover:text-white hover:bg-primary hover:border-white ease-in-out duration-500'>Free Trial</button>
                                </article>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PriceCard;