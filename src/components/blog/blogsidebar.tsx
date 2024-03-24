"use client"

import { usePathname } from "next/navigation"


export interface DocsSidebarNavProps {
  items: []
}

export function BlogSidebarNav() {
  const pathname = usePathname()

  return  (
    <div className="w-full bg-slate-500">
      
    </div>
  ) 
}
