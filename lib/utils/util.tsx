import React from "react";
import { CardLoader } from "../components/loaders/CardLoader";
import { ImageLoader } from "../components/loaders/ImageLoader";
import { ListLoader } from "../components/loaders/ListLoader";
import { StatusLoader } from "../components/loaders/StatusLoader";
import { VideoLoader } from "../components/loaders/VideoLoader";

export function getLoader(
  type?: string,
  count: number = 1,
  layoutClassName: string = ""
) {
  let Loader;
  if (type === "image") {
    Loader = withCount(count, layoutClassName, ImageLoader);
  } else if (type === "video") {
    Loader = withCount(count, layoutClassName, VideoLoader);
  } else if (type === "list") {
    Loader = withCount(count, layoutClassName, ListLoader);
  } else if (type === "card") {
    Loader = withCount(count, layoutClassName, CardLoader);
  } else {
    Loader = withCount(count, layoutClassName, StatusLoader);
  }
  return Loader;
}

const withCount = (
  count: number,
  layoutClassName: string,
  Elem: React.MemoExoticComponent<() => JSX.Element>
) => {
  return (
    <div className={layoutClassName}>
      {Array.from<number>({ length: count }).map(() => {
        return (
          <React.Fragment key={Math.random()}>
            <Elem />
          </React.Fragment>
        );
      })}
    </div>
  );
};
