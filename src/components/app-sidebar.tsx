"use client";

import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

// This is sample data.
const data = {
  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  teams: [
    {
      name: "Notifications",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Change Password",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Logout",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Post Options",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "All Posts",
          url: "#",
        },
        {
          title: "Create New Post",
          url: "#",
        },
        {
          title: "Drafts",
          url: "#",
        },
        {
          title: "Scheduled Posts",
          url: "#",
        },
        {
          title: "Categories / Tags",
          url: "#",
        },
        {
          title: "Authors",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Overview",
      url: "#",
      icon: Frame,
    },
    {
      name: "Profile",
      url: "#",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
        <Button>Logout</Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
