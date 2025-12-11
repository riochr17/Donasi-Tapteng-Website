import { getDonaturFromAuthHeader } from "../jwt";
import { T_buatDonasi } from "../types/api/buatDonasi";
import { Donasi } from "../types/model/table/Donasi";

export const buatDonasi: T_buatDonasi = async req => {
  const user = await getDonaturFromAuthHeader(req.headers.authorization);
  const donasi = new Donasi();
  donasi.id_donatur = user.id;
  donasi.nama_donatur = '';
  donasi.nama_bank = '';
  donasi.nomor_rekening = '';
  donasi.receipt_url = '';
  donasi.notes = '';
  donasi.nominal = req.body.data.nominal;
  donasi.nilai_konversi_idr = req.body.data.nominal;
  return await donasi.save();
}
