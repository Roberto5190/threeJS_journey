import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// handle resize
window.addEventListener('resize', () => {
    // Update resize
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //configuramos el pixel ratio entre el valor del dispositivo y 2
} )

// Handle fullscreen
window.addEventListener('dblclick', () => {

    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {

        if(canvas.requestFullscreen){

            canvas.requestFullscreen()

        } else if(canvas.webkitRequestFullscreen) {

            canvas.webkitRequestFullscreen()
        }

    } else {
        document.exitFullscreen()
    }

    
})



// Canvas 
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// Objects
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(cube)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, .1, 100)
camera.position.z = 3

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //configuramos el pixel ratio entre el valor del dispositivo y 2


// Clock
const clock = new THREE.Clock()

// Animations
const tick = () => {
    
    //Clock
    const elapsedTime = clock.getElapsedTime(1)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()