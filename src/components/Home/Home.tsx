import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './Home.css';

// Import the purple slot machine image
import purpleSlotMachineImage from '../../assets/images/carl-raw-m3hn2Kn5Bns-unsplash.jpg';
import singleSlotMachineImage from '../../assets/images/slot1.png';

const HomePage = () => {
    // Animation spring config
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

    // Style for the background image
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${purpleSlotMachineImage}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backdropFilter: 'blur-md'
    };

    return (
        <div className="font-sans scroll-smooth">
            {/* Main Content Area with Background Image */}
            <section className="hero" style={backgroundStyle}>
                <div className="container mx-auto flex items-center justify-center h-screen">
                    <animated.div style={fadeIn} className="text-center text-white">
                        <h1 className="text-7xl font-bold mb-4 text-white text-shadow">Welcome to SolWin!</h1>
                        <p className="text-xl mb-8 text-white">Experience the thrill of gaming with a mix of Crypto.</p>
                        <Link
                            to="/slots"
                            className="bg-fandango hover:text-eminence font-bold text-2xl py-2 px-4 rounded-full transition duration-300"
                        >
                            Explore Slots
                        </Link>
                    </animated.div>
                </div>
            </section>

            {/* Be a Winner Section */}
            <section className="bg-white text-black py-16">
                <div className="container mx-auto flex items-center justify-center ">
                    <div className="text-center ">
                        <h2 className="text-6xl font-bold mb-4">Be a Winner!!</h2>
                        <p className="text-xl mb-8 animate-jackpot">Spin now and win big!</p>
                    </div>
                    <div className="ml-8">
                        <img
                            src={singleSlotMachineImage}
                            alt="Slot Machine"
                            className="w-80 h-80 mx-auto "
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
