import React, {
    useState
} from 'react';
import { Link } from 'react-router-dom';

const uri = process.env.REACT_APP_BACKEND_URI || 'http://localhost:6969';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [collegeId, setCollegeId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [radio, setRadio] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            const body = {
                fullName: name,
                rollNumber: rollNumber,
                email: email,
                collegeId: collegeId,
                password: password,
                gender: radio
            };

            const response = await fetch(`${uri}/api/students-register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            if (data.status === 'success') {
                setError('');
                window.location.href = '/login';
            } else {
                setError(data.message);
                console.log(error);
            }
        }
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-header'>
                        <h1>Sign Up</h1>
                    </div>
                    <div className='form-body'>
                        <div className='form-group'>
                            <label htmlFor='fullname'>Full Name</label>
                            <input type='text' id='fullname'
                                onChange={(val) => setName(val.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='rollNumber'>Roll Number</label>
                            <input type='text' id='rollNumber'
                                onChange={(val) => setRollNumber(val.target.value)}
                                required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='collegeId'>College Id</label>
                            <input type='text' id='collegeId'
                                onChange={(val) => setCollegeId(val.target.value)}
                                required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email'
                                onChange={(val) => setEmail(val.target.value)}
                                required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' autoComplete="on"
                                onChange={(val) => setPassword(val.target.value)}
                                required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input type='password' id='confirmPassword' autoComplete="on"
                                onChange={
                                    (val) => {
                                        if (val.target.value === password) {
                                            setConfirmPassword(val.target.value);
                                        } else {
                                            setConfirmPassword('');
                                            setError("Password is not matching")
                                        }
                                    }
                                }
                                required />
                        </div>
                        <div className='form-group'>
                            <input type="radio" value="Male" name="gender"
                                onChange={(val) => setRadio("Male")} /> Male
                            <input type="radio" value="Female" name="gender"
                                onChange={(val) => setRadio("Female")} /> Female
                            <input type="radio" value="Other" name="gender"
                                onChange={(val) => setRadio("Other")} /> Other
                        </div>
                    </div>
                    <div className='form-footer'>
                        <button type='submit'>Register</button>
                        <p>
                            Already have an account? <Link to='/login'>Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;