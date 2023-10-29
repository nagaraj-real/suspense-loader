import { PropsWithChildren, ReactElement, Suspense, useState } from "react";
import { getLoader } from "../utils/util";

export type LoaderType = "list" | "video" | "image" | "card";

export function SuspenseLoader({
  children,
  type,
  count,
  render,
  className,
}: PropsWithChildren & {
  type?: LoaderType;
  count?: number;
  render?: ReactElement;
  className?: string;
}) {
  const [Loader] = useState(() => render || getLoader(type, count, className));
  return <Suspense fallback={Loader}>{children}</Suspense>;
}
