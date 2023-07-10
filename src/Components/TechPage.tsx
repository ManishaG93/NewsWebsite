import React from "react";
import { Fragment } from "react";
import TechNewsStories from "./JSON files/TechNewsStories.json";
import TechNewsMore from "./JSON files/TechNewsMore.json";
import TechMainStory from "./JSON files/TechMainStory.json";

function TechPage() {
  return (
    <>
      <div className="page-body">
        <div className="PAGE-container">
          {TechMainStory.articles.map((item) => (
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
            {TechNewsStories.articles.map((item) => (
              <div>
                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url1}>
                    Meta will nuke your Instagram account if you delete Threads
                    profile
                  </a>
                </div>
                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url2}>
                    Samsung is holding its next Unpacked on July 26 to unveil
                    new foldables
                  </a>
                </div>

                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url3}>
                    US companies keep distance from China AI conference amid
                    accessibility concerns
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
          {TechNewsMore.articles.map((item) => (
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

export default TechPage;
