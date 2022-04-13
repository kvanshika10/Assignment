import React from "react";

import classes from './Features.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck ,faBullseye ,faHeart} from '@fortawesome/free-solid-svg-icons'


function Features(){
    return(
    <div className={`containerFluid ${classes.feature}`}>
    <h2 className={classes.h3}>What makes us different</h2>
    <div className={`row ${classes.row}`}>
      <div className={`col-lg-4 ${classes.featurebx}` }>
      <FontAwesomeIcon icon={faCircleCheck} size="3x" className={classes.icons}/>

        <h3 className={classes.title}>Easy to use.</h3>
        <p className={classes.p}>So easy to use, lorem ipsum hat .</p>
      </div>
      <div className={`col-lg-4 ${classes.featurebx}`}>
      <FontAwesomeIcon icon={faBullseye}  size="3x" className={classes.icons}/>
        <h3 className={classes.title}>Elite Clientele</h3>
        <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id consectetur ligula.</p>
      </div>
      <div className={`col-lg-4 ${classes.featurebx}`}>
      <FontAwesomeIcon icon={faHeart} size="3x"className={classes.icons}/>
        <h3 className={classes.title}>Guaranteed to work.</h3>
        <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id consectetur ligula..</p>
      </div>
    </div>
  </div>
    )

}


export default Features