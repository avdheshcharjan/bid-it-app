// components/ActiveAuctions.tsx
import React from 'react'
import { AuctionCard } from './AuctionCard'

export const ActiveAuctions = () => {
  const mockAuctions = [
    {
      id: 1,
      title: 'CryptoPunk #1234',
      image: '/api/placeholder/400/400',
      currentPrice: '1.5 ETH',
      startPrice: '3 ETH',
      endPrice: '0.5 ETH',
      timeLeft: '2h 15m',
      priceDropInterval: '5 minutes',
    },
    // Add more mock auctions...
  ]

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Active Auctions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAuctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
    </section>
  )
}
