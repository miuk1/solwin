import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-10 ">
            <nav className="p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to=" " className="text-white text-2xl font-bold hover:text-eminence">
                        SolWin
                    </Link>
                    <div className="space-x-4">
                        <Link to="/account" className="text-white text-2xl hover:text-eminence">
                            Account
                        </Link>
                        <Link to="/slots" className="text-white text-2xl hover:text-eminence">
                            Slots
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header