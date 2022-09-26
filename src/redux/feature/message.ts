export interface Message {
  id: string,
  severity: "error" | "warning" | "success" | "info",
  content: string
}