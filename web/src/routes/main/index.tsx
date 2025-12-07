import { AxiosClient } from '@/api-client/AxiosClient';
import { Donasi } from '@/api-client/model/table/Donasi';
import { FormDataDonasi } from '@/api-client/schema/FormDataDonasi';
import { DonasiCard } from '@/components/card/DonasiCard';
import { BuktiDonasiForm } from '@/components/form/BuktiDonasiForm';
import { DonasiForm } from '@/components/form/DonasiForm';
import { Layout } from '@/components/Layout';
import { PopupDonasiDone } from '@/components/popup/PopupDonasiDone';
import { UserSession } from '@/user-session';
import { IDRFormatter } from '@/utility';
import { addToast, Button, Spinner } from '@heroui/react';
import { createFileRoute, redirect } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/main/')({
  async loader(context) {
    const user = UserSession.getUser();
    if (!user.id) {
      throw redirect({ to: '/' });
    }
  },
  component() {
    const [open_form_donasi, setOpenFormDonasi] = useState<boolean>(false);
    const [popup_form_done, setPopupFormDone] = useState<boolean>(false);
    const [list_donasi, setListDonasi] = useState<Donasi[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loading_submit, setLoadingSubmit] = useState<boolean>(false);
    const [new_donasi_data, setNewDonasiData] = useState<FormDataDonasi>({ nominal: '' as any });

    const total = list_donasi.filter(x => x.verified_at).reduce((acc, cur) => acc + +cur.nominal, 0);

    async function init() {
      setLoading(true);
      try {
        setListDonasi(await AxiosClient.getMyDonasi({
          headers: { authorization: UserSession.getToken() }
        }))
      } catch (err: any) {
        addToast({ title: "Error", description: err?.response?.data?.toString() });
      } finally {
        setLoading(false);
      }
    }

    async function submit() {
      setLoadingSubmit(true);
      try {
        await AxiosClient.buatDonasi({
          headers: { authorization: UserSession.getToken() },
          body: { data: new_donasi_data }
        });
        init();
        setOpenFormDonasi(false);
        setPopupFormDone(true);
      } catch (err: any) {
        addToast({ title: "Error", description: err?.response?.data?.toString() });
      } finally {
        setLoadingSubmit(false);
      }
    }

    useEffect(() => {
      init();
    }, []);

    return (
      <Layout className='flex flex-col gap-6'>
        <div className='bg-zinc-100 p-2 px-4 rounded-xl text-zinc-500'>
          Klik <span className='font-bold'>+ Donasi</span> untuk mulai memberikan donasi
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <div>
              Total Donasi Saya (Terverifikasi)
            </div>
            <div className='font-bold text-4xl py-2'>
              { IDRFormatter.format(total) }
            </div>
          </div>
          <Button 
            className='self-start'
            color='primary'
            onPress={() => setOpenFormDonasi(true)}>
            + Donasi
          </Button>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-bold text-2xl text-zinc-600'>
            Riwayat Donasi
          </div>
          <div className='grid grid-cols-1 gap-3 xl:grid-cols-2 xl:gap-5'>
            { loading && <Spinner /> }
            {
              list_donasi.map(donasi => (
                <DonasiCard
                  key={donasi.id}
                  onReload={init}
                  data={donasi} />
              ))
            }
          </div>
        </div>
        <DonasiForm
          open={open_form_donasi}
          setOpen={setOpenFormDonasi}
          title='Berikan Donasi'
          onSubmit={submit}
          data={new_donasi_data}
          setData={setNewDonasiData}
          loading={loading_submit} />
        <PopupDonasiDone
          nominal={new_donasi_data.nominal}
          open={popup_form_done}
          setOpen={setPopupFormDone} />
      </Layout>
    );
  }
})
