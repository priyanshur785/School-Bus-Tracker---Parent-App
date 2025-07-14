"use client"

import { useState } from "react"
import { LoginScreen } from "@/components/login-screen"
import { DashboardScreen } from "@/components/dashboard-screen"
import { NotificationSettings } from "@/components/notification-settings"
import { ChildProfile } from "@/components/child-profile"
import { EmergencyContact } from "@/components/emergency-contact"
import { BusDetails } from "@/components/bus-details"
import { Navigation } from "@/components/navigation"

export default function SchoolBusTracker() {
  const [currentScreen, setCurrentScreen] = useState("login")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentScreen("dashboard")
  }

  const renderScreen = () => {
    if (!isLoggedIn && currentScreen === "login") {
      return <LoginScreen onLogin={handleLogin} />
    }

    switch (currentScreen) {
      case "dashboard":
        return <DashboardScreen onNavigate={setCurrentScreen} />
      case "notifications":
        return <NotificationSettings />
      case "profile":
        return <ChildProfile />
      case "emergency":
        return <EmergencyContact />
      case "bus-details":
        return <BusDetails />
      default:
        return <DashboardScreen onNavigate={setCurrentScreen} />
    }
  }

  return (
    <div className="max-w-[375px] mx-auto bg-white min-h-screen relative">
      {renderScreen()}
      {isLoggedIn && <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />}
    </div>
  )
}
