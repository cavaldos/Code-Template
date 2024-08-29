import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5002");

const useChatSocket = (senderId: any) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [typingUsers, setTypingUsers] = useState(new Set());
  const typingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (senderId) {
      socket.emit("register", senderId); // Register senderId with the server
    }

    socket.on("message", (msg) => {
      setMessages((prevMessages: any) => [...prevMessages, msg]);
    });

    socket.on("typing", ({ senderId }) => {
      setTypingUsers((prevUsers) => new Set(prevUsers).add(senderId));
    });

    socket.on("stopTyping", ({ senderId }) => {
      setTypingUsers((prevUsers) => {
        const newUsers = new Set(prevUsers);
        newUsers.delete(senderId);
        return newUsers;
      });
    });

    return () => {
      socket.off("message");
      socket.off("typing");
      socket.off("stopTyping");
    };
  }, [senderId]);

  const sendMessage = (message: any, receiverId: any) => {
    if (message.trim() && senderId && receiverId) {
      const data = {
        content: message,
        senderId,
        receiverId,
      };
      socket.emit("message", data);
      stopTyping(receiverId);
    }
  };

  const startTyping = (receiverId: any) => {
    if (senderId && receiverId) {
      socket.emit("typing", { senderId, receiverId });
    }
  };

  const stopTyping = (receiverId: any) => {
    if (senderId && receiverId) {
      socket.emit("stopTyping", { senderId, receiverId });
    }
  };

  const handleTyping = (_e: any, receiverId: any) => {
    try {
      startTyping(receiverId);
      clearTimeout(typingTimeoutRef.current as number | undefined);
      typingTimeoutRef.current = setTimeout(() => {
        stopTyping(receiverId);
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    messages,
    typingUsers,
    sendMessage,
    handleTyping,
  };
};

export default useChatSocket;
