import { JSXElement } from 'solid-js'

type Props = {
  children: JSXElement
}

export function Button({ children }: Props) {
  return <button>{children}!</button>
}
