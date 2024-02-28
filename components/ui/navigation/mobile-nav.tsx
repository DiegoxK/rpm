"use client";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "./main-nav";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { assets, siteConfig } from "@/config/site";
import Image from "next/image";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <AiOutlineMenuUnfold size={22} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <NavLink href="/" toggleOpen={setOpen}>
          <Image src={assets.logo} width={100} height={100} alt="logo" />
        </NavLink>
        <ScrollArea className="my-4 h-[calc(100vh-6rem)] pl-6">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navigation.map((link) => (
              <NavLink
                key={link.url}
                href={link.url}
                toggleOpen={setOpen}
                className="w-full"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
