

import * as  THREE from 'three'


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
// // .OrthographicCamera(left, right, top, bottom, near, far)
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, .1, 100)


//.PerspectiveCamera(FOV(vertical angle, º), aspect ratio(width render/height render), near, far)
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, .1, 100) //(FOV 45-75)


// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
camera.lookAt(cube.position)

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
    // cube.rotation.y = elapsedTime

    // Update Camera
    camera.position.x = cursor.x * 10
    camera.position.y = cursor.y * 10
    camera.lookAt(cube.position)

    //Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)

}

tick()