import React from "react";
import "./posts.scss";
import postsBg from "../../assets/images/blog-bg.png";
import postsBg2 from "../../assets/images/blog-bg2.png";
import { memo } from "react";

const Posts = () => {
  return (
    <section className="posts">
      <div className="container">
        <h1 className="posts__title">Blog Posts</h1>

        <div className="posts__card posts__extra-card">
          <div className="posts__card__left">
            <h3 className="posts__card__title">Tempered Glass</h3>
            <p className="posts__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
          <div className="posts__card__right">
            <img src={postsBg} alt="img" />
          </div>
        </div>

        <div className="posts__card">
          <div className="posts__card__right">
            <img src={postsBg2} alt="img" />
          </div>
          <div className="posts__card__left">
            <h3 className="posts__card__title">Back Cover</h3>
            <p className="posts__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
        </div>

        <div className="posts__card">
          <div className="posts__card__left">
            <h3 className="posts__card__title">
              Mobile Brand and Price Strategy
            </h3>
            <p className="posts__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Posts);
