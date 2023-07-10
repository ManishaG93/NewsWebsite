import React from "react";
import EntMainStory from "./JSON files/EntMainStory.json";
import EntNewsMore from "./JSON files/EntNewsMore.json";
import EntNewsStoies from "./JSON files/EntNewsStoies.json";

function EntertainmentPage() {
  return (
    <>
      <div className="page-body">
        <div className="PAGE-container">
          {EntMainStory.articles.map((item) => (
            <div className="main-news">
              <div className="Main-Story-Image-container">
                <img className="Main-Story-Image" src={item.img} />
              </div>
              <div className="news-title-container">
                <p className="ent-news-title-main-story">{item.title}</p>
                <a className="link-to-story-Main" href={item.url}>
                  Full Article Here
                </a>
              </div>
            </div>
          ))}

          <div className="news-container">
            {EntNewsStoies.articles.map((item) => (
              <div>
                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url1}>
                    Hugh Jackman Eats The Grossest Thing For His Cheat Day Meal
                  </a>
                </div>
                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url2}>
                    Wham's Andrew Ridgeley opens up about relationship with
                    George Michael
                  </a>
                </div>

                <div className="news-other-headlines">
                  <a className="other-headlines-stories" href={item.url3}>
                    Wimbledon 2023: all the celebrity style
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
          {EntNewsMore.articles.map((item) => (
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

export default EntertainmentPage;
