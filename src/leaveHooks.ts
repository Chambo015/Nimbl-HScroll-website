import gsap from "gsap";

export const leaveHooks: {[k: string]: (el: any, done: any) => void} = {
    nimbltv: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const sliderEl = el.querySelector('[data="slider_h_El"]');
        const buttonsEl = el.querySelector('[data="buttonsEl"]');
        const titleEl = el.querySelector('[data="titleEl"]');
        const lightEl = el.querySelector('[data="lightEl"]');

        tl.to(
            sliderEl,
            {
                autoAlpha: 0.0,
                duration: 0.3,
                scale: 0.0,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            buttonsEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: 100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            titleEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            lightEl,
            {
                autoAlpha: 0.0,
                duration: 1,
            },
            "0",
        );
    },
    stakes: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const dotsChartEl = el.querySelector('[data="dotsChartEl"]');
        const titleEl = el.querySelector('[data="titleEl"]');
        const chartEl = el.querySelector('[data="chartEl"]');

        tl.to(chartEl, {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: 100,
            ease: "expo.inOut",
        });
        tl.to(
            titleEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            dotsChartEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: 50,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    tokenized: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const monitorEl = el.querySelector('[data="monitorEl"]');
        const contentEl = el.querySelector('[data="contentEl"]');

        tl.to(monitorEl, {
            autoAlpha: 0.0,
            duration: 1,
            yPercent: 100,
            ease: "expo.inOut",
        });
        tl.to(
            contentEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                xPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    ai: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const leftVideoEl = el.querySelector('[data="leftVideoEl"]');
        const rightVideoEl = el.querySelector('[data="rightVideoEl"]');
        const titleEl = el.querySelector('[data="titleEl"]');

        tl.to(leftVideoEl, {
            yPercent: 150,
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            rightVideoEl,
            {
                yPercent: 150,
                autoAlpha: 0.0,
                duration: 1,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            titleEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: -150,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    data: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const mainImgEl = el.querySelector('[data="mainImgEl"]');
        const contentEl = el.querySelector('[data="contentEl"]');

        tl.to(mainImgEl, {
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            contentEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: 100,
                stagger: 0.2,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    gamification: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const contentEl = el.querySelector('[data="contentEl"]');
        const levelEl = el.querySelector('[data="levelEl"]');
        const imgCoinRightEl = el.querySelector('[data="imgCoinRightEl"]');
        const imgGlassRightEl = el.querySelector('[data="imgGlassRightEl"]');
        const imgCoinLeftEl = el.querySelector('[data="imgCoinLeftEl"]');
        const imgGlassLeftEl = el.querySelector('[data="imgGlassLeftEl"]');

        tl.to(contentEl, {
            yPercent: 100,
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            levelEl,
            {
                yPercent: -100,
                autoAlpha: 0.0,
                duration: 1,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            imgCoinRightEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                xPercent: 100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            imgGlassRightEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                xPercent: 100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            imgCoinLeftEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                xPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            imgGlassLeftEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                xPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    handle: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const webEl = el.querySelector('[data="webEl"]');
        const iconImgEl = el.querySelector('[data="iconImgEl"]');
        const buttonEl = el.querySelector('[data="buttonEl"]');
        const titleEl = el.querySelector('[data="titleEl"]');

        tl.to(webEl, {
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            iconImgEl,
            {
                scale: 1.5,
                autoAlpha: 0.0,
                duration: 1,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            buttonEl,
            {
                yPercent: 150,
                autoAlpha: 0.0,
                duration: 1,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            titleEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: -150,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    roadmap: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const topListEl = el.querySelector('[data="topListEl"]');
        const bottomListEl = el.querySelector('[data="bottomListEl"]');
        const rocketImgEl = el.querySelector('[data="rocketImgEl"]');

        tl.to(topListEl, {
          yPercent: -100,
          autoAlpha: 0.0,
          duration: 1,
          ease: "expo.inOut",
      });
      tl.to(
        bottomListEl,
          {
              autoAlpha: 0.0,
              duration: 1,
              yPercent: 100,
              ease: "expo.inOut",
          },
          "0",
      );
      tl.to(
        rocketImgEl,
          {
              autoAlpha: 0.0,
              duration: 1,
              xPercent: 150,
              ease: "expo.inOut",
          },
          "0",
      );
    },
    moderation: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const colsEl = el.querySelector('[data="colsEl"]');
        const titleEl = el.querySelector('[data="titleEl"]');
        const radarEl = el.querySelector('[data="radarEl"]');

        tl.to(
            colsEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: 100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            titleEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            radarEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    summarize: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const bgLeftImgEl = el.querySelector('[data="bgLeftImgEl"]');
        const bgRightImgEl = el.querySelector('[data="bgRightImgEl"]');
        const mobileImgEl = el.querySelector('[data="mobileImgEl"]');
        const titleEl = el.querySelector('[data="titleEl"]');

        tl.to(bgLeftImgEl, {
            xPercent: -100,
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            bgRightImgEl,
            {
                xPercent: 100,
                autoAlpha: 0.0,
                duration: 1,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            mobileImgEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: 100,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            titleEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: -150,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    swipe: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const mainImgEl = el.querySelector('[data="mainImgEl"]');
        const contentEl = el.querySelector('[data="contentEl"]');

        tl.to(mainImgEl, {
            xPercent: 100,
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            contentEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                xPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    teaser: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const mainImgEl = el.querySelector('[data="mainImgEl"]');
        const contentEl = el.querySelector('[data="contentEl"]');

        tl.to(mainImgEl, {
            xPercent: 100,
            autoAlpha: 0.0,
            duration: 1,
            rotate: 180,
            transformOrigin: "bottom right",
            ease: "expo.inOut",
        });
        tl.to(
            contentEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                xPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    token: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const imgEarthEl = el.querySelector('[data="imgEarthEl"]');
        const starShipsEl = el.querySelector('[data="starShipsEl"]');
        const titleEl = el.querySelector('[data="titleEl"]');
        const listEl = el.querySelector('[data="listEl"]');

        tl.to(imgEarthEl, {
            xPercent: 100,
            yPercent: 100,
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            starShipsEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: -100,
                xPercent: -250,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            titleEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                yPercent: -150,
                ease: "expo.inOut",
            },
            "0",
        );
        tl.to(
            listEl,
            {
                xPercent: -100,
                autoAlpha: 0.0,
                duration: 1,
                ease: "expo.inOut",
            },
            "0",
        );
    },
    transfers: (el, done) => {
        const tl = gsap.timeline({onComplete: done});
        const mainImgEl = el.querySelector('[data="mainImgEl"]');
        const contentEl = el.querySelector('[data="contentEl"]');

        tl.to(mainImgEl, {
            xPercent: 100,
            autoAlpha: 0.0,
            duration: 1,
            ease: "expo.inOut",
        });
        tl.to(
            contentEl,
            {
                autoAlpha: 0.0,
                duration: 1,
                xPercent: -100,
                ease: "expo.inOut",
            },
            "0",
        );
    },
};

/* routes: [
       
        {
          path: "/", // путь маршрута
          name: "nimbltv", // имя маршрута
          component: NimblTvView, // Каждый маршрут должен сопоставляться с компонентом.
      },
      {
          path: "/stakes",
          name: "stakes",
          component: StakesView,
      },
      {
          path: "/ai",
          name: "ai",
          component: AiView,
      },
      {
          path: "/data",
          name: "data",
          component: DataView,
      },
      {
          path: "/gamification",
          name: "gamification",
          component: GamificationView,
      },
      {
          path: "/handle",
          name: "handle",
          component: HandleView,
      },
      {
          path: "/moderation",
          name: "moderation",
          component: ModerationView,
      },
      {
          path: "/roadmap",
          name: "roadmap",
          component: RoadmapView,
      },
      {
          path: "/summarize",
          name: "summarize",
          component: SummarizeView,
      },
      {
          path: "/swipe",
          name: "swipe",
          component: SwipeView,
      },
      {
          path: "/teaser",
          name: "teaser",
          component: TeaserView,
      },
      {
          path: "/tokenized",
          name: "tokenized",
          component: TokenizedView,
      },
      {
          path: "/token",
          name: "token",
          component: TokenView,
      },
      {
          path: "/transfers",
          name: "transfers",
          component: TransfersView,
      },
  ] */
