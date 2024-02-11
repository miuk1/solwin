import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-black py-4 text-center  text-white">
            <div className="bg-footer-pattern bg-cover bg-center py-8">
                <div className="container mx-auto">
                    <p className="text-gray-600">© 2023 SolWin. All rights reserved.</p>
                    <div className="flex justify-center mt-4">
                        <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-200 mx-2">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-gray-600 hover:text-blue-200 mx-2">Terms of Service</Link>
                        <Link to="/contact-us" className="text-gray-600 hover:text-blue-200 mx-2">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
