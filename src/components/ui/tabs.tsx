// src/components/ui/tabs.tsx
import * as React from 'react'

type Ctx = { value: string; setValue: (v: string) => void }
const TabsCtx = React.createContext<Ctx | null>(null)

export function Tabs({ defaultValue, onValueChange, className = '', children }:{
  defaultValue: string; onValueChange?: (v:string)=>void; className?: string; children: React.ReactNode
}) {
  const [value, setValue] = React.useState(defaultValue)
  const update = (v:string) => { setValue(v); onValueChange?.(v) }
  return <div className={className}><TabsCtx.Provider value={{ value, setValue: update }}>{children}</TabsCtx.Provider></div>
}

export function TabsList({ className = '', children, ...rest }:React.HTMLAttributes<HTMLDivElement>) {
  return <div role="tablist" className={className} {...rest}>{children}</div>
}

export function TabsTrigger({ value, className = '', children, onClick, ...rest }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = React.useContext(TabsCtx)!; const active = ctx.value === value
  return (
    <button role="tab" aria-selected={active} data-state={active ? 'active':'inactive'}
      className={className}
      onClick={(e)=>{ ctx.setValue(value); onClick?.(e) }} {...rest}>
      {children}
    </button>
  )
}

export function TabsContent({ value, className = '', children, ...rest }:
  React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = React.useContext(TabsCtx)!; const hidden = ctx.value !== value
  return <div role="tabpanel" hidden={hidden} className={className} {...rest}>{children}</div>
}

export default Tabs