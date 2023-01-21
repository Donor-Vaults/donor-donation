import React from 'react'
import Register1 from './Registeration1'
import Register2 from './Registration2/Registration2'
import Register3 from './Registration3/Registration3'
import Register4 from './Registration4'
import Register4a from './Registration4a'
import Register5 from './Registration5/Registration5'
import Register6 from './Registration6/Registration6'
import Register9 from './Registration9/Registration9'
import { useSelector } from 'react-redux'
import Fourm from '../Fundraise/Fourm'
import FourmPage1 from '../Fundraise/FourmPage1'
import FourmPage2 from '../Fundraise/FourmPage2'
import FourmPage3 from '../Fundraise/FourmPage3'
import FourmPage4 from '../Fundraise/FourmPage4'
import FourmPage5 from '../Fundraise/FourmPage5'
import FourmPage6 from '../Fundraise/FourmPage6'

const RegisterationHome = () => {

  let PathName = "F1"

  
 // console.log(PathName)

  return (
  
    <>
      

      {
          PathName === 'Registration2' ? <Register2 /> :
          PathName === 'Registration3' ? <Register3 /> :
          PathName === 'Registration4' ? <Register4 /> :
          PathName === 'Registration5' ? <Register4a /> :
          PathName === 'Registration6' ? <Register5 /> :
          PathName === 'Registration7' ? <Register6 /> :
          PathName === 'Registration8' ? <Register9 /> : 
         
          PathName === 'Back1' ? <Register1 /> :
          PathName === 'Back2' ? <Register2 /> :
          PathName === 'Back3' ? <Register3 /> :
          PathName === 'Back4' ? <Register4 /> :
          PathName === 'Back5' ? <Register5 /> :
          PathName === 'Back6' ? <Register6 /> :

          PathName === 'F1' ? <Fourm /> :
          PathName === 'F2' ? <FourmPage1 /> :
          PathName === 'F3' ? <FourmPage2 /> :
          PathName === 'F4' ? <FourmPage3 /> :
          PathName === 'F5' ? <FourmPage4 /> :
          PathName === 'F6' ? <FourmPage5 /> :
          PathName === 'F7' ? <FourmPage6 /> :<Register1 />
      } 
    </>
  )
}

export default RegisterationHome