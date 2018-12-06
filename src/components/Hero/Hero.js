import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
      </section>
      <div align="center">
        <h1>全く新しい盆栽展がはじまります</h1>
	<h2>"だれでも気軽に出展できる"、そんな展示会を目指して作られたTwitter盆栽展、略して「ツイ盆展」のページです。</h2>
	<br/>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaArrowDown />
        </button>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
          width: 100%;
          margin-top: 8%;
          min-height: 280px;
        }


        h1 {
          text-align: center;
          font-size: ${`calc(${theme.hero.h1.size} * 0.5)`};
          margin: ${`calc(${theme.space.stack.l} * 1.5)`};
          color: ${theme.hero.h1.color};
          line-height: ${`calc(${theme.hero.h1.lineHeight} * 2)`};
          text-remove-gap: both 0 "Open Sans";
          max-width: "80%";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }
        h2 {
          font-size: ${`calc(${theme.hero.h1.size} * 0.4)`};
          line-height: "150%";
          max-width: "80%";
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.0)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
            margin-top: 0%;
            min-height: 400px;
          }

          h1 {
            max-width: 70%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.2)`};
          }

          h2 {
            max-width: 70%;
            font-size: ${`calc(${theme.hero.h1.size} * 0.7)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
