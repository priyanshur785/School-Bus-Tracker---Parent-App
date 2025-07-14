import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, CheckCircle, AlertCircle, XCircle } from "lucide-react"

export function ChildProfile() {
  const trips = [
    {
      date: "Today",
      time: "3:45 PM",
      pickup: "3:50 PM",
      dropoff: "4:15 PM",
      status: "on-time",
      route: "School → Home",
    },
    {
      date: "Yesterday",
      time: "3:45 PM",
      pickup: "3:52 PM",
      dropoff: "4:20 PM",
      status: "delayed",
      route: "School → Home",
    },
    {
      date: "Dec 12",
      time: "7:30 AM",
      pickup: "7:28 AM",
      dropoff: "7:55 AM",
      status: "on-time",
      route: "Home → School",
    },
    {
      date: "Dec 12",
      time: "3:45 PM",
      pickup: "N/A",
      dropoff: "N/A",
      status: "missed",
      route: "School → Home",
    },
    {
      date: "Dec 11",
      time: "7:30 AM",
      pickup: "7:30 AM",
      dropoff: "7:58 AM",
      status: "on-time",
      route: "Home → School",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "on-time":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "delayed":
        return <AlertCircle className="w-4 h-4 text-orange-600" />
      case "missed":
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "on-time":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">On Time</Badge>
      case "delayed":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Delayed</Badge>
      case "missed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Missed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-semibold">Child Profile</h1>
        <p className="text-blue-100 text-sm">Trip history and details</p>
      </div>

      <div className="p-4">
        {/* Child Details */}
        <Card className="p-4 mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=64&width=64"
                alt="Emma Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">Priyanshu Rai</h2>
              <p className="text-gray-600">Grade 12 A • Student ID: 1250478</p>
              <p className="text-sm text-gray-500">Bus Route #42</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-600">28</p>
              <p className="text-xs text-gray-600">Trips This Month</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">95%</p>
              <p className="text-xs text-gray-600">On-Time Rate</p>
            </div>
          </div>
        </Card>

        {/* Trip History */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Trips</h3>

          <div className="space-y-3">
            {trips.map((trip, index) => (
              <div key={index} className="border-l-4 border-gray-200 pl-4 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(trip.status)}
                    <span className="font-medium text-sm">{trip.date}</span>
                  </div>
                  {getStatusBadge(trip.status)}
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3" />
                    <span>{trip.route}</span>
                  </div>

                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>Scheduled: {trip.time}</span>
                    </div>
                    {trip.pickup !== "N/A" && <span>Pickup: {trip.pickup}</span>}
                    {trip.dropoff !== "N/A" && <span>Drop: {trip.dropoff}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
