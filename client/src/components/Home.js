import React from "react"
import classes from './Home.module.css'
import Button  from "./Layout/Button"

function Home(props){
  return(
    <div className={classes.home}>
    <span className={classes.heading}>
    <h1>
    <span>
      Discover and share the world's best photo
    </span>
    </h1>
    <p >Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography.
</p>
    <Button onClick={props.onClick}>Upload a photo</Button>
    </span>
   <span>
    <div class='pixels-photo'>
      <img className={classes.img} src='https://drscdn.500px.org/photo/76011593/m%3D900/v2?sig=089b4d502560bb5760219f7bf614aaae7c7135e3c3e8070a00c82efe56029b44' alt='The Peloton by Dean Moore on 500px.com' />
   
    </div>
    </span>
    </div>
    
  )

}


export default Home