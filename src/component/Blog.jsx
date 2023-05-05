import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className='border rounded-2xl bg-slate-100 m-6 p-6'>
            <h1>Tell us the differences between uncontrolled and controlled components.</h1>
            <p>Ans. An uncontrolled component is a form element such as input, textarea, or select that manages its own state internally. When a user interacts with the form element, its state is updated automatically without any intervention from the parent component. <br />
            A controlled component, on the other hand, is a form element whose state is controlled by the parent component. 
            </p>
            </div>
            <div className='border rounded-2xl bg-slate-100 m-6 p-6'>
            <h1>How to validate React props using PropTypes</h1>
            <p>Ans. PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.</p>
            </div>
            <div className='border rounded-2xl bg-slate-100 m-6 p-6'>
            <h1>Tell us the difference between nodejs and express js.</h1>
            <p>Ans.</p>
            </div>
            <div className='border rounded-2xl bg-slate-100 m-6 p-6'>
            <h1>What is a custom hook, and why will you create a custom hook?</h1>
            <p>Ans.</p>
            </div>
            
        </div>
    );
};

export default Blog;