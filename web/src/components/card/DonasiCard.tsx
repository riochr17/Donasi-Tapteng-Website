import { useState } from "react";
import { BuktiDonasiForm } from "../form/BuktiDonasiForm";
import { addToast, Button } from "@heroui/react";
import { PopupVerifikasiDonasiDone } from "../popup/PopupVerifikasiDonasiDone";
import { Donasi } from "@/api-client/model/table/Donasi";
import moment from 'moment';
import { DetailDonasi, IDRFormatter } from "@/utility";
import { FormDataBuktiDonasi } from "@/api-client/schema/FormDataBuktiDonasi";
import { AxiosClient } from "@/api-client/AxiosClient";
import { UserSession } from "@/user-session";
import { Download } from 'lucide-react';

interface DonasiCardProps {
  data: Donasi
  onReload?(): void
}

export function DonasiCard(props: DonasiCardProps) {
  const [open_form_bukti_donasi, setOpenFormBuktiDonasi] = useState<boolean>(false);
  const [popup_form_done, setPopupFormDone] = useState<boolean>(false);
  const [loading_submit_receipt, setLoadingSubmitReceipt] = useState<boolean>(false);
  const [receipt_data, setReceiptData] = useState<FormDataBuktiDonasi>({
    nama_pengirim: undefined,
    bank: '',
    url_gambar_bukti: '',
    pesan_donasi: undefined
  });

  async function submit() {
    try {
      setLoadingSubmitReceipt(true);
      await AxiosClient.uploadBuktiDonasi({
        headers: { authorization: UserSession.getToken() },
        path: { id: props.data.id },
        body: { data: receipt_data } 
      });
      props.onReload?.();
      setOpenFormBuktiDonasi(false);
      setPopupFormDone(true);
    } catch (err: any) {
      addToast({ title: "Error", description: err?.response?.data?.toString() });
    } finally {
      setLoadingSubmitReceipt(false);
    }
  }
  
  return (
    <>
      <div className={`flex flex-col gap-2 p-4 bg-white border border-[2px] ${props.data.verified_at ? 'border-teal-500/20' : 'border-white'} rounded-2xl shadow-[0px_1px_25px_1px_rgba(0,0,0,.05)]`}>
        { props.data.verified_at && <div className='p-[2px] px-3 rounded-full bg-teal-500 text-white self-start'>
          Terverifikasi
        </div> }
        { (!props.data.verified_at && props.data.receipt_url) && <div className='p-[2px] px-3 rounded-full bg-amber-500 text-white self-start'>
          Dalam Proses Verifikasi
        </div>}
        { (!props.data.verified_at && !props.data.receipt_url) && <div className='p-[2px] px-3 rounded-full bg-rose-500 text-white self-start'>
          Menunggu Bukti Transfer Donasi
        </div> }
        <div className='flex flex-col'>
          <div className='text-sm text-zinc-500'>
            ID
          </div>
          <div className='font-semibold'>
            #{props.data.id}
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-sm text-zinc-500'>
            Tanggal
          </div>
          <div className='font-semibold'>
            { moment(props.data.created_at).format('DD MMMM YYYY') }
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-sm text-zinc-500'>
            Nominal
          </div>
          <div className='font-semibold'>
            { IDRFormatter.format(props.data.nominal) }
          </div>
          <div className="font-bold text-blue-500 mt-2">
            Kirim ke rekening
          </div>
          <pre className="!whitespace-pre-wrap text-sm text-blue-600 mt-2">
{`Bank: ${DetailDonasi.bank}
Nomor: ${DetailDonasi.nomor}
Atas nama: ${DetailDonasi.nama}`}
          </pre>
        </div>
        { props.data.receipt_url && <div className="flex flex-col gap-1">
          <div className="text-zinc-400 font-bold text-sm">
            Nama Donatur
          </div>
          <span className="p-2 px-4 bg-zinc-50 text-sm">{ props.data.nama_donatur ? `${props.data.nama_donatur} (${props.data.otm_id_donatur?.email})` : <i>Anonim</i> }</span>
        </div> }
        { props.data.notes && <div className="flex flex-col gap-1">
          <div className="text-zinc-400 font-bold text-sm">
            Pesan Donasi
          </div>
          <span className="p-2 px-4 bg-zinc-50 text-sm">{ props.data.notes }</span>
        </div> }
        { props.data.receipt_url && <Button
          className="self-start"
          color="primary"
          variant="bordered"
          onPress={() => window.open(props.data.receipt_url)}
          startContent={<Download size={16} />}>
          Bukti Transfer
        </Button> }
        { !props.data.verified_at && <Button 
          color='secondary'
          variant='bordered'
          onPress={() => setOpenFormBuktiDonasi(true)}
          className='self-start'>
          { props.data.receipt_url ? 'Ubah' : 'Unggah' } Bukti Transfer
        </Button> }
      </div>
      <BuktiDonasiForm
        donasi={props.data}
        open={open_form_bukti_donasi}
        setOpen={setOpenFormBuktiDonasi}
        title='Unggah Bukti Donasi'
        onSubmit={submit}
        data={receipt_data}
        setData={setReceiptData}
        loading={loading_submit_receipt} />
      <PopupVerifikasiDonasiDone
        open={popup_form_done}
        setOpen={setPopupFormDone} />
    </>
  );
}
