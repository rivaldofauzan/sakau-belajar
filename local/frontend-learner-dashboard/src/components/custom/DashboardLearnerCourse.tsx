import React from 'react';
import { Link } from 'react-router-dom';
import handIcon from "../../assets/waving_hand.svg";
import searchIcon from "../../assets/search.svg";
import addJadwal from "../../assets/add_jadwal.svg";
import icon1 from "../../assets/iconCode.png";
import icon2 from "../../assets/iconC.png";
import icon3 from "../../assets/iconCC.png";

const DashboardLearner = () => {
    // Array dummy course
    const courses = [
        { id: 1, name: 'Pengembangan Web', progress: 20 },
        { id: 2, name: 'Pengolahan Citra Digital', progress: 50 },
        { id: 3, name: 'Proyek', progress: 70 },
        { id: 4, name: 'Sistem Terdistribusi', progress: 30 },
        { id: 5, name: 'APPL2', progress: 90 },
        { id: 6, name: 'Manajemen Proyek', progress: 10 },
        { id: 7, name: 'Sistem Informasi', progress: 40 },
        { id: 8, name: 'Perancangan Antarmuka', progress: 80 },
        { id: 9, name: 'PPL', progress: 60 },
    ];

    return (
        <div className="flex flex-col lg:flex-row-reverse">
            <div className="lg:w-80 lg:mr-4 mt-10 lg:mt-0">
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
            </div>
            
            <div className="flex-1 text-left mx-auto p-4 lg:order-2">
                <div className="flex items-center">
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

                <div className="grid grid-cols-1 gap-2 mt-10">
                    <div style={{ width: '804px', height: '568px' }}>
                        <div className="bg-gray-100 rounded-lg p-4" style={{ height: '100%' }}>
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
                            <div className="grid grid-cols-3 gap-4">
                                {courses.map((course, index) => (
                                     <Link key={course.id} to={`/course/${course.id}`} className="rounded-lg p-4" style={{ backgroundColor: index % 3 === 0 ? '#E1E2F6' : index % 3 === 1 ? '#F8EFE2' : '#EFF7E2' }}>
                                        <div className="flex justify-left items-center mb-3">
                                            <img src={index % 3 === 0 ? icon1 : index % 3 === 1 ? icon2 : icon3} alt="Course Icon" className="h-12" />
                                        </div>
                                        <h3 className="text-sm font-semibold mb-2">{course.name}</h3>
                                        <div className="flex items-center mb-2">
                                            <div className="w-3/4 bg-orange-500 h-3 rounded-full">
                                                <div className="bg-yellow-300 h-full rounded-full" style={{ width: `${course.progress}%` }}></div>
                                            </div>
                                            <span className="ml-2 font-bold text-xs text-gray-500">{course.progress}%</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLearner;
