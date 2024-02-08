export interface LinksType {
    fps: number;
    w: number;
    h: number;
    u: U;
    ua: Ua;
    i: string;
    t: T[];
    evt: Evt;
    cc: any[];
    l: string;
    r: number;
    title: string;
    author: Author;
    player: boolean;
    duration: number;
    pubDate: string;
    loaded: number;
    vid: number;
    timeline: number[];
    own: boolean;
    restrict: number[];
    autoplay: number;
    track: number;
    live: number;
    live_placeholder: boolean;
    livestream_has_dvr?: any;
    a: A;
    viewer_id: string;
  }
  interface A {
    timeout: number;
    u: string;
    aden: number[];
    ov: boolean;
    ads: Ad[];
    a: string;
    ae: string;
    ap: (boolean | number)[];
    loop: any[];
  }
  interface Ad {
    timecode: number;
    linear: number;
    type: string;
    autoplay: number;
    waterfall: Waterfall[];
  }
  interface Waterfall {
    url: string;
    sys: number;
    autoplay: number;
  }
  interface Author {
    name: string;
    url: string;
  }
  interface Evt {
    v: string;
    e: string;
    wt: number;
    t: string;
  }
  interface T {
    i: string;
    w: number;
    h: number;
  }
  interface Ua {
    mp4: Mp42;
    webm: Webm;
  }
  interface Webm {
    '480': Mp4;
  }
 export interface Mp42 {
    '360': Mp4;
    '480': Mp4;
    '720': Mp4;
    '1080': Mp4;
  }
  interface U {
    mp4: Mp4;
    webm: Mp4;
  }
  interface Mp4 {
    url: string;
    meta: Meta;
  }
  interface Meta {
    bitrate: number;
    size: number;
    w: number;
    h: number;
  }