import React, {
    useState
} from 'react'
import { Link } from 'react-router-dom'

const uri = process.env.REACT_APP_BACKEND_URI || 'http://localhost:6969';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(`${uri}/api/login-student`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });

            const data = await response.json();

            if (data.user) {
                localStorage.setItem('token', data.user)
                alert("Login Successfully...");
                window.location.href = '/classroom'
            } else {
                alert("Please Check your Email or Password...")
            }
        } catch (err) {
            alert("Please Check your Email or Password...")
            console.log(err);
        }

    }

    return (
        <div className='container'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-header'>
                        <h1>Sign In</h1>
                    </div>
                    <div className='form-body'>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' autoComplete="on"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
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