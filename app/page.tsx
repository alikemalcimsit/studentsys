"use client";
import React, { useEffect, useState } from 'react';
import BarChart from './components/charts/BarChart';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebase';
import TestScoreChart from './components/charts/TestScoreChart';
import Deneme from "./lessonmeter/deneme"
// Ay isimleri
const monthNames = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

const Home: React.FC = () => {
return(
  <div><Deneme></Deneme></div>
)
};

export default Home;
