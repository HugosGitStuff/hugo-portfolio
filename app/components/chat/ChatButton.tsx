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
      // Initial delay for sheet animation
      setTimeout(() => {
        const input = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (input) {
          // First scroll to ensure the sheet is in view
          window.scrollTo(0, 0);
          
          // Then focus and scroll with a series of delayed adjustments
          input.focus();
          
          // Series of scroll adjustments to combat iOS keyboard behavior
          const scrollAdjustments = [100, 300, 500, 800];
          scrollAdjustments.forEach(delay => {
            setTimeout(() => {
              window.scrollTo(0, document.body.scrollHeight);
              input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, delay);
          });
        }
      }, 150);
    }
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
