import { AxiosClient } from '@/api-client/AxiosClient';
import { Donasi } from '@/api-client/model/table/Donasi';
import { Layout } from '@/components/Layout';
import { addToast } from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { IDRFormatter } from '@/utility';
import { PublicDonasi } from '@/api-client/schema/PublicDonasi';

export const Route = createFileRoute('/donatur')({
  component() {
    const [loading, setLoading] = useState<boolean>(false);
    const [list_donasi, setListDonasi] = useState<PublicDonasi[]>([]);
    const total = list_donasi.reduce((acc, cur) => acc + +cur.nominal, 0);
    const group_donasi: _.Dictionary<[string, PublicDonasi][]> = _.groupBy(list_donasi.map(d => [d.tanggal, d]), x => x[0]);

    async function init() {
      try {
        setLoading(true);
        setListDonasi(await AxiosClient.getAllValidDonasi({}));
      } catch (err: any) {
        addToast({ title: "Error", description: err?.response?.data?.toString() });
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      init();
    }, []);

    return (
      <Layout className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2 my-4'>
          <div className='text-2xl'>
            Total Donasi Terkumpul
          </div>
          <div className='text-4xl font-extrabold'>
            { IDRFormatter.format(total) }
          </div>
        </div>
        {
          Object.keys(group_donasi).map(date_yyyymmdd => (
            <div 
              key={date_yyyymmdd}
              className='flex flex-col gap-2'>
              <div className='font-bold text-4xl text-zinc-500'>
                { moment(date_yyyymmdd, 'YYYY-MM-DD').format('DD MMMM YYYY') }
              </div>
              <div className='flex flex-col gap-2'>
                {
                  group_donasi[date_yyyymmdd].map((d, i) => {
                    const donasi = d[1];
                    return (
                      <div 
                        key={`${date_yyyymmdd}-${i}`}
                        className='flex flex-col gap-1 p-2 px-4 bg-zinc-50'>
                        { donasi.nama && <div className='text-teal-600 font-bold'>
                          { donasi.nama } <span className='text-zinc-500'>({ donasi.email })</span>
                        </div> }
                        { !donasi.nama && <div className='text-amber-600 font-bold'>
                          Anonim
                        </div> }
                        <div className='text-zinc-600 font-extrabold'>
                          { IDRFormatter.format(donasi.nominal) }
                        </div>
                        { donasi.pesan && <div className='flex gap-2'>
                          <div className='text-2xl text-zinc-500 font-serif'>"</div>
                          <div className='text-zinc-500 italic'>
                            { donasi.pesan }
                          </div>
                        </div>}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          ))
        }
      </Layout>
    );
  }
})
