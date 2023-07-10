import React from "react";
import { Fragment } from "react";
import UKNews from "./JSON files/UKNewsMainStory.json";
import UKNewsStories from "./JSON files/UKNewsStories.json";
import UKNewsMore from "./JSON files/UKNewsMore.json";

function UKPage() {
  return (
    <>
      <div className="page-body">
        <div className="PAGE-container">
          {UKNews.articles.map((UK) => (
            <div className="main-news">
              <div className="Main-Story-Image-container">
                <img
                  className="Main-Story-Image"
                  placeholder="IMAGE"
                  src={UK.imageMain}
                />
              </div>
              <div className="news-title-container">
                <p className="news-title-main-story">{UK.titleMain}</p>
                <a className="link-to-story-Main" href={UK.source.url}>
                  Full Article Here
                </a>
              </div>
            </div>
          ))}

          <div className="news-container">
            {UKNewsStories.articles.map((stories) => (
              <div>
                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={stories.url1}>
                    Captain Sir Tom Moore's daughter ordered to demolish home
                    spa.
                  </a>
                </div>
                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={stories.url2}>
                    Rishi Sunak silent over Tory MPs' Partygate report attacks.
                  </a>
                </div>

                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={stories.url3}>
                    NHS at 75: England's life expectancies.
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="more-stories-title-container">
          <h3 className="more-stories-title">More Stories from the UK</h3>
          <hr></hr>
        </div>
        <div className="center-div">
          {UKNewsMore.articles.map((item) => (
            <div className="more-stories-container-parent">
              <div className="more-stories-container">
                <img className="more-stories-img" src={item.image} />
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

export default UKPage;
