import { Layout } from '@/components/Layout';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/zzz/main/')({
  component() {
    return (
      <Layout className='flex flex-col gap-4'>
      </Layout>
    );
  }
})
