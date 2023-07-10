import React from "react";
import { Fragment } from "react";
import HealthNewsMainStory from "./JSON files/HealthNewsMainStory.json";
import HealthNewsStories from "./JSON files/HealthNewsStories.json";
import HealthStoriesMore from "./JSON files/HealthStoriesMore.json";

function HealthPage() {
  return (
    <>
      <div className="page-body">
        <div className="PAGE-container">
          {HealthNewsMainStory.articles.map((item) => (
            <div className="main-news">
              <div className="Main-Story-Image-container">
                <img className="Main-Story-Image" src={item.img} />
              </div>
              <div className="news-title-container">
                <p className="news-title-main-story">{item.title}</p>
                <a className="link-to-story-Main" href={item.url}>
                  Full Article Here
                </a>
              </div>
            </div>
          ))}

          <div className="news-container">
            {HealthNewsStories.articles.map((item) => (
              <div>
                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url1}>
                    Covid pandemic linked to surge in child and teen diabetes
                  </a>
                </div>
                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url2}>
                    Will Rishi Sunak's plan to tackle NHS staffing shortages
                    work?
                  </a>
                </div>

                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url3}>
                    Should you kick your Diet Coke habit?
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="more-stories-title-container">
          <h3 className="more-stories-title">More Stories</h3>
          <hr></hr>
        </div>
        <div className="center-div">
          {HealthStoriesMore.articles.map((item) => (
            <div className="more-stories-container-parent">
              <div className="more-stories-container">
                <img className="more-stories-img" src={item.img} />
                <p className="more-stories">{item.title}</p>
                <a className="more-stories-url" href={item.url}>
                  Full Article Here
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HealthPage;
