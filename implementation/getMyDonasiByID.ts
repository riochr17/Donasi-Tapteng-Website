import { getDonaturFromAuthHeader } from "../jwt";
import { T_getMyDonasiByID } from "../types/api/getMyDonasiByID";
import { Donasi } from "../types/model/table/Donasi";

export const getMyDonasiByID: T_getMyDonasiByID = async req => {
  const user = await getDonaturFromAuthHeader(req.headers.authorization);
  const donasi = await Donasi.findOneBy({
    id_donatur: user.id,
    id: req.path.id
  });
  if (!donasi) {
    throw new Error(`data tidak ditemukan`);
  }
  return donasi;
}
