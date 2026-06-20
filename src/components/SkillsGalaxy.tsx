import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Html, Sphere } from '@react-three/drei';

const skills = [
  { name: 'React.js', color: '#61DAFB', position: [2, 1, 0] },
  { name: 'TypeScript', color: '#3178C6', position: [-2, 2, -1] },
  { name: 'Java', color: '#E76F00', position: [0, -2, 1] },
  { name: 'Tailwind', color: '#38B2AC', position: [-2.5, -1, 0] },
  { name: 'Next.js', color: '#FFFFFF', position: [2.5, -1.5, -1] },
  { name: 'PostgreSQL', color: '#336791', position: [0, 2.5, 0] },
];

const SkillNode = ({ name, color, position }: any) => {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group position={position} ref={meshRef}>
      <Sphere args={[0.3, 32, 32]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
      </Sphere>
      <Html distanceFactor={10} position={[0, -0.6, 0]} center>
        <div className="text-white text-xs font-accent whitespace-nowrap bg-surface/80 px-2 py-1 rounded-md backdrop-blur-sm border border-white/10">
          {name}
        </div>
      </Html>
    </group>
  );
};

const Galaxy = () => {
  const groupRef = useRef<any>();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {skills.map((skill, index) => (
        <SkillNode key={index} {...skill} />
      ))}
    </group>
  );
};

const SkillsGalaxy = () => {
  return (
    <section id="skills" className="min-h-screen relative py-20 flex flex-col items-center">
      <div className="text-center z-10 mb-10">
        <h2 className="text-accent font-accent tracking-widest text-sm uppercase mb-2">Capabilities</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold">Skills <span className="text-gradient">Galaxy</span></h3>
        <p className="text-textSecondary mt-4 max-w-lg mx-auto font-body">
          An interactive constellation of technologies I use to build modern digital experiences.
        </p>
      </div>
      
      <div className="w-full h-[600px] relative z-10">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Galaxy />
        </Canvas>
      </div>
    </section>
  );
};

export default SkillsGalaxy;
