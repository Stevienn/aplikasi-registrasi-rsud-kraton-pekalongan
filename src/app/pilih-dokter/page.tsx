"use client";

import { getUser } from "@/api/user";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IUser from "@/interface/patientInterface";
import React, { useEffect, useState } from "react";

const PilihDokter = () => {
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <Header name={userData?.user.nama} />
      <Card />
      <Footer isFull={true} />
    </div>
  );
};

export default PilihDokter;
