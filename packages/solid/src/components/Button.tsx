import { JSXElement } from 'solid-js'

type Props = {
  children: JSXElement
}

export function Button({ children }: Props) {
  return (
    <button className="p-2 bg-green-500 rounded text-white">{children}</button>
  )
}
