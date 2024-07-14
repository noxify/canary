import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

const CALENDLY_SVG_LIGHT = `<svg viewBox="0 0 1577 382" xmlns="http://www.w3.org/2000/svg"><path d="m228 219.9c-10.8 9.5-24.2 21.4-48.5 21.4h-14.6c-17.6 0-33.7-6.4-45.1-18-11.2-11.3-17.4-26.9-17.4-43.7v-19.9c0-16.9 6.2-32.4 17.4-43.7 11.5-11.6 27.5-18 45.1-18h14.6c24.4 0 37.8 11.9 48.5 21.4 11.2 9.9 20.8 18.4 46.5 18.4 4 0 7.901-0.3 11.701-0.9 0-0.1-0.1-0.1-0.1-0.2-1.5-3.8-3.3-7.5-5.4-11.1l-17.201-29.7c-15.8-27.3-44.899-44.1-76.399-44.1h-34.301c-31.5 0-60.6 16.8-76.4 44.1l-17.2 29.7c-15.8 27.3-15.8 60.9 0 88.2l17.2 29.7c15.8 27.3 44.9 44.1 76.4 44.1h34.301c31.5 0 60.599-16.8 76.399-44.1l17.201-29.7c2.1-3.6 3.9-7.3 5.4-11.1 0-0.1 0.1-0.1 0.1-0.2-3.8-0.6-7.701-0.9-11.701-0.9-25.7-0.2-35.4 8.4-46.5 18.3z" fill="#231F20"></path><path d="m179.4 115.9h-14.6c-26.8 0-44.4 19.2-44.4 43.7v19.9c0 24.5 17.6 43.7 44.4 43.7h14.6c39.1 0 36-39.8 95-39.8 5.7 0 11.201 0.5 16.701 1.5 1.8-10.1 1.8-20.5 0-30.6-5.4 1-11.001 1.5-16.701 1.5-59 0-55.9-39.9-95-39.9z" fill="#231F20"></path><path d="m325 199.5c-10.1-7.4-21.6-12.3-33.9-14.6v0.3c-1 5.8-2.7 11.6-4.9 17.2 10.3 1.7 19.9 5.6 28 11.5 0 0.1-0.1 0.2-0.1 0.3-4.7 15.3-11.8 29.6-21 42.7-9.2 12.9-20.2 24.3-32.9 33.8-26.3 19.7-57.7 30.2-90.7 30.2-20.4 0-40.2-4-58.9-11.9-18-7.6-34.2-18.5-48.1-32.4s-24.8-30.1-32.4-48.1c-7.9-18.6-11.9-38.5-11.9-58.9s3.9999-40.2 11.9-58.9c7.6-18 18.5-34.2 32.4-48.1s30.1-24.8 48.1-32.4c18.6-7.9 38.5-11.9 58.9-11.9 33 0 64.4 10.4 90.7 30.2 12.7 9.5 23.7 20.9 32.9 33.8 9.3 13.1 16.3 27.5 21 42.7 0 0.1 0.1 0.2 0.1 0.3-8.1 6-17.7 9.9-28 11.5 2.2 5.6 3.9 11.3 4.9 17.2v0.3c12.3-2.3 23.8-7.1 33.9-14.6 9.7-7.2 7.799-15.2 6.299-20-21.3-69.2-85.7-119.4-161.9-119.4-93.5 0-169.3 75.8-169.3 169.3 0 93.5 75.8 169.3 169.3 169.3 76.2 0 140.6-50.3 161.9-119.4 1.5-4.8 3.401-12.9-6.299-20z" fill="#231F20"></path><path d="m934.1 151.1c24.5 0 47.7 15 52.6 47.4h-109.2c4.6-28.4 25.9-47.4 56.6-47.4zm49.199 95.4c-8.3 13-24.5 23-46.5 23-30.4 0-53.599-16.7-59.199-46.1h137c0.7-4.2 1-8.5 1-12.8 0-45.8-32-86.3-81.4-86.3-51 0-85.7 37.6-85.7 86 0 49 35 86 87.6 86 32.7 0 57.5-14.7 71.9-36.9l-24.701-12.9z" fill="#231F20"></path><path d="m835 53.3h-28.4v238.7h28.4v-238.7z" fill="#231F20"></path><path d="m1173.8 191.6v100.4h-28.4v-98.7c0-26.8-15.4-41.9-40.5-41.9-26.2 0-47.4 15.4-47.4 53.9v86.6h-28.5v-163.5h28.4v23.5c12.1-19.3 30.1-27.8 53-27.8 38.2 0.2 63.4 25.7 63.4 67.5z" fill="#231F20"></path><path d="m1330.7 210.3c0-33.4-25.2-58.5-58.2-58.5-32.7 0-57.9 25.2-57.9 58.5s25.2 58.5 57.9 58.5c33 0 58.2-25.2 58.2-58.5zm28.4-157v238.7h-28.4v-28.1c-13.1 19.9-34 32.4-61.8 32.4-45.4 0-82.7-37.6-82.7-86s37.3-86 82.7-86c27.8 0 48.7 12.4 61.8 32.4v-103.3h28.4v-0.0999z" fill="#231F20"></path><path d="m1410.4 53.3h-28.4v238.7h28.4v-238.7z" fill="#231F20"></path><path d="m755.9 210.3c0-33.4-25.199-58.5-58.199-58.5-32.7 0-57.901 25.2-57.901 58.5s25.201 58.5 57.901 58.5c33 0 58.199-25.2 58.199-58.5zm28.4-81.8v163.5h-28.4v-28.1c-13.1 19.9-33.999 32.4-61.799 32.4-45.4 0-82.701-37.6-82.701-86s37.301-86 82.701-86c27.8 0 48.699 12.4 61.799 32.4v-28.1h28.4v-0.1z" fill="#231F20"></path><path d="m569.2 260.6c-14.4 5.3-30.101 6.8-45.401 4.2-23.3-3.9-43.7-16.7-57.4-36s-19.099-42.7-15.199-66 16.7-43.7 36-57.4c19.3-13.7 42.7-19.1 66-15.1 15.3 2.6 29.6 9.0999 41.5 18.9 5 4.1 9.5 8.8 13.5 13.9l24.599-18c-5.5-7.2002-11.799-13.8-18.699-19.4-16-13.2-35.301-22-55.801-25.5-31.3-5.3-62.899 1.9-88.799 20.3s-43.1 45.8-48.4 77.2c-10.9 64.7 32.8 126.2 97.5 137.2 6.5 1.1 13.2 1.7 19.9 1.7 14.2 0 28-2.5 41.2-7.4 11.2-4.1 21.8-10.1 31.4-17.4l-16.4-25.9c-7.6 6.2-16.3 11.3-25.5 14.7z" fill="#231F20"></path><path d="m1547.8 128.5v92.8c0 30-17.5 49-44.1 49s-45.9-19-45.9-49v-92.8h-28.8v90c0 47.2 29.4 77.8 74.7 77.8 39.2 0 45.3-24.8 45.3-25.4v33.4c0 33.1-14.4 51.7-44.4 51.7-22.6 0-41.2-16.7-44-38.2l-25.7 9c7.4 31.6 35.6 55.2 69.7 55.2 46.5 0 72-30.6 72-77.8v-175.8h-28.8v0.1z" fill="#231F20"></path></svg>`;
const CALENDLY_SVG_DARK = `<svg viewBox="0 0 1580.9 381.52" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#fff;}</style></defs><g data-name="Layer 2"><g data-name="Logo assets"><path class="cls-1" d="M938.46,150.54c24.52,0,47.74,15,52.64,47.41H881.9c4.57-28.44,25.83-47.41,56.56-47.41m49.15,95.36c-8.34,13-24.46,23-46.53,23-30.41,0-53.63-16.67-59.18-46.1h137a83,83,0,0,0,1-12.75c0-45.77-32-86.32-81.42-86.32-51,0-85.66,37.6-85.66,86,0,49,35,86,87.62,86,32.7,0,57.55-14.72,71.93-37Z"></path><rect class="cls-1" x="810.92" y="52.78" width="28.44" height="238.69"></rect><path class="cls-1" d="M1178.15,191.09V291.46H1149.7V192.72c0-26.81-15.36-41.85-40.54-41.85-26.16,0-47.41,15.37-47.41,53.95v86.64H1033.3V128h28.45v23.54c12.1-19.29,30.08-27.79,53-27.79,38.25,0,63.43,25.5,63.43,67.36"></path><path class="cls-1" d="M1335,209.72c0-33.35-25.18-58.53-58.2-58.53-32.7,0-57.87,25.18-57.87,58.53s25.17,58.53,57.87,58.53c33,0,58.2-25.18,58.2-58.53m28.44-156.94V291.47H1335V263.34c-13.08,20-34,32.38-61.8,32.38-45.45,0-82.72-37.61-82.72-86s37.27-86,82.72-86c27.79,0,48.72,12.42,61.8,32.37V52.78Z"></path><rect class="cls-1" x="1386.4" y="52.78" width="28.44" height="238.69"></rect><path class="cls-1" d="M760.22,209.72c0-33.35-25.17-58.53-58.2-58.53-32.69,0-57.87,25.18-57.87,58.53s25.18,58.53,57.87,58.53c33,0,58.2-25.18,58.2-58.53M788.67,128V291.46H760.22V263.34c-13.08,20-34,32.38-61.79,32.38-45.45,0-82.73-37.61-82.73-86s37.28-86,82.73-86c27.79,0,48.71,12.42,61.79,32.37V128Z"></path><path class="cls-1" d="m573.51 260a88.53 88.53 0 1 1 25.6-151.42 87 87 0 0 1 13.48 13.92l24.61-18a119.17 119.17 0 1 0-21.72 166.65l-16.38-25.9a89.32 89.32 0 0 1-25.59 14.75"></path><path class="cls-1" d="M1552.12,128v92.78c0,30-17.45,49-44.09,49s-45.93-19-45.93-49V128h-28.78v90c0,47.16,29.39,77.78,74.71,77.78,39.2,0,45.32-24.8,45.32-25.42v33.38c0,33.07-14.39,51.75-44.4,51.75a44.19,44.19,0,0,1-44-38.2l-25.73,9A71.53,71.53,0,0,0,1509,381.52c46.54,0,72-30.63,72-77.78V128Z"></path><g data-name="Brand mark"><path class="cls-1" d="M231.58,223.23C220.65,232.93,207,245,182.25,245h-14.8c-17.91,0-34.2-6.51-45.86-18.31-11.39-11.53-17.66-27.31-17.66-44.44V162c0-17.13,6.27-32.91,17.66-44.44,11.66-11.8,27.95-18.3,45.86-18.3h14.8c24.78,0,38.4,12.06,49.33,21.76,11.35,10,21.14,18.74,47.25,18.74a75.11,75.11,0,0,0,11.89-.95l-.09-.23a89.53,89.53,0,0,0-5.49-11.28L267.69,97.07a89.65,89.65,0,0,0-77.64-44.82H155.14A89.65,89.65,0,0,0,77.5,97.07L60.05,127.3a89.67,89.67,0,0,0,0,89.65L77.5,247.18A89.65,89.65,0,0,0,155.14,292h34.91a89.65,89.65,0,0,0,77.64-44.82L285.14,217a89.53,89.53,0,0,0,5.49-11.28l.09-.22a74,74,0,0,0-11.89-1c-26.11,0-35.9,8.69-47.25,18.74"></path><path class="cls-1" d="m182.25 117.61h-14.8c-27.26 0-45.17 19.47-45.17 44.39v20.25c0 24.92 17.91 44.39 45.17 44.39h14.8c39.72 0 36.6-40.5 96.58-40.5a91.64 91.64 0 0 1 16.94 1.56 89.54 89.54 0 0 0 0-31.15 92.51 92.51 0 0 1-16.94 1.56c-60 0-56.86-40.5-96.58-40.5"></path><path class="cls-1" d="M330.23,202.5a83.62,83.62,0,0,0-34.45-14.81c0,.11,0,.2,0,.3a89.7,89.7,0,0,1-5,17.45,65.58,65.58,0,0,1,28.48,11.73c0,.08-.05.18-.08.27a153.57,153.57,0,1,1,0-90.63c0,.09.05.19.08.27a65.45,65.45,0,0,1-28.48,11.72,90.3,90.3,0,0,1,5,17.47,2.33,2.33,0,0,0,0,.28,83.6,83.6,0,0,0,34.45-14.8c9.82-7.27,7.92-15.48,6.43-20.34a172.13,172.13,0,1,0,0,101.43c1.49-4.86,3.39-13.07-6.43-20.34"></path></g></g></g></svg>`;

@customElement("canary-logo-calendly")
export class CanaryLogoCalendly extends LitElement {
  @property() url = "";

  render() {
    return html`
      <div>
        <a href=${this.url} target="_blank" class="light">
          ${unsafeSVG(CALENDLY_SVG_LIGHT)}
        </a>
        <a href=${this.url} target="_blank" class="dark">
          ${unsafeSVG(CALENDLY_SVG_DARK)}
        </a>
      </div>
    `;
  }

  static styles = css`
    div {
      display: flex;
      align-items: center;
    }

    svg {
      height: 14px;
      padding-bottom: 2px;
    }

    a.light {
      display: flex;
    }

    a.dark {
      display: none;
    }

    :root[data-theme="light"] a.light {
      display: flex;
    }
    :root[data-theme="light"] a.dark {
      display: none;
    }

    :root[data-theme="dark"] a.dark {
      display: flex;
    }
    :root[data-theme="dark"] a.light {
      display: none;
    }
  `;
}
