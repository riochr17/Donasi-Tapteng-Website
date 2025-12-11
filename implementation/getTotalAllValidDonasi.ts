import { IsNull, Not } from "typeorm";
import { T_getTotalAllValidDonasi } from "../types/api/getTotalAllValidDonasi";
import { Donasi } from "../types/model/table/Donasi";

export const getTotalAllValidDonasi: T_getTotalAllValidDonasi = async req => {
  return await Donasi.sum('nilai_konversi_idr', {
    verified_at: Not(IsNull())
  }) ?? 0;
}
