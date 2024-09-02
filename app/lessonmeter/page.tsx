"use client"
import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { AiFillDelete } from 'react-icons/ai';

// Topic interface to define the structure of each topic
interface Topic {
  [topicName: string]: boolean;
}

// Subject interface to define the structure of each subject including its topics
interface Subject {
  id: string;
  name: string;
  topics: Topic;
}
const fixedSubjects = {
  tyt: ['Türkçe', 'Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'Tarih', 'Coğrafya', 'Felsefe', 'Din',"Geometri"],
  ayt: ['Matematik', 'Biyoloji', 'Kimya', 'Fizik',"Geometri"]
};

// Geri kalan kod değişmeden kalacak


const LessonMeter: React.FC = () => {
  const [tytSubjects, setTytSubjects] = useState<Subject[]>([]);
  const [aytSubjects, setAytSubjects] = useState<Subject[]>([]);
  const [selectedExamType, setSelectedExamType] = useState<'tyt' | 'ayt'>('tyt');
  const [newTopicName, setNewTopicName] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);

  const getLessons = async (examType: string) => {
    const lessonCollection = collection(db, examType);
    const data = await getDocs(lessonCollection);
    const subjects: Subject[] = data.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name,
      topics: doc.data().topics,
    }));
    return subjects;
  };

  const addSubjectIfNotExists = async (examType: string, subjectName: string) => {
    const lessonCollection = collection(db, examType);
    const existingSubjects = await getDocs(lessonCollection);
    const subjectExists = existingSubjects.docs.some(doc => doc.data().name === subjectName);

    if (!subjectExists) {
      const newSubject: Subject = {
        id: subjectName,
        name: subjectName,
        topics: {}
      };
      await setDoc(doc(db, examType, subjectName), newSubject);
    }
  };

  const initializeSubjects = async () => {
    const examType = selectedExamType;
    const fixedSubjectsForExam = fixedSubjects[examType];

    for (const subjectName of fixedSubjectsForExam) {
      await addSubjectIfNotExists(examType, subjectName);
    }

    const updatedSubjects = await getLessons(examType);
    if (examType === 'tyt') setTytSubjects(updatedSubjects);
    else setAytSubjects(updatedSubjects);
  };

  const updateTopicStatus = async (examType: string, subjectId: string, topicName: string, isCompleted: boolean) => {
    const subjectDoc = doc(db, examType, subjectId);
    const subjectData = (await getDoc(subjectDoc)).data() as Subject;
    subjectData.topics[topicName] = isCompleted;
    await updateDoc(subjectDoc, { topics: subjectData.topics });
  };
  const addTopicToSubject = async () => {
    if (selectedSubjectId && newTopicName.trim()) {
      const subjectDoc = doc(db, selectedExamType, selectedSubjectId);
      const subjectData = (await getDoc(subjectDoc)).data() as Subject;
      
      // Yeni eklenen konuyu en sona ekleyin
      const updatedTopics = { ...subjectData.topics, [newTopicName.trim()]: false };
      subjectData.topics = updatedTopics;
      
      await updateDoc(subjectDoc, { topics: subjectData.topics });
      
      setNewTopicName('');
      setSelectedSubjectId(null);
      
      // Refresh subjects
      const updatedSubjects = await getLessons(selectedExamType);
      if (selectedExamType === 'tyt') setTytSubjects(updatedSubjects);
      else setAytSubjects(updatedSubjects);
      
      alert('Konu başarıyla eklendi!');
    } else {
      alert('Lütfen geçerli bir konu adı girin.');
    }
  };
  
  useEffect(() => {
    initializeSubjects();
  }, [selectedExamType]);

  const handleTopicClick = (examType: string, subjectId: string, topicName: string, isCompleted: boolean) => {
    updateTopicStatus(examType, subjectId, topicName, isCompleted);
    if (examType === 'tyt') {
      setTytSubjects(prevSubjects =>
        prevSubjects.map(subject =>
          subject.id === subjectId
            ? {
                ...subject,
                topics: {
                  ...subject.topics,
                  [topicName]: isCompleted,
                },
              }
            : subject
        )
      );
    } else {
      setAytSubjects(prevSubjects =>
        prevSubjects.map(subject =>
          subject.id === subjectId
            ? {
                ...subject,
                topics: {
                  ...subject.topics,
                  [topicName]: isCompleted,
                },
              }
            : subject
        )
      );
    }
  };

  const handleTopicDelete = async (examType: string, subjectId: string, topicName: string) => {
    if (window.confirm('Bu konuyu silmek istediğinizden emin misiniz?')) {
      const subjectDoc = doc(db, examType, subjectId);
      const subjectData = (await getDoc(subjectDoc)).data() as Subject;
      delete subjectData.topics[topicName];
      await updateDoc(subjectDoc, { topics: subjectData.topics });

      // Refresh subjects
      const updatedSubjects = await getLessons(examType);
      if (examType === 'tyt') setTytSubjects(updatedSubjects);
      else setAytSubjects(updatedSubjects);
    }
  };

  const renderSubjects = (subjects: Subject[], examType: string) => {
    const rows = [];
    for (let i = 0; i < subjects.length; i += 2) {
      rows.push(
        <div className='flex mb-6' key={i}>
          {subjects[i] && (
            <div className='w-1/2 pr-2'>
              <h3 className='text-lg font-medium mb-2'>{subjects[i].name}</h3>
              <table className='min-w-full bg-white shadow-lg rounded-lg overflow-hidden'>
                <thead className='bg-gray-200'>
                  <tr>
                    <th className='py-2 px-4 border-b border-gray-300 text-left'>Konu</th>
                    <th className='py-2 px-4 border-b border-gray-300 text-left'>Durum</th>
                    <th className='py-2 px-4 border-b border-gray-300 text-left'>Sil</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(subjects[i].topics).map(([topicName, isCompleted]) => (
                    <tr
                      key={topicName}
                      onClick={() => handleTopicClick(examType, subjects[i].id, topicName, !isCompleted)}
                      className={`cursor-pointer ${isCompleted ? 'bg-green-100 text-green-600 line-through' : 'bg-red-100 text-red-600'}`}
                    >
                      <td className='py-2 px-4 border-b border-gray-300'>{topicName}</td>
                      <td className='py-2 px-4 border-b border-gray-300'>{isCompleted ? 'Tamamlandı' : 'Tamamlanmadı'}</td>
                      <td className='py-2 px-4 border-b border-gray-300'>
                        <AiFillDelete
                          className='text-red-600 cursor-pointer'
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTopicDelete(examType, subjects[i].id, topicName);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {subjects[i + 1] && (
            <div className='w-1/2 pl-2'>
              <h3 className='text-lg font-medium mb-2'>{subjects[i + 1].name}</h3>
              <table className='min-w-full bg-white shadow-lg rounded-lg overflow-hidden'>
                <thead className='bg-gray-200'>
                  <tr>
                    <th className='py-2 px-4 border-b border-gray-300 text-left'>Konu</th>
                    <th className='py-2 px-4 border-b border-gray-300 text-left'>Durum</th>
                    <th className='py-2 px-4 border-b border-gray-300 text-left'>Sil</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(subjects[i + 1].topics).map(([topicName, isCompleted]) => (
                    <tr
                      key={topicName}
                      onClick={() => handleTopicClick(examType, subjects[i + 1].id, topicName, !isCompleted)}
                      className={`cursor-pointer ${isCompleted ? 'bg-green-100 text-green-600 line-through' : 'bg-red-100 text-red-600'}`}
                    >
                      <td className='py-2 px-4 border-b border-gray-300'>{topicName}</td>
                      <td className='py-2 px-4 border-b border-gray-300'>{isCompleted ? 'Tamamlandı' : 'Tamamlanmadı'}</td>
                      <td className='py-2 px-4 border-b border-gray-300'>
                        <AiFillDelete
                          className='text-red-600 cursor-pointer'
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTopicDelete(examType, subjects[i + 1].id, topicName);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className='w-11/12 py-10 m-auto'>
      <h1 className='text-2xl font-bold mb-6'>Konumetre</h1>
      <div className='mb-6'>
        <button
          className={`px-4 py-2 mr-2 rounded-xl ${selectedExamType === 'tyt' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedExamType('tyt')}
        >
          TYT
        </button>
        <button
          className={`px-4 py-2 rounded-xl ${selectedExamType === 'ayt' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedExamType('ayt')}
        >
          AYT
        </button>
      </div>
      <div className='mb-6'>
        <select
          className='border rounded-lg p-2 mr-2'
          value={selectedSubjectId || ''}
          onChange={(e) => setSelectedSubjectId(e.target.value)}
        >
          <option value=''>Konu Eklemek İçin Ders Seçin</option>
          {fixedSubjects[selectedExamType].map(subjectName => (
            <option key={subjectName} value={subjectName}>{subjectName}</option>
          ))}
        </select>
        <input
          className='border rounded-lg p-2 mr-2'
          type='text'
          value={newTopicName}
          onChange={(e) => setNewTopicName(e.target.value)}
          placeholder='Yeni konu adı'
        />
        <button
          className='bg-[#00C399] text-white px-4 py-2 rounded-lg'
          onClick={addTopicToSubject}
        >
          Konu Ekle
        </button>
      </div>
      {selectedExamType === 'tyt' ? renderSubjects(tytSubjects, 'tyt') : renderSubjects(aytSubjects, 'ayt')}
    </div>
  );
};

export default LessonMeter;
