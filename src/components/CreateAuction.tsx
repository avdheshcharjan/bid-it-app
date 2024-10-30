// components/CreateAuction.tsx
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const CreateAuction = () => {
  return (
    <Card className="bg-[#1E293B] border-gray-800 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Create Dutch Auction</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-300">NFT Contract Address</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-[#0F172A] border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="0x..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-gray-300">Token ID</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-[#0F172A] border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="1234"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-gray-300">Starting Price (ETH)</label>
              <input
                type="number"
                className="w-full p-2 rounded-lg bg-[#0F172A] border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="1.0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300">Reserve Price (ETH)</label>
              <input
                type="number"
                className="w-full p-2 rounded-lg bg-[#0F172A] border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="0.5"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-gray-300">Price Drop Interval (minutes)</label>
              <input
                type="number"
                className="w-full p-2 rounded-lg bg-[#0F172A] border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="5"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300">Price Drop Amount (ETH)</label>
              <input
                type="number"
                className="w-full p-2 rounded-lg bg-[#0F172A] border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="0.1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Create Auction
          </button>
        </form>
      </CardContent>
    </Card>
  )
}

