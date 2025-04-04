'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Компонент модели чашки
const TeaCupModel: React.FC<{ 
  rotationSpeed?: number;
  hoverEffect?: boolean;
}> = ({ rotationSpeed = 0.005, hoverEffect = true }) => {
  const group = useRef<THREE.Group>(null);
  
  // В идеале мы бы загрузили настоящую GLTF модель чашки
  // Но для примера создадим простую геометрическую модель
  
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={group}>
      {/* Блюдце */}
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2.2, 0.2, 32]} />
        <meshPhongMaterial color="#f5f5f5" shininess={100} />
      </mesh>
      
      {/* Основание чашки */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.4, 1, 1.2, 32]} />
        <meshPhongMaterial color="#ffffff" shininess={100} />
      </mesh>
      
      {/* Ручка чашки */}
      <mesh position={[1.7, 0.3, 0]}>
        <torusGeometry args={[0.5, 0.1, 16, 32, Math.PI]} />
        <meshPhongMaterial color="#ffffff" shininess={100} />
      </mesh>
      
      {/* Чай в чашке */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[1.35, 1.35, 0.2, 32]} />
        <meshPhongMaterial color="#8B4513" shininess={50} />
      </mesh>
      
      {/* Пар над чаем (простая имитация) */}
      <group position={[0, 0.6, 0]}>
        <mesh position={[-0.3, 0.3, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent={true} opacity={0.6} />
        </mesh>
        <mesh position={[0.3, 0.5, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent={true} opacity={0.6} />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent={true} opacity={0.6} />
        </mesh>
      </group>
    </group>
  );
};

interface TeaCupProps {
  className?: string;
  enableControls?: boolean;
  rotationSpeed?: number;
  backgroundColor?: string;
}

const TeaCup: React.FC<TeaCupProps> = ({
  className = '',
  enableControls = false,
  rotationSpeed = 0.005,
  backgroundColor = 'transparent'
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas style={{ background: backgroundColor }}>
        <PerspectiveCamera makeDefault position={[0, 1, 8]} fov={40} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        
        <TeaCupModel rotationSpeed={rotationSpeed} />
        
        {enableControls && <OrbitControls />}
      </Canvas>
    </div>
  );
};

export default TeaCup; 