import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";


const Header = ()=> {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*Logo*/}
                <Link href="/">
                   <h1 className="text-4xl font-semibold">
                    Hemant<span className="text-accent-hover">.</span>
                   </h1>
                </Link>
                {/* hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                   <Nav/>
                   <Link href="mailto:hemant.dev.071@gmail.com">
                     <Button>Hire Me</Button>
                   </Link>
                 </div>
                   {/* Mobile Navigation */}
                <div className="xl:hidden">
                     <MobileNav/>
                 </div>

               
                
            </div>
        </header>
    )
}
export default Header;