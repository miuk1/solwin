import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SolWin.css';
import image1 from '../../assets/images/symbols/solana.png';
import image2 from '../../assets/images/symbols/bomb.png';
import image3 from '../../assets/images/symbols/coin.png';

const SolWin: React.FC = () => {
    const navigate = useNavigate();
    const [slot1, setSlot1] = useState(image1);
    const [slot2, setSlot2] = useState(image2);
    const [slot3, setSlot3] = useState(image3);
    const [isSpinning, setIsSpinning] = useState(false);
    const [isWin, setIsWin] = useState(false);

    const images = [image1, image2, image3];

    const startSpinning = () => {
        setIsSpinning(true);

        // Number of frames for the spinning animation
        const numFrames = 10;
        const delayBetweenFrames = 300; // Milliseconds

        // Show a sequence of random images before settling on the final result
        for (let i = 0; i < numFrames; i++) {
            setTimeout(() => {
                const randomImage1 = images[Math.floor(Math.random() * images.length)];
                const randomImage2 = images[Math.floor(Math.random() * images.length)];
                const randomImage3 = images[Math.floor(Math.random() * images.length)];

                setSlot1(randomImage1);
                setSlot2(randomImage2);
                setSlot3(randomImage3);
            }, i * delayBetweenFrames);
        }

        // After the spinning animation, settle on the final result
        setTimeout(() => {
            const randomImage1 = images[Math.floor(Math.random() * images.length)];
            const randomImage2 = images[Math.floor(Math.random() * images.length)];
            const randomImage3 = images[Math.floor(Math.random() * images.length)];

            setSlot1(randomImage1);
            setSlot2(randomImage2);
            setSlot3(randomImage3);

            setIsSpinning(false);

            if (randomImage1 === randomImage2 && randomImage2 === randomImage3) {
                setIsWin(true);
            } else {
                setIsWin(false);
            }
        }, numFrames * delayBetweenFrames + 1000); // Adjust the delay as needed
    };

    const goBack = () => {
        return navigate('/slots');
    };

    return (
        <div className="solwin-slot flex items-center justify-center h-screen bg-gray-100 p-10">
            <div className="slot-machine text-center p-8 rounded-lg bg-white shadow-md">
                <div className="slot-container flex justify-between mb-4 gap-4">
                    <div className="slot flex-1 mx-2">
                        <img src={slot1} alt="Slot 1" className={`slot-image ${isSpinning ? 'spinning' : ''}`} />
                    </div>
                    <div className="slot flex-1 mx-2">
                        <img src={slot2} alt="Slot 2" className={`slot-image ${isSpinning ? 'spinning' : ''}`} />
                    </div>
                    <div className="slot flex-1 mx-2">
                        <img src={slot3} alt="Slot 3" className={`slot-image ${isSpinning ? 'spinning' : ''}`} />
                    </div>
                </div>
                <button
                    onClick={startSpinning}
                    disabled={isSpinning}
                    className={`spin-button text-white bg-fandango py-2 px-4 text-l font-bold rounded ${isSpinning ? 'cursor-not-allowed spinning' : 'cursor-pointer'}`}
                >
                    {isSpinning ? 'Spinning...' : 'Spin'}
                </button>
                <div className="result-message text-xl mb-4">
                    {isWin ? (
                        <div className="win-message text-fandango">You win!</div>
                    ) : (
                        <div className="lose-message text-persian-indigo">You lose!</div>
                    )}
                </div>
                <button onClick={goBack} className="go-back-button bg-red-500 text-black py-2 px-4 rounded">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default SolWin;
