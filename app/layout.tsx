import NolixiaPreview from "./nolixia-preview";
import type { Metadata } from "next";
import "./globals.css";
import "./motion.css";
import MotionEffects from "@/components/MotionEffects";
export const metadata: Metadata = {robots:{index:false,follow:true},metadataBase:new URL("https://birmingham-auto-car-website.netlify.app"),title:{default:"Birmingham Auto Care",template:"%s | Birmingham Auto Care"},description:"Nolixia website design preview with illustrative business content. Explore the sample and discuss a website for your business.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><NolixiaPreview/><MotionEffects/>{children}<NolixiaPreview footer/></body></html>}
