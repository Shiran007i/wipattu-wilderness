'use client';

import React, { Suspense } from 'react';
import BookingSelection from '@/components/BookingSelection';
import { useSearchParams, useRouter } from 'next/navigation';
import { SelectedRoom } from '@/types';

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const adults = parseInt(searchParams.get('adults') || '1');
  const children = parseInt(searchParams.get('children') || '0');

  const handleUpdateParams = (newCheckIn: string, newCheckOut: string, newAdults: number, newChildren: number) => {
    const params = new URLSearchParams({
      checkIn: newCheckIn,
      checkOut: newCheckOut,
      adults: newAdults.toString(),
      children: newChildren.toString()
    });
    router.push(`/booking?${params.toString()}`);
  };

  const handleProceed = (rooms: SelectedRoom[], childAges: number[]) => {
    // We can pass selected rooms via session storage or URL (URL might be long but safer for "stateless" feeling)
    // For now, let's use session storage to avoid messy URLs for arrays
    sessionStorage.setItem('selectedRooms', JSON.stringify(rooms));
    sessionStorage.setItem('childAges', JSON.stringify(childAges));
    
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: adults.toString(),
      children: children.toString()
    });
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <BookingSelection 
      checkIn={checkIn}
      checkOut={checkOut}
      adults={adults}
      childrenCount={children}
      onUpdateParams={handleUpdateParams}
      onProceed={handleProceed}
    />
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#4b3427] flex items-center justify-center text-white">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
