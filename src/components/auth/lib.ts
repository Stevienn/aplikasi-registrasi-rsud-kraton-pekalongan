"use server";

import { jwtVerify, SignJWT } from "jose";
import { createSession, deleteSession } from "./session";

const key = new TextEncoder().encode(process.env.SECRET);

// encrypt for creating session
export async function encrypt(payload: any) {
  const expirationTime = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(key);
}

// decrypt for verifying session
export async function decrypt(session: any) {
  const { payload } = await jwtVerify(session, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login({ patientData }: any) {
  //1. GetUser
  const user = {
    id: patientData.id,
    nama: patientData.nama,
    gender: patientData.gender,
    birth: patientData.birth,
    phone: patientData.phone,
    email: patientData.email,
  };

  //2. Create the cookies session
  await createSession(user);
}

export async function logout() {
  await deleteSession();
}
