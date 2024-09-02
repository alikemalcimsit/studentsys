import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { Line } from 'react-chartjs-2';
import { db } from '../../firebase';
import 'chart.js/auto';

const subjects = [
  { label: 'Türkçe', value: 'turkceNet' },
  { label: 'Matematik', value: 'matNet' },
  { label: 'Fen Bilgisi', value: 'fenNet' },
  { label: 'Sosyal Bilgiler', value: 'sosyalNet' }
];

const TestScoreChart: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>(subjects[0].value);
  const [chartData, setChartData] = useState<any>({ labels: [], datasets: [] });

  const fetchTestData = async () => {
    // Verileri tarihe göre artan sırada sıralayıp son 7 denemeyi alıyoruz
    const q = query(collection(db, 'deneme'), orderBy('tarih', 'asc'), limit(7));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => doc.data());
    setData(data);
  };

  useEffect(() => {
    fetchTestData();
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      // Veri yoksa boş grafik oluşturma
      setChartData({
        labels: ['No Data'],
        datasets: [
          {
            label: 'Netler',
            data: [0],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: 2,
            fill: true
          }
        ]
      });
      return;
    }

    // Verileri tarih sırasına göre düzenleme
    const sortedData = [...data].sort((a, b) => new Date(a.tarih).getTime() - new Date(b.tarih).getTime());

    const labels = sortedData.map((entry: any) => entry.tarih);
    const scores = sortedData.map((entry: any) => entry[selectedSubject] || 0);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Netler',
          data: scores,
          borderColor: '#007bff',
          backgroundColor: 'rgba(0, 123, 255, 0.1)',
          borderWidth: 2,
          fill: true
        }
      ]
    });
  }, [data, selectedSubject]);

  return (
    <div className="w-full m-auto">
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <div className='flex items-center justify-between'>
          <h2 className="text-xl font-semibold mb-4">Deneme Netleri</h2>
          <div className="mb-4">
            <select
              id="subject-select"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              {subjects.map(subject => (
                <option key={subject.value} value={subject.value}>{subject.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-60 w-full">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default TestScoreChart;
