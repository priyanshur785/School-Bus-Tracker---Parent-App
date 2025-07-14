import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bus, User, Shield, MapPin, Users, Star } from "lucide-react"

export function BusDetails() {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-semibold">Bus Details</h1>
        <p className="text-blue-100 text-sm">Complete bus and route information</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Bus Information */}
        <Card className="p-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Bus className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Bus #42</h2>
              <p className="text-gray-600 text-sm">Route: Maple Street - Oak Avenue</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Vehicle Model</p>
              <p className="font-semibold">Blue Bird Vision</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">License Plate</p>
              <p className="font-semibold">SCH-4201</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Capacity</p>
              <p className="font-semibold">48 Students</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Year</p>
              <p className="font-semibold">2022</p>
            </div>
          </div>
        </Card>

        {/* Driver Information */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            Driver Information
          </h3>

          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=64&width=64"
                alt="Mr. Robert Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">Mr. Robert Smith</h4>
              <p className="text-gray-600 text-sm">Licensed Driver • 8 years experience</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-600 ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">License Status</p>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Valid</Badge>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Contact</p>
              <p className="font-semibold text-sm">(555) 987-6543</p>
            </div>
          </div>
        </Card>

        {/* Safety Information */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-green-600" />
            Safety Information
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Safety Rating</span>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">5 Stars</Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Last Inspection</span>
              <span className="text-sm font-medium">Dec 1, 2024</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">GPS Tracking</span>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Active</Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Emergency Equipment</span>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Complete</Badge>
            </div>
          </div>
        </Card>

        {/* Current Passengers */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-purple-600" />
            Current Passengers
          </h3>

          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Students on board</span>
            <span className="font-semibold text-lg">12 / 48</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "25%" }}></div>
          </div>

          <p className="text-xs text-gray-600 mt-2">25% capacity</p>
        </Card>

        {/* Route Information */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-orange-600" />
            Route Information
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-800">Morning Route</p>
              <p className="text-xs text-gray-600">Starts: 7:00 AM • Duration: ~45 mins</p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-800">Afternoon Route</p>
              <p className="text-xs text-gray-600">Starts: 3:30 PM • Duration: ~50 mins</p>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-blue-800">Total Stops: 18</p>
              <p className="text-xs text-blue-600">Your stop: #12 (Maple Street & 5th Ave)</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
