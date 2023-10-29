import { PropsWithChildren, ReactElement } from "react";
import { SuspenseLoader } from "./SuspenseLoader";
import { LoaderType } from "../models/loader";

export function SuspenseLoaderFlex(
  props: PropsWithChildren & {
    type?: LoaderType;
    count?: number;
    render?: ReactElement;
    className?: string;
  }
) {
  return (
    <SuspenseLoader
      layoutClassName="flex gap-5 flex-wrap"
      placeholderClassName="flex-auto"
      {...props}
    >
      {props.children}
    </SuspenseLoader>
  );
}
