import cc from 'classcat'
import { useKeenSlider } from 'keen-slider/react'
import type { CSSProperties } from 'react'
import { useState } from 'react'

import type { ProductEntity } from '~/shared/api/schema'
import { View } from '~/shared/view/generic'
import { Icon } from '~/shared/view/icon'

import { CartCard } from '../card'
import s from './index.module.css'

const MAX_PROGRESS_CAROUSEL = 0.9

interface GoodsProps {
  products: ProductEntity[]
  onPay(slug: string, price: number): void
}

export function GoodsRow({ products, onPay }: GoodsProps) {
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 5
    },
    detailsChanged(slider) {
      setProgress(slider.track.details.progress)
    },
    created() {
      setLoaded(true)
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    }
  })

  return (
    <View className={s.container}>
      <View ref={sliderRef} className={cc(['keen-slider', s.row])}>
        {products.map((product) => (
          <div key={product.id} className={cc(['keen-slider__slide', s.item])}>
            <CartCard product={product} onPay={onPay} />
          </div>
        ))}
      </View>
      {loaded && instanceRef.current && (
        <>
          <Control
            type="decrease"
            disabled={currentSlide === 0}
            onPress={instanceRef.current.prev}
          />
          <Control
            type="increase"
            disabled={progress > MAX_PROGRESS_CAROUSEL}
            onPress={instanceRef.current.next}
          />
        </>
      )}
    </View>
  )
}

interface ControlProps {
  type: 'increase' | 'decrease'
  disabled: boolean
  onPress(): void
}

function Control({ type, disabled, onPress }: ControlProps) {
  const classes = type === 'increase' ? s.is_increase : s.is_decrease
  const styles = {
    '--arrow-deg': type === 'increase' ? '270deg' : '90deg'
  } as CSSProperties

  return (
    <View
      as="button"
      style={styles}
      disabled={disabled}
      onClick={onPress}
      className={cc([s.control, classes])}>
      <Icon path="sprite/arrow" />
    </View>
  )
}
