"use client"

import "./../styles.css"
import Nav from "./../components/Nav"
import { useEffect } from "react"
import Image from "next/image"
import AnantBoot from "./../../../public/assets/AnantBoot.png"

export default function Page() {

  useEffect(() => {
    const navs = document.getElementsByClassName('navPopUp');
    if (navs.length > 0) {  
      navs[0].classList.toggle('height0');
    }

    const hero = document.getElementById('hero');
    if(hero != null)
      // setTimeout(() => {
        hero.style.boxShadow = "0 10px 10px rgb(238, 238, 238)";
      // }, 1000);

  }, []);

  return (
    <>
      <div id="home-portfolio">
        <div id="nav-portfolio">
          <Nav />
        </div>
        <div id="hero-portfolio" style={{width:"100vw"}}>
            <section className="main nopad-b">
    			<div className="row flex" style={{maxWidth:"100vw",background:"white", padding:"5vh 2vw 5vh 10vw", boxShadow:"0px 5px 10px 1px #efefef"}}>
    				<div id="text-main" className="col-5 text-main" style={{visibility: "visible", right: "0%", opacity: 1, alignContent:"center"}}>
    					<h1 style={{fontSize:"8vw", fontWeight:"1100", letterSpacing:"-6px", color:"#343434", marginTop:"-10vh"}}>Portfolio.</h1>
    					<p style={{fontSize:"2vw", fontWeight:"lighter", letterSpacing:"1px", color:"#999", marginBottom:"5vh"}} className="intro">I am a Terminal Lover you can browse to some of my Latest Work.</p>
    					<p style={{fontSize:"1.4vw", fontWeight:"lighter", letterSpacing:"0px", color:"#888"}} className="description">I’ve worked for startup and have led projects to manange and create meaningfull projects for End User.</p>
    				</div>
    				<div id="img-main" className="col-6 align-c" style={{visibility: "visible", width:"100vw", left: "0%", opacity: 1, padding:"3vh 3vw"}}>
    					<Image className="major preload" style={{height:"60vh", width:"80vh"}} src={AnantBoot} />
    				</div>
    			</div>
    		</section>
        </div>
        <div id="body-portfolio">

        </div>
        <div id="footer-portfolio">

        </div>
      </div>
    </>
  );
}
