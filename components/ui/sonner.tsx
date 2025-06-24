"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-center" 
      className="toaster group"
      style={
        {
           "--normal-bg": "#1e3a8a",              // blue-900
          "--normal-text": "#f8fafc",            // gray-50
          "--normal-border": "#334155",          // gray-700
          "--success-bg": "#2563eb",             // blue-600
          "--success-text": "#f8fafc",           // gray-50
          "--error-bg": "#dc2626",               // red-600
          "--error-text": "#f8fafc",
          "--info-bg": "#475569",                // gray-600
          "--info-text": "#f8fafc",
          "--warning-bg": "#f59e0b",             // amber-500
          "--warning-text": "#1f2937",  

        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
