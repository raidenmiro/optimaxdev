export interface SpritesMap {
  sprite:
    | 'arrow'
    | 'check'
    | 'chevron-down'
    | 'menu'
    | 'minus'
    | 'plus'
    | 'trash'
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  sprite: ['arrow', 'check', 'chevron-down', 'menu', 'minus', 'plus', 'trash']
}
