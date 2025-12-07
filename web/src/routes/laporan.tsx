import { Layout } from '@/components/Layout';
import { createFileRoute } from '@tanstack/react-router'
import { Info } from 'lucide-react';

export const Route = createFileRoute('/laporan')({
  component() {
    return (
      <Layout className='flex flex-col gap-8 flex-1'>
        <div className='text-rose-500 flex items-center gap-2'>
          <Info size={18} />
          <div>
            Laporan akan diposting disini setiap kali donasi diberikan.
          </div>
        </div>
      </Layout>
    );
  }
})
