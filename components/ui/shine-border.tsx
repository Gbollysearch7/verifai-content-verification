"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative grid h-full w-full place-items-center rounded-3xl bg-white p-3 text-black dark:bg-black dark:text-white",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--shine-pulse-duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(",") : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-3xl before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      {children}
    </div>
  );
}

export function TimelineContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-md flex-col justify-center gap-3">
      {children}
    </div>
  );
}

export function TimelineEvent({
  label,
  message,
  icon,
  isLast = false,
}: {
  label: string;
  message: string;
  icon: {
    name: string;
    textColor: string;
    borderColor: string;
  };
  isLast?: boolean;
}) {
  return (
    <div className="group relative -m-2 flex gap-4 border border-transparent p-2">
      <div className="relative">
        <div
          className={cn(
            "rounded-full border bg-background p-2",
            icon.borderColor
          )}
        >
          <div className={cn("h-4 w-4", icon.textColor)} />
        </div>
        {!isLast ? (
          <div className="absolute inset-x-0 mx-auto h-full w-[2px] bg-muted" />
        ) : null}
      </div>
      <div className="mt-1 flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">{label}</p>
        </div>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  const timeline = [
    {
      label: "Upload & Paste",
      message: "Add your content by pasting text directly or uploading PDF/DOCX files.",
      icon: {
        name: "FileText",
        textColor: "text-blue-500",
        borderColor: "border-blue-500/40",
      },
    },
    {
      label: "AI Analysis",
      message: "Our AI extracts factual claims and searches for verification sources.",
      icon: {
        name: "Globe",
        textColor: "text-purple-500",
        borderColor: "border-purple-500/40",
      },
    },
    {
      label: "Get Results",
      message: "Receive detailed fact-checks with suggestions and source references.",
      icon: {
        name: "Check",
        textColor: "text-green-500",
        borderColor: "border-green-500/40",
      },
    },
    {
      label: "Apply Fixes",
      message: "One-click corrections to improve your content accuracy instantly.",
      icon: {
        name: "Zap",
        textColor: "text-orange-500",
        borderColor: "border-orange-500/40",
      },
    },
  ];

  return (
    <div className="w-full max-w-md">
      <TimelineContainer>
        {timeline.map((event, i) => (
          <TimelineEvent
            key={event.message}
            isLast={i === timeline.length - 1}
            {...event}
          />
        ))}
      </TimelineContainer>
    </div>
  );
}

export { ShineBorder };