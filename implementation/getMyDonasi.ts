import { getDonaturFromAuthHeader } from "../jwt";
import { T_getMyDonasi } from "../types/api/getMyDonasi";
import { Donasi } from "../types/model/table/Donasi";

export const getMyDonasi: T_getMyDonasi = async req => {
  const user = await getDonaturFromAuthHeader(req.headers.authorization);
  return await Donasi.find({
    where: {
      id_donatur: user.id
    },
    order: {
      id: 'desc'
    },
    relations: [
      'otm_id_donatur'
    ]
  });
}
