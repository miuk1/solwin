import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const isUserLoggedIn = !!localStorage.getItem('token');

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return navigate('/');
    };

    switch (isUserLoggedIn) {
        case true: return (
            <nav className="bg-black sticky top-0 left-0 right-0 z-10 text-eminence p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/dashboard" className="text-2xl font-bold">SolWin Casino</Link>
                    <div className="flex items-center space-x-4">
                        <Link to="/profile" className="text-white hover:text-eminence">Profile</Link>
                        <Link to="/settings" className="text-white hover:text-eminence">Settings</Link>
                        <Link to="/history" className="text-white hover:text-eminence">History</Link>
                        <button type='button' className="text-white hover:text-eminence" onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>);

        case false: return (
            <header className="sticky top-0 left-0 right-0 z-10 bg-black">
                <nav className="p-4">
                    <div className="container mx-auto flex items-center justify-between">
                        <Link to="/" className="text-white text-2xl font-bold hover:text-eminence">
                            SolWin
                        </Link>
                        <div className="space-x-4">
                            <Link to="/login" className="text-white hover:text-eminence">
                                Login
                            </Link>
                            <Link to="/slots" className="text-white hover:text-eminence">
                                Slots
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>);

        default: return null;
    }
}

export default Header;
