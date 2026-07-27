
import React, { useState, useMemo } from 'react';
import AvailabilityBar from './AvailabilityBar';
import { SelectedRoom } from '../types';

interface BookingSelectionProps {
  checkIn: string;
  checkOut: string;
  adults: number;
  childrenCount: number;
  onUpdateParams: (checkIn: string, checkOut: string, adults: number, children: number) => void;
  onProceed: (rooms: SelectedRoom[]) => void;
}

const PLANS = [
  { id: 'plan1', name: 'Breakfast Included', nightlyPrice: 364 },
  { id: 'plan2', name: 'Breakfast & Lunch Included', nightlyPrice: 394 },
  { id: 'plan3', name: 'Full Board (B, L, D)', nightlyPrice: 422 },
  { id: 'plan4', name: 'All-inclusive Luxury', nightlyPrice: 754 },
];

const BookingSelection: React.FC<BookingSelectionProps> = ({ 
  checkIn, 
  checkOut, 
  adults, 
  childrenCount,
  onUpdateParams,
  onProceed
}) => {
  const [roomCounts, setRoomCounts] = useState<{ [key: string]: number }>({
    'plan1': 0, 'plan2': 0, 'plan3': 0, 'plan4': 0,
  });

  const handleRoomChange = (plan: string, val: number) => setRoomCounts(prev => ({ ...prev, [plan]: Math.max(0, val) }));
  const totalRoomsSelected = Object.values(roomCounts).reduce((acc: number, curr: number) => acc + curr, 0);
  
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 1;
    const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
    const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    const n = Math.ceil((utc2 - utc1) / (1000 * 60 * 60 * 24));
    return n > 0 ? n : 1;
  };
  
  const nights = calculateNights();
  
  const totalStayPrice = useMemo(() => {
    return PLANS.reduce((acc, plan) => {
      return acc + (plan.nightlyPrice * nights * roomCounts[plan.id]);
    }, 0);
  }, [roomCounts, nights]);

  // Capacity validation: Max 2 Adults and 1 Child per room
  const maxAdultCapacity = totalRoomsSelected * 2;
  const maxChildCapacity = totalRoomsSelected * 1;
  
  const isAdultCapacitySufficient = maxAdultCapacity >= adults;
  const isChildCapacitySufficient = maxChildCapacity >= childrenCount;
  const isCapacitySufficient = isAdultCapacitySufficient && isChildCapacitySufficient;
  
  const showWarning = totalRoomsSelected > 0 && !isCapacitySufficient;

  const handleProceedClick = () => {
    // Pass the NIGHTLY price as 'price', Checkout will multiply by nights
    const selectedRooms: SelectedRoom[] = PLANS.map(p => ({
      planId: p.id, 
      name: p.name, 
      price: p.nightlyPrice, 
      count: roomCounts[p.id]
    })).filter(r => r.count > 0);
    onProceed(selectedRooms);
  };

  const RoomInput = ({ value, onChange }: { value: number, onChange: (val: number) => void }) => (
    <div className="flex items-center gap-3">
      <button 
        onClick={() => onChange(value - 1)}
        className="w-8 h-8 rounded-full border border-[#8d5527]/20 flex items-center justify-center text-[#8d5527] hover:bg-[#8d5527] hover:text-white transition-colors"
      >
        <i className="fa-solid fa-minus text-[10px]"></i>
      </button>
      <input type="number" min="0" value={value} onChange={(e) => onChange(parseInt(e.target.value) || 0)} 
        className="w-12 bg-transparent text-center text-lg font-bold text-[#8d5527] focus:outline-none"
      />
      <button 
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 rounded-full border border-[#8d5527]/20 flex items-center justify-center text-[#8d5527] hover:bg-[#8d5527] hover:text-white transition-colors"
      >
        <i className="fa-solid fa-plus text-[10px]"></i>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f6efe7] text-[#8d5527]">
      <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover" alt="Safari" />
          <div className="absolute inset-0 bg-emerald-900/40"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white mt-8 md:mt-10">
          <h1 className="text-4xl md:text-7xl font-serif mb-3 md:mb-4 drop-shadow-lg">Select Package</h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span><span className="opacity-40">/</span><span className="text-[#bf885e]">WILPATTU</span>
          </div>
        </div>
      </section>

      <div className="relative z-20"><AvailabilityBar initialCheckIn={checkIn} initialCheckOut={checkOut} initialAdults={adults} initialChildren={childrenCount} onCheck={onUpdateParams} /></div>

      <div className="bg-[#8d5527] text-white py-3 md:py-4 border-y border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[9px] md:text-[11px] font-bold tracking-widest uppercase">
           <div className="flex items-center gap-2"><i className="fa-solid fa-circle-info text-[#bf885e]"></i><span>Max 2 Adults & 1 Child per Room</span></div>
           <div className="flex items-center gap-2"><i className="fa-solid fa-child text-[#bf885e]"></i><span>Children under 5 stay free</span></div>
           <div className="flex items-center gap-2 text-[#bf885e]"><i className="fa-solid fa-mug-hot"></i><span>Free Breakfast</span></div>
        </div>
      </div>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {showWarning && (
            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-red-50 border-l-4 border-red-500 text-red-800 flex items-start gap-3 md:gap-4">
              <i className="fa-solid fa-triangle-exclamation text-lg md:text-xl mt-1"></i>
              <div>
                <h4 className="font-bold text-xs md:text-sm uppercase tracking-wider mb-1">Insufficient Capacity</h4>
                <p className="text-[10px] md:text-xs">
                  {!isAdultCapacitySufficient && `Need more rooms for ${adults} adults. `}
                  {!isChildCapacitySufficient && `Need more rooms for ${childrenCount} children.`}
                </p>
              </div>
            </div>
          )}
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-[70%] space-y-6 md:space-y-8">
              <div className="bg-white shadow-sm border border-emerald-100 overflow-hidden rounded-xl">
                {/* Header for Desktop */}
                <div className="hidden md:grid grid-cols-[2fr_0.8fr_1.8fr_1fr] bg-[#8d5527] text-white text-[10px] font-bold uppercase tracking-wider p-4">
                  <div>Room Type</div><div className="text-center">Sleeps</div><div>Price for 1 night</div><div className="text-center">Rooms</div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-[2fr_3.6fr]">
                  {/* Room Info */}
                  <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-emerald-50 bg-[#efe2d2]/10">
                    <h3 className="text-xl md:text-2xl font-serif mb-4">Luxury Glamping Tent</h3>
                    <div className="aspect-[16/10] md:aspect-video mb-6 overflow-hidden rounded-lg shadow-sm">
                      <img src="https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Room" />
                    </div>
                    <ul className="flex flex-wrap md:flex-col gap-4 md:gap-3 text-[10px] md:text-[11px] text-[#8d5527]/70 font-medium">
                      <li className="flex items-center gap-2"><i className="fa-solid fa-house-chimney text-emerald-500"></i> 32 m2</li>
                      <li className="flex items-center gap-2"><i className="fa-solid fa-user-group text-emerald-500"></i> Max 2 Adults + 1 Child</li>
                      <li className="flex items-center gap-2"><i className="fa-solid fa-snowflake text-emerald-500"></i> Air Conditioned</li>
                    </ul>
                  </div>

                  {/* Plans */}
                  <div className="divide-y divide-emerald-50">
                    {PLANS.map((plan) => (
                      <div key={plan.id} className="flex flex-col md:grid md:grid-cols-[0.8fr_1.8fr_1fr] items-center p-6 md:p-0 hover:bg-[#efe2d2]/30 transition-colors">
                        <div className="hidden md:flex items-center justify-center opacity-40"><i className="fa-solid fa-user-group text-xl"></i></div>
                        
                        <div className="w-full md:p-6 text-center md:text-left mb-4 md:mb-0">
                          <div className="md:hidden text-[9px] font-bold text-[#bf885e] uppercase tracking-widest mb-2">Package</div>
                          <h4 className="text-sm md:text-base font-bold text-[#8d5527] mb-1">{plan.name}</h4>
                          <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-baseline gap-1">
                              <span className="text-[10px] font-bold opacity-50 uppercase">USD</span>
                              <span className="text-xl md:text-2xl font-black">{plan.nightlyPrice}</span>
                              <span className="text-[10px] font-medium opacity-50 ml-1">/ 1 night</span>
                            </div>
                            <span className="text-[9px] font-bold text-[#bf885e] mt-1">Total Stay: USD {plan.nightlyPrice * nights} ({nights} N)</span>
                          </div>
                        </div>

                        <div className="w-full md:p-6 flex flex-col items-center justify-center border-t md:border-t-0 border-emerald-50 pt-4 md:pt-0">
                          <div className="md:hidden text-[9px] font-bold text-[#bf885e] uppercase tracking-widest mb-3">Number of Tents</div>
                          <RoomInput value={roomCounts[plan.id]} onChange={(val) => handleRoomChange(plan.id, val)} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Summary */}
            <div className="w-full lg:w-[30%]">
              <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-emerald-100 sticky top-24">
                <div className="bg-[#8d5527] p-5 text-center">
                  <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Reservation Summary</h4>
                </div>
                <div className="p-6 md:p-8">
                  <div className="space-y-6 mb-8">
                    <div className="pb-4 border-b border-emerald-50">
                      <p className="text-[9px] md:text-[10px] uppercase font-bold text-[#bf885e] tracking-widest mb-1.5">Stay Period</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm md:text-base font-serif font-medium">{checkIn} — {checkOut}</p>
                        <span className="text-[10px] bg-[#efe2d2] text-[#bf885e] px-2 py-0.5 rounded-full font-bold">{nights} N</span>
                      </div>
                    </div>
                    <div className="pb-4 border-b border-emerald-50">
                      <p className="text-[9px] md:text-[10px] uppercase font-bold text-[#bf885e] tracking-widest mb-1.5">Selected Accommodation</p>
                      <p className="text-sm md:text-base font-serif font-medium">{totalRoomsSelected} Luxury Glamping Tent(s)</p>
                      <div className="mt-2 space-y-1">
                        {PLANS.map(p => roomCounts[p.id] > 0 && (
                          <p key={p.id} className="text-[10px] text-black/60 flex justify-between">
                            <span>{roomCounts[p.id]}x {p.name}</span>
                            <span>USD {p.nightlyPrice.toFixed(2)}/n</span>
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="pb-4 border-b border-emerald-50">
                      <p className="text-[9px] md:text-[10px] uppercase font-bold text-[#bf885e] tracking-widest mb-1.5">Occupancy</p>
                      <p className="text-sm md:text-base font-serif font-medium">{adults} Adult(s), {childrenCount} Child(ren)</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-[9px] md:text-[10px] uppercase font-bold text-[#bf885e] tracking-widest mb-2">Price Breakdown</p>
                      <div className="space-y-2">
                        {PLANS.map(p => roomCounts[p.id] > 0 && (
                          <div key={p.id} className="flex justify-between text-[11px] text-black/70">
                            <span>{roomCounts[p.id]} Rm x {nights} N x ${p.nightlyPrice}</span>
                            <span>${(roomCounts[p.id] * nights * p.nightlyPrice).toFixed(2)}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between border-t border-emerald-100 pt-3 mt-2">
                          <p className="text-xs font-bold text-[#8d5527] uppercase tracking-widest">Total Stay</p>
                          <p className="text-xl font-serif font-bold text-[#bf885e]">USD {totalStayPrice.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleProceedClick} 
                    disabled={!isCapacitySufficient || totalRoomsSelected === 0}
                    className={`w-full py-5 text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl shadow-xl transition-all duration-300 ${
                      isCapacitySufficient && totalRoomsSelected > 0 
                        ? 'bg-[#bf885e] text-white hover:bg-[#4b3427] transform hover:-translate-y-1 active:scale-95' 
                        : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    PROCEED TO BILLING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingSelection;
