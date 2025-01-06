'use client'

import Image from "next/image";
import LoginForm from "./LoginForm";
import './globals.css';


const Home = () => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-gray-100">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white p-10 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center">ReScript Form Validation</h1>
                <LoginForm />
            </main>
        </div>
    );
};

export default Home;
