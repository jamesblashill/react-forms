export interface IMediaQueries {
  tabletAndAbove: string;
  desktopAndAbove: string;
}

export interface Breakpoints {
  tablet: number;
  desktop: number;
}

export class MediaQueries implements IMediaQueries {
  constructor(private readonly breakpoints: Breakpoints) {}

  get tabletAndAbove() {
    return `@media only screen and (min-width: ${this.breakpoints.tablet}px)`
  }

  get desktopAndAbove() {
    return `@media only screen and (min-width: ${this.breakpoints.desktop}px)`
  }
}
