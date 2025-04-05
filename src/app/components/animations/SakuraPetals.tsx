'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3 } from 'three';

interface PetalProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  speed: number;
  rotationSpeed: [number, number, number];
}

const Petal: React.FC<PetalProps> = ({ position, rotation, scale, speed, rotationSpeed }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const initialY = useRef(position[1]);
  const initialRotation = useRef(rotation);
  
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';
  const texture = useTexture(`${basePath}/images/sakura-petal.svg`);
  
  // Создаем материал с прозрачностью для лепестка
  const material = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      alphaTest: 0.5,
    });
    return mat;
  }, [texture]);
  
  useFrame((_state, delta) => {
    if (mesh.current) {
      // Вращение лепестка
      mesh.current.rotation.x += rotationSpeed[0] * delta;
      mesh.current.rotation.y += rotationSpeed[1] * delta;
      mesh.current.rotation.z += rotationSpeed[2] * delta;
      
      // Падение лепестка
      mesh.current.position.y -= speed * delta;
      
      // Легкое колебание по сторонам
      mesh.current.position.x += Math.sin(mesh.current.position.y * 0.1) * 0.02;
      
      // Сброс позиции, когда лепесток упал ниже определенной точки
      if (mesh.current.position.y < -10) {
        mesh.current.position.y = initialY.current;
        mesh.current.rotation.x = initialRotation.current[0];
        mesh.current.rotation.y = initialRotation.current[1];
        mesh.current.rotation.z = initialRotation.current[2];
      }
    }
  });

  return (
    <mesh ref={mesh} position={new Vector3(...position)} rotation={new THREE.Euler(...rotation)} scale={new Vector3(...scale)}>
      <planeGeometry args={[1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

interface PetalSystemProps {
  count?: number;
}

const PetalSystem: React.FC<PetalSystemProps> = ({ count = 30 }) => {
  // Генерируем случайные лепестки
  const petals = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = Math.random() * 20 + 5;
      const z = (Math.random() - 0.5) * 10;
      
      const rx = Math.random() * Math.PI;
      const ry = Math.random() * Math.PI;
      const rz = Math.random() * Math.PI;
      
      const s = 0.2 + Math.random() * 0.5;
      
      arr.push({
        position: [x, y, z] as [number, number, number],
        rotation: [rx, ry, rz] as [number, number, number],
        scale: [s, s, s] as [number, number, number],
        speed: 0.5 + Math.random() * 1.5,
        rotationSpeed: [
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3
        ] as [number, number, number],
        id: i  // Уникальный id для key
      });
    }
    return arr;
  }, [count]);

  return (
    <>
      {petals.map((props, i) => (
        <Petal
          key={props.id}
          position={props.position}
          rotation={props.rotation}
          scale={props.scale}
          speed={props.speed}
          rotationSpeed={props.rotationSpeed}
        />
      ))}
    </>
  );
};

interface SakuraPetalsProps {
  count?: number;
  className?: string;
}

const SakuraPetals: React.FC<SakuraPetalsProps> = ({ count = 30, className = '' }) => {
  return (
    <div className={`w-full h-full absolute pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <PetalSystem count={count} />
      </Canvas>
    </div>
  );
};

export default SakuraPetals; 