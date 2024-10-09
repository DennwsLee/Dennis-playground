"use client"
import Timeline from '@/components/Timeline';
import MenuBar from '@/components/MenuBar';
import TimelineNavigation from '@/components/TimelineNavigation';
import { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < 3 ? prev + 1 : prev)); // Assuming 4 items in the timeline
  };

  return (
    <div className="h-screen w-full bg-black text-white overflow-hidden flex flex-col">
      <MenuBar />
      <div className="flex-grow relative">
        <Timeline currentIndex={currentIndex} />
        <TimelineNavigation onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
}