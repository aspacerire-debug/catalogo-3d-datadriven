// src/ui/three/ThreeViewer.tsx
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Componente ThreeViewer
 * -----------------------------------------------
 * Muestra un entorno 3D básico para pruebas o visualización.
 */
export default function ThreeViewer() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        shadows
        camera={{ position: [3, 2, 5], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          {/* Modelo de prueba */}
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color="#007bff"
              roughness={0.4}
              metalness={0.8}
            />
          </mesh>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom enablePan />
      </Canvas>
    </div>
  )
}

      </Canvas>
    </div>
  )
}
