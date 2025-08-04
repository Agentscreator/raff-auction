"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

interface RaffleEntryDialogProps {
  auctionId: number
  currentBid: number
  auctionTitle: string
  children: React.ReactNode
}

export default function RaffleEntryDialog({ auctionId, currentBid, auctionTitle, children }: RaffleEntryDialogProps) {
  const [entryAmount, setEntryAmount] = useState('')
  const [open, setOpen] = useState(false)
  
  const entryPrice = currentBid // Fixed entry price per raffle ticket
  const entryValue = parseFloat(entryAmount) || 0

  const isValidEntry = entryValue >= entryPrice

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-3xl">
        <DialogHeader>
          <DialogTitle>Enter Raffle</DialogTitle>
          <DialogDescription>
            Purchase raffle entries for {auctionTitle}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="entry-amount">Number of Entries</Label>
            <div className="relative">
              <Input
                id="entry-amount"
                type="number"
                min="1"
                step="1"
                value={entryAmount}
                onChange={(e) => setEntryAmount(e.target.value)}
                className="rounded-2xl h-12"
                placeholder="1"
              />
            </div>
            <p className="text-sm text-gray-600">
              Entry price: ${currentBid.toLocaleString()} each • Enter any number of entries to increase your chances
            </p>
          </div>

          {entryValue > 0 && (
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex justify-between items-center text-sm">
                <span>Entries: {entryValue}</span>
                <span className="font-semibold">${(entryValue * entryPrice).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Processing fee:</span>
                <span>Included</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center font-semibold">
                <span>Total:</span>
                <span>${(entryValue * entryPrice).toLocaleString()}</span>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-2xl"
            >
              Cancel
            </Button>
            
            <Button
              disabled={!isValidEntry}
              className="flex-1 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              onClick={() => {
                if (isValidEntry) {
                  // TODO: Implement raffle entry logic
                  alert(`Would purchase ${entryValue} entries for $${(entryValue * entryPrice).toLocaleString()}`)
                  setOpen(false)
                }
              }}
            >
              {!isValidEntry 
                ? (entryValue === 0 ? 'Enter number of entries' : 'Invalid entry amount')
                : 'Purchase Entries'
              }
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}