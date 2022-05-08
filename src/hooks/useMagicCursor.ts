import gsap from 'gsap';

type EventMap = {
  [k in keyof HTMLElementEventMap]?: (event: HTMLElementEventMap[k]) => void;
};

function makeCursorSmall(_evt: any) {
  gsap.to('.custom-cursor', {
    scale: 0.5,
  });
}

function makeCursorNormal(_evt: any) {
  gsap.to('.custom-cursor', {
    scale: 1,
  });
}

function getEls(selector: string) {
  return document.querySelectorAll(selector) as unknown as HTMLElement[];
}

function createMagicAction(selector: string, eventWithHandlers: EventMap) {
  return {
    start() {
      const els = getEls(selector);

      els.forEach((el) => {
        Object.entries(eventWithHandlers).forEach((entry) => {
          const [event, handler] = entry as [
            keyof HTMLElementEventMap,
            (evt: Event) => void
          ];

          el.addEventListener(event, handler);
        });
      });
    },
    stop() {
      const els = getEls(selector);

      els.forEach((el) => {
        Object.entries(eventWithHandlers).forEach((entry) => {
          const [event, handler] = entry as [
            keyof HTMLElementEventMap,
            (evt: Event) => void
          ];

          el.removeEventListener(event, handler);
        });
      });
    },
  };
}

function cursorMagic(evt: MouseEvent) {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.to('.custom-cursor', {
    x: mouseX,
    y: mouseY,
    duration: 0.2,
  });

  const cursor = document.querySelector('.custom-cursor');

  if (cursor) {
    if (
      mouseX <= 5 ||
      mouseY <= 5 ||
      mouseX >= window.innerWidth - 5 ||
      mouseY >= window.innerHeight - 5
    ) {
      cursor.classList.add('small');
      cursor.classList.add('hide');
    } else {
      cursor.classList.remove('small');
      cursor.classList.remove('hide');
    }
  }

  // gsap.to('.shape', {
  //   x: mouseX,
  //   y: mouseY,
  //   stagger: -0.1,
  // });
}

const showCursor = (evt: MouseEvent) => {
  const target = evt.target as HTMLElement;

  if (target) {
    const snap = target.querySelector('.snap');

    if (snap) {
      const { x, y, width, height } = snap.getBoundingClientRect();
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      stopTracking();

      requestAnimationFrame(() => {
        gsap.to('.custom-cursor', {
          width,
          height,
          x: x + 10,
          y: y + 10,
          duration: 0.4,
          opacity: 0,
        });
      });
    }
  }
};

const hideCursor = () => {
  gsap.set('.custom-cursor', {
    opacity: 1,
    width: 20,
    height: 20,
  });

  requestAnimationFrame(function () {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    startTracking();
  });
};

const mouseMoveForDocument: EventMap = {
  mousemove: cursorMagic,
};

const { start: startTracking, stop: stopTracking } = createMagicAction(
  'body',
  mouseMoveForDocument
);

const makeSmall: EventMap = {
  mouseenter: makeCursorSmall,
  mouseleave: makeCursorNormal,
};

const { start: startMakeSmall, stop: stopMakeSmall } = createMagicAction(
  '.make-cursor-small',
  makeSmall
);

const transformToButton: EventMap = {
  mouseenter: showCursor,
  mouseleave: hideCursor,
};

const { start: startTransformButton, stop: stopTransformButton } =
  createMagicAction('.btn-hide-cursor', transformToButton);

export default function useMagicCursor() {
  return {
    startMakeSmall,
    stopMakeSmall,
    startTracking,
    stopTracking,
    startTransformButton,
    stopTransformButton,
  };
}
