export interface SpritesMap {
  sprite: 'check' | 'chevron-down' | 'menu' | 'minus' | 'plus' | 'trash'
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  sprite: ['check', 'chevron-down', 'menu', 'minus', 'plus', 'trash']
}
