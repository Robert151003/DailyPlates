'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

interface MobileNavProps {
  theme: string | undefined;
}

const MobileNav: React.FC<MobileNavProps> = ({ theme }) => {
  const pathName = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={theme === 'light' ? '/icons/burger-dark.svg' : '/icons/burger.svg'}
            alt="burger"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className={cn("border-none", theme === "light" ? "bg-light-1 text-dark-5" : "bg-dark-1 text-white")}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={theme === 'light' ? '/icons/plate-dark.png' : '/icons/plate.png'}
              alt="logo"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <p className={cn("text-[26px] font-extrabold", theme === "light" ? "text-dark-5" : "text-white")}>
              Daily Plates
            </p>
          </Link>

          {/* Navigation links */}
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16">
                {sidebarLinks.map((link) => {
                  const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          isActive && (theme === "light" ? "bg-blue-2" : "bg-blue-1")
                        )}
                      >
                        <Image
                          src={`${theme === "light" ? `${link.imgUrl}-dark.png` : `${link.imgUrl}.png`}`}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
