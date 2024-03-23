"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  AreaChart,
  Code,
  Code2,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  TrendingUp,
  User,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Analytics",
    icon: AreaChart,
    href: "/conversation",
    color: "text-pink-500",
  },
  {
    label: "Personalized",
    icon: User,
    href: "/image",
    color: "text-green-500",
  },
  {
    label: "Trending",
    icon: TrendingUp,
    color: "text-orange-700",
    href: "/video",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white">
      <div className="px-3 py-2 flex-1 ">
        <div style={{ pointerEvents: "none" }} />
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.svg" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Social Scout
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group 
              flex p-3 w-full justify-start 
              font-medium cursor-pointer
               hover:text-white hover:bg-white/10 
               rounded-lg transition "
            >
              <div style={{ pointerEvents: "none" }}></div>
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
