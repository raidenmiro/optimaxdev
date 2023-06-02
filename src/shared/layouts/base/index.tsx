import type { ReactNode } from 'react'

import s from './index.module.css'

interface ChildrenProps {
  children: ReactNode
}

function Root({ children }: ChildrenProps) {
  return <main className={s.layout}>{children}</main>
}

function Cart({ children }: ChildrenProps) {
  return <section className={s.cart}>{children}</section>
}

function Summary({ children }: ChildrenProps) {
  return <section className={s.summary}>{children}</section>
}

function Goods({ children }: ChildrenProps) {
  return <section className={s.goods}>{children}</section>
}

export const Layout = Object.assign(Root, {
  Summary,
  Goods,
  Cart
})
