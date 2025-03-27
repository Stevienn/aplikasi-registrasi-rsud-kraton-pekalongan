import Image from "next/image";
import React, { useState } from "react";
import Button from "./form/Button";
import { ISchedule } from "@/interface/doctorInterface";
import Modal from "./Modal";

interface ICardProps {
  image: string;
  categories: string;
  name: string;
  schedule: {
    [key: string]: ISchedule;
  };
}

const Card = ({ image, categories, name, schedule }: ICardProps) => {
  const [modalSchedule, setModalSchedule] = useState(false);
  return (
    <div id="shared-modal">
      {modalSchedule && (
        <Modal width="500px">
          <Modal.Header title={`Jadwal Praktek ${name}`} />
          <Modal.Body>
            <p>Jadwal Praktek</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              placeholder="Kembali"
              onClick={() => setModalSchedule(false)}
            />
          </Modal.Footer>
        </Modal>
      )}
      <div className="shadow-2xl w-[300px] rounded-[40px] font-inria-sans">
        <div className="overflow-hidden rounded-tl-[40px] rounded-tr-[40px] max-h-[180px]">
          <Image src={image} alt="doctor" width={300} height={195} />
        </div>
        <div className="px-[33px] py-[25px]">
          <p className="bg-gradient-to-r from-blue-tertiary to-blue-secondary text-white px-[14px] py-[7px] rounded-[27px]  max-w-[140px] flex justify-center mb-[9px]">
            {categories}
          </p>
          <p className="text-[20px] font-bold mb-[5px]">{name}</p>
          <p
            className="underline text-blue-primary font-semibold cursor-pointer mb-[80px]"
            onClick={() => setModalSchedule(true)}
          >
            Lihat Jadwal
          </p>
          <p className="bg-gradient-to-r from-blue-secondary to-blue-primary text-white px-[14px] py-[7px] rounded-[27px]  max-w-[140px] flex justify-center mb-[9px] cursor-pointer">
            Pilih Dokter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
