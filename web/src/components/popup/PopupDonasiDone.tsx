import { DetailDonasi, IDRFormatter } from "@/utility";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@heroui/react";

interface PopupDonasiDoneProps {
  open?: boolean
  setOpen?(open: boolean): void
  nominal: number
}

export function PopupDonasiDone(props: PopupDonasiDoneProps) {
  return (
    <Modal isOpen={props.open} onClose={() => props.setOpen?.(false)}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Donasi Tercatat
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-blue-500 mt-2">
                  Lakukan pengiriman ke rekening berikut
                </div>
                <div className="text-xl font-bold">
                  { IDRFormatter.format(props.nominal) }
                </div>
                <pre className="!whitespace-pre-wrap text-sm text-blue-600 mt-2">
{`Bank: ${DetailDonasi.bank}
Nomor: ${DetailDonasi.nomor}
Atas nama: ${DetailDonasi.nama}`}
                </pre>
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
