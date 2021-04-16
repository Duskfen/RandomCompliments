import React, { Component, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import teststyle from '../styles/test.module.scss'
import Compliments from './compliments.json'



export default function Test() {
   const href = useRef()
   const FrontBlobs = useRef()
   const BackBlobs = useRef()
   var StopBlobs = false;
   const parallelBlobs = 4;
   const messages = Compliments.anytime;
   var currentmessage = useState(messages[Math.floor(Math.random() * messages.length)]);
   var isWindowActive = true;

   const blobs = [
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M77.76,19.65h122a38,38,0,0,1,19.91,5.43c8.49,5.25,14.26,13.38,15.41,22.36,1.75,13.7-7.51,27.58-22.46,33.46a37.88,37.88,0,0,1-13.82,2.49H77.66a37.78,37.78,0,0,1-19.35-5.1C48,72.12,41.53,61.36,42.14,49.89a30.26,30.26,0,0,1,8.52-19.16C57.44,23.57,67.42,19.65,77.76,19.65Z"/></svg>`,
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M120.09,12.74h89.22a21.14,21.14,0,0,1,14.56,6c6.21,5.81,10.44,14.83,11.27,24.78,1.29,15.19-5.48,30.58-16.42,37.09a19.61,19.61,0,0,1-10.1,2.76H120a20.91,20.91,0,0,1-14.15-5.65C98.32,70.9,93.6,59,94.05,46.26A43.19,43.19,0,0,1,100.27,25C105.23,17.09,112.53,12.74,120.09,12.74Z"/></svg>`,
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M127.86,35.2h83.21a24.22,24.22,0,0,1,24.08,21c1.2,10.36-5.11,20.86-15.31,25.3a23.62,23.62,0,0,1-9.42,1.88H127.8a23.85,23.85,0,0,1-13.2-3.85,24.55,24.55,0,0,1-11-21.48A24.1,24.1,0,0,1,127.86,35.2Z"/></svg>`,
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M77.76,19.65h122a38,38,0,0,1,19.91,5.43c8.49,5.25,14.26,13.38,15.41,22.36,1.75,13.7-7.51,27.58-22.46,33.46a37.88,37.88,0,0,1-13.82,2.49H77.66a37.78,37.78,0,0,1-19.35-5.1C48,72.12,41.53,61.36,42.14,49.89a30.26,30.26,0,0,1,8.52-19.16C57.44,23.57,67.42,19.65,77.76,19.65Z"/></svg>`,
      `<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.21 103.05"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M64.84,16.71H234.21a64.5,64.5,0,0,1,27.63,5.85c11.79,5.65,19.8,14.42,21.4,24.09,2.43,14.77-10.42,29.73-31.17,36.06a66,66,0,0,1-19.19,2.69H64.7a64.55,64.55,0,0,1-26.85-5.49C23.52,73.26,14.55,61.66,15.4,49.29c.54-7.74,4.88-15,11.82-20.65C36.64,20.93,50.49,16.71,64.84,16.71Z"/></svg>`
   ]

   useEffect(() => {

      window.onfocus = () => isWindowActive = true;
      window.onblur = () => isWindowActive = false;

      // RandomlyAnimateDrop();

      href.current.animate([
         { top: 0},
         { top: `15px`},
         { top: 0},
      ], { duration: 900, easing: "ease-in-out", iterations: Infinity })

      href.current.animate([
         {scale: 0.95},
         {scale: 1},
         {scale: 0.95},
      ],{duration: 900, easing: "ease-in-out", iterations: Infinity})

      document.body.animate([
         { backgroundColor: "#3498db" },
         { backgroundColor: "#2980b9" },
         { backgroundColor: "#169BA0" },
         { backgroundColor: "#3498db" },
      ], { duration: 6000, easing: "linear", iterations: Infinity })

      HandleBlobSpawning(parallelBlobs);
   }, [])

   //min and max are included
   const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

   const HandleBlobSpawning = (spawncount = 1) => {
      // if (spawncount > 0) {
      if(StopBlobs) return;
      if(isWindowActive) spawnRandomBlob();

      for(let i = 0; i < spawncount; i++){
         if (!StopBlobs) {
            setTimeout(HandleBlobSpawning, randomIntFromInterval(100,  randomIntFromInterval(200, 8000)))
         }
      }

      // spawnRandomBlob();
      // setTimeout(() => {H'andleBlobSpawning(spawncount - 1)}, randomIntFromInterval(0, 1000));
      // }


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
         if (randomIntFromInterval(0, 99) > 90) duration = randomIntFromInterval(8500, 12000)
         else duration = randomIntFromInterval(1200, 12000)
      }
      let el = document.createElement("div")
      el.innerHTML = blob;
      el = toAdd.appendChild(el);

      el.classList.add("blob")
      el.style.top = "100vh";
      el.style.left = randomIntFromInterval(0, document.body.clientWidth) + "px"
      //el.style.scale = (1 / duration) * Math.sqrt(duration) * randomIntFromInterval(50, 100);
      el.style.scale = (1 / duration) * Math.log(duration) * randomIntFromInterval(document.body.clientWidth*0.2, document.body.clientWidth*0.4);
      let anim = el.animate([
         { top: "100vh" },
         { top: -el.clientHeight + "px" }
      ], { duration: duration, easing: "linear" })




      anim.onfinish = () => {
         el.remove();
         // !StopBlobs? setTimeout(spawnRandomBlob, randomIntFromInterval(0, 100)):null
      }
   }

   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <div ref={FrontBlobs} className={teststyle.blobContainer}>

            </div>
            <h1 className={styles.title}>{currentmessage}</h1>
            <img src={"/images/drop.svg"} ref={href} className={teststyle.oagsimg}></img>
            <div ref={BackBlobs} className={teststyle.blobContainer} id={teststyle.BackBlobContainer}>

            </div>
         </main>
      </div>
   )
}
