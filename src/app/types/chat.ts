export interface ChatMessage {
    id: string;              // Unique identifier for the message
    text: string;            // The actual text content of the message
    sender: 'me' | 'friend'; // Indicates who sent the message: 'user' or 'friend'      // When the message was sent// Optional: status of the message (useful for user messages)
    type?: 'text' | 'image' | 'video'; // Optional: type of message, useful if you plan to support media    // Optional: URL to the media content if the type is 'image' or 'video'
  }