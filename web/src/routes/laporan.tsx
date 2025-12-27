import { Layout } from '@/components/Layout';
import { IDRFormatter } from '@/utility';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router'
import { Info } from 'lucide-react';

export const Route = createFileRoute('/laporan')({
  component() {
    return (
      <Layout className='flex flex-col gap-8 flex-1'>
        <div className='flex flex-col gap-4'>
          <div className='text-blue-500 text-2xl'>
            Daftar Isi
          </div>
          <div className='flex flex-col gap-2'>
            <a href="#pembelian" className='text-blue-700 hover:underline cursor-pointer ml-1'>
              • Pembelian
            </a>
            <a href="#daftar-barang"className='text-blue-700 hover:underline cursor-pointer ml-1'>
              • Daftar Barang
            </a>
            <a className='text-blue-700 hover:underline cursor-pointer ml-1'>
              • Penyaluran ke Sipange & Hutanabolon
            </a>
          </div>
          <div id="pembelian" className='mt-8 text-blue-500 text-2xl'>
            Pembelian
          </div>
          <div className='flex flex-col gap-2 bg-blue-50 p-4 rounded-3xl'>
            <div className='text-center p-2 pt-0 font-extrabold text-blue-500'>
              Ringkasan
            </div>
            <Table>
              <TableHeader>
                <TableColumn>Barang/Jasa</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Ikan Asin</TableCell>
                  <TableCell>Rp 12.650.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Lakban</TableCell>
                  <TableCell>Rp 13.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>BBM</TableCell>
                  <TableCell>Rp 100.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Minyak Kayu Putih</TableCell>
                  <TableCell>Rp 144.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Sepatu Boot</TableCell>
                  <TableCell>Rp 400.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Alat-alat bangunan</TableCell>
                  <TableCell>Rp 935.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Sayuran</TableCell>
                  <TableCell>Rp 730.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Pembelian Grosir di Balige</TableCell>
                  <TableCell>Rp 17.145.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Pembelian Grosir di Pematang Siantar</TableCell>
                  <TableCell>Rp 1.212.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Lainnya tidak ada nota pembelian</TableCell>
                  <TableCell>Rp 277.000</TableCell>
                </TableRow>
                <TableRow key="1">
                  <TableCell>Lainnya biaya jasa</TableCell>
                  <TableCell>Rp 1.800.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className='bg-zinc-100 font-bold'>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 35.405.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              1. Ikan Asin
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img1.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Jenis Ikan Asin</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Teri 38kg + 37kg + 36kg + 32kg + 30kg</TableCell>
                  <TableCell>173 kg</TableCell>
                  <TableCell>Rp 55.000</TableCell>
                  <TableCell>Rp 9.515.000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Teri 22kg</TableCell>
                  <TableCell>22 kg</TableCell>
                  <TableCell>Rp 55.000</TableCell>
                  <TableCell>Rp 1.210.000</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Belah</TableCell>
                  <TableCell>35 kg</TableCell>
                  <TableCell>Rp 55.000</TableCell>
                  <TableCell>Rp 1.925.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 12.650.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              2. Lakban
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img2.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Lakban</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Rp 13.000</TableCell>
                  <TableCell>Rp 13.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 13.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              3. BBM
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img3.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Pertalite SPBU 14225324 Sibuluan Indah, Pandan</TableCell>
                  <TableCell>10 Liter</TableCell>
                  <TableCell>Rp 10.000</TableCell>
                  <TableCell>Rp 100.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 100.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              4. Minyak Kayu Putih
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img4.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Minyak Kayu Putih 15ml (isi 12 botol)</TableCell>
                  <TableCell>2 Lusin</TableCell>
                  <TableCell>Rp 72.000</TableCell>
                  <TableCell>Rp 144.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 144.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              5. Sepatu Boot
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img5.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Sepatu Boot</TableCell>
                  <TableCell>4 Pasang</TableCell>
                  <TableCell>Rp 100.000</TableCell>
                  <TableCell>Rp 400.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 400.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              6. Alat-alat bangunan
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img6.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Sorong/Beko/Angkong ARTCO</TableCell>
                  <TableCell>1 Buah</TableCell>
                  <TableCell>Rp 670.000</TableCell>
                  <TableCell>Rp 670.000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Martil</TableCell>
                  <TableCell>1 Buah</TableCell>
                  <TableCell>Rp 45.000</TableCell>
                  <TableCell>Rp 45.000</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Gergaji Kayu</TableCell>
                  <TableCell>1 Buah</TableCell>
                  <TableCell>Rp 95.000</TableCell>
                  <TableCell>Rp 95.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Gergaji Biasa</TableCell>
                  <TableCell>1 Buah</TableCell>
                  <TableCell>Rp 125.000</TableCell>
                  <TableCell>Rp 125.000</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 935.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              7. Sayuran
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img7.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Jipang</TableCell>
                  <TableCell>56 Buah</TableCell>
                  <TableCell>Rp 70.000</TableCell>
                  <TableCell>Rp 70.000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Sayur Putih</TableCell>
                  <TableCell>10 kg</TableCell>
                  <TableCell>Rp 6.000</TableCell>
                  <TableCell>Rp 60.000</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Tomat</TableCell>
                  <TableCell>20 kg</TableCell>
                  <TableCell>Rp 5.000</TableCell>
                  <TableCell>Rp 100.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Cabe Merah</TableCell>
                  <TableCell>10 kg</TableCell>
                  <TableCell>Rp 50.000</TableCell>
                  <TableCell>Rp 500.000</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 730.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              8. Pembelian Grosir di Balige
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img8.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Beras Balige (1 Sak = 30kg)</TableCell>
                  <TableCell>29 Sak</TableCell>
                  <TableCell>Rp 450.000</TableCell>
                  <TableCell>Rp 13.050.000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Minyak Makan Fortune 800 (1 dus = 24 bungkus)</TableCell>
                  <TableCell>6 dus</TableCell>
                  <TableCell>Rp 355.000</TableCell>
                  <TableCell>Rp 2.130.000</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Lavenda (1 renceng = 7 sachet)</TableCell>
                  <TableCell>60 renceng</TableCell>
                  <TableCell>Rp 5.000</TableCell>
                  <TableCell>Rp 300.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Kantongan</TableCell>
                  <TableCell>12 buah</TableCell>
                  <TableCell>Rp 9.000</TableCell>
                  <TableCell>Rp 108.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Komix</TableCell>
                  <TableCell>4 kotak</TableCell>
                  <TableCell>{ IDRFormatter.format(192000/4) }</TableCell>
                  <TableCell>Rp 192.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Procold</TableCell>
                  <TableCell>1 kotak</TableCell>
                  <TableCell>{ IDRFormatter.format(95000/1) }</TableCell>
                  <TableCell>Rp 95.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Minyak Kayu Putih 15ml</TableCell>
                  <TableCell>6 Lusin</TableCell>
                  <TableCell>{ IDRFormatter.format(468000/6) }</TableCell>
                  <TableCell>Rp 468.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Paracetamon 500mg</TableCell>
                  <TableCell>4 Kotak</TableCell>
                  <TableCell>{ IDRFormatter.format(140000/4) }</TableCell>
                  <TableCell>Rp 140.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Koyo Cabe</TableCell>
                  <TableCell>2 kotak</TableCell>
                  <TableCell>{ IDRFormatter.format(270000/2) }</TableCell>
                  <TableCell>Rp 270.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Hansaplast</TableCell>
                  <TableCell>2 kotak</TableCell>
                  <TableCell>{ IDRFormatter.format(66000/2) }</TableCell>
                  <TableCell>Rp 66.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Betadine</TableCell>
                  <TableCell>2 kotak</TableCell>
                  <TableCell>{ IDRFormatter.format(156000/2) }</TableCell>
                  <TableCell>Rp 156.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Laurier</TableCell>
                  <TableCell>6 bal (1 bal = 6 bungkus)</TableCell>
                  <TableCell>{ IDRFormatter.format(170000/6) }</TableCell>
                  <TableCell>Rp 170.000</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 17.145.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              9. Pembelian Grosir di Pematang Siantar
            </div>
            <img 
              className='w-full h-80 object-contain bg-zinc-100'
              src="/laporan/img9.jpeg" />
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Laurier</TableCell>
                  <TableCell>72 Bungkus</TableCell>
                  <TableCell>{ IDRFormatter.format(288000/72) }</TableCell>
                  <TableCell>Rp 288.000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Minyak Kayu Putih 15ml</TableCell>
                  <TableCell>2 Lusin</TableCell>
                  <TableCell>Rp 72.000</TableCell>
                  <TableCell>Rp 144.000</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Rokok Evol</TableCell>
                  <TableCell>6 Bungkus</TableCell>
                  <TableCell>Rp 44.000</TableCell>
                  <TableCell>Rp 264.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Wafer Nabati (1 dus = 40 bungkus)</TableCell>
                  <TableCell>2 dus</TableCell>
                  <TableCell>Rp 132.000</TableCell>
                  <TableCell>Rp 264.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Garam Halus</TableCell>
                  <TableCell>10 pax</TableCell>
                  <TableCell>Rp 18.000</TableCell>
                  <TableCell>Rp 180.000</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Permen Milkita (1 bungkus = 30 permen)</TableCell>
                  <TableCell>3 bungkus</TableCell>
                  <TableCell>Rp 24.000</TableCell>
                  <TableCell>Rp 72.000</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 1.212.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              10. Lainnya tidak ada nota pembelian
            </div>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Bawang Putih (asal: siborong-borong)</TableCell>
                  <TableCell>3 kg</TableCell>
                  <TableCell>Rp 33.333</TableCell>
                  <TableCell>Rp 100.000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Bawang Merah (asal: siborong-borong)</TableCell>
                  <TableCell>4 kg</TableCell>
                  <TableCell>Rp 44.250</TableCell>
                  <TableCell>Rp 177.000</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 277.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-extrabold text-xl'>
              11. Lainnya biaya jasa
            </div>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Barang</TableColumn>
                <TableColumn>Kuantitas</TableColumn>
                <TableColumn>Harga Satuan</TableColumn>
                <TableColumn>Sub Total</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Jasa relawan</TableCell>
                  <TableCell>3 orang</TableCell>
                  <TableCell>Rp 50.000</TableCell>
                  <TableCell>Rp 150.000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Transportasi sortir & drop off dari titik kumpul pandan ke sipange & hutanabolon</TableCell>
                  <TableCell>2 tujuan</TableCell>
                  <TableCell>Rp 300.000</TableCell>
                  <TableCell>Rp 600.000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Biaya Pickup antar seluruh barang dari pematang siantar + balige + siborong-borong ke titik kumpul pandan</TableCell>
                  <TableCell>1 pax</TableCell>
                  <TableCell>Rp 1.050.000</TableCell>
                  <TableCell>Rp 1.050.000</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell className='bg-zinc-100 font-bold' colSpan={3}>Total</TableCell>
                  <TableCell className='bg-zinc-100 font-bold'>Rp 1.800.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div id="daftar-barang" className='mt-8 text-blue-500 text-2xl'>
            Daftar Barang
          </div>
          <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <img className='w-full h-90 object-contain bg-zinc-100' src={'/laporan/barang/imgb1.jpeg'} />
              <div>
                Ikan Asin total 230kg
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <img className='w-full h-90 object-contain bg-zinc-100' src={'/laporan/barang/imgb2.jpeg'} />
              <div>
                Barang sampai di titik kumpul pandan
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <img className='w-full h-90 object-contain bg-zinc-100' src={'/laporan/barang/imgb3.jpeg'} />
              <div>
                Obat-obatan generic
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <video controls className='w-full h-90 object-contain bg-black'>
                <source src={'/laporan/barang/vidb1.mp4'} />
              </video>
              <div>
                Barang tiba dari balige ke titik kumpul
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <video controls className='w-full h-90 object-contain bg-black'>
                <source src={'/laporan/barang/vidb2.mp4'} />
              </video>
              <div>
                Pembelian barang dari grosir di pematang siantar
              </div>
            </div>
          </div>
          <div id="daftar-barang" className='mt-8 text-blue-500 text-2xl'>
            Penyaluran ke Sipange & Hutanabolon
          </div>
          <div>
            TBD
          </div>
        </div>
      </Layout>
    );
  }
})
