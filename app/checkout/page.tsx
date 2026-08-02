'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Checkout from '@/components/Checkout';
import { useSearchParams, useRouter } from 'next/navigation';
import { SelectedRoom } from '@/types';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [rooms, setRooms] = useState<SelectedRoom[]>([]);
  const [childAges, setChildAges] = useState<number[]>([]);

  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const adults = parseInt(searchParams.get('adults') || '1');
  const children = parseInt(searchParams.get('children') || '0');

  useEffect(() => {
    const savedRooms = sessionStorage.getItem('selectedRooms');
    const savedChildAges = sessionStorage.getItem('childAges');
    if (savedRooms) {
      setRooms(JSON.parse(savedRooms));
      if (savedChildAges) {
        setChildAges(JSON.parse(savedChildAges));
      }
    } else {
      // If no rooms selected, redirect back to booking
      router.push('/booking');
    }
  }, [router]);

  return (
    <Checkout 
      checkIn={checkIn}
      checkOut={checkOut}
      adults={adults}
      childrenCount={children}
      rooms={rooms}
      childAges={childAges}
      onBack={() => router.back()}
    />
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#4b3427] flex items-center justify-center text-white">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
