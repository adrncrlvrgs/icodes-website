/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 kitchen8.glb
*/

import React, { useRef, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Kitchen8 = forwardRef(({ events, props, action, rotate, color }, ref) => {
	const { nodes, materials } = useGLTF('/kitchen8.glb');
  return (
    <group
    dispose={null}
    {...props}
    {...events}
    ref={ref}
    onClick={action}
    rotation-y={rotate}>
      <group position={[0, 1.022, 0]} rotation={[-Math.PI / 2, 0, -1.54]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.material}  material-color={color.Color ? color.Color : null}/>
          <mesh geometry={nodes.defaultMaterial003.geometry} material={materials.material}  material-color={color.Handle ? color.Handle : null} />
          <mesh geometry={nodes.defaultMaterial001.geometry} material={materials.material}  material-color={color.Sink ? color.Sink : null}/>
          <mesh geometry={nodes.defaultMaterial002.geometry} material={materials.material} />
        </group>
      </group>
    </group>
  )
});

useGLTF.preload('/kitchen8.glb');

export default Kitchen8;
