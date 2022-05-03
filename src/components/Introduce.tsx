/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import avatar from '@/public/assets/images/avatar.png';

const Introduce = () => {
  const flipUpInterval = useRef<any>();
  const bouncingBoxInterval = useRef<any>();

  function flipUpMask() {
    clearInterval(flipUpInterval.current);
    flipUpInterval.current = setInterval(function () {
      const show = document.querySelector('.mask span[data-mask-show]');

      if (!show) return;

      const next =
        show.nextElementSibling ||
        document.querySelector('.mask span:first-child');

      const up = document.querySelector('.mask span[data-mask-up]');

      if (up) {
        up.removeAttribute('data-mask-up');
      }

      show.removeAttribute('data-mask-show');
      show.setAttribute('data-mask-up', '');

      if (next) {
        next.setAttribute('data-mask-show', '');
      }
    }, 2000);
  }

  function bouncingBoxes() {
    let moveTransitionSpeed = 2200;

    try {
      moveTransitionSpeed = Number.parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--move-transition-speed'
        ),
        10
      );
    } catch (err) {
      console.warn('no --move-transition-speed found');
    }

    clearInterval(bouncingBoxInterval.current);
    bouncingBoxInterval.current = setInterval(function () {
      const blobs = document.querySelectorAll(
        '.blob'
      ) as NodeListOf<HTMLDListElement>;

      const random = () => {
        return Math.floor(20 + Math.random() * 60);
      };

      blobs.forEach((blob) => {
        blob.style.borderTopLeftRadius = `${random()}% ${random()}%`;
        blob.style.borderTopRightRadius = `${random()}% ${random()}%`;
        blob.style.borderBottomLeftRadius = `${random()}% ${random()}%`;
        blob.style.borderBottomRightRadius = `${random()}% ${random()}%`;
      });
    }, moveTransitionSpeed);
  }

  useEffect(() => {
    // introduce
    flipUpMask();

    // bouncing
    bouncingBoxes();

    return () => {
      clearInterval(flipUpInterval.current);
      clearInterval(bouncingBoxInterval.current);
    };
  }, []);

  return (
    <>
      <div className="container relative z-10 mx-auto flex flex-row-reverse flex-wrap px-6 md:flex-nowrap md:px-8 lg:px-24">
        <div className="relative flex w-full items-center md:w-1/2 lg:w-1/2">
          <Image src={avatar} className="relative z-10 h-auto w-full" />
          <div className="blob-wrap blob-wrap-1 text-2xl">
            <div className="blob"></div>
          </div>
          <div className="blob-wrap blob-wrap-2 text-3xl">
            <div className="blob"></div>
          </div>
        </div>
        <div className="content w-full space-y-6 pt-5 font-sans md:w-1/2 md:pt-24 lg:w-1/2">
          <h2 className="relative z-10 space-y-5 text-5xl font-semibold text-slate-700 md:text-6xl lg:text-6xl">
            <div className="w-max rounded-xl bg-neutral py-1 px-3 text-3xl text-primary">
              Hi there!
            </div>
            <div className="text-neutral">I am Tang Xuan Thao</div>
          </h2>
          <h2 className="relative z-10">
            <div className="mask text-5xl font-semibold">
              <span data-mask-show>a developer.</span>
              <span>a team player.</span>
              <span>a learner.</span>
            </div>
          </h2>
          <div className="text-xl text-neutral">
            <p>
              Full-stack web developer with 3+ years of well-rounded experience
              in building web applications.
            </p>
          </div>
          <div className="space-y-2">
            <img
              className="max-w-full"
              src="https://skillicons.dev/icons?i=vscode,js,ts,react,tailwind"
            />
            <img
              className="max-w-full"
              src="https://skillicons.dev/icons?i=nodejs,mongodb,postgres,redis,graphql"
            />
            <img
              className="max-w-full"
              src="https://skillicons.dev/icons?i=git,docker,bash,linux,nginx"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
