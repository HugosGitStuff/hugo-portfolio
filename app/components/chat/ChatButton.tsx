'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MessageCircle } from 'lucide-react';
import Chat from './Chat';

interface Message {
  content: string;
  isUser: boolean;
}

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm Hugo's AI assistant 🙂. How can I help you learn more about Hugo's background and experience?", isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <Button
            className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-full h-[100dvh] sm:w-[400px] md:w-[540px] p-0 focus:outline-none"
          onOpenAutoFocus={(e) => e.preventDefault()} // Prevent auto-focus when sheet opens
        >
          <SheetHeader className="px-4 pt-4">
            <SheetTitle>Chat with Hugo</SheetTitle>
          </SheetHeader>
          <Chat 
            messages={messages}
            setMessages={setMessages}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
