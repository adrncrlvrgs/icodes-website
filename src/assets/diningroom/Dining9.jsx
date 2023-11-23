/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 dining9.glb
*/

import React, { useRef, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Dining9 = forwardRef(({ events, props, action, rotate, color }, ref) => {
  const { nodes, materials } = useGLTF('/dining9.glb')
  return (
    <group
      dispose={null}
      {...props}
      {...events}
      ref={ref}
      onClick={action}
      rotation-y={rotate}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Material2.geometry} material={materials.material_1} material-color={color.Body ? color.Body : null}/>
        <mesh geometry={nodes.Material2001.geometry} material={materials.Translucent_Glass_Gray} material-color={color.Body ? color.Body : null}/>
        <mesh geometry={nodes.Material3.geometry} material={materials.Mirror_02} material-color={color.Body ? color.Body : null}/>
        <mesh geometry={nodes.Material3001.geometry} material={materials.material} material-color={color.Body ? color.Body : null}/>
      </group>
    </group>
  )
});

useGLTF.preload('/dining9.glb');

export default Dining9;
