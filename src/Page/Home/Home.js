import React, { useEffect } from 'react'
import Home from './Page1/Home'
import Page2 from './Page2/Page2'
import Page4 from './Page4/Page4'
import Page7 from './Page7/Page7'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const HomeDefault = () => {

  const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("allfundraiserCategory", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("allfundraiserCategory", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "allfundraiserCategory",
        offset: -80
      })
    );
  }

  if(window.location.pathname === "/allfundraiser"){
   
    scrollToWithContainer();
   
  }

  useEffect( () =>{
    scrollToWithContainer()
  },[window.location.pathname] )

  return (
    <>
      <Home />
      <Page2 />
      <Page4 />
      <Page7 />
    </>
  )
}

export default HomeDefault