import { createFileRoute, redirect } from '@tanstack/react-router'
import { UserSession } from '@/user-session';
import { Button, Link, Spinner } from '@heroui/react';
import { GoogleLoginButton } from '@/components/GoogleLoginButton';
import { Layout } from '@/components/Layout';
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react';
import { AxiosClient } from '@/api-client/AxiosClient';
import { IDRFormatter } from '@/utility';
import { DollarSign } from 'lucide-react';


export const Route = createFileRoute('/')({
  async loader(context) {
    // 
  },
  component() {
    const [total_donasi, setTotalDonasi] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
      setLoading(true);
      AxiosClient.getTotalAllValidDonasi({}).then(setTotalDonasi).catch(() => {}).finally(() => {
        setLoading(false);
      });
    }, []);

    const user = UserSession.getUser();
    return (
      <Layout className='flex flex-col gap-4 text-xl w-full'>
        { !user.id && <div className='flex flex-col gap-2 items-center text-center bg-zinc-50 py-4'>
          <div className='text-orange-500'>
            Login untuk memberikan Donasi
          </div>
          <GoogleLoginButton onSuccess={() => window.location.href = '/main'} />
        </div> }
        <div className='flex lg:flex-row justify-between items-center flex-col gap-0 pb-4'>
          <div className='text-center flex flex-col gap-2 my-4'>
            <div className='text-2xl'>
              Total Donasi Terkumpul
            </div>
            <div className='text-4xl font-extrabold'>
              { loading && <Spinner /> }
              { !loading && IDRFormatter.format(total_donasi) }
            </div>
          </div>
          { user.id && <Button 
            href='/main'
            color='primary'
            startContent={<DollarSign size={16} />}
            variant='bordered'
            className='whitespace-pre-wrap text-center !h-12 text-lg'
            as={Link}>
            Berikan Donasi
          </Button>}
        </div>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4'>
          <Button 
            href='/donatur'
            color='warning'
            className='whitespace-pre-wrap text-center !h-12 text-lg'
            as={Link}>
            Lihat Donasi Terkumpul
          </Button>
          <Button 
            href='/laporan'
            color='warning'
            className='whitespace-pre-wrap text-center !h-12 text-lg'
            as={Link}>
            Lihat Laporan Penggunaan Donasi
          </Button>
        </div>
        <Button 
          href='/laporan#kondisi-sipange'
          color='danger'
          className='whitespace-pre-wrap text-center !h-12 text-lg'
          as={Link}>
          Lihat Kondisi Terkini Tapteng (25/12/2025)*
        </Button>
        <div className='text-danger-500 text-sm'>
          *seluruh gambar dan video kondisi terkini diambil pada saat perjalanan penyaluran bantuan ke dua tempat yaitu Sipange dan Hutanabolon tanggal 25 Desember 2025
        </div>
        <div className='text-zinc-600'>
          Ribuan orang di Sumatra telah kehilangan rumah akibat banjir besar dan tanah longsor yang menghancurkan - banyak yang berduka atas anggota keluarga atau masih mencari mereka yang hilang. Jalan dan jembatan tidak dapat dilalui, listrik dan jaringan seluler terputus. Situasi pasokan semakin kritis dari hari ke hari, dan persediaan makanan semakin menipis.
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-2 h-full lg:h-90 w-full'>
          <div className='w-full lg:w-auto lg:flex-1 lg:h-full'>
            <img 
              className='w-full h-full object-cover'
              src={'/IMG-20251207-WA0013.webp'} />
          </div>
          <div className='w-full lg:w-auto lg:flex-1 lg:h-full'>
            <img 
              className='w-full h-full object-cover'
              src={'/IMG-20251207-WA0014.webp'} />
          </div>
        </div>
        <div className='text-zinc-600'>
          Setiap donasi membantu memberikan perlindungan, makanan, dan harapan bagi para korban. Bersama-sama, kita dapat menyelamatkan nyawa.
        </div>
        <div className='h-80 lg:h-120'>
          <ReactPlayer 
            width={'100%'}
            height={'100%'}
            src='https://www.youtube.com/watch?v=iaKnOVjvm0Y' />
        </div>
        <div className='text-zinc-600'>
          Dukungan sangat dibutuhkan - untuk pembangunan kembali rumah dan infrastruktur yang hancur, untuk menyediakan makanan dan air minum bersih, serta layanan medis dan pakaian. Jaringan listrik dan komunikasi juga perlu dipulihkan agar bantuan dapat dikoordinasikan dan masyarakat dapat kembali terhubung dengan keluarga mereka. Setiap bentuk bantuan berkontribusi dalam memberikan harapan, serta membantu masyarakat di sana kembali melangkah sedikit demi sedikit menuju kehidupan yang aman.
        </div>
        <div className='h-80 lg:h-120'>
          <ReactPlayer 
            width={'100%'}
            height={'100%'}
            src='https://www.youtube.com/watch?v=fSy8NIl5--c' />
        </div>
        { !user.id && <div className='flex flex-col gap-2 items-center text-center bg-zinc-50 py-4'>
          <div className='text-orange-500'>
            Login untuk memberikan Donasi
          </div>
          <GoogleLoginButton onSuccess={() => window.location.href = '/main'} />
        </div> }
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4'>
          <Button 
            href='/donatur'
            color='warning'
            className='whitespace-pre-wrap text-center !h-12 text-lg'
            as={Link}>
            Lihat Donasi Terkumpul
          </Button>
          <Button 
            href='/laporan'
            color='warning'
            className='whitespace-pre-wrap text-center !h-12 text-lg'
            as={Link}>
            Lihat Laporan Penggunaan Donasi
          </Button>
        </div>
      </Layout>
    )
  }
})
