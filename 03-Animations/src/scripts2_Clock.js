import * as THREE from 'three'

//Canvas 
const canvas = document.querySelector('canvas.webgl')


//Scene
const scene = new THREE.Scene()


// Objects
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(cube)

//Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height )
camera.position.z = 3
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)


// Clock
const clock = new THREE.Clock()

//Animations
const tick = () => {

    //Clock
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // cube.rotation.y = elapsedTime
    // cube.rotation.x = elapsedTime * Math.PI * 2 //1 revolución por segundo
    cube.position.y = Math.sin(elapsedTime)
    cube.position.x = Math.cos(elapsedTime)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()