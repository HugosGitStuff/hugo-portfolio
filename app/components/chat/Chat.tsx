'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Message {
  content: string;
  isUser: boolean;
}

interface ChatProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Chat({ messages, setMessages, isLoading, setIsLoading }: ChatProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle input visibility when keyboard appears
  useEffect(() => {
    const handleFocus = () => {
      // Wait for keyboard animation
      setTimeout(() => {
        if (inputRef.current) {
          const viewportHeight = window.visualViewport?.height || window.innerHeight;
          const inputRect = inputRef.current.getBoundingClientRect();
          
          // If input is obscured by keyboard
          if (inputRect.bottom > viewportHeight) {
            // Scroll the input into view
            inputRef.current.scrollIntoView({ block: 'center' });
          }
        }
      }, 300);
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('focus', handleFocus);
    }

    return () => {
      if (input) {
        input.removeEventListener('focus', handleFocus);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { content: userMessage, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Check if there's an error in the response
      if (data.error) {
        setMessages(prev => [...prev, { 
          content: "I apologize, but I'm currently offline. Please try again later or check out my projects and other sections of the portfolio!", 
          isUser: false 
        }]);
        return;
      }

      setMessages(prev => [...prev, { content: data.response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        content: "I apologize, but I'm currently offline. Please try again later or check out my projects and other sections of the portfolio!", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full h-[calc(100dvh-4rem)] flex flex-col relative overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-card border-t mt-auto">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
              tabIndex={1} // Ensure it's focusable but not auto-focused
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}
