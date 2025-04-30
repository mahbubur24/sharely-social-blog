import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { menuItems, socialIcons } from "@/static/navmenuItems";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

function FooterContent() {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row justify-between items-start 
      gap-10 px-6 md:px-10 py-10"
      >
        {/* Left Side: Company & Social */}
        <div
          className="flex flex-col md:flex-row justify-around items-center md:order-last
        md:items-start
        w-full md:w-1/2 gap-8"
        >
          {/* Company Section */}
          <ul>
            <h3 className="text-white text-2xl mb-2">Company</h3>
            {menuItems
              .slice(0, 3)
              .map((item: { label: string; href: string }, index: number) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Social Media Section */}
          <ul>
            <h3 className="text-white text-2xl mb-2">Social Media</h3>
            {socialIcons.map(({ name, icon: Icon }: { name: string; icon: IconType }) => (
              <li key={name} className="flex gap-3 items-center mb-2">
                <Icon className="text-white hover:text-red-500 text-xl" />
                <p className="text-white">{name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Subscribe/Input */}
        <div className="w-full md:w-[500px] flex flex-col gap-4 p-5 rounded-2xl shadow-md md:order-first">
          <Input
            placeholder="Enter your email"
            className="bg-white text-black p-5 md:w-[400px]"
          />
          <Button
            className="bg-rose-500 text-white p-5 rounded-none md:w-30 px-5
           hover:bg-red-700"
          >
            Submit
          </Button>
        </div>
      </div>
      <Separator className="text-white bg-white w-full h-[1px]" />
    </div>
  );
}

export default FooterContent;
