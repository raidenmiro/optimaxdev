import cc from 'classcat'
import type {
  ChangeEvent,
  ComponentProps,
  FocusEvent,
  FormEvent,
  ReactNode
} from 'react'
import { forwardRef, useRef } from 'react'

import { isIphone } from '~/shared/lib/platform'

import s from './index.module.css'

type BaseFieldProps = ComponentProps<'input'>

export interface FieldProps extends BaseFieldProps {
  onChangeValue?(text: string): void
  startIcon?: ReactNode
  endIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      onChangeValue,
      startIcon,
      endIcon,
      onChange,
      onInput,
      className,
      onBlur,
      ...props
    },
    forwardedRef
  ) => {
    const meta = useRef(document.querySelector('meta') as HTMLMetaElement)
    const originViewport = useRef(meta.current.content)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.target.value)
    }

    // prevent zoom when input is focus
    const handleInput = (e: FormEvent<HTMLInputElement>) => {
      if (isIphone) {
        const avoidZoom =
          originViewport.current + ',maximum-scale=1,user-scalable=0'

        meta.current.content = avoidZoom
      }

      onInput?.(e)
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (isIphone) {
        meta.current.content = originViewport.current
      }

      onBlur?.(e)
    }

    return (
      <div className={s.field}>
        {startIcon && <div>{startIcon}</div>}
        <input
          ref={forwardedRef}
          onBlur={handleBlur}
          onInput={handleInput}
          onChange={handleChange}
          className={cc([s.input, className])}
          {...props}
        />
        {endIcon && <div>{endIcon}</div>}
      </div>
    )
  }
)
Input.displayName = 'View.Field'

type BaseFieldLabelProps = Omit<ComponentProps<'label'>, 'htmlFor'>

export interface FieldLabelProps extends BaseFieldLabelProps {
  label: string
  forField: string
}

const Label = forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ label, forField, ...props }, forwardedRef) => {
    return <label htmlFor={forField} ref={forwardedRef} {...props} />
  }
)
Label.displayName = 'View.Field.Label'

export const Field = Object.assign(Input, { Label })
