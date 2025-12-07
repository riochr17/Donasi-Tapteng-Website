import { Layout } from '@/components/Layout';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/laporan')({
  component() {
    return (
      <Layout className='flex flex-col gap-8'>
        TBD
      </Layout>
    );
  }
})
