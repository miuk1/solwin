import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [formMode, setFormMode] = useState('login');
    const [error, setError] = useState('');

    // Regular expressions for email and password validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const handleLogin = () => {
        // Validate the form
        if (!email || !password) {
            setError('Please fill in all fields');
            setTimeout(() => { setError(''); }, 3000);
            return;
        }

        // Check for valid email
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            setTimeout(() => { setError(''); }, 3000);
            return;
        }

        // Check for valid password

        if (!passwordRegex.test(password)) {
            setError('Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number');
            setTimeout(() => { setError(''); }, 3000);
            return;
        }

        const loginData = {
            email: email,
            password: password
        };

        console.log(loginData);

        // Route to the dashboard
        if (loginData.email === 'admin@admin.com' && loginData.password === 'Admin@123') {
            console.log('Logged in successfully');
            // generate a token and store it in local storage
            localStorage.setItem('token', 'token');
            localStorage.setItem('user', JSON.stringify({ name: 'John Doe', accountBalance: 1000 }));
            return navigate('/dashboard');
        } else {
            setError('Invalid email or password');
            setTimeout(() => { setError(''); }, 3000);
        }
    };

    const handleSignup = () => {
        // Validate the form
        if (!signupEmail || !signupPassword || !terms) {
            setError('Please fill in all fields and agree to the terms and conditions');
            setTimeout(() => { setError(''); }, 3000);
            return;
        }

        // Check for valid email 
        if (!emailRegex.test(signupEmail)) {
            setError('Please enter a valid email address');
            setTimeout(() => { setError(''); }, 3000);
            return;
        }

        // Check for valid password
        if (!passwordRegex.test(signupPassword)) {
            setError('Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number');
            setTimeout(() => { setError(''); }, 3000);
            return;
        }

        const signupData = {
            email: signupEmail,
            password: signupPassword,
            terms: terms
        };

        console.log(signupData);

        // Perform signup logic here
    };

    const toggleFormMode = (mode: string) => {
        setFormMode(mode === 'login' ? 'login' : 'register');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-eminence">
            <form className="flex flex-col items-center text-center bg-white border border-gray-300 w-full md:w-1/2 lg:w-1/3 p-10 rounded-md ">
                <div className="mb-6">
                    <button
                        type="button"
                        className={`mr-2 text-lg font-semibold ${formMode === 'login' ? 'text-blue-500 underline' : 'text-gray'}`}
                        onClick={() => toggleFormMode('login')}
                    >
                        Login
                    </button>

                    <button
                        type="button"
                        className={`mr-2 text-lg font-semibold ${formMode === 'register' ? 'text-blue-500 underline' : 'text-gray'}`}
                        onClick={() => toggleFormMode('register')}
                    >
                        Sign Up
                    </button>
                </div>
                {formMode === 'register' && (
                    <div className="mb-4">
                        <label className="mb-2 text-sm font-semibold" htmlFor="signup-email">
                            Email:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-3 py-2 my-2 w-full focus:outline-none focus:ring-2 focus:ring-ncs-blue"
                            type="email"
                            id="signup-email"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}

                        />
                        <label className="mb-2 text-sm font-semibold" htmlFor="signup-password">
                            Password:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-3 py-2 my-2 w-full focus:outline-none focus:ring-2 focus:ring-ncs-blue"
                            type="password"
                            id="signup-password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                        />
                    </div>
                )}
                {formMode === 'login' && (
                    <div className="mb-4">
                        <label className="mb-2 text-sm font-semibold" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-3 py-2 my-2 w-full focus:outline-none focus:ring-2 focus:ring-ncs-blue"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="mb-2 text-sm font-semibold" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="border border-gray-300 rounded-md px-3 py-2 my-2 w-full focus:outline-none focus:ring-2 focus:ring-ncs-blue"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                )}
                {formMode === 'register' && (
                    <div className="flex justify-center">
                        <div className='mb-4 px-4'>
                            <input
                                type='checkbox'
                                id='terms'
                                name='terms'
                                checked={terms}
                                onChange={() => setTerms(!terms)}
                            />
                            <label htmlFor='terms'> I agree to the <Link to='/terms'>Terms and Conditions</Link></label>
                        </div>
                    </div>
                )}

                <div className="flex justify-center">
                    <button
                        className={`bg-ncs-blue hover:bg-prussian-blue text-white font-bold py-2 px-4 rounded`}
                        type="button"
                        onClick={formMode === 'login' ? handleLogin : handleSignup}
                    >
                        {formMode === 'login' ? 'Login' : 'Sign Up'}
                    </button>
                </div>

                {error && (
                    <p className="text-fandango mt-4 text-sm">{error}</p>
                )}
            </form>
        </div>
    );
};

export default LoginForm;
