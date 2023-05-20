import { css } from '@emotion/react';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

const ScrollAnime = ({ children }: Props) => {
  useEffect(() => {
    const scrollFades = document.querySelectorAll('.scroll-anim');

    let scrollVolume = window.pageYOffset,
      windowHeight = window.innerHeight,
      range = 200;

    const anime = () => {
      scrollFades.forEach((scrollFade) => {
        const scrollFadeHeight = scrollFade.getBoundingClientRect().height;

        let scrollTop = scrollFade.getBoundingClientRect().top + scrollVolume;

        if (scrollVolume > scrollTop - windowHeight + range && scrollVolume < scrollTop + scrollFadeHeight - range) {
          scrollFade.classList.add('execution');
        }
      });
    };

    addEventListener('scroll', () => {
      anime();
    });

    anime();
  });

  return (
    <div css={component} className="scroll-anim">
      {children}
    </div>
  );
};

const component = css`
  opacity: 0;

  &.execution {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-name: fadeUpAnime;
    animation-timing-function: ease-in-out;

    @keyframes fadeUpAnime {
      from {
        opacity: 0;
        transform: translateY(100px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export default ScrollAnime;
