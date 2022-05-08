import { useMediaQuery } from '@react-hook/media-query';

export default function useIsMobile() {
  return useMediaQuery('(pointer: coarse)');
}
