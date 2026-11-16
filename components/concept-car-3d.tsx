"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import type { MutableRefObject } from "react";

/**
 * A custom, procedural concept coupe, not a depiction of any vehicle in stock.
 * The model is built from Three.js geometry: no remote model assets to fail loading.
 */
function Wheel({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0.43, z]} rotation={[0, z < 0 ? Math.PI : 0, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.53, 0.53, 0.26, 48]} />
        <meshStandardMaterial color="#090e14" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0, 0.145]}>
        <circleGeometry args={[0.37, 48]} />
        <meshStandardMaterial color="#212930" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0.165]}>
        <torusGeometry args={[0.345, 0.035, 10, 48]} />
        <meshStandardMaterial color="#81919e" metalness={0.9} roughness={0.23} />
      </mesh>
      {Array.from({ length: 10 }, (_, i) => (
        <mesh key={i} position={[0, 0, 0.172]} rotation={[0, 0, (i * Math.PI) / 10]}>
          <boxGeometry args={[0.044, 0.58, 0.024]} />
          <meshStandardMaterial color="#687783" metalness={0.85} roughness={0.3} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.195]}>
        <cylinderGeometry args={[0.092, 0.092, 0.065, 24]} />
        <meshStandardMaterial color="#bfcbd1" metalness={0.85} roughness={0.2} />
      </mesh>
    </group>
  );
}

function ConceptCoupe() {
  const bodyGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-2.88, 0.38);
    shape.bezierCurveTo(-2.97, 0.52, -2.92, 0.68, -2.60, 0.79);
    shape.lineTo(-1.65, 0.86);
    shape.bezierCurveTo(-1.20, 0.9, -1.10, 1.26, -0.66, 1.54);
    shape.bezierCurveTo(-0.34, 1.78, 0.48, 1.77, 0.83, 1.54);
    shape.lineTo(1.43, 1.04);
    shape.lineTo(2.53, 0.81);
    shape.bezierCurveTo(2.9, 0.75, 3.01, 0.57, 2.8, 0.36);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 2.05,
      steps: 1,
      bevelEnabled: true,
      bevelSize: 0.1,
      bevelThickness: 0.09,
      bevelSegments: 4,
      curveSegments: 14
    });
    geo.translate(0, 0, -1.025);
    return geo;
  }, []);

  const windows = useMemo(() => {
    const rear = new THREE.Shape();
    rear.moveTo(-0.67, 1.1);
    rear.lineTo(-0.38, 1.49);
    rear.lineTo(0.13, 1.5);
    rear.lineTo(0.13, 1.07);
    rear.closePath();
    const front = new THREE.Shape();
    front.moveTo(0.22, 1.49);
    front.lineTo(0.68, 1.49);
    front.lineTo(1.22, 1.07);
    front.lineTo(0.22, 1.07);
    front.closePath();
    return [new THREE.ShapeGeometry(rear), new THREE.ShapeGeometry(front)];
  }, []);

  return (
    <group>
      <mesh geometry={bodyGeometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#9da9b3"
          metalness={0.68}
          roughness={0.27}
          clearcoat={0.9}
          clearcoatRoughness={0.18}
        />
      </mesh>
      {[-1, 1].map((side) => (
        <group key={side}>
          {windows.map((geo, i) => (
            <mesh key={i} geometry={geo} position={[0, 0, side * 1.132]} rotation={[0, side < 0 ? Math.PI : 0, 0]}>
              <meshPhysicalMaterial color="#08121b" metalness={0.45} roughness={0.15} clearcoat={1} />
            </mesh>
          ))}
          <mesh position={[0.83, 1.06, side * 1.18]}>
            <boxGeometry args={[0.34, 0.12, 0.22]} />
            <meshStandardMaterial color="#65717c" metalness={0.7} roughness={0.26} />
          </mesh>
          <mesh position={[2.79, 0.67, side * 0.75]}>
            <boxGeometry args={[0.13, 0.076, 0.42]} />
            <meshBasicMaterial color="#f0ffff" toneMapped={false} />
          </mesh>
          <mesh position={[-2.79, 0.65, side * 0.78]}>
            <boxGeometry args={[0.12, 0.08, 0.38]} />
            <meshBasicMaterial color="#f04434" toneMapped={false} />
          </mesh>
          <mesh position={[0.27, 0.9, side * 1.124]}>
            <boxGeometry args={[0.018, 0.36, 0.015]} />
            <meshStandardMaterial color="#31414d" metalness={0.8} />
          </mesh>
          <mesh position={[0.27, 0.7, side * 1.13]}>
            <boxGeometry args={[1.1, 0.013, 0.015]} />
            <meshStandardMaterial color="#3c4c59" metalness={0.85} />
          </mesh>
        </group>
      ))}
      <mesh position={[2.9, 0.5, 0]}>
        <boxGeometry args={[0.035, 0.23, 1.40]} />
        <meshStandardMaterial color="#11181c" metalness={0.4} roughness={0.47} />
      </mesh>
      <mesh position={[2.63, 0.33, 0]}>
        <boxGeometry args={[0.45, 0.05, 1.85]} />
        <meshStandardMaterial color="#0c1117" metalness={0.4} roughness={0.45} />
      </mesh>
      <mesh position={[-2.76, 0.35, 0]}>
        <boxGeometry args={[0.27, 0.07, 1.86]} />
        <meshStandardMaterial color="#0e151c" metalness={0.5} />
      </mesh>
      <mesh position={[0.6, 1.71, 0]}>
        <boxGeometry args={[0.95, 0.025, 1.25]} />
        <meshStandardMaterial color="#b7c2cc" metalness={0.76} roughness={0.25} />
      </mesh>
      <mesh position={[-2.75, 0.98, 0]}>
        <boxGeometry args={[0.27, 0.05, 1.75]} />
        <meshStandardMaterial color="#151b22" metalness={0.55} />
      </mesh>
      <Wheel x={-1.91} z={1.1} />
      <Wheel x={1.91} z={1.1} />
      <Wheel x={-1.91} z={-1.1} />
      <Wheel x={1.91} z={-1.1} />
    </group>
  );
}

