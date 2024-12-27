"use client"

import { useToast } from "@/hooks/use-toast"
import { Copy } from "lucide-react"
import { Button } from "./ui/button"

const CopyButton = () => {
  const textForCopy: string = "24ee 1ba9 6b82 d2b2 e5f5 05b9 9a42 c42a 8dcc"
  const { toast } = useToast()

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textForCopy)
      .then(() =>
        toast({
          title: "Copied to clipboard",
          description: textForCopy,
        })
      )
      .catch((error) => {
        console.error("Failed to copy text:", error)
      })
  }

  return (
    <Button className={`w-fit`} variant={"outline"} onClick={handleCopy}>
      <Copy /> Copy
    </Button>
  )
}

export default CopyButton
