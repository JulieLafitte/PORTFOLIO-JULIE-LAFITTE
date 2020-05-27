// import 'css/style.css'
// import * as THREE from 'three'

/**
 * Lazy load
 */
const lazyLoadElements = document.querySelectorAll('.lazy-load')

for(const _lazyLoadElement of lazyLoadElements)
{
    const loaded = () =>
    {
        window.setTimeout(() =>
        {
            _lazyLoadElement.classList.add('loaded')
        }, Math.random() * 1000)
    }

    if(_lazyLoadElement.complete)
    {
        loaded()
    }
    else
    {
        _lazyLoadElement.addEventListener('load', loaded)
    }
}

/**
 * Reveal
 */

 const revealElements = document.querySelectorAll('.reveal')
 const revealItems = []

 const scrollY=window.scrollY;

 for (const _element of revealElements)
 {
     const item = {}
     item.revealed = false
     item.element=_element;
     
     const bounding = _element.getBoundingClientRect();
     item.top = bounding.top + scrollY;
     item.height = bounding.height

     revealItems.push(item)
 }


window.addEventListener('scroll', () =>
{
    for(const _item of revealItems)
    {
        if(_item.revealed == false && window.scrollY +window.innerHeight > _item.top + _item.height *0.5)
        {
            _item.revealed = true
            _item.element.classList.add('revealed')
        }
    }
})

// /**
//  * WebGL
//  */

// const canvas = document.querySelector('canvas.webgl')
// const canvasBounding = canvas.getBoundingClientRect()

//  const scene = new THREE.Scene()

//  const camera = new THREE.PerspectiveCamera(75, canvasBounding.width / canvasBounding.height, 0.01, 100) 
// //  (75 représente les field of view)
// camera.position.z = 2
// scene.add(camera)

// /**
//  * Objects
//  */

// //LinkedIn
// const linkedin = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(1, 1, 1),
//     new THREE.MeshNormalMaterial()
// );

// linkedin.position.set(-3, 0, 0)

// scene.add(linkedin)

// //GitHub
// const github = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(1, 1, 1),
//     new THREE.MeshNormalMaterial()
// );

// github.position.set(-1, 0, 0)

// scene.add(github)

// //Twitter
// const twitter = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(1, 1, 1),
//     new THREE.MeshNormalMaterial()
// );

// twitter.position.set(1, 0, 0)

// scene.add(twitter)

// //Mail
// const mail = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(1, 1, 1),
//     new THREE.MeshNormalMaterial()
// );

// mail.position.set(3, 0, 0)

// scene.add(mail)


// const renderer = new THREE.WebGLRenderer({ canvas: canvas})
// renderer.setSize(canvasBounding.width, canvasBounding.height)

// //Resize
// window.addEventListener('resize', () =>
// {
//     const canvasBounding = canvas.getBoundingClientRect()

//     camera.aspect = canvasBounding.width / canvasBounding.height
//     camera.updateProjectionMatrix()

//     renderer.setSize(canvasBounding.width, canvasBounding.height)
// })

// //Animation
// const tick = () =>
// {
//     // mail.rotation.y += 0.01

//     renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)
// }

// tick()

/**
 * Footer
 */

document.getElementById("gmail_icone").onclick=function(){
    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };
const copied =document.getElementById("copied_notification");

      copyToClipboard('lafittejuliemarie@gmail.com')
}