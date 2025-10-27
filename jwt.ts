import jwt from "jsonwebtoken";
import { IsNull } from "typeorm";
import { Admin } from "./types/model/table/Admin";

export function signJWT(Admin_id: number) {
  return jwt.sign(String(Admin_id), process.env.JWT_SECRET_KEY ?? "sample-jwt");
}

export async function extractJWT(token: string) {
  return new Promise<string>((resolve, reject) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET_KEY ?? "sample-jwt",
      async (err: any, data: any) => {
        if (err) {
          reject(err.toString());
        }
        resolve(data);
      }
    );
  });
}

export async function getAdminFromAuthHeader(
  authorization: string
): Promise<Admin> {
  const [_, token] = authorization.split(" ");
  if (!token) {
    throw new Error(`Data tidak ditemukan`);
  }

  const id = await extractJWT(token);
  if (!id && isNaN(parseInt(id))) {
    throw new Error(`Data tidak ditemukan.`);
  }

  const pengguna: Admin | null = await Admin.findOne({
    where: {
      id: parseInt(id)
    }
  });
  if (!pengguna) {
    throw new Error(`data tidak ditemukan.`);
  }
  return pengguna;
}
