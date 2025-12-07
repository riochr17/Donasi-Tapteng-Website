import { Donasi } from "@/api-client/model/table/Donasi";
import { FormDataBuktiDonasi } from "@/api-client/schema/FormDataBuktiDonasi";
import { IDRFormatter } from "@/utility";
import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@heroui/react";
import { InputFile } from "../InputFile";
import { useEffect, useState } from "react";

interface BuktiDonasiFormProps {
  open?: boolean
  setOpen?(open: boolean): void
  title: string
  onSubmit(): void
  loading: boolean
  donasi: Donasi
  data: FormDataBuktiDonasi
  setData(data: FormDataBuktiDonasi): void
}

export function BuktiDonasiForm(props: BuktiDonasiFormProps) {
  const [loading_upload, setLoadingUpload] = useState<boolean>(false);
  const [anonim, setAnonim] = useState<boolean>(false);

  useEffect(() => {
    if (anonim) {
      props.setData({ ...props.data, nama_pengirim: '' });
    }
  }, [anonim])

  return (
    <Modal scrollBehavior="inside" isOpen={props.open} onClose={() => props.setOpen?.(false)}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Unggah Bukti Donasi
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                <Input
                  labelPlacement="outside-top"
                  label="ID"
                  placeholder="ID"
                  isDisabled
                  value={String(props.donasi.id)}
                  startContent="#" />
                <Input
                  labelPlacement="outside-top"
                  label="Nominal"
                  placeholder="Nominal"
                  isDisabled
                  value={IDRFormatter.format(props.donasi.nominal)} />
                <Input
                  labelPlacement="outside-top"
                  value={props.data.nama_pengirim}
                  onChange={e => props.setData({ ...props.data, nama_pengirim: e.target.value })}
                  label="Nama Pengirim"
                  isDisabled={anonim}
                  placeholder={anonim ? "Anonim" : "Nama Pengirim"} />
                <div className="flex items-center gap-0">
                  <Checkbox 
                    isSelected={anonim}
                    onValueChange={setAnonim} />
                  <div className={anonim ? "text-blue-500" : ''}>
                    Anonim
                  </div>
                </div>
                <Input
                  labelPlacement="outside-top"
                  value={props.data.bank}
                  onChange={e => props.setData({ ...props.data, bank: e.target.value })}
                  label="Bank"
                  placeholder="Bank" />
                <div className="flex flex-col gap-2">
                  <div className="text-sm">
                    Bukti Pembayaran (Gambar atau PDF)
                  </div>
                  <InputFile
                    loading={loading_upload}
                    setLoading={setLoadingUpload}
                    trigger={<div 
                      style={{ direction: 'rtl' }}
                      className="p-2 px-4 rounded-2xl bg-teal-500 text-white max-w-full truncate">
                      { props.data.url_gambar_bukti ? props.data.url_gambar_bukti : 'Pilih File'}
                    </div>}
                    value={props.data.url_gambar_bukti}
                    onValueChange={url_gambar_bukti => props.setData({ ...props.data, url_gambar_bukti })} />
                </div>
                <Textarea
                  labelPlacement="outside-top"
                  value={props.data.pesan_donasi}
                  onChange={e => props.setData({ ...props.data, pesan_donasi: e.target.value })}
                  label="Tuliskan Pesan Donasi"
                  className="py-2"
                  classNames={{
                    inputWrapper: 'py-2'
                  }}
                  placeholder="Tuliskan Pesan Donasi disini" />
                <div className="text-zinc-500 italic">
                  Donasi yang diberikan akan kami verifikasi dalam maksimal 1x24jam. Kami akan mengirimkan email konfirmasi ke <b>{'youremail@gmail.com'}</b> ketika donasi berhasil terverifikasi.
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button 
                isLoading={props.loading}
                color="primary"
                onPress={props.onSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
