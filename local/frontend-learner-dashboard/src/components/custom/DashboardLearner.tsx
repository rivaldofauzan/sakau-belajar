import React from 'react'
import { Outlet } from 'react-router-dom'
import handIcon from "../../assets/waving_hand.svg";

const DashboardLearner = () => {
    return (
        <div>
            <div className="flex-1 text-left mx-auto p-4">
                <div className="flex items-center"> {/* Container untuk teks dan handicon */}
                    <h1 className="text-2xl font-semibold mt-12 mr-3">Selamat Datang, Aini!</h1>
                    <img
                        src={handIcon}
                        alt="Hand Icon"
                        className="h-9 mt-9"
                    />
                </div>
                <h3 className="font-semibold mb-3 text-gray-500">Selamat Belajar!</h3>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLearner