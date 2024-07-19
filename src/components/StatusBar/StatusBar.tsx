"use client";

import { useIsOnline } from "@/hooks/useIsOnline";
import clsx from "clsx";

interface StatusBarProps {}
export default function StatusBar(props: StatusBarProps) {
  const online = useIsOnline();

  return (
    <div
      data-online={online}
      className={clsx({
        "bg-green-500": online,
        "bg-red-500": !online,
      })}
    >
      {online ? "Online" : "Offline"}
    </div>
  );
}
