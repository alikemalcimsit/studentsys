"use client";
import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

type Props = {};
interface INetHesaplaFunc {
  (dogru: number, yanlis: number, bos: number): number;
}
interface IDeneme {
  id?: string;  // ID opsiyonel hale getirildi
  yayin: string | null,
  tarih: string | null,
  sure: string | null,
  siralama: string | null,
  sosyalD: number | null,
  sosyalY: number | null,
  sosyalB: number | null,
  sosyalNet: number | null,
  turkceD: number | null,
  turkceY: number | null,
  turkceB: number | null,
  turkceNet: number | null,
  matD: number | null,
  matY: number | null,
  matB: number | null,
  matNet: number | null,
  fenD: number | null,
  fenY: number | null,
  fenB: number | null,
  fenNet: number | null
}

const Try = (props: Props) => {
  const [denemeler, setDenemeler] = useState<IDeneme[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<number | null>(null);
  const [yayin, setYayin] = useState<string | null>("");
  const [tarih, setTarih] = useState<string | null>("");
  const [sure, setSure] = useState<string | null>("");
  const [siralama, setSiralama] = useState<string | null>("");
  const [sosyalD, setSosyalD] = useState<number | null>(0);
  const [sosyalY, setSosyalY] = useState<number | null>(0);
  const [sosyalB, setSosyalB] = useState<number | null>(0);
  const [turkceD, setTurkceD] = useState<number | null>(0);
  const [turkceY, setTurkceY] = useState<number | null>(0);
  const [turkceB, setTurkceB] = useState<number | null>(0);
  const [matD, setMatD] = useState<number | null>(0);
  const [matY, setMatY] = useState<number | null>(0);
  const [matB, setMatB] = useState<number | null>(0);
  const [fenD, setFenD] = useState<number | null>(0);
  const [fenY, setFenY] = useState<number | null>(0);
  const [fenB, setFenB] = useState<number | null>(0);
  const [sosyalNet, setSosyalNet] = useState<number | null>(0);
  const [turkceNet, setTurkceNet] = useState<number | null>(0);
  const [matNet, setMatNet] = useState<number | null>(0);
  const [fenNet, setFenNet] = useState<number | null>(0);

  const getDeneme = async () => {
    const denemeCollection = collection(db, "deneme");
    const q = query(denemeCollection, orderBy("tarih", "desc"));
    const data = await getDocs(q);
    const denemeList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }) as IDeneme);
    setDenemeler(denemeList);
  }
  const netHesapla: INetHesaplaFunc = (dogru, yanlis, bos) => {
    if (typeof dogru === 'number' && typeof yanlis === 'number' && typeof bos === 'number') {
      const sonuc = dogru - (yanlis / 4);
      return sonuc;
    }
    return 0;
  }

  useEffect(() => {
    getDeneme();
  }, []);

  useEffect(() => {
    setSosyalNet(netHesapla(sosyalD || 0, sosyalY || 0, sosyalB || 0));
  }, [sosyalD, sosyalY, sosyalB]);

  useEffect(() => {
    setTurkceNet(netHesapla(turkceD || 0, turkceY || 0, turkceB || 0));
  }, [turkceD, turkceY, turkceB]);

  useEffect(() => {
    setMatNet(netHesapla(matD || 0, matY || 0, matB || 0));
  }, [matD, matY, matB]);

  useEffect(() => {
    setFenNet(netHesapla(fenD || 0, fenY || 0, fenB || 0));
  }, [fenD, fenY, fenB]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const DenemeData: Omit<IDeneme, 'id'> = {  // 'id' alanı hariç tutuldu
      yayin,
      tarih,
      sure,
      siralama,
      sosyalD,
      sosyalY,
      sosyalB,
      sosyalNet,
      turkceD,
      turkceY,
      turkceB,
      turkceNet,
      matD,
      matY,
      matB,
      matNet,
      fenD,
      fenY,
      fenB,
      fenNet,
    };
  
    try {
      await postDeneme(DenemeData);
      setOpen(false);
      getDeneme();
    } catch (error) {
      console.error("Error adding deneme:", error);
    }
  }
  const deleteDeneme = async (id: string) => {
    const denemeDocRef = doc(db, "deneme", id);
    try {
      await deleteDoc(denemeDocRef);
      console.log("Deneme deleted successfully");
      alert("deneme silindi")
      getDeneme()
    } catch (error) {
      console.error("Error deleting deneme:", error);
      throw error;
    }
  }

  const postDeneme = async (DenemeData: Omit<IDeneme, 'id'>) => {
    const denemeCollection = collection(db, "deneme");
    try {
      const docRef = await addDoc(denemeCollection, DenemeData);
      console.log("Deneme added successfully with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding deneme:", error);
      throw error;
    }
  }
  

  return (
    <div className='w-11/12 m-auto py-10'>
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-bold '>TYT-AYT Deneme Analizi</p>
        <button onClick={() => setOpen(true)} className='bg-blue-600 text-white py-2 flex items-center justify-between gap-x-2 px-4 rounded-xl'>
          <FaPlus />
          Yeni Ekle
        </button>
      </div>

      {open && (
        <div className='fixed bg-gray-500 bg-opacity-50 inset-0 flex items-center justify-center'>
          <form className='bg-white p-6 rounded-xl shadow-lg w-3/4 md:w-1/2 space-y-3'>
            <div className='flex flex-col items-center'>
              <input className='w-full p-2 mb-2 border rounded' placeholder='Yayın' type="text" onChange={(e) => setYayin(e.target.value)} />
              <input className='w-full p-2 mb-2 border rounded' placeholder='Tarih' type="date" onChange={(e) => setTarih(e.target.value)} />
              <input className='w-full p-2 mb-2 border rounded' placeholder='Süre' type="text" onChange={(e) => setSure(e.target.value)} />
              <input className='w-full p-2 mb-2 border rounded' placeholder='Sıralama' type="text" onChange={(e) => setSiralama(e.target.value)} />
            </div>

            <div>
              <div className='mb-2'>
                <span className='block mb-2'>Sosyal Bilimler</span>
                <div className='flex items-center justify-between gap-x-2'>
                  <input className='w-1/4 p-2 border rounded' placeholder='Doğru' type="number" onChange={(e) => setSosyalD(Number(e.target.value))} />
                  <input className='w-1/4 p-2 border rounded' placeholder='Yanlış' type="number" onChange={(e) => setSosyalY(Number(e.target.value))} />
                  <input className='w-1/4 p-2 border rounded' placeholder='Boş' type="number" onChange={(e) => setSosyalB(Number(e.target.value))} />
                  <input value={sosyalNet?.toString()} className='w-1/4 p-2 border rounded' placeholder='Net' readOnly />
                </div>
              </div>
              <div className='mb-2'>
                <span className='block mb-2'>Türkçe</span>
                <div className='flex items-center justify-between gap-x-2'>
                  <input className='w-1/4 p-2 border rounded' placeholder='Doğru' type="number" onChange={(e) => setTurkceD(Number(e.target.value))} />
                  <input className='w-1/4 p-2 border rounded' placeholder='Yanlış' type="number" onChange={(e) => setTurkceY(Number(e.target.value))} />
                  <input className='w-1/4 p-2 border rounded' placeholder='Boş' type="number" onChange={(e) => setTurkceB(Number(e.target.value))} />
                  <input value={turkceNet?.toString()} className='w-1/4 p-2 border rounded' placeholder='Net' readOnly />
                </div>
              </div>
              <div className='mb-2'>
                <span className='block mb-2'>Matematik</span>
                <div className='flex items-center justify-between gap-x-2'>
                  <input className='w-1/4 p-2 border rounded' placeholder='Doğru' type="number" onChange={(e) => setMatD(Number(e.target.value))} />
                  <input className='w-1/4 p-2 border rounded' placeholder='Yanlış' type="number" onChange={(e) => setMatY(Number(e.target.value))} />
                  <input className='w-1/4 p-2 border rounded' placeholder='Boş' type="number" onChange={(e) => setMatB(Number(e.target.value))} />
                  <input value={matNet?.toString()} className='w-1/4 p-2 border rounded' placeholder='Net' readOnly />
                </div>
              </div>
              <div className='mb-2'>
                <span className='block mb-2'>Fen Bilgisi</span>
                <div className='flex items-center justify-between gap-x-2'>
                  <input className='w-1/4 p-2 border rounded' placeholder='Doğru' type="number" onChange={(e) => setFenD(Number(e.target.value))} />
                  <input className='w-1/4 p-2 border rounded' placeholder='Yanlış' type="number" onChange={(e) => setFenY(Number(e.target.value))} />
                  <input className='w-1/4 p-2 border rounded' placeholder='Boş' type="number" onChange={(e) => setFenB(Number(e.target.value))} />
                  <input value={fenNet?.toString()} className='w-1/4 p-2 border rounded' placeholder='Net' readOnly />
                </div>
              </div>
            </div>

            <button type="submit" onClick={handleSubmit} className='w-full bg-blue-600 text-white py-2 rounded-xl'>Kaydet</button>
            <button onClick={() => setOpen(false)} className='w-full mt-2 bg-[#FF6D7A] text-white py-2 rounded-xl'>Kapat</button>
          </form>
        </div>
      )}

      <div className='mt-10 grid grid-cols-3  gap-5 place-content-center place-items-center'>
        {denemeler.map((deneme, index) => (
<div>
{open2 === index && (
              <div className='fixed bg-gray-500 bg-opacity-50 inset-0 flex flex-col items-center justify-center'>
                
                <div className='bg-white p-6 rounded-xl shadow-lg w-3/4 md:w-1/2 space-y-4'>
                <div className='mb-4'>
                  <span className='block mb-2'>Sosyal Bilimler</span>
                  <div className='flex items-center justify-between'>
                    <p className='w-1/4'>Doğru: {deneme.sosyalD}</p>
                    <p className='w-1/4'>Yanlış: {deneme.sosyalY}</p>
                    <p className='w-1/4'>Boş: {deneme.sosyalB}</p>
                    <p className='w-1/4'>Net: {deneme.sosyalNet}</p>
                  </div>
                </div>
                <div className='mb-4'>
                  <span className='block mb-2 border-t-2 '>Türkçe</span>
                  <div className='flex items-center justify-between'>
                    <p className='w-1/4'>Doğru: {deneme.turkceD}</p>
                    <p className='w-1/4'>Yanlış: {deneme.turkceY}</p>
                    <p className='w-1/4'>Boş: {deneme.turkceB}</p>
                    <p className='w-1/4'>Net: {deneme.turkceNet}</p>
                  </div>
                </div>
                <div className='mb-4 border-t-2'>
                  <span className='block mb-2'>Matematik</span>
                  <div className='flex items-center justify-between'>
                    <p className='w-1/4'>Doğru: {deneme.matD}</p>
                    <p className='w-1/4'>Yanlış: {deneme.matY}</p>
                    <p className='w-1/4'>Boş: {deneme.matB}</p>
                    <p className='w-1/4'>Net: {deneme.matNet}</p>
                  </div>
                </div>
                <div className='mb-4 border-t-2'>
                  <span className='block mb-2'>Fen Bilgisi</span>
                  <div className='flex items-center justify-between'>
                    <p className='w-1/4'>Doğru: {deneme.fenD}</p>
                    <p className='w-1/4'>Yanlış: {deneme.fenY}</p>
                    <p className='w-1/4'>Boş: {deneme.fenB}</p>
                    <p className='w-1/4'>Net: {deneme.fenNet}</p>
                  </div>
                </div>
               
                <button onClick={() => setOpen2(null)} className=' bg-[#FF6D7A] w-full mt-5 py-3 text-white  px-4 rounded-xl'>Kapat</button>
                <button onClick={() => deleteDeneme(deneme.id!)} className=' bg-[#FF6D7A] w-full mt-5 py-3 text-white  px-4 rounded-xl'>Sil</button>

              </div>
              
              </div>
            )}


         <div key={index} className='bg-neutral-300 rounded-xl shadow-xl   text-black '>
         <div className='flex items-center p-3 px-5 mb-6 rounded-t-xl bg-blue-600 text-white justify-between'>
           <span className='text-base'>{deneme.yayin}</span>
           <span>{deneme.tarih}</span>
         
         </div>
         <div className='flex flex-col'>
         
         <div className='flex items-center pb-2 px-6   gap-3 justify-center'>
         <div className='bg-[#00C399] text-white flex flex-col items-center justify-center py-2 rounded-xl  px-3'>
           <span className=''>Doğru</span>
         <span className='font-bold'>{deneme.fenD!  + deneme.matD!  +deneme.sosyalD! + deneme.turkceD! }
         </span>
         </div>
         <div className='bg-[#FF6D7A]  text-white flex flex-col items-center justify-center py-2 rounded-xl  px-3'>
           <span>Yanlış</span>
         <span className='font-bold'>{deneme.fenY!  + deneme.matY!  +deneme.sosyalY! + deneme.turkceY! }
         </span>
         </div>
         <div className='bg-[#8226FD] text-white flex flex-col items-center justify-center py-2 rounded-xl  px-3'>
           <span>Boş</span>
         <span className='font-bold'>{deneme.fenB!  + deneme.matB!  +deneme.sosyalB! + deneme.turkceB! }
         </span>
         </div>
         
         <div className='flex bg-blue-600 p-7 w-28 rounded-xl text-white items-center justify-center flex-col'>
           <span className='text-xl'>Net</span>
         <span className='text-xl font-bold'>{deneme.fenNet!  + deneme.matNet!  +deneme.sosyalNet! + deneme.turkceNet! }</span>
         </div>
         </div>
         <div className='flex items-center justify-center gap-x-3 px-4 pb-10'>
         <div className='bg-white flex flex-col items-center justify-center py-2 rounded-xl  px-3'>
           <span>Sınav Süresi</span>
         <span className='font-bold'>{deneme.sure }
         </span>
         </div>
         <div className='bg-white flex flex-col items-center justify-center py-2 rounded-xl  px-3'>
           <span>Sıralama</span>
         <span className='font-bold'>{deneme.siralama }
         </span>
         </div>
         
         <button onClick={() => setOpen2(open2 === index ? null : index)} className='bg-[#FFC13C] border  shadow-md text-white text-lg py-2 px-3 rounded-xl'>Detay</button>
         </div>
         </div>
         
         
         </div>
         
         
         
                 
         
         </div>
          
        ))}
      </div>
    </div>
  );
};

export default Try;
