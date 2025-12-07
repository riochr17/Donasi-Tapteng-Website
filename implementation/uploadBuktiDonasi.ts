import { getDonaturFromAuthHeader } from "../jwt";
import { T_uploadBuktiDonasi } from "../types/api/uploadBuktiDonasi";
import { Donasi } from "../types/model/table/Donasi";

export const uploadBuktiDonasi: T_uploadBuktiDonasi = async req => {
  const user = await getDonaturFromAuthHeader(req.headers.authorization);
  const donasi = await Donasi.findOneBy({
    id_donatur: user.id,
    id: req.path.id
  });
  if (!donasi) {
    throw new Error(`data tidak ditemukan`);
  }
  donasi.nama_donatur = req.body.data.nama_pengirim ?? 'Anonim';
  donasi.nama_bank = req.body.data.bank;
  donasi.receipt_url = req.body.data.url_gambar_bukti;
  donasi.notes = req.body.data.pesan_donasi ?? '';
  return await donasi.save();
}
