import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import { megaMenuServices, megaMenuHiring } from "../../static-data/services-nav.data";


export function ServicesMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent hover:text-primary text-sm font-medium text-muted-foreground transition-colors px-0 py-0 data-[state=open]:text-primary data-[state=open]:font-semibold h-auto">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[800px] flex-col overflow-hidden rounded-xl border bg-popover shadow-lg">
              {/* Top Section: Split into 2 columns */}
              <div className="grid grid-cols-[2fr_1fr] divide-x divide-border">
                {/* Left: Core Services Grid */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Core Services
                    </h3>
                    <Link
                      href="/services"
                      className="text-sm text-primary hover:underline flex items-center gap-1 group"
                    >
                      View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {megaMenuServices.map((service) => (
                      <NavigationMenuLink 
                        key={service.title}
                        render={<Link href={service.href} />}
                        className="group/item flex flex-col gap-2 rounded-lg p-3 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                            <service.icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>

                {/* Right: Hiring / Dedicated Teams */}
                <div className="bg-secondary/10 p-6">
                  <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
                    For Hiring
                  </h3>
                  <div className="flex flex-col gap-2">
                    {megaMenuHiring.map((hiring) => (
                      <NavigationMenuLink 
                        key={hiring.title}
                        render={<Link href={hiring.href} />}
                        className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted"
                      >
                        <hiring.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {hiring.title}
                        </span>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Banner CTA */}
              <div className="flex items-center justify-between bg-primary/10 p-6 border-t border-border">
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    Want to accelerate your software company?
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Book a free discovery call with our tech experts.
                  </p>
                </div>
                <NavigationMenuLink 
                  render={<Link href="/#contact" />}
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
                >
                  Book a Call
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
