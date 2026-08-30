"use client"
import { useState } from "react"
import { Mail, MailOpen, Trash2, Search, User, Clock, CheckCircle } from "lucide-react"
import { contactMessages as initialMessages } from "../../static-data/messages.data"
import type { ContactMessage } from "../../types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export function MessagesView() {
  const [messages, setMessages] = useState<ContactMessage[]>(initialMessages)
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(
    initialMessages.length > 0 ? initialMessages[0].id : null
  )
  const [searchTerm, setSearchTerm] = useState("")

  // Find active selected message
  const activeMessage = messages.find((m) => m.id === selectedMessageId)

  // Mark message as read/unread
  const toggleReadStatus = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: !m.read } : m))
    )
    const msg = messages.find((m) => m.id === id)
    if (msg) {
      toast.success(
        `Message from ${msg.name} marked as ${!msg.read ? "read" : "unread"}`
      )
    }
  }

  // Delete message
  const handleDeleteMessage = (id: string) => {
    const remaining = messages.filter((m) => m.id !== id)
    setMessages(remaining)
    toast.success("Message deleted successfully")
    
    // Auto-select next available message
    if (selectedMessageId === id) {
      if (remaining.length > 0) {
        setSelectedMessageId(remaining[0].id)
      } else {
        setSelectedMessageId(null)
      }
    }
  }

  // Handle select message & mark as read if it is currently unread
  const handleSelectMessage = (message: ContactMessage) => {
    setSelectedMessageId(message.id)
    if (!message.read) {
      setMessages((prev) =>
        prev.map((m) => (m.id === message.id ? { ...m, read: true } : m))
      )
    }
  }

  // Filter messages
  const filteredMessages = messages.filter((m) => {
    return (
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.message.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="grid gap-6 md:grid-cols-12 h-[calc(100vh-12rem)] min-h-[500px]">
      {/* Left Column: Messages List (4 cols) */}
      <div className="md:col-span-5 flex flex-col gap-4 h-full">
        {/* Search */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search mail..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 w-full bg-card"
          />
        </div>

        {/* Message scroll list */}
        <Card className="flex-1 border bg-card overflow-hidden flex flex-col">
          <CardHeader className="py-3 px-4 border-b">
            <CardTitle className="text-sm font-bold flex items-center justify-between">
              <span>Inbox</span>
              <Badge variant="secondary" className="font-semibold text-xs py-0.5 px-2">
                {messages.filter((m) => !m.read).length} unread
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-y-auto flex-1 divide-y">
            {filteredMessages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-8 text-muted-foreground text-center">
                <Mail className="h-10 w-10 text-muted-foreground/30 mb-2" />
                <p className="text-sm">No messages found</p>
              </div>
            ) : (
              filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => handleSelectMessage(msg)}
                  className={cn(
                    "p-4 cursor-pointer hover:bg-muted/30 transition-colors flex flex-col gap-1 relative",
                    selectedMessageId === msg.id && "bg-muted/50 dark:bg-card/40 border-l-2 border-primary pl-3.5",
                    !msg.read && "font-semibold"
                  )}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground font-semibold truncate max-w-[150px]">
                      {msg.name}
                    </span>
                    <span className="text-muted-foreground font-mono">
                      {msg.date}
                    </span>
                  </div>
                  <p className="text-sm text-foreground truncate">{msg.subject}</p>
                  <p className="text-xs text-muted-foreground truncate font-normal">
                    {msg.message}
                  </p>
                  {!msg.read && (
                    <span className="absolute right-4 bottom-4 h-2 w-2 rounded-full bg-primary" />
                  )}
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      {/* Right Column: Detailed Reader (7 cols) */}
      <div className="md:col-span-7 h-full">
        {activeMessage ? (
          <Card className="h-full border bg-card flex flex-col overflow-hidden">
            {/* Control Bar */}
            <div className="flex justify-between items-center p-3 border-b bg-muted/10 dark:bg-card/20 shrink-0">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleReadStatus(activeMessage.id)}
                  className="text-xs h-8 hover:bg-muted"
                >
                  {activeMessage.read ? (
                    <>
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      Mark Unread
                    </>
                  ) : (
                    <>
                      <MailOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                      Mark Read
                    </>
                  )}
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteMessage(activeMessage.id)}
                className="text-xs text-destructive hover:bg-destructive/10 hover:text-destructive h-8 border-none bg-transparent"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>

            {/* Reader area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {/* Sender info */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground leading-none">{activeMessage.name}</h3>
                    <span className="text-xs text-muted-foreground">{activeMessage.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <Clock className="h-3.5 w-3.5" />
                  {activeMessage.date}
                </div>
              </div>

              {/* Subject */}
              <div className="border-y border-border py-4">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</span>
                <h2 className="text-lg font-bold text-foreground mt-0.5">{activeMessage.subject}</h2>
              </div>

              {/* Message body */}
              <div className="space-y-4">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">Inquiry Details</span>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                  {activeMessage.message}
                </p>
              </div>
            </div>

            {/* Footer reply note */}
            <div className="p-4 border-t bg-muted/10 dark:bg-card/20 shrink-0 text-center flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span className="text-xs text-muted-foreground font-medium">
                To reply to this message, please email directly to{" "}
                <a href={`mailto:${activeMessage.email}`} className="text-primary font-bold hover:underline">
                  {activeMessage.email}
                </a>
              </span>
            </div>
          </Card>
        ) : (
          <Card className="h-full border bg-card flex flex-col items-center justify-center p-8 text-muted-foreground text-center">
            <MailOpen className="h-12 w-12 text-muted-foreground/20 mb-3" />
            <h3 className="font-bold text-base">No Message Selected</h3>
            <p className="text-sm max-w-xs mt-1">
              Select an email from the list on the left to read its complete details here.
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
