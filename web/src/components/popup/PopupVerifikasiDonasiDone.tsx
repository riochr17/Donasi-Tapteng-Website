import { ContactPerson } from "@/utility";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@heroui/react";

interface PopupVerifikasiDonasiDoneProps {
  open?: boolean
  setOpen?(open: boolean): void
}

export function PopupVerifikasiDonasiDone(props: PopupVerifikasiDonasiDoneProps) {
  return (
    <Modal scrollBehavior="inside" isOpen={props.open} onClose={() => props.setOpen?.(false)}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Terima Kasih
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                <div>
                  Bukti transfer telah kami terima.
                </div>
                <div className="text-zinc-500 italic">
                  Donasi yang diberikan akan kami verifikasi dalam maksimal 1x24jam. Kami akan mengirimkan email konfirmasi ke <b>{'youremail@gmail.com'}</b> ketika donasi berhasil terverifikasi.
                  <br/><br/>
                  Jika masih belum ada konfirmasi silahkan hubungi ke nomor WhatsApp berikut: <b>{ ContactPerson.phone }</b>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                OK
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
