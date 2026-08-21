"use client";
import Link from "next/link";
import {useEffect,useRef,useState} from "react";

export default function Header(){
  const[open,setOpen]=useState(false);
  const headerRef=useRef<HTMLElement>(null);
  useEffect(()=>{
    const outside=(event:MouseEvent|TouchEvent)=>{if(open&&headerRef.current&&!headerRef.current.contains(event.target as Node))setOpen(false)};
    const escape=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};
    document.addEventListener("mousedown",outside);document.addEventListener("touchstart",outside);document.addEventListener("keydown",escape);
    document.body.classList.toggle("menuOpen",open);
    return()=>{document.removeEventListener("mousedown",outside);document.removeEventListener("touchstart",outside);document.removeEventListener("keydown",escape);document.body.classList.remove("menuOpen")};
  },[open]);
  const close=()=>setOpen(false);
  return <><div className="topbar"><span>📍 123 Soho Road, Birmingham B21 9QP</span><span>☎ 0121 456 7890</span><span>✉ info@birminghamautocare.co.uk</span><span>◷ Mon–Fri: 8:00am–5:30pm</span></div><header ref={headerRef} className="header"><Link className="brand" href="/" onClick={close}>BIRMINGHAM AUTO CARE</Link><button className={`menu ${open?"active":""}`} aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(value=>!value)}><span/><span/><span/></button><nav className={open?"nav open":"nav"} onClick={close}><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About Us</Link><Link href="/#reviews">Reviews</Link><Link href="/contact">Contact</Link><Link className="navCta" href="/book">Book a Service</Link></nav></header></>
}
