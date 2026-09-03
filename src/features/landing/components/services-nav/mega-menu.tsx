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
import { megaMenuServices } from "../../static-data/services-nav.data";


export function ServicesMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent hover:text-primary text-sm font-medium text-muted-foreground transition-colors px-0 py-0 data-[state=open]:text-primary data-[state=open]:font-semibold h-auto">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[700px] flex-col overflow-hidden rounded-2xl border border-border bg-popover shadow-2xl">
              {/* Core Services Grid */}
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Core Services
                  </h3>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-primary hover:text-primary/80 flex items-center gap-1 group transition-colors"
                  >
                    View All Services <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {megaMenuServices.map((service) => (
                    <NavigationMenuLink 
                      key={service.title}
                      render={<Link href={service.href} />}
                      className="group flex items-start gap-4 rounded-xl p-3 transition-all hover:bg-secondary/40"
                    >
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm border border-border/50">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>

              {/* Bottom Banner CTA */}
              <div className="flex items-center justify-between bg-secondary/30 p-6 sm:px-8 border-t border-border">
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-foreground">
                    Accelerate your software company
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Book a free discovery call with our tech experts.
                  </p>
                </div>
                <NavigationMenuLink 
                  render={<Link href="/#contact" />}
                  className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-5 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
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
