"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMobileNav, closeMobileNav } from "@/store/slices/ui.slice";
import { landingNavLinks } from "@/config/nav.config";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function LandingNavbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isMobileNavOpen = useAppSelector((state) => state.ui.isMobileNavOpen);

  const handleLinkClick = () => {
    dispatch(closeMobileNav());
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="section-padding-x flex h-16 items-center justify-between">
        {/* Left Side: Logo */}
        <Logo />

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {landingNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Theme Toggle + CTA/Mobile Trigger */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden md:inline-flex shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform",
            )}
          >
            Get in Touch
          </Link>

          {/* Mobile Nav Sheet */}
          <Sheet
            open={isMobileNavOpen}
            onOpenChange={(open) =>
              !open ? dispatch(closeMobileNav()) : dispatch(toggleMobileNav())
            }
          >
            <SheetTrigger className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted text-foreground transition-colors border-none bg-transparent">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader className="text-left border-b pb-4 mb-4">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                {landingNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-base font-medium py-2 transition-colors hover:text-primary ${
                        isActive
                          ? "text-primary font-semibold border-l-2 border-primary pl-2"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/#contact"
                  onClick={handleLinkClick}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "mt-4 text-center",
                  )}
                >
                  Get in Touch
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
