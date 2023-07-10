import React from "react";
import { Fragment } from "react";
import BannerBreakingNews from "./JSON files/BannerBreakingNews.json";

function Banner() {
  return (
    <>
      {BannerBreakingNews.articles.map((item) => (
        <div className="banner-container">
          <div className="banner-title">Breaking News</div>
          <ul>
            <li>{item.headline}</li>
            <li>{item.headline1}</li>
            <li>{item.headline2}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Banner;
