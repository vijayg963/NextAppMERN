'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   confirm('hello');
  // }, []);
  const confirmMe = () => {
    // confirm('hello');
    // alert('dfdsfsf');
    alert(prompt('fsdfsf'));
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      About
      <button onClick={confirmMe}>click</button>
    </main>
  );
}
