// src/components/ui/button.tsx
import * as React from 'react'
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ className = '', ...props }: ButtonProps) {
  return <button className={className} {...props} />
}
export default Button