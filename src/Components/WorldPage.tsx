import React from "react";
import { Fragment } from "react";
import WorldNewsStories from "./JSON files/WorldNewsStories.json";
import WorldNewsStorieMore from "./JSON files/WorldNewsStorieMore.json";
import WorldNewsMainStory from "./JSON files/WorldNewsMainStory.json";


function WorldPage() {
return (
<>

    <div className="page-body">
    <div className="PAGE-container">
        {WorldNewsMainStory.articles.map((item) => (
          <div className="main-news">
            <div className="Main-Story-Image-container">
              <img className="Main-Story-Image-world" src={item.img} />
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
          {WorldNewsStories.articles.map((item) => (
            <div>
              <div className="news-other-headlines">
                <a className="other-headlines-stories" href={item.url1}>
                French navy investigates claims that off-duty marines beat up suspected rioters
                </a>
              </div>
              <div className="news-other-headlines">
                <a className="other-headlines-stories" href={item.url2}>
                Secret Service investigates cocaine found at White House
                </a>
              </div>

              <div className="news-other-headlines">
                <a className="other-headlines-stories" href={item.url3}>
                Tourist from England accused of carving name in Colosseum says he did not realise its age
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      
        <div className="more-stories-title-container">
          <h3 className="more-stories-title">More Stories from the World</h3>
          <hr></hr>
        </div>
        <div className="center-div">
        {WorldNewsStorieMore.articles.map((item) => (
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
)

} 

export default WorldPage