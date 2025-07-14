"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, User, Settings, Phone } from "lucide-react"

interface DashboardScreenProps {
  onNavigate: (screen: string) => void
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-b-lg">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
            <img src="/placeholder.svg?height=48&width=48" alt="Child photo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Emma Johnson</h2>
            <p className="text-blue-100 text-sm">Grade 5A</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="p-4">
        <Card className="p-4 mb-4">
          <div className="bg-green-50 rounded-lg h-48 relative overflow-hidden">
            <img
              src="/placeholder.svg?height=192&width=343"
              alt="Map showing bus location"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
              <MapPin className="w-4 h-4 text-green-600" />
            </div>
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Bus #42
            </div>
          </div>
        </Card>

        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Card className="p-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-xs text-gray-600">ETA Home</p>
                <p className="font-semibold text-sm">15 mins</p>
              </div>
            </div>
          </Card>

          <Card className="p-3">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-xs text-gray-600">Driver</p>
                <p className="font-semibold text-sm">Mr. Smith</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Current Status */}
        <Card className="p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">Current Status</h3>
              <p className="text-green-600 text-sm font-medium">On Route to Home</p>
              <p className="text-gray-600 text-xs">Last updated: 2 mins ago</p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-3">
          <Button onClick={() => onNavigate("notifications")} variant="outline" className="w-full justify-start h-12">
            <Settings className="w-5 h-5 mr-3" />
            Notification Preferences
          </Button>

          <Button onClick={() => onNavigate("bus-details")} variant="outline" className="w-full justify-start h-12">
            <MapPin className="w-5 h-5 mr-3" />
            View Bus Details
          </Button>

          <Button
            onClick={() => onNavigate("emergency")}
            variant="outline"
            className="w-full justify-start h-12 text-red-600 border-red-200 hover:bg-red-50"
          >
            <Phone className="w-5 h-5 mr-3" />
            Emergency Contact
          </Button>
        </div>
      </div>
    </div>
  )
}
