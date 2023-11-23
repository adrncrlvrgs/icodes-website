/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 dining3.glb
*/

import React, { useRef, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Dining3 = forwardRef(({ events, props, action, rotate, color }, ref) => {
  const { nodes, materials } = useGLTF('/dining3.glb')
  return (
    <group
      dispose={null}
      {...props}
      {...events}
      ref={ref}
      onClick={action}
      rotation-y={rotate}
    >
      <group scale={0.01}>
        <mesh geometry={nodes.Chair_Material003_0.geometry} material={materials['Material.003']} position={[102.049, 53.907, -204.766]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.018, 96.701, 98.007]} />
        <mesh geometry={nodes.Chair001_Material003_0.geometry} material={materials['Material.003']} position={[102.049, 53.907, -204.766]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.018, 96.701, 98.007]} material-color={color.Chair ? color.Chair : null}/>
        <mesh geometry={nodes.Chair002_Material003_0.geometry} material={materials['Material.003']} position={[102.049, 53.907, -204.766]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.018, 96.701, 98.007]} material-color={color.Chair ? color.Chair : null}/>
        <mesh geometry={nodes.Chair003_Material003_0.geometry} material={materials['Material.003']} position={[102.049, 53.907, -204.766]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.018, 96.701, 98.007]} material-color={color.Chair ? color.Chair : null}/>
        <mesh geometry={nodes.Chair004_Material003_0.geometry} material={materials['Material.003']} position={[102.049, 53.907, -204.766]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.018, 96.701, 98.007]} material-color={color.Chair ? color.Chair : null}/>
        <mesh geometry={nodes.Chair005_Material003_0.geometry} material={materials['Material.003']} position={[102.049, 53.907, -204.766]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.018, 96.701, 98.007]} material-color={color.Chair ? color.Chair : null}/>
        <mesh geometry={nodes.Table_Table_0.geometry} material={materials.Table} position={[-6.526, 103.749, -219.921]} rotation={[-Math.PI / 2, 0, 0]} scale={100.131} material-color={color.Table ? color.Table : null} />
      </group>
    </group>
  )
});

useGLTF.preload('/dining3.glb');

export default Dining3;
