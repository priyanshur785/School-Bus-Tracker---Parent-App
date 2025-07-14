"use client"

import { Home, Bell, User, Phone, Bus } from "lucide-react"

interface NavigationProps {
  currentScreen: string
  onNavigate: (screen: string) => void
}

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "dashboard", icon: Home, label: "Home" },
    { id: "notifications", icon: Bell, label: "Alerts" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "bus-details", icon: Bus, label: "Bus" },
    { id: "emergency", icon: Phone, label: "Help" },
  ]

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-white border-t border-gray-200">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-600"}`} />
              <span className={`text-xs mt-1 ${isActive ? "text-blue-600 font-medium" : "text-gray-600"}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
