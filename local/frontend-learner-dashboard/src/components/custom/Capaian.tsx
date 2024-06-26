import React from "react";

interface TemanbelajarProps {
  nama: string;
  tanggalPenyelesaian: string;
  namaCourse: string;
  fotoSrc: string;
}

const Temanbelajar: React.FC<TemanbelajarProps> = ({
  nama,
  tanggalPenyelesaian,
  namaCourse,
  fotoSrc,
}) => {
  return (
    <div className="flex p-5 justify-center">
      <div className="w-full bg-white rounded-md shadow-md p-5 flex items-center relative mx-auto flex-1">
        <img
          src={fotoSrc}
          alt="Foto"
          style={{ marginRight: "20px" }}
          width="50px"
          height="50px"
        />
        <div className="flex flex-col">
          <p className="text-sm absolute top-5 right-5">
            {tanggalPenyelesaian}
          </p>
          <p className="text-lg text-gray-700 pb-0.5">{nama}</p>
          <p className="text-lg text-gray-500 pb-0.5">Telah Menyelesaikan Course</p>
          <div className="bg-gray-200 rounded-md p-2 mb-0.5">
            <p className="text-lg font-bold">{namaCourse}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temanbelajar;
