import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import teststyle from '../styles/test.module.scss'



export default function Test() {
   const href = useRef()
   const FrontBlobs = useRef()
   const BackBlobs = useRef()
   var StopBlobs = false;
   const parallelBlobs = 5;

   const blobsold = [
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M35.6,-28.7C47,-14,57.8,0.8,58.9,20.5C60,40.1,51.5,64.6,33.4,75.8C15.3,87,-12.3,84.9,-25.6,71.4C-39,58,-38.1,33.2,-37.7,14.4C-37.4,-4.4,-37.7,-17.4,-31.5,-30.8C-25.3,-44.3,-12.7,-58.3,-0.3,-58.1C12.1,-57.9,24.1,-43.4,35.6,-28.7Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M62.6,-45.8C77.2,-31.6,82.4,-5.8,77.6,18.7C72.8,43.2,58,66.4,37.9,74.5C17.7,82.6,-7.7,75.6,-29.5,64C-51.3,52.4,-69.6,36.2,-69.9,20.1C-70.3,4,-52.7,-12,-38.1,-26.3C-23.4,-40.5,-11.7,-53,6.1,-57.9C24,-62.8,47.9,-60.1,62.6,-45.8Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M39.4,-27.8C55.1,-11.8,74.5,4.8,73.2,19.3C72,33.8,50.1,46.1,30.1,51.6C10.1,57,-8,55.6,-21.4,47.8C-34.9,40.1,-43.7,26,-45.1,12.5C-46.4,-1.1,-40.2,-14.1,-31.5,-28.6C-22.7,-43,-11.4,-58.9,0.3,-59.1C11.9,-59.3,23.8,-43.9,39.4,-27.8Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M40.5,-34.2C50.7,-19.6,55.9,-2.8,51.8,10.4C47.7,23.7,34.2,33.4,21.2,37C8.2,40.5,-4.4,38,-23.9,34.4C-43.4,30.9,-69.7,26.4,-76.1,13.2C-82.5,-0.1,-68.9,-22.1,-52.9,-38.1C-36.9,-54.1,-18.4,-64,-1.6,-62.7C15.2,-61.4,30.4,-48.9,40.5,-34.2Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M28.2,-29C34.8,-14.3,37,-2.6,35,8.6C32.9,19.9,26.5,30.8,15.1,39.5C3.6,48.2,-12.9,54.7,-28.8,50.6C-44.6,46.5,-59.7,31.8,-60.3,17.2C-61,2.6,-47.1,-11.9,-34.6,-28C-22.1,-44.1,-11.1,-61.8,-0.1,-61.7C10.8,-61.7,21.6,-43.8,28.2,-29Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M29.8,-28.4C36.9,-14.9,39.7,-2.6,39,12.2C38.2,27,33.9,44.2,21.9,52.8C9.9,61.3,-9.7,61.2,-29.2,54.3C-48.7,47.3,-68,33.6,-74.1,14.7C-80.2,-4.3,-73.2,-28.5,-58.6,-43.8C-44.1,-59,-22,-65.4,-5.3,-61.1C11.3,-56.9,22.7,-42,29.8,-28.4Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M45.5,-31.2C58.5,-20,68.2,-1.1,64.6,14.8C61,30.6,44.1,43.5,24.2,54.9C4.3,66.3,-18.6,76.3,-30.5,68.6C-42.4,60.9,-43.4,35.5,-44.4,14.7C-45.5,-6,-46.8,-22.2,-39.4,-32.1C-32,-42,-16,-45.7,0.1,-45.8C16.3,-45.9,32.6,-42.4,45.5,-31.2Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M6.4,-14.1C8.3,-4.5,9.9,-2.3,12.7,2.8C15.5,7.9,19.5,15.7,17.6,31.6C15.7,47.4,7.9,71.3,0.5,70.8C-6.9,70.3,-13.7,45.5,-30,29.6C-46.2,13.7,-71.9,6.9,-78.5,-6.7C-85.2,-20.2,-72.9,-40.4,-56.6,-50C-40.4,-59.6,-20.2,-58.6,-9,-49.7C2.3,-40.7,4.5,-23.7,6.4,-14.1Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#ffffff" d="M25.4,-17.4C41.9,-8.9,70.4,-4.5,77.4,7C84.3,18.4,69.8,36.8,53.3,39.2C36.8,41.7,18.4,28.2,2.6,25.6C-13.2,23,-26.3,31.2,-37.6,28.8C-49,26.3,-58.5,13.2,-59.9,-1.5C-61.4,-16.1,-54.8,-32.2,-43.5,-40.7C-32.2,-49.3,-16.1,-50.3,-5.8,-44.5C4.5,-38.6,8.9,-26,25.4,-17.4Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#FFFFFF" d="M37.2,-25.4C52,-22.3,70.6,-11.2,69.1,-1.5C67.6,8.2,46,16.3,31.2,18.2C16.3,20,8.2,15.6,2.4,13.1C-3.3,10.7,-6.5,10.2,-16,8.4C-25.5,6.5,-41.3,3.3,-46.5,-5.2C-51.7,-13.7,-46.5,-27.5,-37,-30.6C-27.5,-33.7,-13.7,-26.1,-1.3,-24.8C11.2,-23.5,22.3,-28.5,37.2,-25.4Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#FFFFFF" d="M24.7,-15.5C40.5,-9,67.5,-4.5,75.9,8.3C84.2,21.2,73.9,42.4,58.1,47.5C42.4,52.6,21.2,41.7,-1,42.7C-23.2,43.7,-46.4,56.7,-48.7,51.5C-51,46.4,-32.5,23.2,-23.3,9.2C-14.1,-4.9,-14.3,-9.7,-12,-16.2C-9.7,-22.8,-4.9,-31,-0.2,-30.8C4.5,-30.6,9,-22,24.7,-15.5Z" transform="translate(100 100)" />
      </svg>`,
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"   >
         <path fill="#FFFFFF" d="M29.6,-33.7C30.1,-29.1,16.6,-14.5,11.7,-4.9C6.8,4.7,10.4,9.4,9.9,9.6C9.4,9.9,4.7,5.7,-0.2,6C-5.2,6.2,-10.4,10.9,-11.7,10.6C-13,10.4,-10.5,5.2,-19.6,-9.1C-28.6,-23.3,-49.3,-46.6,-47.9,-51.2C-46.6,-55.9,-23.3,-41.8,-4.4,-37.5C14.5,-33.1,29.1,-38.3,29.6,-33.7Z" transform="translate(100 100)" />
      </svg>`
   ]

   const blobs = [
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M77.76,19.65h122a38,38,0,0,1,19.91,5.43c8.49,5.25,14.26,13.38,15.41,22.36,1.75,13.7-7.51,27.58-22.46,33.46a37.88,37.88,0,0,1-13.82,2.49H77.66a37.78,37.78,0,0,1-19.35-5.1C48,72.12,41.53,61.36,42.14,49.89a30.26,30.26,0,0,1,8.52-19.16C57.44,23.57,67.42,19.65,77.76,19.65Z"/></svg>`,
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M120.09,12.74h89.22a21.14,21.14,0,0,1,14.56,6c6.21,5.81,10.44,14.83,11.27,24.78,1.29,15.19-5.48,30.58-16.42,37.09a19.61,19.61,0,0,1-10.1,2.76H120a20.91,20.91,0,0,1-14.15-5.65C98.32,70.9,93.6,59,94.05,46.26A43.19,43.19,0,0,1,100.27,25C105.23,17.09,112.53,12.74,120.09,12.74Z"/></svg>`,
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M127.86,35.2h83.21a24.22,24.22,0,0,1,24.08,21c1.2,10.36-5.11,20.86-15.31,25.3a23.62,23.62,0,0,1-9.42,1.88H127.8a23.85,23.85,0,0,1-13.2-3.85,24.55,24.55,0,0,1-11-21.48A24.1,24.1,0,0,1,127.86,35.2Z"/></svg>`,
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M77.76,19.65h122a38,38,0,0,1,19.91,5.43c8.49,5.25,14.26,13.38,15.41,22.36,1.75,13.7-7.51,27.58-22.46,33.46a37.88,37.88,0,0,1-13.82,2.49H77.66a37.78,37.78,0,0,1-19.35-5.1C48,72.12,41.53,61.36,42.14,49.89a30.26,30.26,0,0,1,8.52-19.16C57.44,23.57,67.42,19.65,77.76,19.65Z"/></svg>`,
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M64.84,16.71H234.21a64.5,64.5,0,0,1,27.63,5.85c11.79,5.65,19.8,14.42,21.4,24.09,2.43,14.77-10.42,29.73-31.17,36.06a66,66,0,0,1-19.19,2.69H64.7a64.55,64.55,0,0,1-26.85-5.49C23.52,73.26,14.55,61.66,15.4,49.29c.54-7.74,4.88-15,11.82-20.65C36.64,20.93,50.49,16.71,64.84,16.71Z"/></svg>`
   ]

   const RandomlyAnimateDrop = () => {
      let anim = href.current.animate([
         { top: 0, left: 0 },
         { top: `${randomIntFromInterval(-50,50)}px`},
         { top: 0, left: 0 },
      ], { duration: 3000, easing: "ease-in-out", iterations: 1 })

      anim.onfinish = RandomlyAnimateDrop;
   }  

   useEffect(() => {
     
      RandomlyAnimateDrop();

      document.body.animate([
         {backgroundColor: "#3498db"},
         {backgroundColor: "#2980b9"},
         {backgroundColor: "#16a085"},
         {backgroundColor: "#3498db"},
      ], {duration: 6000, easing:"linear", iterations: Infinity})

      HandleBlobSpawning(parallelBlobs);
   }, [])

   //min and max are included
   const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

   const HandleBlobSpawning = (spawncount = 0) => {
      if (spawncount > 0) {
         spawnRandomBlob();

         setTimeout(() => HandleBlobSpawning(spawncount - 1), randomIntFromInterval(0, 1000));
      }


   }
   const spawnRandomBlob = () => {

      let blob = blobs[Math.floor(Math.random() * blobs.length)]
      let toAdd;
      let duration = 0;

      if (randomIntFromInterval(0, 99) > 40) {
         toAdd = FrontBlobs.current;
         duration = randomIntFromInterval(500, 1200)
      }
      else {
         toAdd = BackBlobs.current;
         if(randomIntFromInterval(0, 99) > 90)duration = randomIntFromInterval(850, 12000)
         else duration = randomIntFromInterval(850, 1200)
      }
      let el = document.createElement("div")
      el.innerHTML = blob;
      el = toAdd.appendChild(el);

      el.classList.add("blob")
      el.style.top = "100vh";
      el.style.left = randomIntFromInterval(0, document.body.clientWidth) + "px"
      let anim = el.animate([
      { top: "100vh" },
      { top: -el.clientHeight + "px" }
      ], { duration: duration, easing: "linear" })




      anim.onfinish = () => {
         el.remove();
         !StopBlobs? setTimeout(spawnRandomBlob, randomIntFromInterval(0, 100)):null
      }
   }

   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <div ref={FrontBlobs} className={teststyle.blobContainer}>

            </div>
            <h1 className={styles.title}>Hetzi du bist ein Tropfen im Meer der Liebe</h1>
            <img src={"/images/drop.svg"} ref={href} className={teststyle.oagsimg}></img>
            <div ref={BackBlobs} className={teststyle.blobContainer} id={teststyle.BackBlobContainer}>

            </div>
         </main>
      </div>
   )
}
