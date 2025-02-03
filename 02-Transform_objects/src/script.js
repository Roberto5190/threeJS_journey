import * as THREE from 'three'

//canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color : 0xff0000 })
const mesh = new THREE.Mesh( geometry, material)

//Transform Object
mesh.position.x = 1     //eje x va hacia la derecha
mesh.position.y = 1     //eje y va hacia arriba
mesh.position.z = -1    //eje z va hacia atrás
mesh.position.set(.7, -.6, 1) //podemos cambiar los 3valores de una vez con .set(x, y, z)

scene.add(mesh)

console.log(mesh.position.length()) //devuelve la distancia entre la posición y el centro de la escena

//Axes Helper
const axesHelper = new THREE.AxesHelper(2) // .AxesHelper(longitud ejes)
scene.add(axesHelper)

//Scale
mesh.scale.x = 2
mesh.scale.y = .5
mesh.scale.z = .4
mesh.scale.set(2, .5, .4)

// Sizes
const sizes = {
    with: 800,
    height: 600
}

// Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.with/sizes.height)
camera.position.z = 3

scene.add(camera)

console.log(mesh.position.distanceTo(camera.position)) //dsevuelve la distancia entre el objeto y la camara

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.with, sizes.height)
renderer.render(scene, camera)

