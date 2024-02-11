import React from 'react';
import { Link } from 'react-router-dom';
import singleSlotMachineImage from '../../assets/images/slot1.png'; // Make sure to import your image
import './Dashboard.css';

const Dashboard = () => {
    const user = {
        name: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).name : 'John Doe',
        accountBalance: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).accountBalance : 1000
    };

    const depositMoney = (amount: number) => {
        // Logic to deposit money into the user's account
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen bg-">
            <section className="bg-white text-black py-16">
                <div className="container mx-auto flex items-center justify-center ">
                    <div className="text-center ">
                        <h2 className="text-4xl font-bold mb-4">Be a Winner!!</h2>
                        <p className="text-lg mb-8 animate-pulse">Spin now and win big!</p>
                        <div className="flex items-center justify-center space-x-4">
                            <p className="text-lg">User: {user.name}</p>
                            <p className="text-lg">Account Balance: ${user.accountBalance}</p>
                            <button
                                onClick={() => depositMoney(100)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                            >
                                Deposit Money
                            </button>
                        </div>
                    </div>
                    <div className="ml-8">
                        <img
                            src={singleSlotMachineImage}
                            alt="Slot Machine"
                            className="w-80 h-80 mx-auto rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto flex items-center justify-center ">
                    <div className="text-center ">
                        <h2 className="text-4xl font-bold mb-4">Recent Games</h2>
                        <p className="text-lg mb-8 animate-pulse">You have not played any games yet.</p>
                        <Link
                            to="/slots"
                            className="bg-blue-500 hover:bg-blue-700 text-eminence font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Play Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
