import React from "react";

import classes from './Features.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck ,faBullseye ,faHeart} from '@fortawesome/free-solid-svg-icons'


function Features(){
    return(
    <div className="container-fluid">
    <div className="row">
      <div className={`col-lg-4 ${classes.featurebx}` }>
      <FontAwesomeIcon icon={faCircleCheck} size="3x" className={classes.icons}/>

        <h3 className="feature-title">Easy to use.</h3>
        <p>So easy to use, even your dog could do it.</p>
      </div>
      <div className={`col-lg-4 ${classes.featurebx}`}>
      <FontAwesomeIcon icon={faBullseye}  size="3x" className={classes.icons}/>
        <h3 className="feature-title">Elite Clientele</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id consectetur ligula.</p>
      </div>
      <div className={`col-lg-4 ${classes.featurebx}`}>
      <FontAwesomeIcon icon={faHeart} size="3x"className={classes.icons}/>
        <h3 className="feature-title">Guaranteed to work.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id consectetur ligula..</p>
      </div>
    </div>
  </div>
    )

}


export default Features