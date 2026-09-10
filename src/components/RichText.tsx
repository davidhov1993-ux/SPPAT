import type { ReactNode } from 'react'
import type { Link } from '../content/types'

export default function RichText({ text, links }: { text: string; links?: Link[] }) {
  if (!links || links.length === 0) return <>{text}</>

  let parts: ReactNode[] = [text]
  for (const link of links) {
    const anchor = link.anchor
    parts = parts.flatMap<ReactNode>((part, i) => {
      if (typeof part !== 'string' || !part.includes(anchor)) return [part]
      const index = part.indexOf(anchor)
      return [
        part.slice(0, index),
        <a key={`${link.url}-${i}`} href={link.url}>
          {anchor}
        </a>,
        part.slice(index + anchor.length)
      ]
    })
  }
  return <>{parts}</>
}
