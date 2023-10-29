import React from "react";
import { CardLoader } from "../components/loaders/CardLoader";
import { ImageLoader } from "../components/loaders/ImageLoader";
import { ListLoader } from "../components/loaders/ListLoader";
import { StatusLoader } from "../components/loaders/StatusLoader";
import { VideoLoader } from "../components/loaders/VideoLoader";

type LoaderParams = {
  type?: string;
  count: number;
  layoutClassName?: string;
  placeholderClassName?: string;
};
export function getLoader({
  type,
  count,
  layoutClassName = "",
  placeholderClassName = "",
}: LoaderParams) {
  let Loader;
  if (type === "image") {
    Loader = withCount(
      count,
      layoutClassName,
      placeholderClassName,
      ImageLoader
    );
  } else if (type === "video") {
    Loader = withCount(
      count,
      layoutClassName,
      placeholderClassName,
      VideoLoader
    );
  } else if (type === "list") {
    Loader = withCount(
      count,
      layoutClassName,
      placeholderClassName,
      ListLoader
    );
  } else if (type === "card") {
    Loader = withCount(
      count,
      layoutClassName,
      placeholderClassName,
      CardLoader
    );
  } else {
    Loader = withCount(
      count,
      layoutClassName,
      placeholderClassName,
      StatusLoader
    );
  }
  return Loader;
}

const withCount = (
  count: number,
  layoutClassName: string,
  placeholderClassName: string,
  Elem: React.MemoExoticComponent<() => JSX.Element>
) => {
  return (
    <div className={layoutClassName}>
      {Array.from<number>({ length: count }).map(() => {
        return (
          <React.Fragment key={Math.random()}>
            <section className={placeholderClassName}>
              <Elem />
            </section>
          </React.Fragment>
        );
      })}
    </div>
  );
};
