import moment from 'moment/moment';
import React from 'react';
import { useForm } from 'react-hook-form';

const AdmissionForm = () => {
    const imageHostKey = process.env.REACT_APP_IMG_KEY;
    console.log(imageHostKey);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const admissionFormHandler = (data) => {
        const postedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log(postedDate);
        
        const image = data.img[0];
        const formData = new FormData();
        console.log(formData);
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const image = imgData.data.url;
                    const postedData = {
                    }
                    console.log(image);


                    // fetch('https://fb-demo-server.vercel.app/posts', {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify(postedData)
                    // })
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         console.log(data);
                    //         toast.success('Posted Successfully!');
                    //         navigate('/');
                    //     })
                    //     .catch(error => {
                    //         toast.error(error.message);
                    //         navigate('/');
                    //     })
                }
            });
      }
    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Students</h2>
            <div>
                <form onSubmit={handleSubmit(admissionFormHandler)}>
                    <div className='w-full flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("fName", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane"/>
                        {errors.fName && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Last Name <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("lName", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane"/>
                        {errors.lName && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Gander <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("gander", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="Select Gender" className='text-gray-200 opacity-40' selected>Select Gander</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        </select>
                        {errors.gander && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Date of Birth <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("DOB", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white" type="date" placeholder="dd/mm/yyyyy"/>
                        {errors.DOB && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Roll <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("roll", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="Jane"/>
                        {errors.roll && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Blood Group
                        </label>
                        <select
                        {...register("blood")}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="Select Gander" className='text-gray-200 opacity-40' selected>Select blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        </select>
                        {errors.blood && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Religion <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("religion", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="Select Gender" className='text-gray-200 opacity-40' selected>Select Religion</option>
                        <option>Islam</option>
                        </select>
                        {errors.religion && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            E-mail
                        </label>
                        <input 
                        {...register("mail")}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="xyz@gmail.com"/>
                        {errors.mail && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-12 mb-6'>
                    <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Class <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("class", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="Select Class" className='text-gray-200 opacity-40' selected>Select Class</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        </select>
                        {errors.class && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Section <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("section", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="Select Section" className='text-gray-200 opacity-40' selected>Select Section</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        </select>
                        {errors.section && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Admission Id <span className='text-red-500'>*</span>
                        </label>
                        <input
                        {...register("SID", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="XXXXXXXXXXXX"/>
                        {errors.SID && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Phone <span className='text-red-500'>*</span>
                        </label>
                        <input
                        {...register("phone", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="tel" placeholder="01XXXXXXXXX"/>
                        {errors.phone && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>

                    <div className='flex items-start justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Short bio
                        </label>
                        <textarea 
                        {...register("bio")}
                        class="appearance-none block w-full h-32 bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Add Bio..."/>
                        {errors.bio && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Upload Student Photo (150px X 150px) <span className='text-red-500'>*</span>
                        </label>
                        <input
                        {...register("img", { required: true })}
                         class="appearance-none block w-full text-gray-700 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="file" accept='image/*' placeholder="Add Photo"/>
                        {errors.img && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-6 my-8'>
                    <input type="submit" value="SUBMIT" className='h-12 w-32 bg-sky-500 text-white font-semibold rounded-md border border-white hover:border-sky-500 hover:bg-white hover:text-sky-500 duration-500'/>
                    <input type="reset" value="RESET" className='h-12 w-32 border text-sky-500 border-sky-500 font-semibold rounded-md hover:bg-sky-500 hover:text-white duration-500'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;