import { PropsWithChildren, ReactElement, Suspense, useState } from "react";
import { getLoader } from "../utils/getLoader";
import { LoaderType } from "../models/loader";

export function SuspenseLoader({
  children,
  type,
  count,
  render,
  layoutClassName,
  placeholderClassName,
}: PropsWithChildren & {
  type?: LoaderType;
  count?: number;
  render?: ReactElement;
  layoutClassName?: string;
  placeholderClassName?: string;
}) {
  const [Loader] = useState(
    () =>
      render ??
      getLoader({
        type,
        count: count ?? 1,
        layoutClassName,
        placeholderClassName,
      })
  );
  return <Suspense fallback={Loader}>{children}</Suspense>;
}
