import React from 'react';
import { useForm } from 'react-hook-form';
import { InputDate } from '../ReusableInputs/InputDate';
import { InputFile } from '../ReusableInputs/InputFile';
import { InputSelect } from '../ReusableInputs/InputSelect';
import { InputText } from '../ReusableInputs/InputText';
import { InputTime } from '../ReusableInputs/InputTime';
import { InputNumber } from '../ReusableInputs/InputNumber';
import { InputTel } from '../ReusableInputs/InputTel';
import { InputMail } from '../ReusableInputs/InputMail';
import { InputTextarea } from '../ReusableInputs/InputTextarea';
import { Oval } from 'react-loader-spinner';


const ReusableForm = ({ onSubmit, fields, columnCount, loading }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Determine the grid classes based on columnCount
    const gridClasses = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`grid gap-6 ${gridClasses[columnCount]}`}>
                {fields?.map((field, index) => (
                    <div key={index} className='w-full'>
                        {field.type === 'text' && <InputText {...field} register={register} errors={errors} />}
                        {field.type === 'select' && <InputSelect {...field} register={register} errors={errors} />}
                        {field.type === 'file' && <InputFile {...field} register={register} errors={errors} />}
                        {field.type === 'date' && <InputDate {...field} register={register} errors={errors} />}
                        {field.type === 'time' && <InputTime {...field} register={register} errors={errors} />}
                        {field.type === 'number' && <InputNumber {...field} register={register} errors={errors} />}
                        {field.type === 'email' && <InputMail {...field} register={register} errors={errors} />}
                        {field.type === 'tel' && <InputTel {...field} register={register} errors={errors} />}
                        {field.type === 'textarea' && <InputTextarea {...field} register={register} errors={errors} />}
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-start gap-6 my-8'>
                <button
                    type="submit"
                    disabled={loading}
                    className={loading? 'h-12 w-32 bg-blue-700 text-white font-semibold rounded-md border border-white flex items-center justify-center gap-2' : 'h-12 w-32 bg-blue-700 text-white font-semibold rounded-md border border-white hover:border-blue-700 hover:bg-white hover:text-blue-700 duration-500 flex items-center justify-center gap-2'}
                >
                    {loading ? (
                        <div className='p-1'>
                        <Oval
                            visible={true}
                            height="30"
                            width="30"
                            color="white" 
                            secondaryColor="white"
                            ariaLabel="oval-loading"
                            strokeWidth={8}
                        />
                        </div>
                    ) : (
                        'SUBMIT'
                    )}
                </button>
                <input
                    type="reset"
                    value="RESET"
                    className='h-12 w-32 border text-blue-700 border-blue-700 font-semibold rounded-md hover:bg-blue-700 hover:text-white duration-500'
                />
            </div>

        </form>
    );
};

export default ReusableForm;
