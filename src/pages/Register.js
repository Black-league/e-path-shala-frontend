import React from 'react';

function Register() {
    return (
        <div className='form-container'>
            <form>
                <div className='form-header'>
                    <h1>Sign Up</h1>
                </div>
                <div className='form-body'>
                    <div className='form-group'>
                        <label htmlFor='fullname'>Full Name</label>
                        <input type='text' id='fullname' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rollNumber'>Roll Number</label>
                        <input type='text' id='rollNumber' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input type='password' id='confirmPassword' required />
                    </div>
                    <div className='form-group'>
                        <input type="radio" value="Male" name="gender" /> Male
                        <input type="radio" value="Female" name="gender" /> Female
                        <input type="radio" value="Other" name="gender" /> Other
                    </div>
                </div>
                <div className='form-footer'>
                    <button type='submit'>Register</button>
                    <p>
                        Already have an account? <a href='#'>Sign In</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register;