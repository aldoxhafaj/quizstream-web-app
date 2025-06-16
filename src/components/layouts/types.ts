export enum FlexAlign {
  center = 'items-center',
  start = 'items-start',
  stretch = 'items-stretch',
  end = 'items-end',
  safecenter = 'items-center-safe',
  safeEnd = 'items-end-safe',
}

export enum FlexJustify {
  around = 'justify-around',
  between = 'justify-between',
  center = 'justify-center',
  end = 'justify-end',
  start = 'justify-start',
  evenly = 'justify-evenly',
  safecenter = 'justify-center-safe',
  safeEnd = 'justify-end-safe',
}

export type AlignItems = keyof typeof FlexAlign;
export type JustifyContent = keyof typeof FlexJustify;
