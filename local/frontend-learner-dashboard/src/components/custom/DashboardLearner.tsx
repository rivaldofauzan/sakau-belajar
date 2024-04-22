import React from 'react';
import { Outlet } from 'react-router-dom';
import handIcon from "../../assets/waving_hand.svg";
import addCourse from "../../assets/add_course.svg";
import searchIcon from "../../assets/search.svg";
import addJadwal from "../../assets/add_jadwal.svg";

const DashboardLearner = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse"> {/* Container utama dengan flexbox */}
            <div className="lg:w-80 lg:mr-4 mt-10 lg:mt-0"> {/* Container untuk Timeline Belajar, disesuaikan dengan ukuran di desktop */}
                <h3 className="text-xl font-semibold mt-20 mr-36">Timeline Belajar</h3>
                <div className="flex flex-col items-center h-full mt-8">
                    <img
                        src={addJadwal}
                        alt="Add Jadwal"
                        className="h-24 mb-3"
                    />
                    <h2 className="text-sm font-semibold text-gray-500">Belum ada jadwal belajar</h2>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-xl text-xs mt-3">
                        Tambah Jadwal Belajar
                    </button>
                </div>
                {/* Isi dari Timeline Belajar akan dimasukkan di sini */}
            </div>
            
            <div className="flex-1 text-left mx-auto p-4 lg:order-2"> {/* Bagian konten */}
                <div className="flex items-center"> {/* Container untuk teks dan handicon */}
                    <h1 className="text-4xl font-semibold mt-14 mr-3">Selamat Datang, Aini!</h1>
                    <img
                        src={handIcon}
                        alt="Hand Icon"
                        className="h-9 mt-12"
                    />
                </div>
                <div>
                    <h3 className="font-semibold mb-3 text-gray-500">Selamat Belajar!</h3>
                </div>

                <div className="grid grid-cols-1 gap-2 mt-10"> {/* Grid container untuk menempatkan card di bawah */}
                    <div style={{ width: '804px', height: '568px' }}> {/* Container card dengan lebar dan tinggi yang ditentukan */}
                        <div className="bg-gray-100  rounded-lg p-4" style={{ height: '100%' }}> {/* Card Container */}
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xl font-semibold mr-3">Courses</h3>
                                <div className="relative">
                                    <input type="text" placeholder="Search from courses..." className="border border-white-400 px-2 py-1 rounded-lg focus:outline-none" style={{ width: '250px', fontSize: '12px', color: 'gray' }} />
                                    <img
                                        src={searchIcon}
                                        alt="Search"
                                        className="absolute top-1/2 transform -translate-y-1/2 ml-56 h-4 pointer-events-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center h-full ">
                                <img
                                    src={addCourse}
                                    alt="Add Course"
                                    className="mb-3 "
                                />
                                <h2 className="font-semibold text-gray-500">Belum ada course yang diikuti</h2>
                                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-8 rounded-xl text-xs mt-3">
                                    Tambah Course
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLearner;
