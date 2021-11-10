import React from "react";
import styles from "../../public/styles/content.module.css";
import Author from "./Author";
import Copyright from "./Copyright";
import Date from "./Date";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { SocialList } from "./SocialList";
import TagButton from "./TagButton";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
};
export default function PostLayout() {
  return (
    <Layout>
      <div className={"container"}>
      <ul className="accordion">
      <li className="tabs">
        <div className="social-links twitter-icon">
          <a href="https://twitter.com/renettarenula">Twitter</a>
        </div>
        <div className="paragraph">
          <h1>Twitter</h1>
          <p>My thoughts in 140 characters or less. Sometimes, I do not know how to correctly use Twitter.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links facebook-icon">
          <a href="https://facebook.com">Facebook</a>
        </div>
        <div className="paragraph">
          <h1>Facebook</h1>
          <p>Where I get to stalk my friends and let them stalk me. A place to get people to stroke your ego.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links linkedin-icon">
           <a href="https://my.linkedin.com/pub/aysha-anggraini/49/a82/a05/">LinkedIn</a>
        </div>
        <div className="paragraph">
          <h1>LinkedIn</h1>
          <p>I act totally professional on this one. It is what the recruiters see, you see.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links insta-icon">
          <a href="http://instagram.com/renettarenula">Instagram</a>
        </div>
        <div className="paragraph">
          <h1>Instagram</h1>
          <p>Where I post my duckface pictures. Occasionally, I would post pictures of my food and my cats.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links youtube-icon">
          <a href="https://youtube.com">Youtube</a>
        </div>
        <div className="paragraph">
          <h1>YouTube</h1>
          <p>Just kidding! I do not have a YouTube account. I'm not too fond of the camera.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links tumblr-icon">
          <a href="https://renettarenula.tumblr.com/">Tumblr</a>
        </div>
        <div className="paragraph">
          <h1>Tumblr</h1>
          <p>I have a tumblr but I don't really use it. I still prefer WordPress. I'm quite old-fashioned.</p>
        </div>
      </li>
      <li className="tabs">
        <div className="social-links dribbble-icon">
          <a href="http://dribbble.com">Dribbble</a>
        </div>
        <div className="paragraph">
          <h1>Dribbble</h1>
          <p>I do not have a Dribbble account. Would any of you be so kind and send me an invite? </p>
        </div>
      </li>
    </ul>
      </div>
      <style jsx>
        {`
            @font-face {
              font-family: 'Genericons';
              src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/genericons-regular-webfont.eot");
              src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/genericons-regular-webfont.woff") format("woff"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/genericons-regular-webfont.eot") format("truetype");
              font-weight: normal;
              font-style: normal;
            }
            [class*="genericon"] {
              display: inline-block;
              width: 16px;
              height: 16px;
              -webkit-font-smoothing: antialiased;
              font-size: 16px;
              line-height: 1;
              font-family: 'Genericons';
              text-decoration: inherit;
              font-weight: normal;
              font-style: normal;
              vertical-align: top;
            }
            
            /* IE7 */
            [class*="genericon"] {
              *overflow: auto;
              *zoom: 1;
              *display: inline;
            }
            
            .container {
              margin: 100px auto;
            }
            
            .accordion {
              background: #5ab2ca;
              width: 100%;
              min-width: 950px;
              display: block;
              list-style-type: none;
              overflow: hidden;
              height: 200px;
              font-size: 0;
            }
            
            .tabs {
              display: inline-block;
              background-color: #6dc5dd;
              border-right: #5ab2ca 1px solid;
              width: 80px;
              height: 200px;
              overflow: hidden;
              position: relative;
              margin: 0;
              font-size: 16px;
              -moz-transition: all 0.4s ease-in-out 0.1s;
              -o-transition: all 0.4s ease-in-out 0.1s;
              -webkit-transition: all 0.4s ease-in-out;
              -webkit-transition-delay: 0.1s;
              transition: all 0.4s ease-in-out 0.1s;
            }
            .tabs:hover {
              width: 450px;
            }
            .tabs:hover .social-links a:before {
              margin-left: -100px;
            }
            .tabs:hover .social-links a:after {
              margin-left: -5px;
            }
            .tabs .paragraph {
              position: relative;
              width: 360px;
              margin-left: 80px;
              padding: 50px 0 0 10px;
              height: 200px;
              background: #fff;
            }
            .tabs .paragraph h1 {
              font-size: 2.5em;
              margin-bottom: 10px;
            }
            .tabs .paragraph p {
              font-size: 0.88em;
              line-height: 1.5em;
              padding-right: 30px;
            }
            
            .social-links {
              display: block;
            }
            .social-links a {
              display: block;
              text-indent: -9999px;
              font-size: 0;
              line-height: 0;
            }
            .social-links a:before, .social-links a:after {
              -moz-transition: all 0.4s ease-in-out 0.1s;
              -o-transition: all 0.4s ease-in-out 0.1s;
              -webkit-transition: all 0.4s ease-in-out;
              -webkit-transition-delay: 0.1s;
              transition: all 0.4s ease-in-out 0.1s;
              width: 80px;
              height: 200px;
              position: absolute;
              text-indent: 0;
              padding-top: 90px;
              padding-left: 25px;
              display: block;
              font: normal 30px Genericons;
              color: #fff;
            }
            .social-links a:after {
              font-size: 48px;
              padding-left: 20px;
              padding-top: 80px;
              margin-left: 85px;
            }
            
            .twitter-icon a:before, .twitter-icon a:after {
              content: '\f202';
            }
            .twitter-icon a:after {
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdhZGNmOSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzRiYzlmNSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
              background-size: 100%;
              background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #7adcf9), color-stop(100%, #4bc9f5));
              background-image: -moz-linear-gradient(#7adcf9, #4bc9f5);
              background-image: -webkit-linear-gradient(#7adcf9, #4bc9f5);
              background-image: linear-gradient(#7adcf9, #4bc9f5);
            }
            
            .facebook-icon a:before, .facebook-icon a:after {
              content: '\f204';
            }
            .facebook-icon a:after {
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzU0OGFiZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzI5NWI5ZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
              background-size: 100%;
              background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #548abf), color-stop(100%, #295b9e));
              background-image: -moz-linear-gradient(#548abf, #295b9e);
              background-image: -webkit-linear-gradient(#548abf, #295b9e);
              background-image: linear-gradient(#548abf, #295b9e);
            }
            
            .linkedin-icon a:before, .linkedin-icon a:after {
              content: '\f208';
            }
            .linkedin-icon a:after {
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwYTljZCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwODNiNCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
              background-size: 100%;
              background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #00a9cd), color-stop(100%, #0083b4));
              background-image: -moz-linear-gradient(#00a9cd, #0083b4);
              background-image: -webkit-linear-gradient(#00a9cd, #0083b4);
              background-image: linear-gradient(#00a9cd, #0083b4);
            }
            
            .insta-icon a:before, .insta-icon a:after {
              content: '\f215';
            }
            .insta-icon a:after {
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdmYzEyMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzI5ODczMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
              background-size: 100%;
              background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #7fc121), color-stop(100%, #298733));
              background-image: -moz-linear-gradient(#7fc121, #298733);
              background-image: -webkit-linear-gradient(#7fc121, #298733);
              background-image: linear-gradient(#7fc121, #298733);
            }
            
            .youtube-icon a:before, .youtube-icon a:after {
              content: '\f213';
            }
            .youtube-icon a:after {
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2RmMTkyYSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2M0MTIyMiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
              background-size: 100%;
              background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #df192a), color-stop(100%, #c41222));
              background-image: -moz-linear-gradient(#df192a, #c41222);
              background-image: -webkit-linear-gradient(#df192a, #c41222);
              background-image: linear-gradient(#df192a, #c41222);
            }
            
            .tumblr-icon a:before, .tumblr-icon a:after {
              content: '\f214';
            }
            .tumblr-icon a:after {
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI4M2U1NiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzMyNTM3MiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
              background-size: 100%;
              background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #283e56), color-stop(100%, #325372));
              background-image: -moz-linear-gradient(#283e56, #325372);
              background-image: -webkit-linear-gradient(#283e56, #325372);
              background-image: linear-gradient(#283e56, #325372);
            }
            
            .dribbble-icon a:before, .dribbble-icon a:after {
              content: '\f201';
            }
            .dribbble-icon a:after {
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2UwM2E3MCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2YxODliOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
              background-size: 100%;
              background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #e03a70), color-stop(100%, #f189b8));
              background-image: -moz-linear-gradient(#e03a70, #f189b8);
              background-image: -webkit-linear-gradient(#e03a70, #f189b8);
              background-image: linear-gradient(#e03a70, #f189b8);
            }
          `}
      </style>
    </Layout>
  );
}
