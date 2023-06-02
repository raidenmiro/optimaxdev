const PROMOTIONS = [
  'Shopping discount',
  '25% off',
  'Free shipping',
  '30% off',
  'Merchant discount'
]

export function promotionsGet() {
  return Array.from(
    { length: Math.floor(Math.random() * 2) },
    () => PROMOTIONS[Math.floor(Math.random() * PROMOTIONS.length - 1)]
  )
}

export function maxGet() {
  return Math.floor(Math.random() * 10)
}
