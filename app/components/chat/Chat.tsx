'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Message {
  content: string;
  isUser: boolean;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hi this is Hugo 🙂. How may I assist you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle input visibility when focused
  useEffect(() => {
    const handleVisibility = () => {
      if (messagesEndRef.current && inputRef.current) {
        // First scroll to the last message
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Then ensure the input is visible
        setTimeout(() => {
          inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);
      }
    };

    const input = inputRef.current;
    input?.addEventListener('focus', handleVisibility);

    return () => {
      input?.removeEventListener('focus', handleVisibility);
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
      setMessages(prev => [...prev, { content: data.response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { content: "Sorry, I'm having trouble responding right now. Please try again later.", isUser: false }]);
    } finally {
      setIsLoading(false);
      // Refocus the input field after response
      inputRef.current?.focus();
    }
  };

  return (
    <Card className="w-full h-[100dvh] md:h-[calc(100vh-2rem)] flex flex-col relative">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[150px]">
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
        <div className="relative bg-card border-t mt-auto">
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
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
}