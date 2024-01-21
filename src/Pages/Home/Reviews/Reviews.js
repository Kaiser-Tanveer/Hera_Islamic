import React from 'react';
import user from '../../../Assets/review.png';
import { FaQuoteLeft, FaQuoteRight, FaRegCommentDots } from 'react-icons/fa6';

const Reviews = () => {
    const reviews = [
        {
            id: "01",
            details: "Honestly I don't have enough word to write about Hera Islamic Academy. Everyone in Hera Academy very nice and calm. They are very much responsible about your schedule. ",
            Profile: user,
            name: "Mohammad Abdullah",
        },
        {
            id: "01",
            details: "Honestly I don't have enough word to write about Hera Islamic Academy. Everyone in Hera Academy very nice and calm. They are very much responsible about your schedule. ",
            Profile: user,
            name: "Mohammad Abdullah",
        },
        {
            id: "01",
            details: "Honestly I don't have enough word to write about Hera Islamic Academy. Everyone in Hera Academy very nice and calm. They are very much responsible about your schedule. ",
            Profile: user,
            name: "Mohammad Abdullah",
        },
    ]
    return (
        <div className='pt-12 bg-white mx-auto w-full'>
            <section className='w-[95%] mx-auto'>
                <h4 className='text-xl font-bold text-center uppercase text-primary pb-6'>Customers Review</h4>
                <div className='md:h-96 md:flex items-center relative w-full'>
                    <div>
                        <div className='ml-12 h-80 w-56 pt-0 bg-primary rounded-tl-3xl rounded-br-3xl relative'><FaRegCommentDots className='scale-x-[-1] opacity-50 text-6xl ml-4 mt-6' />
                        </div>
                        <div className='absolute top-[70px] md:top-[105px] h-48 w-80 bg-secondary border-2 border-primary p-2 rounded-lg shadow-md'>
                            <img src={user} alt="" className='h-full mx-auto bg-white rounded-t-lg' />
                        </div>
                    </div>
                    <div className='h-[220px] md:h-[185px] overflow-y-auto md:ml-12 w-full mt-4'>
                        {
                            reviews?.map(review =>
                                <article
                                    key={review.id}
                                    className='pb-4 w-full'
                                >
                                    <div className='md:flex items-center'>
                                        <div>
                                            <hr className='h-2 md:bg-primary w-full' />
                                            <p className='opacity-90 text-right pl-8 font-semibold'>{review.name}</p>
                                        </div>
                                        <></>
                                    </div>
                                    <div className='md:pl-72'>
                                        <FaQuoteLeft className='text-6xl text-primary opacity-40' />
                                        <p className='opacity-70 md:pl-20 leading-5 font-medium'>{review?.details}</p>
                                        <FaQuoteRight className='text-6xl ms-auto text-primary opacity-40' />
                                    </div>
                                </article>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;