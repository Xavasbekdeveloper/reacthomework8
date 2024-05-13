import React from "react";
import "./about.scss";
import aboutBg from "../../assets/images/device-bg.png";
import { memo } from "react";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <div>
          <img src={aboutBg} alt="img" />
        </div>
        <p className="about__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus
          egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet
          justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas
          maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim.
          Neque laoreet suspendisse interdum consectetur. Turpis massa sed
          elementum tempus egestas sed sed. Ornare massa eget egestas purus
          viverra accumsan in. Tristique senectus et netus et malesuada. Ornare
          suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna
          sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat
          imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero
          nunc consequat interdum varius sit amet mattis. Odio eu feugiat
          pretium nibh ipsum.
        </p>
        <div className="about__bottom">
          <h2 className="about__title">Price Strategy</h2>
          <p className="about__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
          <p className="about__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
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
    </section>
  );
};

export default memo(AboutSection);
