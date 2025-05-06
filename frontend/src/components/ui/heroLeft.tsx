"use client";

import { Badge } from "@/components/ui/badge";
import { HeroFeatureType } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";

export default function HeroLeft({
  id,
  imageUrl,
  badgeText,
  title,
  date,
}: HeroFeatureType) {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-auto rounded-md overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/*  */}
      <Link href={`posts/${id}`}>
        {/* Content */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white space-y-2 sm:space-y-3 max-w-xs sm:max-w-md">
          <Badge className="badge px-3 py-1 text-xs sm:text-sm">
            {badgeText}
          </Badge>
          <h2 className="text-lg sm:text-2xl font-bold leading-tight">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-gray-300">{date}</p>
        </div>
      </Link>
    </div>
  );
}
