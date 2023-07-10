import React from "react";
import { Fragment } from "react";
import news from "./JSON files/HomepageNews.json";
import MoreArticles from "./JSON files/HomepageMoreArticles.json";

function HomePage() {
  return (
    <>
      <div className="page-body">
        <h1 className="home-headline-title">LATEST NEWS</h1>
        <div className="container">
          {news.results.map((item) => (
            <div className="centered-div">
              <img className="story-img" src={item.image_url}></img>
              <p className="story-title">{item.title}</p>
              <p className="story-copy">{item.description}</p>
              <a className="link-to-story" href={item.link}>
                Full Article Here
              </a>
            </div>
          ))}

          {MoreArticles.results.map((links) => (
            <div className="top-articles">
              <h1 className="more-articles">More Articles</h1>
              <a className="more-article-links" href={links.link}>
                Concerns about older drivers rising, DVLA figures suggest
              </a>
              <a className="more-article-links" href={links.link2}>
                Energy bill warning for this winter
              </a>
              <a className="more-article-links" href={links.link3}>
                Average rate on five-year fixed mortgage deal in UK climbs above
                6%
              </a>
            </div>
          ))}

          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
