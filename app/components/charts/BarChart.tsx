import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js için gerekli modülleri kaydedin
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  labels: string[];
  data: number[];
  title: string;  // Dinamik başlık
}

const BarChart: React.FC<BarChartProps> = ({ labels, data, title }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,  // Dinamik başlık
        data,
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Çubukların arka plan rengi
        borderColor: 'rgba(54, 162, 235, 1)', // Çubukların kenar rengi
        borderRadius: 12,  // Çubukların köşe yarıçapı
        borderSkipped: false, // Çubukların sınırlarının tamamını göstermek için
        barThickness: 30, // Çubukların kalınlığı
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Grafik boyutunun kutu boyutuna uyumlu olmasını sağlar
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
            weight: 'bold' as 'bold', // 'bold' türünü açıkça belirtin
          },
          color: '#333', // Legend etiketlerinin rengi
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
        backgroundColor: '#333', // Tooltip arka plan rengi
        titleColor: '#fff', // Tooltip başlık rengi
        bodyColor: '#fff', // Tooltip içerik rengi
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // X ekseninde grid çizgilerini gizle
        },
        ticks: {
          color: '#555', // X eksenindeki etiketlerin rengi
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Y eksenindeki grid çizgilerinin rengi
        },
        ticks: {
          color: '#555', // Y eksenindeki etiketlerin rengi
          font: {
            size: 12,
          },
        },
      },
    },
    animation: {
      duration: 1000, // Animasyon süresi
      easing: 'easeOutBounce' as any, // Animasyon geçiş türü
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
