import { forwardRef } from 'react'

type PropsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

export interface ViewOwnProps<E extends React.ElementType = React.ElementType> {
  as?: E
}

export type ViewProps<E extends React.ElementType> = ViewOwnProps<E> &
  Omit<PropsOf<E>, keyof ViewOwnProps>

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  ViewProps<E>

const defaultElement = 'div'

export const View = forwardRef(
  ({ as, ...restProps }: ViewOwnProps, ref: React.Ref<Element>) => {
    const Element = as || defaultElement
    return <Element ref={ref} {...restProps} />
  }
) as <E extends React.ElementType = typeof defaultElement>(
  props: ViewProps<E>
) => JSX.Element