function AnimatedStage({
  progressRef,
  pointerRef
}: {
  progressRef: MutableRefObject<number>;
  pointerRef: MutableRefObject<[number, number]>;
}) {
  const car = useRef<THREE.Group>(null);
  const smooth = useRef(0);
  const lookTarget = useMemo(() => new THREE.Vector3(0, 0.75, 0), []);
  const camTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera, clock }, delta) => {
    const amt = 1 - Math.exp(-Math.min(delta, 0.08) * 2.3);
    smooth.current = THREE.MathUtils.lerp(smooth.current, progressRef.current, amt);
    const p = smooth.current;
    const cameraAngle = 0.75 + p * Math.PI * 1.63;
    const cameraDistance = 9.7 - Math.sin(p * Math.PI) * 1.35;
    const dx = pointerRef.current[0] * 0.27;
    const dy = pointerRef.current[1] * 0.12;
    camTarget.set(
      Math.sin(cameraAngle) * cameraDistance + dx,
      2.85 + p * 0.48 + dy,
      Math.cos(cameraAngle) * cameraDistance
    );
    camera.position.lerp(camTarget, Math.min(1, delta * 2.5));
    camera.lookAt(lookTarget);
    if (car.current) {
      car.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.025;
      car.current.rotation.y = Math.sin(clock.elapsedTime * 0.38) * 0.025;
    }
  });

  return (
    <>
      <ambientLight intensity={1.3} />
      <hemisphereLight args={["#d0e3f3", "#151b29", 1.7]} />
      <directionalLight position={[4, 9, 5]} intensity={3.4} color="#ffffff" />
      <directionalLight position={[-6, 6, -5]} intensity={3} color="#a2c4df" />
      <pointLight position={[-1, 2.7, -5]} intensity={36} color="#f14f3d" distance={16} />
      <spotLight position={[3, 7, -1]} intensity={90} angle={0.8} penumbra={1} distance={18} />
      <group ref={car}>
        <ConceptCoupe />
      </group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.105, 0]}>
        <circleGeometry args={[5.8, 96]} />
        <meshStandardMaterial color="#111921" roughness={0.3} metalness={0.63} transparent opacity={0.82} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.095, 0]}>
        <ringGeometry args={[4.1, 4.12, 100]} />
        <meshBasicMaterial color="#687680" transparent opacity={0.28} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.092, 0]}>
        <ringGeometry args={[5.35, 5.37, 100]} />
        <meshBasicMaterial color="#525d64" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      <gridHelper args={[20, 32, "#404e59", "#222e36"]} position={[0, -0.13, 0]} />
    </>
  );
}

export default function ConceptCar3D({
  progressRef,
  pointerRef
}: {
  progressRef: MutableRefObject<number>;
  pointerRef: MutableRefObject<[number, number]>;
}) {
  return (
    <Canvas
      camera={{ fov: 33, position: [6.6, 2.85, 7.25], near: 0.1, far: 60 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.65]}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <AnimatedStage progressRef={progressRef} pointerRef={pointerRef} />
      </Suspense>
    </Canvas>
  );
}