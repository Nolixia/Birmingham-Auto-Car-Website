import type { Metadata } from "next";
import "./globals.css";
import "./motion.css";
import MotionEffects from "@/components/MotionEffects";
export const metadata: Metadata = {title:{default:"Birmingham Auto Care",template:"%s | Birmingham Auto Care"},description:"Trusted MOT testing, diagnostics, servicing and car repairs in Birmingham.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><MotionEffects/>{children}</body></html>}
