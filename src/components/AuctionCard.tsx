import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const AuctionCard = ({ auction }: { auction: any }) => {
  return (
    <Card className="bg-[#1E293B] border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-200">
      <CardHeader className="p-0">
        <img
          src={auction.image}
          alt={auction.title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{auction.title}</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Current Price</span>
            <span className="font-bold text-green-400">{auction.currentPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Starting Price</span>
            <span>{auction.startPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Time Left</span>
            <span className="text-yellow-400">{auction.timeLeft}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-[#161F2E]">
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200">
          Place Bid
        </button>
      </CardFooter>
    </Card>
  )
}
