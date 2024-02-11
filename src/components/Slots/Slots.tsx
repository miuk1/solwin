import { useNavigate } from 'react-router-dom';
import './Slots.css';
import slot1Image from '../../assets/images/slots/slot1.png';
import slot2Image from '../../assets/images/slots/slot2.png';
import slot3Image from '../../assets/images/slots/slot3.png';

const SlotsPage = () => {
    const navigate = useNavigate();
    const slotMachines = [
        { id: 1, name: 'Slot Machine 1', image: slot1Image, url: '/solwin' },
        { id: 2, name: 'Slot Machine 2', image: slot2Image, url: '/solwin' },
        { id: 3, name: 'Slot Machine 3', image: slot3Image, url: '/solwin' },
        { id: 4, name: 'Slot Machine 3', image: slot3Image, url: '/solwin' },
        { id: 5, name: 'Slot Machine 3', image: slot3Image, url: '/solwin' },
        { id: 6, name: 'Slot Machine 3', image: slot3Image, url: '/solwin' },
    ];


    const loadGame = (url: string) => {
        return navigate(url);
    }


    return (
        <div className="slots-page">
            <h1 className="text-2xl font-bold mb-4 text-center transition-all duration-300">Our Slots</h1>
            <div className={`grid grid-cols-3 gap-4 p-4 text-center`}>
                {slotMachines.map((machine) => (
                    <div key={machine.id} className="slot-machine-card p-4 border border-gray-300 rounded-lg">
                        <img src={machine.image} alt={machine.name} className="w-full h-auto mb-2" />
                        <h3 className="text-lg font-semibold ">{machine.name}</h3>
                        <button className="bg-blue-500 px-4 py-2 rounded-lg mt-2 bg-fandango hover:text-eminence font-bold text-2xl transition duration-300" onClick={() => loadGame(machine.url ?? '')}>Play Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlotsPage;
