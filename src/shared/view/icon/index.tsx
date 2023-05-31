import type { CSSProperties, SVGProps } from 'react'

/* This is generated with `neodx/svg` */
import type { SpritesMap } from './sprite.h'

export type SpriteKey = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`
}[keyof SpritesMap]

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  path: SpriteKey
  height?: number
  width?: number
}

export function Icon({
  path,
  className,
  viewBox,
  height,
  width,
  ...props
}: IconProps) {
  const [spriteName, iconName] = path.split('/')

  const styles = {
    userSelect: 'none',
    fill: 'currentColor',
    display: 'inline-block',
    font: 'inherit',
    width: `${width}px`,
    height: `${height}px`
  } satisfies CSSProperties

  return (
    <svg
      style={styles}
      className={className}
      viewBox={viewBox}
      focusable="false"
      aria-hidden
      {...props}>
      <use xlinkHref={`/sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  )
}
