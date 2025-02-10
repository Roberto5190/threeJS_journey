

import * as  THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Cursor
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - .5 //de esta manera el valor va de -0.5 a 0.5
    cursor.y = - (e.clientY / sizes.height - .5)
})


// Canvas
const canvas = document.querySelector('canvas.webgl')


//Scene
const scene = new THREE.Scene()


//Objects
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(cube)



//Camera
//.PerspectiveCamera(FOV(vertical angle, º), aspect ratio(width render/height render), near, far)
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, .1, 100) //(FOV 45-75)
camera.position.z = 3
camera.lookAt(cube.position)

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)




//Time
const clock = new THREE.Clock()

// Animation
const tick = () => {

    // Time
    const elapsedTime = clock.getElapsedTime(1)

    // Update Objects
    // cube.rotation.y = elapsedTime

    // Update Camera



    //Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)

}

tick()