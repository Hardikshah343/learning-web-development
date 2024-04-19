import React from "react"

export default function Signin({children }: {children: React.ReactNode}) {
  return <div>
    <div className="border-b p-2">
      Welcome to the banner
    </div>
    {children}    
  </div>
}