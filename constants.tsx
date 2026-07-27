
import React from 'react';
import { SafariPackage } from './types';

export const LOGO_SVG = (
  <svg viewBox="0 0 500 500" className="w-full h-full">
    <circle cx="250" cy="250" r="230" fill="none" stroke="#8d5527" strokeWidth="2" />
    <circle cx="250" cy="250" r="210" fill="#D1FAE5" />
    <path d="M150,300 Q250,150 350,300" fill="none" stroke="#4b3427" strokeWidth="15" strokeLinecap="round" />
    <path d="M180,250 C200,200 300,200 320,250" fill="none" stroke="#bf885e" strokeWidth="8" />
    <text x="250" y="100" textAnchor="middle" fill="#4b3427" fontSize="30" fontWeight="bold" style={{ letterSpacing: '4px' }}>
      WILDS WILPATTU
    </text>
    <text x="250" y="420" textAnchor="middle" fill="#4b3427" fontSize="20" fontWeight="400" style={{ letterSpacing: '2px' }}>
      CRAFTED LUXURY IN THE WILDERNESS
    </text>
  </svg>
);

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Antony D",
    initial: "A",
    text: "We had a wonderful stay at Wilpattu Wilderness. From the moment we arrived, the team made us feel incredibly welcome and well looked after. The food was delicious, the accommodation was comfortable, and the entire experience was truly memorable. The highlight of our stay was the safari arranged by Wilpattu Wilderness, where we were lucky enough to spot two leopards and two bears.",
    stars: 5,
    source: "Tripadvisor"
  },
  {
    id: 2,
    name: "Sarah Miller",
    initial: "S",
    text: "An absolute dream! The luxury camping experience exceeded all expectations. Waking up to the sounds of the jungle and having a gourmet breakfast before the morning safari was magical. Our guide was incredibly knowledgeable and found animals we would have never seen on our own.",
    stars: 5,
    source: "Google"
  },
  {
    id: 3,
    name: "James Chen",
    initial: "J",
    text: "The photography masterclass was worth every penny. The guides know exactly where to position the jeep for the best light. I captured some incredible shots of a sloth bear and several rare birds. Highly recommend for any wildlife photography enthusiasts visiting Sri Lanka.",
    stars: 5,
    source: "Tripadvisor"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    initial: "E",
    text: "Exceptional service from start to finish. The attention to detail in the tented camp is remarkable. It truly is 'luxury in the wilderness'. The evening bonfire and dinner under the stars were the perfect way to end a day of successful wildlife spotting.",
    stars: 5,
    source: "Google"
  },
  {
    id: 5,
    name: "David Wilson",
    initial: "D",
    text: "Wilpattu is a hidden gem, and Wilpattu Wild Camping is the best way to see it. Less crowded than Yala but just as much wildlife. We saw a leopard within the first hour! The staff are passionate about conservation and it shows in everything they do.",
    stars: 5,
    source: "Tripadvisor"
  }
];
