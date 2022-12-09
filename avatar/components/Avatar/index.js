export default class Avatar extends HTMLElement {
  constructor(){
    super()
    this.avatar = {
      hair: 0,
      ears: 0,
      mouth: 5,
      eyes: 0,
      eyebrows: 2,
      nose: 2,
      shirt: 0,
      skin: 6
    }
    this.skin = [
      '#f1eeee',
      '#facabe',
      '#d99786',
      '#b67d6f',
      '#AC6651',
      '#7e5747',
      '#502f28',
    ]
    this.hairs = [
      `<svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M210.177 51.3965C201.855 91.2936 103.499 96.8962 83.6772 96.8962C31.6548 102.823 56.6248 165.262 66.1772 196.396C58.6772 197.396 59.6772 206.396 30.6772 134.896C7.47724 77.6964 73.1831 42.8337 121.999 30.9995C170.815 19.1653 189.499 2.50195 189.499 2.50195C210.177 11 215.116 27.7185 210.177 51.3965Z" fill="black"/>
    <path d="M205.134 124.947L189.316 71.5069L199.354 62.3644C210.109 99.4523 210.601 120.988 205.134 124.947Z" fill="black"/>
    <path d="M80 170C74.4 142.8 60.3333 147.667 51 149L41 105L81.5844 96.5056C82.3363 96.2656 83.1408 96.0955 84 96L81.5844 96.5056C63.4332 102.299 75.9565 148.796 91 168L80 170Z" fill="black"/>
    <path d="M24.9887 67.3632C33.8341 62.9091 44.2805 65.4873 48.3981 67.3331L36.6273 82.2134C39.6625 77.3568 30.1329 70.2897 24.9887 67.3632Z" fill="black"/>
    <path d="M10 84.4996C21.6 77.6996 32.8333 79.9996 37 81.9996L32.5 97.5C31.3 89.1 17 85.3331 10 84.4996Z" fill="black"/>
  </svg>`,
      `<svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M140 56C154.667 55.3333 180.4 47.2 166 20" stroke="black" stroke-width="4"/>
    <path d="M114 54C128.667 53.3333 154.4 45.2 140 18" stroke="black" stroke-width="4"/>
    <path d="M78 65C92.6667 64.3333 118.4 56.2 104 29" stroke="black" stroke-width="4"/>
  </svg>`,
      `<svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="147.854" cy="58.1803" rx="6.85759" ry="18.4393" transform="rotate(117 147.854 58.1803)" fill="#FCFDFF"/>
  </svg>`,
      `<svg width="240" height="203" viewBox="0 0 240 203" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.35" d="M187.986 80.1756C179.986 73.7756 166.153 73.1758 160.486 73.6758L152.486 47.1758C166.086 50.3758 184.486 71.1758 187.986 80.1756Z" fill="#717376"/>
    <path d="M85.7923 14.7636C85.7923 14.7636 91.5301 10.802 115.746 4.70097C139.963 -1.40007 148.792 0.983287 148.792 0.983287L160.581 73.815C160.581 73.815 152.542 73.6416 132.548 78.0085C112.555 82.3754 102.986 87.6748 102.986 87.6748L85.7923 14.7636Z" fill="#171921"/>
    <path d="M48.9855 89.6758C42.1855 48.0758 72.3188 21.5091 85.9855 14.1758L102.985 87.6758C83.7855 48.0758 57.6521 72.5091 48.9855 89.6758Z" fill="#171921"/>
    <path opacity="0.35" d="M67.4855 133.675C60.2855 106.475 89.4855 91.8415 102.985 87.6749C95.9855 71.3415 79.9854 56.6749 60.4854 74.6756C42.4854 105.175 49.4855 128.676 54.9855 146.675L67.4855 133.675Z" fill="#717376"/>
  </svg>`,
      `<svg width="240" height="270" viewBox="0 0 240 270" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M123.788 17.4887L123.864 17.4969L123.941 17.4991C150.61 18.2835 171.342 28.8969 186.013 41.8493C200.069 54.2583 208.463 68.7231 211.2 78.5817C207.14 80.8991 200.185 82.8931 191.315 84.5285C181.639 86.3123 170.022 87.615 158.168 88.5436C134.462 90.4007 109.978 90.7491 98.5428 90.5005L92.4699 90.3685L97.2764 94.0826C99.774 96.0125 103.099 97.3557 106.615 98.3003C110.156 99.2517 114.034 99.8354 117.746 100.167C121.57 100.509 125.299 100.589 128.387 100.51C117.8 108.672 104.325 114.948 91.0384 119.6C75.6922 124.973 60.7685 128.12 51.2093 129.521L49.0601 129.836L49.551 131.952C52.8984 146.381 59.0518 171.603 63.179 188.519C65.01 196.025 66.4422 201.895 67.0537 204.463C68.1379 209.017 71.5518 215.508 75.4484 221.491C79.0412 227.008 83.2329 232.38 86.7703 235.687L78.9322 267.5H49.3714C57.7091 254.787 59.469 240.097 57.7689 224.517C55.9286 207.653 50.0074 189.513 43.7659 171.35C43.1514 169.562 42.5339 167.774 41.9165 165.986C36.2326 149.527 30.5644 133.113 27.4936 117.382C24.0922 99.9582 23.9407 83.6514 30.3264 69.3137C40.6653 46.0999 58.9929 32.6198 77.3255 25.1911C95.701 17.745 113.945 16.4399 123.788 17.4887Z" fill="white" stroke="#171921" stroke-width="4"/>
  </svg>`,
      `<svg width="240" height="212" viewBox="0 0 240 212" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M222.726 112.791C222.726 46.702 186.268 2.00007 141.859 2C84.9656 2 27 23.3414 27 124.255C27 149.223 37.6589 167.827 52.5644 181.54C51.0704 179.671 49.8666 177.996 49.0668 176.619C46.176 149.638 78.2326 128.929 109.601 108.665C126.254 97.907 142.712 87.2746 153.646 75.8956C163.24 81.3324 191.44 104.109 196.813 113.32C199.695 118.26 204.322 135.189 207.484 154.95C217.822 142.532 222.726 130.107 222.726 112.791Z" fill="white" stroke="black" stroke-width="4"/>
    <path d="M154.264 75.2457C167.438 63.3013 187.146 36.0399 185.881 18.334" stroke="black" stroke-width="4"/>
  </svg>`
    ]
    this.ears = [
      `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.5 6.17556C28.17 5.40834 25.6547 5 23.08 5C12.5866 5 4.08007 11.5 5.08001 23.5C6.12162 36 13.5866 40.5 24.08 40.5C25.2476 40.5 26.3906 40.3975 27.5 40.2011C28.7105 39.9869 29.8811 39.6609 31 39.2347" stroke="#171921" stroke-width="8"/>
      <path d="M31.5 39.0361C29.2204 39.9786 26.7127 40.5 24.08 40.5C13.5866 40.5 6.12162 36 5.08001 23.5C4.08007 11.5 12.5866 5 23.08 5C26.2175 5 29.2667 5.60635 32 6.72957L31.5 39.0361Z" fill="${this.skin[this.avatar.skin]}"/>
      <path d="M27.5 13.5004C23.5 11.6671 14.7 10.7004 11.5 21.5004" stroke="#171921" stroke-width="4"/>
      <path d="M17 14C19.1667 15.8333 23.3 21.5 22.5 29.5" stroke="#171921" stroke-width="4"/>
      </svg>`,
      `<svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.466 43.1111L37 42.5357V41.7506V8.24948V7.13022L36.046 6.54483C32.3122 4.25363 27.7717 3 23.08 3C17.4397 3 12.1591 4.74745 8.39775 8.29504C4.59419 11.8824 2.54206 17.1274 3.08692 23.6661C3.61786 30.0378 5.75693 34.7272 9.30474 37.8433C9.01338 38.8425 8.92733 39.9197 9.06236 41.0533C9.45166 44.3216 11.1039 46.6766 13.6572 48.1277C16.0911 49.511 19.2061 49.9998 22.5242 49.9998C28.0033 49.9998 32.8077 47.0528 36.466 43.1111Z" stroke="black" stroke-width="4"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M42.972 23.984C43.0434 23.3322 43.08 22.6703 43.08 22C43.08 11.7827 33.5734 5 23.08 5C12.5866 5 4.08007 11.5 5.08001 23.5C5.63643 30.1774 8.02584 34.5719 11.7307 37.2171C11.1423 38.2409 10.8848 39.4436 11.0483 40.8167C11.6774 46.0984 16.1862 47.9998 22.5242 47.9998C33.6292 47.9998 42.4159 33.9534 42.972 23.984Z" fill="${this.skin[this.avatar.skin]}"/>
      <path d="M27.5 13.5004C23.5 11.6671 14.7 10.7004 11.5 21.5004" stroke="#171921" stroke-width="4"/>
      <path d="M17 14C19.1667 15.8333 23.3 21.5 22.5 29.5" stroke="#171921" stroke-width="4"/>
      </svg>`
    ]
    this.mouth = [
      `<svg width="77" height="64" viewBox="0 0 77 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 41C5.21065 33.0427 17.1069 16.2329 39.0069 12.6522C60.9069 9.07139 72.1273 21.1068 75 27.5721" stroke="black" stroke-width="4"/>
      </svg>`,
      `<svg width="73" height="64" viewBox="0 0 73 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M69.9204 13.3305C69.7501 11.263 67.6363 10.1117 65.8448 10.8176C61.6161 12.4839 47.6267 17.7834 37.7627 19.1403C26.9401 20.6291 10.5503 18.821 5.80622 18.2319C3.87694 17.9923 2.15721 19.6504 2.49021 21.6654C3.14178 25.6081 4.48399 29.4088 6.45857 32.8914C8.6608 36.7754 11.6065 40.1877 15.1274 42.9333C18.6484 45.679 22.6757 47.7042 26.9793 48.8935C31.283 50.0827 35.7787 50.4126 40.2099 49.8644C44.6411 49.3162 48.9208 47.9005 52.8049 45.6983C56.689 43.4961 60.1012 40.5504 62.8469 37.0294C65.5925 33.5085 67.6178 29.4812 68.807 25.1775C69.8726 21.3212 70.2483 17.3106 69.9204 13.3305Z" fill="#171921" stroke="#171921" stroke-width="4"/>
      <mask id="mask0_48_87" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="12" width="65" height="37">
      <path d="M67.7931 12.1925C68.3091 16.363 67.9985 20.5943 66.8793 24.6448C65.76 28.6953 63.8539 32.4857 61.2697 35.7996C58.6856 39.1134 55.474 41.8858 51.8185 43.9585C48.1629 46.0312 44.1348 47.3636 39.9643 47.8795C35.7938 48.3955 31.5625 48.085 27.512 46.9657C23.4615 45.8464 19.6712 43.9403 16.3573 41.3562C13.0435 38.772 10.2711 35.5605 8.19838 31.9049C6.12569 28.2493 4.79332 24.2213 4.27734 20.0508L67.7931 12.1925Z" fill="#171921"/>
      </mask>
      <g mask="url(#mask0_48_87)">
      <circle cx="40.5221" cy="52.3146" r="21.5" transform="rotate(-7.05286 40.5221 52.3146)" fill="#FC909F"/>
      </g>
      </svg>`,
      `<svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4.24805" y="17.4707" width="70" height="24" rx="4" transform="rotate(-4 4.24805 17.4707)" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M67.8211 13.0252L10.5039 17.0332L12.3439 24.0378C13.0765 26.8266 15.6892 28.6999 18.5656 28.4988C15.6892 28.6999 13.3627 30.9186 13.0253 33.7822L12.1781 40.9747L69.4952 36.9667L67.6552 29.9621C66.9226 27.1734 64.3099 25.3 61.4336 25.5012C64.3099 25.3 66.6365 23.0813 66.9738 20.2177L67.8211 13.0252Z" fill="white"/>
      <path d="M9.06711 15.8455C5.41077 15.5824 2.32285 18.6103 2.58059 22.2961L3.5994 36.8658C3.85714 40.5517 7.33642 43.1204 10.9206 42.351C17.8645 40.8603 31.142 38.2166 40.7373 37.5457C50.3326 36.8747 63.8488 37.6448 70.9326 38.1545C74.589 38.4176 77.6769 35.3897 77.4191 31.7039L76.4003 17.1342C76.1426 13.4483 72.6633 10.8796 69.0792 11.649C62.1352 13.1397 48.8578 15.7833 39.2624 16.4543C29.6671 17.1253 16.151 16.3552 9.06711 15.8455Z" stroke="black" stroke-width="4"/>
      </svg>
      `,
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 16.6965C30.1667 14.3631 47 11.3964 47 18.1964C47 26.6964 35.5 26.1965 35.5 26.1965C35.5 26.1965 48.5447 23.0354 46 32.1965C43.5 41.1965 36.5 37.6965 34.5 36.6965" stroke="black" stroke-width="4"/>
      </svg>`,
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 46C14.7153 38.0427 21.0708 21.2329 32.7708 17.6522C44.4708 14.0714 50.4653 26.1068 52 32.5721" stroke="black" stroke-width="4"/>
      </svg>`,
      `<svg width="67" height="64" viewBox="0 0 67 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 17.5C5 34.5 33.5 42.5 59.5 23" stroke="black" stroke-width="4"/>
      </svg>`,
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0007 24.1649C14.941 30.6115 22.4277 37.7537 33.9767 36.125C45.5257 34.4963 50.6642 26.5297 49.1492 20.0779" stroke="black" stroke-width="4"/>
      </svg>`,
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.047 54.8914C46.884 52.9301 53.2329 40.9546 51.0248 28.7536C48.8167 16.5526 38.6734 7.56185 27.8364 9.52311C16.9993 11.4844 10.6504 23.4598 12.8585 35.6608C15.0666 47.8619 25.2099 56.8526 36.047 54.8914Z" fill="black" stroke="black" stroke-width="3.59115"/>
      <mask id="mask0_48_80" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="14" y="11" width="36" height="43">
      <ellipse cx="31.9417" cy="32.2072" rx="17.5976" ry="21.257" transform="rotate(-10.2582 31.9417 32.2072)" fill="#171921"/>
      </mask>
      <g mask="url(#mask0_48_80)">
      <ellipse cx="35.202" cy="50.2187" rx="20.2046" ry="18.3047" transform="rotate(-10.2582 35.202 50.2187)" fill="#FC909F"/>
      </g>
      </svg>`
    ]
    this.eyes = [
      `<svg width="96" height="48" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16.5301" cy="29.4023" rx="9" ry="13.5" transform="rotate(-6.77646 16.5301 29.4023)" fill="black"/>
      <ellipse cx="80.5312" cy="19.4021" rx="9" ry="13.5" transform="rotate(-6.27568 80.5312 19.4021)" fill="black"/>
      </svg>`,
      `<svg width="96" height="49" viewBox="0 0 96 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15.2398" cy="21.2394" r="12" transform="rotate(-6.27568 15.2398 21.2394)" fill="#D2EFF3"/>
      <ellipse cx="16.5301" cy="30.4023" rx="9" ry="13.5" transform="rotate(-6.77646 16.5301 30.4023)" fill="black"/>
      <circle cx="79.0191" cy="12.6105" r="12" transform="rotate(-6.27568 79.0191 12.6105)" fill="#D2EFF3"/>
      <ellipse cx="80.5312" cy="20.4021" rx="9" ry="13.5" transform="rotate(-6.27568 80.5312 20.4021)" fill="black"/>
      </svg>`,
      `<svg width="96" height="48" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16.1171" cy="28.9268" rx="9" ry="10" transform="rotate(-6.77646 16.1171 28.9268)" fill="black"/>
      <ellipse cx="80.1486" cy="18.9231" rx="9" ry="10" transform="rotate(-6.27568 80.1486 18.9231)" fill="black"/>
      </svg>`,
      `<svg width="96" height="48" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28675 34.0729C5.40099 34.8857 6.43424 35.0669 7.00876 34.4806C9.47388 31.9648 13.2637 30.1163 17.663 29.5936C20.2577 29.2853 22.7544 29.4749 24.9787 30.0657C25.7326 30.2659 26.4737 29.6294 26.2105 28.8951C24.5451 24.2497 19.8447 21.1962 14.7356 21.8033C8.79442 22.5093 4.55046 27.8978 5.25642 33.839C5.26572 33.9172 5.27583 33.9952 5.28675 34.0729Z" fill="#171921"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M69.3848 24.0725C69.4976 24.8856 70.5308 25.0671 71.1062 24.4816C73.5487 21.9959 77.2977 20.1702 81.6484 19.6532C84.2128 19.3485 86.6804 19.5348 88.88 20.1167C89.6341 20.3162 90.3751 19.6795 90.1108 18.9456C88.456 14.3522 83.8041 11.3346 78.7482 11.9354C72.8624 12.6348 68.6579 17.9732 69.3573 23.8591C69.3658 23.9305 69.3749 24.0016 69.3848 24.0725Z" fill="#171921"/>
      </svg>`
    ]
    this.eyebrows = [
      `<svg width="149" height="48" viewBox="0 0 149 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 26.5C33.1667 29 48.1 29.5 58.5 11.5" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M94 4C99.1667 9.33333 112.1 16.8 122.5 4" stroke="black" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
      `<svg width="149" height="51" viewBox="0 0 149 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 29.5C33.1667 32 48.1 32.5 58.5 14.5" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M94 7C99.1667 12.3333 112.1 19.8 122.5 7" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M37.1484 29.4578L31 24.0312" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M116.219 12.4435L118.004 4.43945" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M45.5975 25.8142L41.5508 18.6816" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M108.142 12.0179L109.08 3.87109" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M52.6736 20.2005L50.4727 12.3008" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M99.993 11.031L99.2168 2.86719" stroke="black" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
      `<svg width="149" height="48" viewBox="0 0 149 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M99 10.2143C104.667 7.5476 118 5.11427 126 16.7143" stroke="black" stroke-width="4" stroke-linecap="round"/>
      <path d="M23.5791 35.521C25.6497 29.6104 33.2612 18.3959 47.1418 20.8224" stroke="black" stroke-width="4" stroke-linecap="round"/>
      </svg>`
    ]
    this.noses = [
      `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 7C16.1667 10.8333 16.5 19.2 20.5 22C25.5 25.5 20 34 10 32" stroke="#171921" stroke-width="4"/>
      </svg>`,
      `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 3C16.5 17 23.5 28 23.5 28C23.5 28 20 34 10 32" stroke="#171921" stroke-width="4"/>
      </svg>`,
      `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.307 12.3397C17.753 11.0993 26.6843 12.9603 24.7238 22.8833C22.9813 31.7023 13.6141 32.1857 11 29.7048" stroke="black" stroke-width="4"/>
      </svg>`
    ]
    this.shirt = [
      `<svg width="281" height="93" viewBox="0 0 281 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M142.771 67.5777C142.771 67.5779 142.771 67.5779 144 66L142.771 67.5779L144.493 68.9188L145.679 67.0874L145.679 67.087L145.681 67.0841L145.69 67.0697L145.731 67.0072C145.742 66.9904 145.755 66.971 145.769 66.9491C145.803 66.8975 145.847 66.8318 145.9 66.7529C146.05 66.5278 146.275 66.1947 146.57 65.7695C147.158 64.919 148.023 63.7016 149.118 62.2463C151.312 59.3316 154.416 55.482 158.071 51.7183C161.737 47.9446 165.898 44.3176 170.198 41.7935C174.514 39.2597 178.777 37.9491 182.733 38.4825C225.171 44.2046 256.402 63.002 276.674 91.0006H3.37453C19.6742 61.6588 42.8579 42.9825 80.4446 34.4127C82.0464 34.0474 84.2242 34.1581 86.9471 34.7915C89.6421 35.4183 92.7146 36.5194 96.0282 37.9759C102.655 40.8887 110.052 45.1363 117.004 49.5364C123.945 53.9299 130.39 58.4425 135.104 61.8597C137.459 63.5674 139.379 64.9995 140.709 66.0036C141.374 66.5056 141.891 66.9005 142.241 67.1693C142.416 67.3037 142.55 67.4065 142.639 67.4754L142.739 67.553L142.764 67.5722L142.77 67.5767L142.771 67.5777Z" fill="#9287FF" stroke="black" stroke-width="4"/>
      <path d="M68.6127 37.0849L73.7794 17.8529C73.9886 17.0741 74.9962 16.854 75.5402 17.4493C90.4034 33.7135 109.16 33.0762 115.385 32.3297C116.23 32.2284 116.892 33.1531 116.495 33.906L103.338 58.859C103.136 59.2414 102.724 59.4518 102.3 59.3636C98.3518 58.5411 78.6774 53.7321 68.7286 37.8667C68.583 37.6345 68.5416 37.3496 68.6127 37.0849Z" fill="#E0DDFF" stroke="black" stroke-width="4"/>
      <path d="M199.195 36.9814L187.615 17.4989C187.222 16.8374 186.253 16.8483 185.834 17.4937C180.097 26.3296 170.202 30.4 166.742 31.6024C166.12 31.8187 165.835 32.5584 166.171 33.1254L179.673 55.9402C179.875 56.2806 180.255 56.4651 180.636 56.3568C182.771 55.749 190.096 52.6851 199.182 38.0212C199.378 37.706 199.385 37.3001 199.195 36.9814Z" fill="#E0DDFF" stroke="black" stroke-width="4"/>
      <path d="M125.5 54.5L116.5 33L109.5 48L125.5 54.5Z" fill="black" stroke="black" stroke-width="4" stroke-linejoin="round"/>
      <path d="M157 53.5L166 32L173 47L157 53.5Z" fill="black" stroke="black" stroke-width="4" stroke-linejoin="round"/>
      <path d="M86.5 14L74.5 17L84.5 23.5L86.5 14Z" fill="black" stroke="black" stroke-width="4" stroke-linejoin="round"/>
      <path d="M176 14L187 17L180 23.5L176 14Z" fill="black" stroke="black" stroke-width="4" stroke-linejoin="round"/>
      </svg>`,
      `<svg width="281" height="93" viewBox="0 0 281 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M276.366 90.8628H3.45626C3.49074 90.7926 3.52546 90.7219 3.5604 90.6507C8.10518 81.395 16.4899 64.319 27.4025 49.0413C33.5961 40.3702 40.5303 32.3872 47.9416 26.7719C55.3538 21.1558 63.0614 18.0405 70.8916 18.7256C85.946 20.0429 99.3549 28.2854 112.817 36.5604C114.092 37.3444 115.368 38.1288 116.646 38.9076C131.131 47.7349 146.005 55.9312 162.365 52.3445C167.899 51.1311 171.629 48.5345 173.976 45.1797C176.29 41.8727 177.122 38.0292 177.266 34.5166C177.41 30.9989 176.871 27.6738 176.311 25.2562C176.049 24.1257 175.779 23.1785 175.564 22.4839C179.189 18.8351 183.027 16.71 186.989 15.7533C191.284 14.7164 195.876 15.0158 200.707 16.4448C210.437 19.3229 220.847 26.6969 231.007 36.1789C249.621 53.5516 266.7 77.3231 276.366 90.8628Z" fill="#9287FF" stroke="black" stroke-width="4.27431"/>
      </svg>`,
      `<svg width="281" height="93" viewBox="0 0 281 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M182.552 38.4488L182.692 38.4809L182.836 38.4927C228.961 42.2969 256.62 62.7848 276.694 90.9997H3.37453C19.6742 61.6579 42.8579 42.9816 80.4446 34.4117C96.4579 30.7606 115.113 28.9394 137 28.9395C146.456 28.9395 153.814 30.3819 160.796 32.2853C163.383 32.9904 165.983 33.7805 168.643 34.5887C173.045 35.9265 177.611 37.3141 182.552 38.4488Z" fill="#9287FF" stroke="black" stroke-width="4"/>
      <path d="M68.9305 36.5805L78.0837 16.9838C78.3023 16.5157 78.8456 16.293 79.3326 16.4654C117.259 29.8904 151.762 28.945 183.736 20.0444C184.139 19.9324 184.569 20.0806 184.815 20.4178L198.747 39.4703C199.13 39.994 198.935 40.7324 198.331 40.9696C164.724 54.166 101.663 51.9229 69.4152 37.9037C68.9036 37.6813 68.6945 37.0859 68.9305 36.5805Z" fill="#E0DDFF" stroke="black" stroke-width="4"/>
      </svg>`
    ]
    this.base = [
      `
      <svg width="200" height="320" viewBox="0 0 200 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_53_114)">
      <path d="M154 319.5C139.6 299.5 128.333 260.834 127 241.5L58.5 212L30 319.5H154Z" fill="${this.skin[this.avatar.skin]}" stroke="black" stroke-width="4"/>
      <mask id="mask0_53_114" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="30" y="212" width="124" height="118">
      <path d="M154 329.5C139.6 309.5 128.333 260.834 127 241.5L58.5 212L30 329.5H154Z" fill="${this.skin[this.avatar.skin]}"/>
      </mask>
      <g mask="url(#mask0_53_114)">
      <g style="mix-blend-mode:multiply">
      <ellipse cx="124" cy="210" rx="59" ry="54" fill="black"/>
      </g>
      </g>
      <mask id="path-4-inside-1_53_114" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z"/>
      </mask>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M183.886 150.917C183.859 150.801 183.831 150.685 183.803 150.569C183.776 150.454 183.748 150.338 183.719 150.222L167.323 81.7855C167.306 81.7177 167.29 81.6499 167.274 81.5821C167.258 81.5142 167.242 81.4465 167.225 81.3787L167.152 81.0752L167.151 81.0755C156.933 39.6308 115.156 14.1472 73.5821 24.1081C32.0078 34.0689 6.31547 75.7174 15.9883 117.293L15.9863 117.293L32.9776 188.211L32.9916 188.208C43.5944 229.112 85.0616 254.149 126.329 244.261C167.597 234.374 193.216 193.264 184.131 151.996L184.144 151.993L183.886 150.917Z" fill="${this.skin[this.avatar.skin]}"/>
      <path d="M183.886 150.917L179.992 151.831L179.994 151.84L179.996 151.849L183.886 150.917ZM183.719 150.222L179.83 151.154L179.832 151.163L179.834 151.172L183.719 150.222ZM167.323 81.7855L163.43 82.7076L163.433 82.7175L167.323 81.7855ZM167.274 81.5821L163.384 82.5141L163.384 82.5142L167.274 81.5821ZM167.225 81.3787L163.335 82.3108L163.338 82.321L167.225 81.3787ZM167.152 81.0752L171.042 80.1432L170.111 76.255L166.222 77.1849L167.152 81.0752ZM167.151 81.0755L163.267 82.0331L164.218 85.8897L168.081 84.9659L167.151 81.0755ZM73.5821 24.1081L72.6501 20.2182L73.5821 24.1081ZM15.9883 117.293L16.9223 121.182L20.7842 120.255L19.8842 116.386L15.9883 117.293ZM15.9863 117.293L15.0523 113.404L11.1649 114.337L12.0964 118.225L15.9863 117.293ZM32.9776 188.211L29.0877 189.143L30.0201 193.035L33.9113 192.101L32.9776 188.211ZM32.9916 188.208L36.8636 187.204L35.8779 183.401L32.058 184.318L32.9916 188.208ZM126.329 244.261L125.397 240.371H125.397L126.329 244.261ZM184.131 151.996L183.2 148.106L179.381 149.021L180.225 152.856L184.131 151.996ZM184.144 151.993L185.075 155.883L188.966 154.951L188.034 151.061L184.144 151.993ZM187.78 150.002C187.751 149.881 187.722 149.759 187.693 149.637L179.914 151.502C179.94 151.611 179.966 151.721 179.992 151.831L187.78 150.002ZM187.693 149.637C187.664 149.516 187.635 149.395 187.605 149.273L179.834 151.172C179.861 151.281 179.887 151.391 179.914 151.502L187.693 149.637ZM163.433 82.7175L179.83 151.154L187.609 149.29L171.212 80.8535L163.433 82.7175ZM171.215 80.8634C171.198 80.7928 171.181 80.7216 171.164 80.65L163.384 82.5142C163.4 82.5781 163.415 82.6425 163.43 82.7076L171.215 80.8634ZM171.164 80.65C171.147 80.579 171.13 80.5078 171.113 80.4364L163.338 82.321C163.353 82.3851 163.369 82.4494 163.384 82.5141L171.164 80.65ZM163.262 82.0072L163.335 82.3108L171.115 80.4467L171.042 80.1432L163.262 82.0072ZM168.081 84.9659L168.083 84.9655L166.222 77.1849L166.221 77.1852L168.081 84.9659ZM171.035 80.118C160.291 36.5398 116.364 9.74466 72.6501 20.2182L74.514 27.998C113.949 18.5498 153.575 42.7219 163.267 82.0331L171.035 80.118ZM72.6501 20.2182C28.936 30.6917 1.92157 74.4836 12.0923 118.199L19.8842 116.386C10.7094 76.9513 35.0796 37.4461 74.514 27.998L72.6501 20.2182ZM16.9204 121.183L16.9223 121.182L15.0542 113.403L15.0523 113.404L16.9204 121.183ZM36.8676 187.279L19.8763 116.361L12.0964 118.225L29.0877 189.143L36.8676 187.279ZM32.058 184.318L32.044 184.322L33.9113 192.101L33.9252 192.097L32.058 184.318ZM29.1195 189.211C40.2685 232.223 83.8693 258.548 127.261 248.151L125.397 240.371C86.2539 249.75 46.9204 226.002 36.8636 187.204L29.1195 189.211ZM127.261 248.151C170.653 237.755 197.591 194.53 188.038 151.136L180.225 152.856C188.842 191.999 164.541 230.993 125.397 240.371L127.261 248.151ZM183.212 148.103L183.2 148.106L185.063 155.886L185.075 155.883L183.212 148.103ZM179.996 151.849L180.254 152.925L188.034 151.061L187.776 149.985L179.996 151.849Z" fill="black" mask="url(#path-4-inside-1_53_114)"/>
      </g>
      <defs>
      <clipPath id="clip0_53_114">
      <rect width="200" height="320" fill="white"/>
      </clipPath>
      </defs>
      </svg>`
    ]
  //  Я очень торопился, так что решил вписать все ассеты прямо в основной код :|
  }
  
  static get observedAttributes() {
      return []
  }

  rerenderAvatar = () => {
    console.log('avatar rendering...')
    let avatarDiv = document.querySelector('.new-avatar__avatar__container')
    if(!avatarDiv) {
      avatarDiv = document.createElement('div')
      avatarDiv.className = 'new-avatar__avatar__container'
    }
    avatarDiv.innerHTML = ''
    const baseDiv = document.createElement('div')
    baseDiv.innerHTML = this.base[0]
    baseDiv.className = 'base'
    const hairDiv = document.createElement('div')
    hairDiv.innerHTML = this.hairs[this.avatar.hair]
    hairDiv.className = 'hair'
    const earsDiv = document.createElement('div')
    earsDiv.innerHTML = this.ears[this.avatar.ears]
    earsDiv.className = 'ears'
    const mouthDiv = document.createElement('div')
    mouthDiv.innerHTML = this.mouth[this.avatar.mouth]
    mouthDiv.className = 'mouth'
    const eyesDiv = document.createElement('div')
    eyesDiv.innerHTML = this.eyes[this.avatar.eyes]
    eyesDiv.className = 'eyes'
    const eyebrowsDiv = document.createElement('div')
    eyebrowsDiv.innerHTML = this.eyebrows[this.avatar.eyebrows]
    eyebrowsDiv.className = 'eyebrows'
    const noseDiv = document.createElement('div')
    noseDiv.innerHTML = this.noses[this.avatar.nose]
    noseDiv.className = 'nose'
    const shirtDiv = document.createElement('div')
    shirtDiv.innerHTML = this.shirt[this.avatar.shirt]
    shirtDiv.className = 'shirt'
    avatarDiv.appendChild(baseDiv)
    avatarDiv.appendChild(hairDiv)
    avatarDiv.appendChild(earsDiv)
    avatarDiv.appendChild(mouthDiv)
    avatarDiv.appendChild(eyesDiv)
    avatarDiv.appendChild(eyebrowsDiv)
    avatarDiv.appendChild(noseDiv)
    avatarDiv.appendChild(shirtDiv)
    document.querySelector('.new-avatar__avatar').appendChild(avatarDiv)
    console.log('avatar rendered')
  }

  renderOptions = () => {
    const optionsDiv = document.createElement('div')
    optionsDiv.className = 'new-avatar__options__container'
    optionsDiv.innerHTML = ''
    const hairOptionsDiv = document.createElement('div')
    hairOptionsDiv.className = 'hair_options options'
    this.hairs.map((el, index)=>{
      const hairDiv = document.createElement('div')
      hairDiv.className = 'hair_option option'
      hairDiv.innerHTML = el
      hairDiv.addEventListener('click', ()=>this.selectOption('hair', index))
      hairOptionsDiv.appendChild(hairDiv)
    })
    const earsOptionsDiv = document.createElement('div')
    earsOptionsDiv.className = 'ears_options options'
    this.ears.map((el, index)=>{
      const earsDiv = document.createElement('div')
      earsDiv.className = 'ears_option option'
      earsDiv.innerHTML = el
      earsDiv.addEventListener('click', ()=>this.selectOption('ears', index))
      earsOptionsDiv.appendChild(earsDiv)
    })
    const mouthOptionsDiv = document.createElement('div')
    mouthOptionsDiv.className = 'mouth_options options'
    this.mouth.map((el, index)=>{
      const mouthDiv = document.createElement('div')
      mouthDiv.className = 'mouth_option option'
      mouthDiv.innerHTML = el
      mouthDiv.addEventListener('click', ()=>this.selectOption('mouth', index))
      mouthOptionsDiv.appendChild(mouthDiv)
    })
    const eyesOptionsDiv = document.createElement('div')
    eyesOptionsDiv.className = 'eyes_options options'
    this.eyes.map((el, index)=>{
      const eyesDiv = document.createElement('div')
      eyesDiv.className = 'eyes_option option'
      eyesDiv.innerHTML = el
      eyesDiv.addEventListener('click', ()=>this.selectOption('eyes', index))
      eyesOptionsDiv.appendChild(eyesDiv)
    })
    const eyebrowsOptionsDiv = document.createElement('div')
    eyebrowsOptionsDiv.className = 'eyebrows_options options'
    this.eyebrows.map((el, index)=>{
      const eyebrowsDiv = document.createElement('div')
      eyebrowsDiv.className = 'eyebrows_option option'
      eyebrowsDiv.innerHTML = el
      eyebrowsDiv.addEventListener('click', ()=>this.selectOption('eyebrows', index))
      eyebrowsOptionsDiv.appendChild(eyebrowsDiv)
    })
    const nosesOptionsDiv = document.createElement('div')
    nosesOptionsDiv.className = 'noses_options options'
    this.noses.map((el, index)=>{
      const nosesDiv = document.createElement('div')
      nosesDiv.className = 'noses_option option'
      nosesDiv.innerHTML = el
      nosesDiv.addEventListener('click', ()=>this.selectOption('noses', index))
      nosesOptionsDiv.appendChild(nosesDiv)
    })
    const shirtOptionsDiv = document.createElement('div')
    shirtOptionsDiv.className = 'shirt_options options'
    this.shirt.map((el, index)=>{
      const shirtDiv = document.createElement('div')
      shirtDiv.className = 'shirt_option option'
      shirtDiv.innerHTML = el
      shirtDiv.addEventListener('click', ()=>this.selectOption('shirt', index))
      shirtOptionsDiv.appendChild(shirtDiv)
    })
    optionsDiv.appendChild(hairOptionsDiv)
    optionsDiv.appendChild(earsOptionsDiv)
    optionsDiv.appendChild(mouthOptionsDiv)
    optionsDiv.appendChild(eyesOptionsDiv)
    optionsDiv.appendChild(eyebrowsOptionsDiv)
    optionsDiv.appendChild(nosesOptionsDiv)
    optionsDiv.appendChild(shirtOptionsDiv)
    document.querySelector('.new-avatar__options').appendChild(optionsDiv)
  }

  selectOption = (type, id) => {
    switch (type){
      case 'hair':
        this.avatar.hair = id
        break;
      case 'ears':
        this.avatar.ears = id
        break;
      case 'mouth':
        this.avatar.mouth = id
        break;
      case 'eyes':
        this.avatar.eyes = id
        break;
      case 'eyebrows':
        this.avatar.eyebrows = id
        break;
      case 'noses':
        this.avatar.nose = id
        break;
      case 'shirt':
        this.avatar.shirt = id
        break;
    }
    this.rerenderAvatar()
  }

  connectedCallback() {
    this.innerHTML = `
            <div class="new-avatar">
                <div class="new-avatar__avatar">
                </div>
                <div class="new-avatar__options">
                </div>
            </div>
        `;
    this.rerenderAvatar()
    this.renderOptions()
  }
}