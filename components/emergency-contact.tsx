import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageSquare, HelpCircle, AlertTriangle } from "lucide-react"

export function EmergencyContact() {
  const faqs = [
    {
      question: "What if my child misses the bus?",
      answer: "Contact the transport in-charge immediately. Alternative arrangements can be made.",
    },
    {
      question: "How accurate is the bus tracking?",
      answer: "Our GPS tracking is updated every 30 seconds with 95% accuracy.",
    },
    {
      question: "What happens during bad weather?",
      answer: "You'll receive notifications about any delays or route changes due to weather.",
    },
    {
      question: "Can I change my child's pickup location?",
      answer: "Yes, contact the transport office at least 24 hours in advance.",
    },
  ]

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-red-600 text-white p-4">
        <h1 className="text-xl font-semibold">Emergency & Support</h1>
        <p className="text-red-100 text-sm">Get help when you need it</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Emergency Contacts */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
            Emergency Contacts
          </h3>

          <div className="space-y-3">
            <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white">
              <Phone className="w-5 h-5 mr-3" />
              Call Transport In-Charge
            </Button>

            <Button variant="outline" className="w-full h-12 bg-transparent">
              <Phone className="w-5 h-5 mr-3" />
              Call School Office
            </Button>
          </div>
        </Card>

        {/* Support Options */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Support Options</h3>

          <div className="space-y-3">
            <Button variant="outline" className="w-full h-12 justify-start bg-transparent">
              <Mail className="w-5 h-5 mr-3" />
              Email Support Team
            </Button>

            <Button variant="outline" className="w-full h-12 justify-start bg-transparent">
              <MessageSquare className="w-5 h-5 mr-3" />
              Live Chat Support
            </Button>
          </div>
        </Card>

        {/* Report a Problem */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Report a Problem</h3>

          <div className="space-y-4">
            <div>
              <Label htmlFor="issue-type" className="text-sm font-medium">
                Issue Type
              </Label>
              <select
                id="issue-type"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an issue</option>
                <option value="bus-delay">Bus Delay</option>
                <option value="driver-concern">Driver Concern</option>
                <option value="safety-issue">Safety Issue</option>
                <option value="app-problem">App Problem</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Please describe the issue in detail..."
                className="mt-1 min-h-[100px]"
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Report</Button>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                <h4 className="font-medium text-sm text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-4 bg-blue-50">
          <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Transport Office:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> transport@school.edu
            </p>
            <p>
              <strong>Hours:</strong> Mon-Fri, 7:00 AM - 6:00 PM
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
