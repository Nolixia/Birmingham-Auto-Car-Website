"use client";

import {useEffect} from "react";

const targets = [
  ".heroCopy > *", ".innerHero > div > *", ".bookingHero > div > *",
  ".pageTitle > *", ".serviceStrip > *", ".metrics > *", ".split > *",
  ".servicesList article > *", ".reviewGrid > *", ".values > div > *",
  ".contactGrid > *", ".bookingForm > *", ".success > *", ".cta > *", "footer > *",
].join(",");

export default function MotionEffects(){
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        // Keep observing. Removing this class after the element leaves the
        // viewport makes the animation play again on the next approach.
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },{
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    });

    const register = (root:ParentNode=document)=>{
      root.querySelectorAll<HTMLElement>(targets).forEach((element,index)=>{
        if(element.dataset.motionReady) return;
        element.dataset.motionReady = "true";
        element.classList.add("reveal-on-scroll");
        element.style.setProperty("--reveal-delay", `${(index%4)*105}ms`);
        observer.observe(element);
      });
    };

    register();
    const mutationObserver = new MutationObserver(()=>register());
    mutationObserver.observe(document.body,{childList:true,subtree:true});

    return()=>{
      observer.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  },[]);

  return null;
}
