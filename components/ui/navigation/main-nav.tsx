"use client";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { assets } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";

export default function MainNav() {
  return (
    <div className="hidden w-full justify-between md:flex">
      <NavLink href="/">
        <Image src={assets.logo} width={145} height={145} alt="logo" priority />
      </NavLink>
      <nav className="flex items-center space-x-6 uppercase">
        {siteConfig.navigation.map((link) => (
          <NavLink key={link.url} href={link.url}>
            {link.name}
          </NavLink>
        ))}
        <Button variant="outline" className="px-12 font-semibold">
          CONTACTO
        </Button>
      </nav>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  toggleOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavLink({
  href,
  className,
  children,
  toggleOpen,
  ...props
}: NavLinkProps): JSX.Element | null {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "hover:text-foreground/80 transition-colors",
        pathname === href ? "font-semibold text-primary" : "text-foreground/60",
        className,
      )}
      onClick={toggleOpen !== undefined ? () => toggleOpen(false) : undefined}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
