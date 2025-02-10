import * as  THREE from 'three'


// Canvas
const canvas = document.querySelector('canvas.webgl')


//Scene
const scene = new THREE.Scene()


//Objects
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(cube)


// Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
camera.position.y = .5
scene.add(camera)

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
    cube.rotation.y = elapsedTime


    //Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)

}

tick()