'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MessageCircle } from 'lucide-react';
import Chat from './Chat';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle sheet open state
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      // Delay focus until sheet is fully open and keyboard is shown
      setTimeout(() => {
        const input = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (input) {
          input.focus();
          // Additional scroll after keyboard is shown
          setTimeout(() => {
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.scrollTo(0, window.scrollY + 200);
          }, 500);
        }
      }, 300);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
            <Button
              className="relative h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-background hover:bg-blue-50 hover:scale-105"
              size="icon"
            >
              <MessageCircle className="h-7 w-7 text-blue-500 group-hover:text-blue-600 transition-colors duration-200" />
              <span className="sr-only">Open Chat</span>
            </Button>
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-blue-500 rounded-full animate-bounce">
              <span className="absolute inset-0 h-full w-full bg-blue-500 rounded-full animate-ping"></span>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-full sm:w-[400px] md:w-[540px] p-0 focus:outline-none"
        >
          <SheetHeader className="px-4 pt-4">
            <SheetTitle>Chat with Hugo</SheetTitle>
          </SheetHeader>
          <Chat />
        </SheetContent>
      </Sheet>
    </div>
  );
}
