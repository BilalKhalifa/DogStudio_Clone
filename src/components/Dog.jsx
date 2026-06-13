import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React from 'react'


const Dog = () => {

    const scene = useGLTF('/models/dog.drc.glb')

    return (
        <>
            <OrbitControls />
        </>
    )
}

export default Dog
