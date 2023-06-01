import cc from 'classcat'
import type { ComponentProps, ReactNode } from 'react'
import { forwardRef } from 'react'

import s from './index.module.css'

interface ChildrenProps {
  children: ReactNode
}

const Root = forwardRef<
  HTMLTableElement,
  ComponentProps<'table'> & ChildrenProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <table ref={forwardedRef} className={cc([className, s.table])} {...props}>
      {children}
    </table>
  )
})

const Head = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<'thead'> & ChildrenProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <thead ref={forwardedRef} className={cc([className, s.head])} {...props}>
      {children}
    </thead>
  )
})

const Body = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<'tbody'> & ChildrenProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <tbody ref={forwardedRef} className={cc([className, s.body])} {...props}>
      {children}
    </tbody>
  )
})

const Td = forwardRef<
  HTMLTableCellElement,
  ComponentProps<'td'> & ChildrenProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <td ref={forwardedRef} className={cc([className, s.td])} {...props}>
      {children}
    </td>
  )
})

export const Table = Object.assign(Root, {
  Body,
  Head,
  Td
})
