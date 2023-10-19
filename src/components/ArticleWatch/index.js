/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState } from "react";
import SomeFunctionalComponent from "../SomeFunctionalComponent";
import "./ArticleWatch.css";
import ArticleWatchAdblock from "./ArticleWatchAdblock";
import ArticleWatchIframe from "./ArticleWatchIframe";
import ArticleWatchInfo from "./ArticleWatchInfo";
function ArticleWatch({ data }) {
  const [checkLion,setChecklion]= useState(false)
  useEffect(()=>{
    var regex = /filelions/;
    if (regex.test(data.videoUrl)) {
      setChecklion(false)
    }else{
      setChecklion(true)
    }
  },[data.videoUrl])
  return (
    <section className="watch">
      <div className="container">
        <div className="body">
          <ArticleWatchAdblock/>
          {checkLion && <SomeFunctionalComponent />}
          <div className="movie_play">
            <ArticleWatchInfo data={data}/>
            <ArticleWatchIframe linkVideo={data.videoUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleWatch;
