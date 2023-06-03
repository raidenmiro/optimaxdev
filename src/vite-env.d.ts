/// <reference types="vite/client" />

declare module '*.css' {
  const styles: { [className: string]: string }
  // eslint-disable-next-line import/no-default-export
  export default styles
}

declare const CURRENCY_SYMBOL: string
