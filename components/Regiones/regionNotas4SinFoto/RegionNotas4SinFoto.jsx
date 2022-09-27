import Link from 'next/link'
import React from 'react'

export const RegionNotas4SinFoto = ({notas4SinFoto}) => {
  return (
    <ul>
    {notas4SinFoto.edges.map((item) => (
      <li>
        <Link href={`/notas/${item.node.slug}`}>
          <a>{item.node.title}</a>
        </Link>
      </li>
    ))}
  </ul>
  )
}