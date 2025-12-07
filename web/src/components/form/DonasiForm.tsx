import { FormDataDonasi } from "@/api-client/schema/FormDataDonasi";
import { IDRFormatter } from "@/utility";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@heroui/react";

interface DonasiFormProps {
  open?: boolean
  setOpen?(open: boolean): void
  title: string
  onSubmit(): void
  data: FormDataDonasi
  setData(data: FormDataDonasi): void
  loading: boolean
}

export function DonasiForm(props: DonasiFormProps) {
  return (
    <Modal isOpen={props.open} onClose={() => props.setOpen?.(false)}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Berikan Donasi
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {
                    [
                      10_000,
                      20_000,
                      25_000,
                      50_000,
                      100_000,
                      200_000,
                      250_000,
                      500_000,
                      750_000,
                      1_000_000,
                      2_000_000,
                      5_000_000,
                      10_000_000
                    ].map(val => (
                      <Button 
                        color="primary"
                        variant={val == props.data.nominal ? 'solid' : "bordered"}
                        onPress={() => props.setData({ nominal: val })}
                        key={val}>
                        { IDRFormatter.format(val) }
                      </Button>
                    ))
                  }
                </div>
                <Input
                  labelPlacement="outside-top"
                  label="Nominal"
                  placeholder="Nominal"
                  onChange={e => props.setData({ nominal: +e.target.value.replace(/\D+/g, "") })}
                  value={IDRFormatter.format(props.data.nominal)} />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button 
                isLoading={props.loading}
                color="primary" onPress={props.onSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
