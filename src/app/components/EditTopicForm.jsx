import React from 'react';

const EditTopicForm = () => {
    return (
        <div className='h-screen'>
            <form className='m-7 grid gap-y-3'>
                <p className="text-4xl">Edit</p>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs" />
                <button className='btn btn-sm btn-success w-16'>Update</button>
            </form>
        </div>
    );
};

export default EditTopicForm;