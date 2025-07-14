"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Clock, MapPin, UserCheck } from "lucide-react"

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    busLeaves: true,
    fiveMinutes: true,
    childBoards: true,
    childAlights: true,
    delays: true,
    emergencies: true,
  })

  const [doNotDisturbTime, setDoNotDisturbTime] = useState("6:00 PM")

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-semibold">Notification Settings</h1>
        <p className="text-blue-100 text-sm">Customize your alerts</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Journey Notifications */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            Journey Updates
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Bus leaves school</Label>
                <p className="text-sm text-gray-600">Get notified when the bus starts the journey</p>
              </div>
              <Switch
                checked={notifications.busLeaves}
                onCheckedChange={(value) => handleNotificationChange("busLeaves", value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">5 minutes away</Label>
                <p className="text-sm text-gray-600">Alert when bus is approaching your stop</p>
              </div>
              <Switch
                checked={notifications.fiveMinutes}
                onCheckedChange={(value) => handleNotificationChange("fiveMinutes", value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Delays & Changes</Label>
                <p className="text-sm text-gray-600">Notify about route delays or changes</p>
              </div>
              <Switch
                checked={notifications.delays}
                onCheckedChange={(value) => handleNotificationChange("delays", value)}
              />
            </div>
          </div>
        </Card>

        {/* Child Activity */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <UserCheck className="w-5 h-5 mr-2 text-green-600" />
            Child Activity
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Child boards bus</Label>
                <p className="text-sm text-gray-600">Confirm when your child gets on the bus</p>
              </div>
              <Switch
                checked={notifications.childBoards}
                onCheckedChange={(value) => handleNotificationChange("childBoards", value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Child alights bus</Label>
                <p className="text-sm text-gray-600">Confirm when your child gets off the bus</p>
              </div>
              <Switch
                checked={notifications.childAlights}
                onCheckedChange={(value) => handleNotificationChange("childAlights", value)}
              />
            </div>
          </div>
        </Card>

        {/* Emergency Alerts */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-red-600" />
            Emergency Alerts
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Emergency notifications</Label>
              <p className="text-sm text-gray-600">Critical safety alerts (always enabled)</p>
            </div>
            <Switch
              checked={notifications.emergencies}
              onCheckedChange={(value) => handleNotificationChange("emergencies", value)}
            />
          </div>
        </Card>

        {/* Do Not Disturb */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-purple-600" />
            Do Not Disturb
          </h3>

          <div className="space-y-3">
            <Label className="text-sm">No notifications after:</Label>
            <Select value={doNotDisturbTime} onValueChange={setDoNotDisturbTime}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                <SelectItem value="9:00 PM">9:00 PM</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-600">Emergency alerts will still come through</p>
          </div>
        </Card>

        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700">Save Preferences</Button>
      </div>
    </div>
  )
}
