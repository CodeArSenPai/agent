export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface StructuredMessage {
  explanation: string;
  decision: boolean;
}