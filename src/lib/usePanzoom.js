import { useSpring, interpolate, config } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const limit = (max, min, scale) => (scale < max ? (scale > min ? scale : min) : max);

export const transform = (xy, scale) =>
  interpolate([xy, scale], ([x, y], scale) => `translate3d(${x}px, ${y}px, 0) scale(${scale})`);

export function usePanzoom(options) {
  const { maxZoom, minZoom } = options;
  const [spring, set] = useSpring(() => ({
    xy: [0, 0],
    scale: 1,
    config: config.default
  }));

  const { xy, scale } = spring;

  const pan = useGesture({
    onDrag: ({ local }) => set({ xy: local })
  });
  const zoom = useGesture({
    onWheel: ({ xy: [, y], previous: [, lastY] }) => {
      let s = scale.getValue();
      let diff = -(y - lastY);
      set({ scale: limit(maxZoom, minZoom, s + (diff / 50) * s) });
    }
  });

  const panzoom = () => ({ ...pan(), ...zoom() });

  return [spring, { pan, zoom, panzoom }];
}
