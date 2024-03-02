"use client";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { assets } from "@/config/site";
import Link from "next/link";
import Image from "next/image";

export default function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      {/* <NavLink href="/" className="me-6">
        <Image src={assets.logo} width={100} height={100} alt="logo" priority />
      </NavLink> */}
      <nav className="flex items-center space-x-6 font-semibold uppercase">
        {siteConfig.navigation.map((link) => (
          <NavLink key={link.url} href={link.url}>
            {link.name}
          </NavLink>
        ))}
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
        pathname === href
          ? "font-bold text-primary underline decoration-4 underline-offset-4"
          : "text-foreground/60",
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
