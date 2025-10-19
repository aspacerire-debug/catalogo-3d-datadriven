import React from 'react'
import ThreeViewer from '../three/ThreeViewer'

interface ProductProps {
  data: {
    title: string
    description?: string
    image?: string
  }
}

/**
 * Product
 * -----------------------------------------------
 * Muestra un producto con imagen, texto y un visor 3D integrado.
 */
export default function Product({ data }: ProductProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1.5rem',
        background: '#111',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)',
        color: '#fff',
      }}
    >
      <h2>{data.title}</h2>

      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          style={{
            maxWidth: '250px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.4)',
          }}
        />
      )}

      {data.description && <p>{data.description}</p>}

      {/* Render del visor 3D */}
      <div style={{ width: '400px', height: '300px' }}>
        <ThreeViewer />
      </div>
    </div>
  )
}

