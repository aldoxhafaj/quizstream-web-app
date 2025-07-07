export enum ResizeMode {
  cover = 'object-cover',
  contain = 'object-contain',
}

export enum ImageRadius {
  none = 'rounded-none!',
  xs = 'rounded-xs!',
  sm = 'rounded-sm!',
  sm_plus = 'rounded-sm-plus!',
  s = 'rounded-s!',
  md = 'rounded-md!',
  md_plus = 'rounded-md-plus!',
  lg = 'rounded-lg!',
  lg_plus = 'rounded-lg-plus!',
  xl = 'rounded-xl!',
  xxl = 'rounded-xxl!',
  full = 'rounded-full!',
}

export type ImageProps = {
  className?: string;
  source?: string;
  resizeMode?: keyof typeof ResizeMode;
  radius?: keyof typeof ImageRadius;
};
