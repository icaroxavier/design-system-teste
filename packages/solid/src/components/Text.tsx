import { JSXElement } from 'solid-js'

type Props = {
  children: JSXElement
}

export function Text({ children }: Props) {
  return <span>{children}</span>
}
