import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? 'http://localhost:8888/vibeAuth/login' : 'http://localhost:8888/vibeAuth/register';
        try {
            await axios.post(url, { username, password });
            if (isLogin) {
                document.cookie = `username=${username}; path=/`; // Store username in cookies
                window.location.href = 'http://localhost:8888'; // Redirect to Spotify login page
            } else {
                alert('User registered successfully');
            }
        } catch (error) {
            alert('Error: ' + error.response.data);
        }
    };

    return (
        <div>
            <div className='wrapper1'>
                <h1>VibeSync</h1>
            </div>

            <div className='wrapper2'>
                <h1>{isLogin ? 'Login' : 'Signup'}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                    </div>

                    <div className='remember'>
                    <label><input type="checkbox" />Remember me</label>
                    <a href="">Forgot password?</a>
                    </div>
                    
                    <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
                </form>
                <div className="or">
                    <p>
                        {isLogin ? "or" : 'or'}{' '}
                    </p>
                </div>
                <div className="register">
                    <button onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? 'Register' : 'Login'}
                    </button>
                </div>
            </div>

            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>

            <div className='wrapper3'>
                <p><span class="bold">VibeSync</span> <span class="about">About Us</span> <span class="contact">Contact</span> <span class="policy">Private Policy</span></p>
                <div className = 'copyright'>
                    <p>© 2024 VibeSync. All rights reserved.</p>
                </div>
            </div>

        </div>
    );
};

export default Login;