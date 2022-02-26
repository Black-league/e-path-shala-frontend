import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='container'>
            <div className='form-container'>
                <form>
                    <div className='form-header'>
                        <h1>Sign In</h1>
                    </div>
                    <div className='form-body'>
                        <div className='form-group'>
                            <label htmlFor='rollNumber'>Roll Number</label>
                            <input type='text' id='rollNumber' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' autoComplete="on" required />
                        </div>
                    </div>
                    <div className='form-footer'>
                        <button type='submit'>Login</button>
                        <p>
                            Don't have an account? <Link to='/register'>Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login