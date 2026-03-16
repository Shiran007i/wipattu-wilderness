
import React, { useState } from 'react';
import { SelectedRoom } from '../types';

interface CheckoutProps {
  checkIn: string;
  checkOut: string;
  adults: number;
  childrenCount: number;
  rooms: SelectedRoom[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ checkIn, checkOut, adults, childrenCount, rooms, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    specialRequests: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [paymentDone, setPaymentDone] = useState(false);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
    const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
    const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    const n = Math.ceil((utc2 - utc1) / (1000 * 60 * 60 * 24));
    return n > 0 ? n : 1;
  };
  const nights = calculateNights();

  const calculateTotal = () => rooms.reduce((acc, curr) => acc + (curr.price * nights * curr.count), 0);
  const total = calculateTotal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.telephone.trim()) newErrors.telephone = 'Telephone is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "94716335000";
    
    let roomDetails = rooms.map(r => 
      `• ${r.count}x ${r.name} ($${r.price}/night)`
    ).join('\n');

    const message = `*NEW RESERVATION - WILPATTU WILDERNESS*\n\n` +
      `*Guest Details:*\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.telephone}\n\n` +
      `*Stay Details:*\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Duration: ${nights} Nights\n` +
      `Occupancy: ${adults} Adults, ${childrenCount} Children\n\n` +
      `*Accommodation:*\n${roomDetails}\n\n` +
      `*Special Requests:*\n${formData.specialRequests || 'None'}\n\n` +
      `*TOTAL STAY PRICE: USD ${total.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sendToWhatsApp();
      setPaymentDone(true);
    }
  };

  if (paymentDone) {
    return (
      <div className="min-h-screen bg-[#F1FDF8] flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 shadow-2xl max-w-2xl w-full text-center rounded-2xl border border-emerald-50">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 shadow-lg">
            <i className="fa-solid fa-check text-4xl md:text-5xl"></i>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#064E3B] mb-4 md:mb-6">Booking Confirmed!</h2>
          <p className="text-[#065F46] font-light mb-8 md:mb-12 leading-relaxed">
            Ayubowan {formData.firstName}! We have opened WhatsApp to send your booking details to our team. Please hit 'Send' in WhatsApp to complete the process.
          </p>
          <button onClick={() => window.location.href = '/'} className="w-full md:w-auto bg-[#064E3B] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] hover:bg-emerald-500 shadow-xl transition-all">
            RETURN HOME
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1FDF8] text-[#064E3B] pb-20 md:pb-32">
      <section className="relative h-[35vh] md:h-[45vh] w-full flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover" alt="Billing" />
          <div className="absolute inset-0 bg-emerald-950/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white mt-8 md:mt-10">
          <h1 className="text-4xl md:text-8xl font-serif mb-3 md:mb-4 tracking-tight">Billing</h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span><span className="opacity-40">/</span><span>WILPATTU</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl -mt-16 md:-mt-24 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 md:gap-12">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
              <div className="bg-[#064E3B] px-6 md:px-10 py-5 md:py-6 flex items-center gap-3">
                <i className="fa-regular fa-calendar-check text-white text-lg md:text-xl"></i>
                <h4 className="text-lg md:text-xl font-serif text-white">Booking Details</h4>
              </div>
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 bg-emerald-50/30 p-6 md:p-8 rounded-2xl border border-emerald-50 shadow-inner">
                  <div className="text-center">
                    <p className="text-[9px] md:text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-2 md:mb-3">CHECK-IN</p>
                    <p className="text-xs md:text-[14px] font-bold">{checkIn}</p>
                  </div>
                  <div className="text-center border-l border-emerald-100">
                    <p className="text-[9px] md:text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-2 md:mb-3">CHECK-OUT</p>
                    <p className="text-xs md:text-[14px] font-bold">{checkOut}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4 px-5 md:py-5 md:px-6 bg-emerald-100/50 text-emerald-900 rounded-2xl border border-emerald-200 text-sm md:text-base font-medium mb-6">
                  <span>Length of stay</span>
                  <span className="font-bold">{nights} nights</span>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Selected Rooms</p>
                  {rooms.map((room, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm border-b border-emerald-50 pb-3">
                      <div>
                        <p className="font-bold">{room.count}x {room.name}</p>
                        <p className="text-[10px] opacity-60">{nights} nights x ${room.price.toFixed(2)}/night</p>
                      </div>
                      <p className="font-bold">${(room.price * nights * room.count).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
              <div className="bg-[#064E3B] px-6 md:px-10 py-6 md:py-8 flex items-center gap-4 shadow-md">
                <i className="fa-solid fa-wallet text-white text-lg md:text-xl"></i>
                <h4 className="text-lg md:text-xl font-serif text-white">Price Summary</h4>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-2xl md:text-3xl font-serif">Total Stay:</span>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-emerald-600">USD {total.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-black/40 mt-4 italic">Includes all taxes and service charges.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
              <div className="bg-[#064E3B] px-6 md:px-10 py-6 md:py-7 flex items-center gap-4">
                <i className="fa-solid fa-list-check text-white text-lg md:text-xl"></i>
                <h4 className="text-lg md:text-xl font-serif text-white">Personal Information</h4>
              </div>
              <div className="p-6 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {[
                      { name: 'firstName', label: 'First Name', type: 'text' },
                      { name: 'lastName', label: 'Last Name', type: 'text' },
                      { name: 'email', label: 'Email Address', type: 'email' },
                      { name: 'telephone', label: 'Telephone', type: 'tel' }
                    ].map(field => (
                      <div key={field.name}>
                        <label className="text-[10px] md:text-[11px] font-bold text-emerald-800 block mb-3 md:mb-4 uppercase tracking-wider">
                          {field.label}
                        </label>
                        <input 
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          className={`w-full border rounded-xl px-5 py-4 md:px-6 md:py-5 outline-none transition-all shadow-sm text-sm ${
                            errors[field.name] ? 'border-red-500 focus:ring-red-500/10' : 'border-emerald-100 focus:ring-emerald-500/20 focus:border-emerald-500'
                          }`}
                          type={field.type}
                        />
                        {errors[field.name] && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-tighter">{errors[field.name]}</p>}
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <label className="text-[10px] md:text-[11px] font-bold text-emerald-800 block mb-3 md:mb-4 uppercase tracking-wider">Special Requests (Optional)</label>
                    <textarea 
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border border-emerald-100 rounded-xl px-5 py-4 md:px-6 md:py-5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm text-sm"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button type="button" onClick={onBack} className="w-full sm:w-1/3 border border-[#064E3B]/20 text-[#064E3B] py-5 rounded-2xl font-bold uppercase tracking-[0.3em] hover:bg-emerald-50 transition-all">
                      Go Back
                    </button>
                    <button type="submit" className="w-full sm:w-2/3 bg-[#064E3B] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.4em] shadow-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-4">
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
