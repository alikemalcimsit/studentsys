"use client";
import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, where } from 'firebase/firestore';
import { db } from '../firebase';
import { format } from 'date-fns';
import { FaTrash } from 'react-icons/fa';

type PlannerEntry = {
  id: string;
  date: string;
  examType: 'TYT' | 'AYT';
  subject: string;
  topic: string;
  questionsSolved: number | '';
  studyHours: number | '';
  notes: string;
};

type ExamType = 'TYT' | 'AYT';

const subjects: Record<ExamType, string[]> = {
  TYT: ['Türkçe', 'Matematik', 'Fen Bilimleri', 'Sosyal Bilgiler'],
  AYT: ['Fizik', 'Kimya', 'Biyoloji', 'Matematik']
};

const Planner: React.FC = () => {
  const [entries, setEntries] = useState<PlannerEntry[]>([]);
  const [newEntry, setNewEntry] = useState<Omit<PlannerEntry, 'id'>>({
    date: format(new Date(), 'yyyy-MM-dd'),
    examType: 'TYT',
    subject: '',
    topic: '',
    questionsSolved: '',
    studyHours: '',
    notes: ''
  });

  useEffect(() => {
    const fetchEntries = async () => {
      const today = format(new Date(), 'yyyy-MM-dd');
      const threeDaysAgo = format(new Date(new Date().setDate(new Date().getDate() - 2)), 'yyyy-MM-dd');
      const entriesQuery = query(
        collection(db, 'planner'),
        where('date', '>=', threeDaysAgo),
        where('date', '<=', today),
        orderBy('date', 'desc')
      );
      const querySnapshot = await getDocs(entriesQuery);
      const fetchedEntries: PlannerEntry[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as PlannerEntry));
      setEntries(fetchedEntries);
    };

    fetchEntries();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setNewEntry(prevState => ({
      ...prevState,
      [name]: name === 'questionsSolved' || name === 'studyHours'
        ? (value === '' ? '' : Number(value))
        : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const entryToSubmit = {
        ...newEntry,
        questionsSolved: newEntry.questionsSolved === '' ? 0 : newEntry.questionsSolved,
        studyHours: newEntry.studyHours === '' ? 0 : newEntry.studyHours
      };
      const docRef = await addDoc(collection(db, 'planner'), entryToSubmit);
      setEntries(prevEntries => [{ id: docRef.id, ...entryToSubmit }, ...prevEntries]);
      setNewEntry({
        date: format(new Date(), 'yyyy-MM-dd'),
        examType: 'TYT',
        subject: '',
        topic: '',
        questionsSolved: '',
        studyHours: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'planner', id));
      setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <div className='w-11/12 mx-auto py-12'>
      <h1 className='text-2xl font-bold mb-8 '>Günlük Planlayıcı</h1>
      <form onSubmit={handleSubmit} className='mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <label className='block text-gray-700 mb-2 font-semibold'>Tarih</label>
            <input
              type='date'
              name='date'
              value={newEntry.date}
              onChange={handleInputChange}
              className='border rounded-lg p-2 w-full'
            />
          </div>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <label className='block text-gray-700 mb-2 font-semibold'>Sınav Türü</label>
            <select
              name='examType'
              value={newEntry.examType}
              onChange={handleInputChange}
              className='border rounded-lg p-2 w-full'
            >
              <option value='TYT'>TYT</option>
              <option value='AYT'>AYT</option>
            </select>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <label className='block text-gray-700 mb-2 font-semibold'>Ders</label>
            <select
              name='subject'
              value={newEntry.subject}
              onChange={handleInputChange}
              className='border rounded-lg p-2 w-full'
            >
              <option value=''>Ders Seçin</option>
              {subjects[newEntry.examType].map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <label className='block text-gray-700 mb-2 font-semibold'>Konu</label>
            <input
              type='text'
              name='topic'
              value={newEntry.topic}
              onChange={handleInputChange}
              className='border rounded-lg p-2 w-full'
            />
          </div>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <label className='block text-gray-700 mb-2 font-semibold'>Çözülen Soru</label>
            <input
              type='number'
              name='questionsSolved'
              value={newEntry.questionsSolved}
              onChange={handleInputChange}
              className='border rounded-lg p-2 w-full'
              min={0}
            />
          </div>
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <label className='block text-gray-700 mb-2 font-semibold'>Çalışma Saati</label>
            <input
              type='number'
              name='studyHours'
              value={newEntry.studyHours}
              onChange={handleInputChange}
              className='border rounded-lg p-2 w-full'
              min={0}
            />
          </div>
          <div className='col-span-2 bg-gray-100 p-4 rounded-lg shadow-md'>
            <label className='block text-gray-700 mb-2 font-semibold'>Notlar</label>
            <textarea
              name='notes'
              value={newEntry.notes}
              onChange={handleInputChange}
              className='border rounded-lg p-2 w-full h-24'
            />
          </div>
        </div>
        <button
          type='submit'
          className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md'
        >
          Ekle
        </button>
      </form>
      <div>
        <h2 className='text-xl font-bold mb-4'>Son Güncellemeler</h2>
        <ul>
          {entries.map(entry => (
            <li key={entry.id} className='bg-gray-100 p-4 mb-2 rounded-lg shadow-md flex justify-between items-center'>
              <div>
                <div><strong>Tarih:</strong> {entry.date}</div>
                <div><strong>Sınav Türü:</strong> {entry.examType}</div>
                <div><strong>Ders:</strong> {entry.subject}</div>
                <div><strong>Konu:</strong> {entry.topic}</div>
                <div><strong>Çözülen Soru:</strong> {entry.questionsSolved}</div>
                <div><strong>Çalışma Saati:</strong> {entry.studyHours}</div>
                <div><strong>Notlar:</strong> {entry.notes}</div>
              </div>
              <button onClick={() => handleDelete(entry.id)} className='text-red-500 hover:text-red-700'>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Planner;
