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



//Time
let time = Date.now()


//Animations
const tick = () => {

    //Time
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    // Update objects
    cube.rotation.y += .001 * deltaTime

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()