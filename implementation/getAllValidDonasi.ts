import { IsNull, Not } from "typeorm";
import { T_getAllValidDonasi } from "../types/api/getAllValidDonasi";
import { Donasi } from "../types/model/table/Donasi";
import moment from "moment";
import { maskEmail } from "../utility";

export const getAllValidDonasi: T_getAllValidDonasi = async req => {
  const list_donasi = await Donasi.find({
    where: {
      verified_at: Not(IsNull())
    },
    order: {
      verified_at: 'desc'
    },
    relations: [
      'otm_id_donatur'
    ]
  });

  return list_donasi.map(d => ({
    nama: d.nama_donatur,
    email: d.nama_donatur ? maskEmail(d.otm_id_donatur?.email ?? '') : '',
    nominal: d.nominal,
    pesan: d.notes ?? '',
    anonim: !Boolean(d.nama_donatur),
    tanggal: moment(d.verified_at).format('YYYY-MM-DD')
  }));
}
