(function () {
  const ROOT = document.getElementById("app");
  const API_ROOT = `${window.location.origin}/api/home`;
  const LOGIN_PAGE_URL = "/login/";
  const SESSION_STORAGE_KEY = "home-user-session";
  const LOGOUT_MARKER_STORAGE_KEY = "home-user-logout-marker";
  const SITE_PRESENCE_SESSION_KEY = "home-site-presence-session-id";
  const SITE_PRESENCE_PING_INTERVAL_MS = 30000;
  const HOME_EVENTS_STREAM_PATH = `${API_ROOT}/events/stream`;
  const HOME_REALTIME_REFRESH_DEBOUNCE_MS = 240;
  const HOME_REALTIME_RECONNECT_DELAY_MS = 2200;
  const TOPBAR_BALANCE_ANNOUNCEMENT_DURATION_MS = 2600;
  const TOPBAR_BALANCE_ANNOUNCEMENT_COOLDOWN_MS = 9000;
  const BALANCE_NOTIFICATION_TAG = "brothershop-home-balance";
  const CONTACT_PHONE = "+7 964 659-92-96";
  const SEO_HOME_TITLE = "BrotherShop | Барбершоп в Братске, мужские стрижки и оформление бороды";
  const APP_HOME_TITLE = "BrotherShop • Главная";
  const SEO_HOME_DESCRIPTION =
    "BrotherShop, барбершоп в Братске. Мужские стрижки, оформление бороды и онлайн-запись. Адрес: улица Гагарина, 10, 1 этаж, Центральный район, Братск. Телефон: +7 964 659-92-96.";
  const SEO_HOME_OG_DESCRIPTION =
    "BrotherShop в Братске: мужские стрижки, оформление бороды, удобная онлайн-запись и барберы в Центральном районе.";
  const IS_ANDROID_APP_SHELL = /BrotherShopAndroidApp/i.test(window.navigator?.userAgent || "");
  const IS_DESKTOP_SHEET_DISMISS = Boolean(window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches);
  const REFERRAL_TRANSFER_QUICK_AMOUNTS = [10, 25, 50, 100];
  const BOOKING_NAV_ICON = '<svg viewBox="0 0 738 738" aria-hidden="true" data-no-wave="1"><circle cx="368.968" cy="368.968" r="368.968" fill="#0F1212"/><g clip-path="url(#bookingNavClip)"><path d="M581.146 271.014C595.436 271.014 606.905 274.438 615.124 279.073C619.224 281.386 622.574 284.034 625.055 286.768C627.465 289.423 629.324 292.463 629.912 295.598L629.958 295.595C630.398 298.892 629.536 302.612 628.37 305.866C627.152 309.266 625.368 312.8 623.345 315.96C621.341 319.09 618.956 322.082 616.439 324.243C615.182 325.323 613.735 326.334 612.141 326.995C610.543 327.659 608.494 328.091 606.31 327.521L606.736 325.882L605.617 327.436C603.331 326.292 601.676 325.328 600.256 324.284C594.914 320.814 590.866 318.406 583.114 318.406C578.429 318.406 574.991 319.61 572.838 321.323C570.811 322.936 569.559 325.267 569.559 328.586C569.559 332.034 570.854 334.292 573.484 336.48C576.446 338.943 580.676 340.969 586.361 343.739L589.988 345.412L589.962 345.53C599.972 350.12 612.053 355.849 621.559 365.618C631.359 375.691 638.156 389.75 638.156 410.397C638.156 429.615 631.565 444.143 619.887 453.756C608.364 463.241 592.536 467.406 574.961 467.406C559.157 467.406 547.261 465.017 538.749 461.643C530.437 458.348 524.754 453.858 522.415 449.18L522.338 449.026L522.271 448.866C521.679 447.445 521.623 445.797 521.619 444.781C521.614 443.523 521.713 442.065 521.888 440.526C522.237 437.437 522.926 433.704 523.921 430.007C524.907 426.341 526.251 422.496 527.987 419.296C529.582 416.357 532.122 412.8 536.04 411.54L536.786 411.3H537.569C541.421 411.3 546.278 412.82 549.258 413.964L549.828 414.188L550.023 414.266L550.229 414.368C550.241 414.374 550.258 414.383 550.278 414.393H550.45L551.429 414.833C557.083 417.377 563.221 420.859 575.804 420.859C577.137 420.859 580.468 420.51 583.277 418.912C585.735 417.514 587.953 415.138 587.953 410.115C587.953 406.807 586.373 404.016 582.755 401.05C578.985 397.96 573.698 395.255 567.383 392.097L567.37 392.09L567.357 392.084C557.525 387.099 545.762 381.265 536.606 371.767C527.218 362.027 520.763 348.685 520.763 329.149C520.763 307.021 528.694 292.164 540.726 283.001C552.522 274.017 567.591 271.014 581.146 271.014Z" fill="#00BFAF" stroke="#0F1212" stroke-width="10"/><path d="M644.745 159.427C689.246 217.679 715.683 290.474 715.683 369.436C715.682 560.663 560.663 715.683 369.436 715.683C293.288 715.683 222.874 691.098 165.709 649.434L168.398 644.155C192.298 651.881 218.171 651.51 241.676 642.98L242.833 642.56L243.951 643.074C282.144 660.617 324.644 670.402 369.436 670.402C535.654 670.401 670.401 535.655 670.401 369.436C670.401 305.182 650.269 245.638 615.968 196.758L614.729 194.993L616.007 193.257C624.499 181.712 632.462 170.467 639.881 159.561L642.22 156.121L644.745 159.427ZM171.11 100.524C232.1 95.3599 285.788 140.222 291.707 200.965L291.838 202.403L291.977 204.219C293.163 221.518 290.323 238.213 284.248 253.355C288.252 263.36 295.292 272.992 304.135 280.411C313.981 288.672 325.435 293.683 336.578 294.021L361.715 294.785L342.918 311.491C329.177 323.704 314.9 338.665 301.134 355.723L288.151 371.811L283.598 351.646C283.179 349.792 282.779 347.958 282.395 346.179L282.178 345.232C277.656 326.551 259.719 310.907 240.09 306.344C225.432 315.595 208.4 321.569 189.96 323.13C128.489 328.335 74.4378 282.722 69.2324 221.252C64.0276 159.781 109.64 105.73 171.11 100.524ZM210.279 176.58C187.052 156.979 155.539 159.038 139.537 178C123.536 196.962 126.806 228.373 150.032 247.973H150.033C173.261 267.574 204.775 265.517 220.776 246.554C236.778 227.592 233.506 196.181 210.279 176.58Z" fill="#B7BEBC" stroke="#0F1212" stroke-width="20"/><path d="M455.941 378.078L516.532 443.573H516.533C525.644 453.422 520.836 469.431 507.811 472.635L507.812 472.636L479.609 479.576C467.084 482.658 453.854 480.861 442.604 474.552H442.604L391.052 445.632L378.4 438.534L389.534 429.235C394.038 425.474 398.548 421.551 403.044 417.476C417.341 404.518 430.105 391.271 440.961 378.417L448.26 369.775L455.941 378.078ZM171.11 100.524C232.1 95.3599 285.788 140.222 291.707 200.965L291.838 202.403L291.977 204.219C293.163 221.518 290.323 238.213 284.248 253.355C288.252 263.36 295.292 272.992 304.135 280.411C313.981 288.672 325.435 293.683 336.578 294.021L361.715 294.785L342.918 311.491C329.177 323.704 314.9 338.665 301.134 355.723L288.151 371.811L283.598 351.646C283.179 349.792 282.779 347.958 282.395 346.179L282.178 345.232C277.656 326.551 259.719 310.907 240.09 306.344C225.432 315.595 208.4 321.569 189.96 323.13C128.489 328.335 74.4378 282.722 69.2324 221.252C64.0276 159.781 109.64 105.73 171.11 100.524ZM210.279 176.58C187.052 156.979 155.539 159.038 139.537 178C123.536 196.962 126.806 228.373 150.032 247.973H150.033C173.261 267.574 204.775 265.517 220.776 246.554C236.778 227.592 233.506 196.181 210.279 176.58Z" fill="#B7BEBC" stroke="#0F1212" stroke-width="20"/><path d="M616.233 467.161C618.006 467.112 619.631 467.098 620.973 467.138C622.102 467.172 623.619 467.251 624.812 467.605C624.816 467.606 624.821 467.607 624.825 467.608C624.828 467.609 624.83 467.609 624.833 467.61L624.832 467.611C630.625 469.336 634.017 475.691 634.53 482.055C634.793 483.757 634.416 485.4 634.097 486.497C633.694 487.881 633.073 489.394 632.342 490.948C630.872 494.071 628.709 497.875 626.141 502.052C620.988 510.432 613.913 520.778 606.688 531.053C599.462 541.329 591.989 551.67 586.085 559.959C583.121 564.12 580.554 567.762 578.583 570.657C576.796 573.281 575.645 575.08 575.097 576.069L574.898 576.443C573.633 578.981 571.981 583.095 569.519 586.197C566.679 589.775 562.673 592.365 556.625 593.135L556.612 593.137C551.394 593.788 533.61 595.901 521.971 596.638C514.122 597.6 505.325 598.995 493.169 600.819C471.218 604.594 473.897 604.052 459.029 606.759C357.84 628.268 360.878 630.221 319.533 641.006C317.967 641.471 316.535 641.93 315.253 642.172C313.675 642.469 312.308 642.468 310.632 642.326V642.325C303.368 641.709 299.806 635.982 298.169 631.584C296.487 627.064 296.113 622.242 296.012 620.06V620.059C295.92 618.075 296.509 615.971 297.112 614.222C297.765 612.332 298.688 610.174 299.737 607.867C300.793 605.547 302.04 602.943 303.362 600.164C304.694 597.367 306.119 594.357 307.572 591.151C313.408 578.274 319.518 562.555 321.21 546.26L321.212 546.235L321.215 546.211C321.303 545.436 321.377 544.665 321.455 543.841C321.473 543.638 321.499 543.47 321.521 543.347C321.527 543.315 321.534 543.285 321.54 543.257C321.604 542.9 321.683 542.51 321.786 542.107L321.91 541.655C323.785 534.712 328.972 530.616 334.179 528.559L334.197 528.552L334.217 528.544C334.696 528.359 335.442 528.083 336.315 527.868C339.272 526.623 354.018 519.412 383.373 510.007C413.757 500.272 460.074 488.068 526.779 476.995C563.283 470.936 588.111 467.669 604.109 467.785C608.414 467.498 612.725 467.257 616.233 467.161Z" fill="#C8235F" stroke="#0F1212" stroke-width="10"/><path d="M662.729 49.0991C669.055 45.8991 676.442 46.723 681.91 50.7876L682.434 51.1909L682.737 51.4399C689.049 56.713 691.28 65.6972 687.542 73.4233V73.4243C645.345 160.619 542.557 295.4 393.984 434.955C386.494 441.99 377.406 445.335 368.702 447.027C361.184 448.488 353.36 448.816 346.426 448.981L343.512 449.044C324.317 449.443 305.472 464.684 296.924 483.88C306.081 500.091 311.308 518.818 311.308 538.742C311.308 600.433 261.296 650.443 199.606 650.444C185.957 650.444 172.86 647.987 160.746 643.491C155.819 644.577 152.071 645.995 149.514 647.531C120.129 672.037 103.018 684.59 81.9141 687.073L81.332 687.141H80.7461C60.1884 687.141 44.0976 678.562 41.1289 662.734C38.2776 647.53 49.3036 633.76 64.9756 627.491L65.5693 627.253L66.1885 627.093C81.9793 623.014 90.6011 616.298 94.9434 609.42C99.1233 602.799 100.204 594.66 98.1494 585.52C91.5737 571.279 87.9053 555.427 87.9053 538.742C87.9058 477.052 137.916 427.042 199.606 427.042C218.629 427.042 236.564 431.807 252.259 440.21C271.693 431.85 287.288 412.875 287.783 393.501L287.861 390.567C288.06 383.584 288.427 375.703 289.936 368.139C291.682 359.383 295.097 350.25 302.228 342.76C449.022 188.565 576.344 92.8031 662.729 49.0991ZM237.605 501.576C220.061 484.032 188.486 484.639 166.995 506.129C145.504 527.62 144.897 559.196 162.441 576.74L162.854 577.148C180.478 594.273 211.727 593.508 233.05 572.185C254.541 550.694 255.149 519.12 237.605 501.576ZM361.953 358.859C356.112 358.859 351.377 363.594 351.377 369.435C351.377 375.276 356.112 380.011 361.953 380.011C367.794 380.011 372.529 375.276 372.529 369.435C372.529 363.595 367.794 358.859 361.953 358.859Z" fill="#B7BEBC" stroke="#0F1212" stroke-width="20"/><path d="M356.705 84.7869C371.22 84.7869 387.843 87.3772 401.014 95.2263C414.512 103.271 424.117 116.725 424.117 137.299C424.117 140.663 423.811 143.974 423.53 146.792L423.517 146.937L423.493 147.081C421.722 158.212 416.472 167.277 408.91 174.398C420.606 181.572 429.459 192.09 429.459 208.427C429.459 215.117 428.58 221.357 426.95 227.141L426.544 228.583L425.413 229.563L371.581 276.245L370.667 277.038L369.491 277.325C362.006 279.152 354.497 280.055 347.429 280.055C337.269 280.055 328.597 278.258 321.015 274.467L320.901 274.41L320.79 274.347C318.398 272.995 317.119 270.45 316.384 268.663C315.53 266.59 314.826 264.02 314.225 261.171C313.015 255.441 312.071 247.858 311.345 239.208C309.888 221.865 309.254 199.642 309.254 178.063C309.254 146.494 310.361 115.563 312.108 104.316C312.438 101.697 313.096 99.5981 314.047 97.5896C314.108 97.4033 314.168 97.2362 314.226 97.0974C314.391 96.6972 314.594 96.2986 314.816 95.9285C315.037 95.5617 315.334 95.1233 315.715 94.6921C315.934 94.4438 316.279 94.0855 316.753 93.7341C318.372 92.2819 320.592 91.1505 322.802 90.2537C325.347 89.2205 328.441 88.2785 331.894 87.4802C338.805 85.8825 347.477 84.7869 356.705 84.7869ZM358.247 203.632C358.211 204.395 358.175 205.246 358.14 206.17C357.988 210.157 357.857 215.391 357.805 220.6C357.752 225.825 357.779 230.953 357.937 234.757C357.96 235.315 357.986 235.834 358.014 236.312C358.696 236.201 359.478 236.055 360.343 235.859C363.089 235.236 366.302 234.219 369.317 232.726C375.509 229.662 379.634 225.321 379.538 219.187V219.167C379.481 214.285 377.94 211.249 375.981 209.211C373.917 207.063 371.006 205.634 367.69 204.756C364.394 203.882 361.013 203.639 358.391 203.631C358.343 203.63 358.295 203.632 358.247 203.632ZM359.552 131.899C359.498 133.14 359.456 134.201 359.456 134.768V134.915L359.447 135.06C359.386 136.102 359.321 137.176 359.256 138.264V138.265C358.83 145.329 358.355 153.274 358.286 160.964C362.52 159.502 366.289 157.348 369.227 154.918C373.662 151.248 375.321 147.743 375.321 145.732C375.321 142.352 374.492 138.964 372.396 136.491C370.462 134.211 366.818 131.963 359.552 131.899Z" fill="#00BFAF" stroke="#0F1212" stroke-width="10"/></g><defs><clipPath id="bookingNavClip"><rect width="686.495" height="686.495" fill="white" transform="translate(26.1875 26.1877)"/></clipPath></defs></svg>';
  const BOOKING_NAV_ICON_ACTIVE = '<svg viewBox="0 0 738 738" aria-hidden="true" data-no-wave="1"><circle cx="368.968" cy="368.968" r="368.968" fill="#0F1212"/><g clip-path="url(#bookingNavActiveClip)"><path d="M581.146 271.014C595.435 271.014 606.904 274.438 615.123 279.074C619.223 281.386 622.573 284.034 625.054 286.768C627.464 289.424 629.323 292.464 629.911 295.598L629.957 295.595C630.397 298.892 629.535 302.612 628.369 305.867C627.151 309.266 625.367 312.8 623.344 315.96C621.34 319.09 618.955 322.082 616.438 324.244C615.181 325.324 613.734 326.334 612.14 326.995C610.542 327.659 608.493 328.091 606.309 327.521L606.735 325.882L605.616 327.436C603.33 326.293 601.675 325.328 600.255 324.285C594.913 320.814 590.865 318.406 583.113 318.406C578.428 318.406 574.99 319.61 572.837 321.324C570.81 322.937 569.558 325.267 569.558 328.586C569.558 332.034 570.853 334.292 573.483 336.48C576.445 338.943 580.675 340.969 586.36 343.739L589.987 345.412L589.961 345.53C599.971 350.12 612.052 355.849 621.558 365.619C631.358 375.691 638.155 389.75 638.155 410.397C638.155 429.615 631.564 444.143 619.886 453.756C608.363 463.241 592.535 467.407 574.96 467.407C559.156 467.407 547.26 465.017 538.748 461.643C530.436 458.348 524.753 453.858 522.414 449.18L522.337 449.026L522.271 448.867C521.678 447.446 521.622 445.797 521.618 444.782C521.613 443.523 521.712 442.065 521.887 440.526C522.236 437.438 522.925 433.704 523.92 430.007C524.906 426.341 526.25 422.496 527.986 419.296C529.581 416.357 532.121 412.8 536.039 411.54L536.785 411.3H537.568C541.42 411.3 546.277 412.82 549.257 413.964L549.827 414.188L550.022 414.266L550.228 414.369C550.24 414.375 550.257 414.383 550.277 414.393H550.449L551.428 414.833C557.082 417.377 563.22 420.859 575.803 420.859C577.136 420.859 580.468 420.51 583.276 418.912C585.734 417.515 587.952 415.138 587.952 410.116C587.952 406.808 586.372 404.016 582.754 401.05C578.984 397.96 573.697 395.255 567.382 392.097L567.369 392.09L567.356 392.084C557.524 387.099 545.761 381.265 536.605 371.767C527.217 362.027 520.762 348.685 520.762 329.149C520.762 307.021 528.693 292.165 540.725 283.001C552.521 274.017 567.59 271.014 581.146 271.014Z" fill="#00BFAF" stroke="#0F1212" stroke-width="10"/><path d="M644.745 159.427C689.246 217.679 715.683 290.474 715.683 369.436C715.682 560.663 560.663 715.683 369.436 715.683C293.288 715.683 222.874 691.098 165.709 649.434L168.398 644.155C192.298 651.881 218.171 651.51 241.676 642.98L242.833 642.56L243.951 643.074C282.144 660.617 324.644 670.402 369.436 670.402C535.654 670.401 670.401 535.655 670.401 369.436C670.401 305.182 650.269 245.638 615.968 196.758L614.729 194.993L616.007 193.257C624.499 181.712 632.462 170.467 639.881 159.561L642.22 156.121L644.745 159.427ZM145.692 621.803H145.691C145.693 621.804 145.695 621.806 145.697 621.807L142.35 626.785C142.348 626.784 142.346 626.783 142.344 626.781C142.151 626.652 141.899 626.485 141.674 626.331L141.664 626.324L141.655 626.318L141.486 626.2C141.474 626.192 141.462 626.184 141.45 626.176V626.175L141.436 626.165L144.841 621.225C145.126 621.42 145.409 621.613 145.692 621.803ZM128.837 607.714L128.991 607.872C129.043 607.925 129.094 607.979 129.146 608.031L124.854 612.225L124.712 612.079V612.078C124.67 612.036 124.63 611.996 124.605 611.97C124.576 611.939 124.561 611.923 124.548 611.91H124.547C124.544 611.907 124.54 611.903 124.537 611.9L128.826 607.703C128.83 607.707 128.833 607.711 128.837 607.714ZM126.749 605.501C126.779 605.534 126.814 605.572 126.85 605.611L124.638 607.638L122.427 609.665C122.4 609.636 122.373 609.607 122.341 609.573C122.31 609.54 122.276 609.502 122.24 609.463L124.452 607.436L126.663 605.408C126.69 605.437 126.717 605.467 126.749 605.501ZM125.688 604.328L123.436 606.309L121.183 608.29C121.145 608.247 121.106 608.203 121.057 608.149L123.292 606.148L125.527 604.148C125.574 604.199 125.63 604.263 125.688 604.328ZM72.3066 203.014C70.1602 225.171 74.7664 247.501 85.2822 267.044L85.9102 268.211L85.4697 269.461C74.4587 300.737 68.4697 334.384 68.4697 369.436C68.4698 414.166 78.2252 456.609 95.7227 494.761L96.2363 495.879L95.8154 497.036C87.2716 520.537 86.886 546.409 94.5977 570.312L89.3174 572.998C47.7257 515.862 23.1876 445.51 23.1875 369.436C23.1875 308.409 38.9788 251.062 66.6992 201.266L72.3066 203.014ZM369.436 23.1877C447.406 23.1878 519.364 48.9645 577.243 92.4583L580.584 94.969L577.137 97.3313C566.25 104.793 555.014 112.797 543.451 121.352L541.729 122.626L539.965 121.41C491.493 88.0192 432.752 68.4701 369.436 68.47C315.143 68.47 264.217 82.8436 220.245 107.99L219.1 108.646L217.842 108.243C196.109 101.293 173.224 101.216 152.131 107.283L149.394 102.085C209.215 52.7936 285.873 23.1877 369.436 23.1877Z" fill="#00BFAF" stroke="#0F1212" stroke-width="6"/><path d="M455.941 378.078L516.532 443.573H516.533C525.644 453.422 520.836 469.431 507.811 472.636L507.812 472.637L479.609 479.576C467.084 482.658 453.854 480.862 442.604 474.552H442.604L391.052 445.632L378.4 438.534L389.534 429.235C394.038 425.474 398.548 421.552 403.044 417.476C417.341 404.518 430.105 391.271 440.961 378.417L448.26 369.775L455.941 378.078ZM171.11 100.524C232.1 95.36 285.788 140.222 291.707 200.965L291.838 202.403L291.977 204.22C293.163 221.518 290.323 238.213 284.248 253.355C288.252 263.36 295.292 272.992 304.135 280.411C313.981 288.672 325.435 293.683 336.578 294.021L361.715 294.785L342.918 311.491C329.177 323.704 314.9 338.665 301.134 355.724L288.151 371.811L283.598 351.646C283.179 349.792 282.779 347.958 282.395 346.18L282.178 345.232C277.656 326.551 259.719 310.907 240.09 306.344C225.432 315.595 208.4 321.569 189.96 323.13C128.489 328.335 74.4378 282.722 69.2324 221.252C64.0276 159.781 109.64 105.73 171.11 100.524ZM210.279 176.58C187.052 156.979 155.539 159.038 139.537 178C123.536 196.962 126.806 228.373 150.032 247.974H150.033C173.261 267.574 204.775 265.517 220.776 246.555C236.778 227.593 233.506 196.181 210.279 176.58Z" fill="#00BFAF" stroke="#0F1212" stroke-width="20"/><path d="M616.233 467.161C618.006 467.112 619.631 467.098 620.973 467.138C622.102 467.172 623.619 467.251 624.812 467.605C624.816 467.606 624.821 467.607 624.825 467.608C624.828 467.609 624.83 467.609 624.833 467.61L624.832 467.611C630.625 469.336 634.017 475.691 634.53 482.055C634.793 483.757 634.416 485.4 634.097 486.497C633.694 487.881 633.073 489.394 632.342 490.948C630.872 494.071 628.709 497.875 626.141 502.052C620.988 510.432 613.913 520.778 606.688 531.053C599.462 541.329 591.989 551.67 586.085 559.959C583.121 564.12 580.554 567.762 578.583 570.657C576.796 573.281 575.645 575.08 575.097 576.069L574.898 576.443C573.633 578.981 571.981 583.095 569.519 586.197C566.679 589.775 562.673 592.365 556.625 593.135L556.612 593.137C551.394 593.788 533.61 595.901 521.971 596.638C514.122 597.6 505.325 598.995 493.169 600.819C471.218 604.594 473.897 604.052 459.029 606.759C357.84 628.268 360.878 630.221 319.533 641.006C317.967 641.471 316.535 641.93 315.253 642.172C313.675 642.469 312.308 642.468 310.632 642.326V642.325C303.368 641.709 299.806 635.982 298.169 631.584C296.487 627.064 296.113 622.242 296.012 620.06V620.059C295.92 618.075 296.509 615.971 297.112 614.222C297.765 612.332 298.688 610.174 299.737 607.867C300.793 605.547 302.04 602.943 303.362 600.164C304.694 597.367 306.119 594.357 307.572 591.151C313.408 578.274 319.518 562.555 321.21 546.26L321.212 546.235L321.215 546.211C321.303 545.436 321.377 544.665 321.455 543.841C321.473 543.638 321.499 543.47 321.521 543.347C321.527 543.315 321.534 543.285 321.54 543.257C321.604 542.9 321.683 542.51 321.786 542.107L321.91 541.655C323.785 534.712 328.972 530.616 334.179 528.559L334.197 528.552L334.217 528.544C334.696 528.359 335.442 528.083 336.315 527.868C339.272 526.623 354.018 519.412 383.373 510.007C413.757 500.272 460.074 488.068 526.779 476.995C563.283 470.936 588.111 467.669 604.109 467.785C608.414 467.498 612.725 467.257 616.233 467.161Z" fill="#C8235F" stroke="#0F1212" stroke-width="10"/><path d="M662.729 49.099C669.055 45.899 676.442 46.7229 681.91 50.7875L682.434 51.1908L682.737 51.4398C689.049 56.7129 691.28 65.6971 687.542 73.4232V73.4242C645.345 160.619 542.557 295.4 393.984 434.954C386.494 441.989 377.406 445.335 368.702 447.027C361.184 448.488 353.36 448.816 346.426 448.981L343.512 449.044C324.317 449.443 305.472 464.684 296.924 483.88C306.081 500.091 311.308 518.818 311.308 538.742C311.308 600.433 261.296 650.443 199.606 650.444C185.957 650.444 172.86 647.987 160.746 643.491C155.819 644.576 152.071 645.995 149.514 647.531C120.129 672.037 103.018 684.59 81.9141 687.073L81.332 687.141H80.7461C60.1884 687.141 44.0976 678.562 41.1289 662.734C38.2776 647.53 49.3036 633.759 64.9756 627.491L65.5693 627.253L66.1885 627.093C81.9793 623.014 90.6011 616.298 94.9434 609.42C99.1233 602.799 100.204 594.66 98.1494 585.52C91.5737 571.279 87.9053 555.426 87.9053 538.742C87.9058 477.052 137.916 427.041 199.606 427.041C218.629 427.041 236.564 431.807 252.259 440.21C271.693 431.85 287.288 412.875 287.783 393.501L287.861 390.567C288.06 383.583 288.427 375.703 289.936 368.139C291.682 359.383 295.097 350.25 302.228 342.76C449.022 188.565 576.344 92.803 662.729 49.099Z" fill="#00BFAF" stroke="#0F1212" stroke-width="20"/><path d="M356.705 84.7867C371.22 84.7867 387.843 87.3771 401.014 95.2262C414.512 103.271 424.117 116.725 424.117 137.298C424.117 140.663 423.811 143.974 423.53 146.792L423.517 146.937L423.493 147.081C421.722 158.212 416.472 167.277 408.91 174.398C420.606 181.572 429.459 192.089 429.459 208.426C429.459 215.117 428.58 221.357 426.95 227.141L426.544 228.583L425.413 229.563L371.581 276.245L370.667 277.038L369.491 277.325C362.006 279.152 354.497 280.055 347.429 280.055C337.269 280.055 328.597 278.258 321.015 274.466L320.901 274.41L320.79 274.347C318.398 272.995 317.119 270.45 316.384 268.663C315.53 266.589 314.826 264.02 314.225 261.171C313.015 255.441 312.071 247.857 311.345 239.208C309.888 221.864 309.254 199.642 309.254 178.063C309.254 146.494 310.361 115.563 312.108 104.316C312.438 101.697 313.096 99.598 314.047 97.5895C314.108 97.4031 314.168 97.2361 314.226 97.0973C314.391 96.6971 314.594 96.2985 314.816 95.9283C315.037 95.5616 315.334 95.1232 315.715 94.692C315.934 94.4437 316.279 94.0854 316.753 93.734C318.372 92.2818 320.592 91.1503 322.802 90.2535C325.347 89.2204 328.441 88.2783 331.894 87.4801C338.805 85.8823 347.477 84.7868 356.705 84.7867ZM358.247 203.631C358.211 204.395 358.175 205.246 358.14 206.17C357.988 210.157 357.857 215.391 357.805 220.6C357.752 225.825 357.779 230.952 357.937 234.756C357.96 235.315 357.986 235.834 358.014 236.312C358.696 236.201 359.478 236.055 360.343 235.859C363.089 235.236 366.302 234.219 369.317 232.726C375.509 229.662 379.634 225.321 379.538 219.187V219.167C379.481 214.285 377.94 211.249 375.981 209.211C373.917 207.062 371.006 205.634 367.69 204.755C364.394 203.882 361.013 203.639 358.391 203.63C358.343 203.63 358.295 203.631 358.247 203.631ZM359.552 131.899C359.498 133.139 359.456 134.201 359.456 134.768V134.915L359.447 135.06C359.386 136.102 359.321 137.176 359.256 138.264V138.265C358.83 145.328 358.355 153.274 358.286 160.964C362.52 159.502 366.289 157.348 369.227 154.918C373.662 151.248 375.321 147.743 375.321 145.732C375.321 142.352 374.492 138.964 372.396 136.491C370.462 134.21 366.818 131.962 359.552 131.899Z" fill="#00BFAF" stroke="#0F1212" stroke-width="10"/></g><defs><clipPath id="bookingNavActiveClip"><rect width="686.495" height="686.495" fill="white" transform="translate(26.1875 26.1877)"/></clipPath></defs></svg>';
  const loadedImageUrls = new Set();
  const loadedBackgroundUrls = new Set();

  if (document.documentElement) document.documentElement.classList.toggle("android-app-shell", IS_ANDROID_APP_SHELL);
  if (document.body) document.body.classList.toggle("android-app-shell", IS_ANDROID_APP_SHELL);
  if (!ROOT) return;

  const state = {
    currentPage: "home",
    navIndicatorIndex: 0,
    routeTransitionActive: false,
    session: null,
    payload: null,
    bootstrapError: "",
    sheet: null,
    sheetState: "closed",
    pendingBookingCancellationId: "",
    homeAboutExpanded: false,
    homeBarberRotationIndex: 0,
    homeBarberIncomingIndex: -1,
    homeBarberTransitionStage: "idle",
    activeBarberProfileId: "",
    referralTransferDraft: null,
    referralTransferError: "",
    referralQuickAmount: null,
    referralLinkCopied: false,
    referralSection: "overview",
    transferHistoryFilter: "all",
    profileHistoryFilter: "all",
    profileAvatarPanelState: "closed",
    profileAvatarUploading: false,
    profileCover: {
      source: "",
      status: "idle",
      palette: null,
    },
    barberProfileServices: {},
    telegramLinkRequestId: "",
    topbarAnnouncementActive: false,
    topbarAnnouncementText: "",
    liveClockTick: Date.now(),
    booking: {
      barberId: "",
      services: [],
      selectedServices: [],
      appliedBs: 0,
      bsCoverExpanded: false,
      dates: [],
      selectedDate: "",
      times: [],
      selectedTime: "",
      comment: "",
      canBook: true,
      limitMessage: "",
      bookingLimit: 0,
      activeAppointmentsCount: 0,
      loading: false,
      submitting: false,
      stepAnimationsEnabled: true,
    },
  };
  let referralCopyFeedbackTimer = null;
  let sheetCloseTimer = null;
  let sheetOpenFrame = null;
  let renderFrame = null;
  let pendingRenderApp = true;
  let pendingRenderSheet = true;
  let suppressSheetHistoryBack = false;
  let referralQrScannerStream = null;
  let referralQrScannerFrame = null;
  let referralQrScannerSession = 0;
  let delegatedHandlersBound = false;
  let sitePresenceTimer = null;
  let homeEventsSource = null;
  let homeEventsReconnectTimer = null;
  let homeRealtimeRefreshTimer = null;
  let homeRealtimeRefreshPromise = null;
  let topbarAnnouncementTimer = null;
  let referralBalanceAnimationTimer = null;
  let referralPillSyncFrame = null;
  let lastTopbarBalanceAnnouncementAt = 0;
  let lastKnownReferralBalance = null;
  let promoMarqueeAutoScroll = null;
  const isEditableTarget = (target) => {
    if (!(target instanceof HTMLElement)) return false;
    return Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
  };
  const getProtectedAssetTarget = (target) => {
    if (!(target instanceof Element)) return null;
    return target.closest("a, img, picture, svg, video, .profile-avatar");
  };
  let homeBarberRotationTimer = null;
  let appointmentEtaTimer = null;
  let homeBarberTransitionSwapTimer = null;
  let homeBarberTransitionResetTimer = null;
  let homeBarberSwipeHandledAt = 0;
  let profileAvatarPanelCloseTimer = null;
  let homeBarberTiltSnapshot = {
    tiltX: "0deg",
    tiltY: "0deg",
    sheenX: "0%",
    sheenY: "0%",
    textShimmer: "50%",
  };
  const homeBarberAutoTiltStartedAt = window.performance.now();
  const derivedDataCache = {
    profileHistory: { visitHistoryRef: null, operationsRef: null, items: [] },
    filteredProfileHistory: { itemsRef: null, filter: "", filtered: [] },
    referralOperations: { operationsRef: null, transferOut: [], transferIn: [] },
    filteredReferralActivity: { operationsRef: null, filter: "", filtered: [] },
    renderedFragments: new Map(),
  };
  const stopAppointmentEtaTimer = () => {
    if (!appointmentEtaTimer) return;
    window.clearInterval(appointmentEtaTimer);
    appointmentEtaTimer = null;
  };
  const refreshManageBookingSheetEta = () => {
    if (normalizeText(state.sheet?.title) !== "Управление записью") return false;
    const appointment = Array.isArray(state.payload?.booking?.activeAppointments)
      ? state.payload.booking.activeAppointments.find((item) => normalizeText(item.id) === normalizeText(state.pendingBookingCancellationId))
      : null;
    if (!appointment) return false;
    state.sheet = {
      ...state.sheet,
      bodyHtml: buildManageBookingSheet(appointment),
    };
    render({ app: false });
    return true;
  };
  const syncAppointmentEtaTimer = () => {
    const hasHomeActiveAppointment =
      state.currentPage === "home" &&
      Array.isArray(state.payload?.booking?.activeAppointments) &&
      state.payload.booking.activeAppointments.length > 0;
    const hasManageBookingSheet = normalizeText(state.sheet?.title) === "Управление записью";
    if (!hasHomeActiveAppointment && !hasManageBookingSheet) {
      stopAppointmentEtaTimer();
      return;
    }
    if (appointmentEtaTimer) return;
    appointmentEtaTimer = window.setInterval(() => {
      state.liveClockTick = Date.now();
      if (normalizeText(state.sheet?.title) === "Управление записью") {
        refreshManageBookingSheetEta();
      }
      if (state.currentPage === "home") {
        render({ sheet: false });
      }
    }, 1000);
  };
  const lastRenderedHtml = {
    app: "",
    sheet: "",
  };

  const canUseBrowserNotifications = () => typeof window.Notification === "function";
  const getReferralBalance = (payload = null) => {
    const numeric = Number(payload?.referral?.bsBalance);
    return Number.isFinite(numeric) ? Math.max(0, numeric) : 0;
  };
  const formatBsAmount = (amount) => Math.max(0, Math.round(Number(amount) || 0));
  const buildTopbarBalanceAnnouncementText = (amount) => `Поступление ${formatBsAmount(amount)} BS`;
  const triggerReferralBalanceHighlight = (scope = ROOT) => {
    if (referralBalanceAnimationTimer) {
      window.clearTimeout(referralBalanceAnimationTimer);
      referralBalanceAnimationTimer = null;
    }
    const balanceNode = scope?.querySelector?.(".referral-wallet-balance-number");
    if (!balanceNode) return;
    balanceNode.classList.remove("is-balance-updated");
    void balanceNode.offsetWidth;
    balanceNode.classList.add("is-balance-updated");
    referralBalanceAnimationTimer = window.setTimeout(() => {
      balanceNode.classList.remove("is-balance-updated");
      referralBalanceAnimationTimer = null;
    }, 880);
  };
  const refreshTopbarDom = () => {
    const appHost = ROOT.querySelector("[data-render-host='app']");
    const currentTopbar = appHost?.querySelector(".topbar");
    if (!appHost || !currentTopbar) return false;
    const template = document.createElement("template");
    template.innerHTML = renderTopbar().trim();
    const nextTopbar = template.content.querySelector(".topbar");
    if (!nextTopbar) return false;
    currentTopbar.replaceWith(nextTopbar);
    return true;
  };
  const refreshReferralLiveDom = ({ animateBalance = false } = {}) => {
    if (state.currentPage !== "referral") return false;
    const appHost = ROOT.querySelector("[data-render-host='app']");
    const currentPageRoot = appHost?.querySelector(".referral-page");
    if (!appHost || !currentPageRoot) return false;
    const template = document.createElement("template");
    template.innerHTML = renderReferralPage().trim();
    const nextPageRoot = template.content.querySelector(".referral-page");
    const nextWallet = nextPageRoot?.querySelector(".referral-wallet-card");
    const nextTabs = nextPageRoot?.querySelector(".referral-section-tabs");
    const nextPanel = nextPageRoot?.querySelector(".referral-section-panel");
    const currentWallet = currentPageRoot.querySelector(".referral-wallet-card");
    const currentTabs = currentPageRoot.querySelector(".referral-section-tabs");
    const currentPanel = currentPageRoot.querySelector(".referral-section-panel");
    if (!nextWallet || !nextTabs || !nextPanel || !currentWallet || !currentTabs || !currentPanel) return false;
    currentWallet.replaceWith(nextWallet);
    currentTabs.replaceWith(nextTabs);
    currentPanel.className = nextPanel.className;
    currentPanel.innerHTML = nextPanel.innerHTML;
    setupTransferRecipientCarousels(currentPageRoot);
    if (animateBalance) {
      triggerReferralBalanceHighlight(currentPageRoot);
    }
    return true;
  };
  const refreshLiveAppDom = ({ animateReferralBalance = false } = {}) => {
    if (state.currentPage !== "referral") {
      render({ sheet: false });
      return;
    }
    const topbarUpdated = refreshTopbarDom();
    const referralUpdated = refreshReferralLiveDom({ animateBalance: animateReferralBalance });
    if (!topbarUpdated && !referralUpdated) {
      render({ sheet: false });
    }
  };
  const clearTopbarAnnouncement = () => {
    if (topbarAnnouncementTimer) {
      window.clearTimeout(topbarAnnouncementTimer);
      topbarAnnouncementTimer = null;
    }
    if (!state.topbarAnnouncementActive && !state.topbarAnnouncementText) return;
    state.topbarAnnouncementActive = false;
    state.topbarAnnouncementText = "";
    if (!refreshTopbarDom()) render({ sheet: false });
  };
  const triggerTopbarBalanceAnnouncement = (amount) => {
    const safeAmount = formatBsAmount(amount);
    if (safeAmount <= 0) return false;
    const now = Date.now();
    if (now - lastTopbarBalanceAnnouncementAt < TOPBAR_BALANCE_ANNOUNCEMENT_COOLDOWN_MS) return false;
    lastTopbarBalanceAnnouncementAt = now;
    if (topbarAnnouncementTimer) {
      window.clearTimeout(topbarAnnouncementTimer);
      topbarAnnouncementTimer = null;
    }
    state.topbarAnnouncementActive = true;
    state.topbarAnnouncementText = buildTopbarBalanceAnnouncementText(safeAmount);
    if (!refreshTopbarDom()) render({ sheet: false });
    topbarAnnouncementTimer = window.setTimeout(() => {
      clearTopbarAnnouncement();
    }, TOPBAR_BALANCE_ANNOUNCEMENT_DURATION_MS);
    return true;
  };
  const shouldShowIncomingBalanceBrowserNotification = () => {
    if (!canUseBrowserNotifications()) return false;
    if (window.Notification.permission !== "granted") return false;
    if (state.payload?.user?.balanceNotificationsEnabled === false) return false;
    return document.visibilityState !== "visible" || document.hasFocus?.() === false;
  };
  const showIncomingBalanceBrowserNotification = (amount, nextBalance) => {
    if (!shouldShowIncomingBalanceBrowserNotification()) return;
    const safeAmount = formatBsAmount(amount);
    const safeBalance = formatBsAmount(nextBalance);
    try {
      const notification = new window.Notification("Пополнение BS", {
        body: `Поступление ${safeAmount} BS. Баланс: ${safeBalance} BS.`,
        tag: BALANCE_NOTIFICATION_TAG,
        renotify: true,
      });
      notification.onclick = () => {
        try {
          notification.close();
        } catch {}
        window.focus?.();
      };
    } catch {
      // Browser notification delivery is best-effort.
    }
  };
  const handleIncomingBalance = (delta, nextBalance) => {
    const safeDelta = formatBsAmount(delta);
    if (safeDelta <= 0) return;
    const feedbackShown = triggerTopbarBalanceAnnouncement(safeDelta);
    if (!feedbackShown) return;
    showIncomingBalanceBrowserNotification(safeDelta, nextBalance);
  };
  const commitAppPayload = (nextPayload, options = {}) => {
    const safePayload = nextPayload && typeof nextPayload === "object" ? nextPayload : null;
    const previousBalance =
      Number.isFinite(lastKnownReferralBalance) ? lastKnownReferralBalance : safePayload ? getReferralBalance(state.payload) : null;
    const nextBalance = safePayload ? getReferralBalance(safePayload) : null;
    state.payload = safePayload;
    if (safePayload && options.allowBalanceAnnouncement === true && Number.isFinite(previousBalance) && Number.isFinite(nextBalance)) {
      const delta = nextBalance - previousBalance;
      if (delta > 0) handleIncomingBalance(delta, nextBalance);
    }
    lastKnownReferralBalance = Number.isFinite(nextBalance) ? nextBalance : null;
    return state.payload;
  };

  const normalizeText = (value) => (value == null ? "" : String(value).trim());
  const isDesktopLikeDevice = () =>
    window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches === true;
  const getHomeBarberTiltSceneStyle = () =>
    `--tilt-x:${normalizeText(homeBarberTiltSnapshot?.tiltX || "0deg")};--tilt-y:${normalizeText(homeBarberTiltSnapshot?.tiltY || "0deg")};--sheen-x:${normalizeText(homeBarberTiltSnapshot?.sheenX || "0%")};--sheen-y:${normalizeText(homeBarberTiltSnapshot?.sheenY || "0%")};--text-shimmer:${normalizeText(homeBarberTiltSnapshot?.textShimmer || "50%")};`;
  const clampNumber = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));
  const toRgbString = (rgb, alpha = 1) => {
    const safeRgb = Array.isArray(rgb) ? rgb : [0, 0, 0];
    const [r, g, b] = safeRgb.map((value) => Math.round(clampNumber(value, 0, 255)));
    return alpha >= 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${clampNumber(alpha, 0, 1)})`;
  };
  const rgbToHsl = (rgb) => {
    const [r, g, b] = (Array.isArray(rgb) ? rgb : [0, 0, 0]).map((value) => clampNumber(value, 0, 255) / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;
    if (max === min) return [0, 0, lightness];
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    let hue = 0;
    if (max === r) hue = (g - b) / delta + (g < b ? 6 : 0);
    else if (max === g) hue = (b - r) / delta + 2;
    else hue = (r - g) / delta + 4;
    return [hue / 6, saturation, lightness];
  };
  const hslToRgb = (hsl) => {
    const [h, s, l] = Array.isArray(hsl) ? hsl : [0, 0, 0];
    if (!s) {
      const gray = Math.round(clampNumber(l, 0, 1) * 255);
      return [gray, gray, gray];
    }
    const hueToRgb = (p, q, t) => {
      let safeT = t;
      if (safeT < 0) safeT += 1;
      if (safeT > 1) safeT -= 1;
      if (safeT < 1 / 6) return p + (q - p) * 6 * safeT;
      if (safeT < 1 / 2) return q;
      if (safeT < 2 / 3) return p + (q - p) * (2 / 3 - safeT) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return [
      Math.round(hueToRgb(p, q, h + 1 / 3) * 255),
      Math.round(hueToRgb(p, q, h) * 255),
      Math.round(hueToRgb(p, q, h - 1 / 3) * 255),
    ];
  };
  const shiftRgbLightness = (rgb, delta, saturationBoost = 0) => {
    const [h, s, l] = rgbToHsl(rgb);
    return hslToRgb([h, clampNumber(s + saturationBoost, 0, 1), clampNumber(l + delta, 0, 1)]);
  };
  const mixRgb = (left, right, weight = 0.5) => {
    const safeWeight = clampNumber(weight, 0, 1);
    const safeLeft = Array.isArray(left) ? left : [0, 0, 0];
    const safeRight = Array.isArray(right) ? right : [0, 0, 0];
    return [0, 1, 2].map((index) => Math.round(safeLeft[index] * (1 - safeWeight) + safeRight[index] * safeWeight));
  };
  const getRgbLuminance = (rgb) => {
    const [r, g, b] = (Array.isArray(rgb) ? rgb : [0, 0, 0]).map((value) => clampNumber(value, 0, 255) / 255);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const getRgbDistance = (left, right) => {
    const safeLeft = Array.isArray(left) ? left : [0, 0, 0];
    const safeRight = Array.isArray(right) ? right : [0, 0, 0];
    const deltaR = safeLeft[0] - safeRight[0];
    const deltaG = safeLeft[1] - safeRight[1];
    const deltaB = safeLeft[2] - safeRight[2];
    return Math.sqrt(deltaR * deltaR + deltaG * deltaG + deltaB * deltaB);
  };
  const buildProfileCoverTheme = (palette) => {
    const sitePalette = {
      accent: [0, 130, 118],
      base: [15, 24, 24],
      line: [3, 7, 8],
    };
    const resolvedPalette = palette || sitePalette;
    const accent = shiftRgbLightness(resolvedPalette.accent || sitePalette.accent, 0.08, 0.06);
    const base = mixRgb(shiftRgbLightness(resolvedPalette.base || sitePalette.base, -0.04), [7, 10, 11], 0.28);
    const line = shiftRgbLightness(resolvedPalette.line || resolvedPalette.base || sitePalette.line, -0.18, -0.02);
    const glow = mixRgb(accent, [255, 255, 255], 0.14);
    return {
      accent: toRgbString(accent),
      base: toRgbString(base),
      line: toRgbString(line, 0.96),
      glow: toRgbString(glow, 0.34),
    };
  };
  const applyProfileCoverTheme = (scope = ROOT) => {
    const cover = scope?.querySelector?.(".profile-cover");
    if (!cover) return;
    const theme = buildProfileCoverTheme(
      state.profileCover.source === normalizeText(state.payload?.user?.avatarUrl) && state.profileCover.status === "ready"
        ? state.profileCover.palette
        : null,
    );
    cover.style.setProperty("--profile-cover-accent", theme.accent);
    cover.style.setProperty("--profile-cover-base", theme.base);
    cover.style.setProperty("--profile-cover-line", theme.line);
    cover.style.setProperty("--profile-cover-glow", theme.glow);
  };
  const extractProfilePaletteFromImage = (source) =>
    new Promise((resolve, reject) => {
      const imageSource = normalizeText(source);
      if (!imageSource) {
        reject(new Error("missing-image"));
        return;
      }
      const image = new Image();
      if (!imageSource.startsWith("data:")) image.crossOrigin = "anonymous";
      image.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d", { willReadFrequently: true });
          if (!context) {
            reject(new Error("palette-context-unavailable"));
            return;
          }
          const size = 48;
          canvas.width = size;
          canvas.height = size;
          context.drawImage(image, 0, 0, size, size);
          const pixels = context.getImageData(0, 0, size, size).data;
          const buckets = new Map();
          for (let index = 0; index < pixels.length; index += 16) {
            const alpha = pixels[index + 3];
            if (alpha < 180) continue;
            const rgb = [pixels[index], pixels[index + 1], pixels[index + 2]];
            const luminance = getRgbLuminance(rgb);
            if (luminance < 0.03 || luminance > 0.97) continue;
            const bucket = rgb.map((value) => Math.round(value / 32) * 32).join(",");
            const entry = buckets.get(bucket) || { count: 0, sum: [0, 0, 0] };
            entry.count += 1;
            entry.sum = entry.sum.map((sumValue, channel) => sumValue + rgb[channel]);
            buckets.set(bucket, entry);
          }
          const colors = [...buckets.values()]
            .map((entry) => ({
              count: entry.count,
              rgb: entry.sum.map((sumValue) => Math.round(sumValue / Math.max(1, entry.count))),
            }))
            .sort((left, right) => right.count - left.count);
          if (!colors.length) {
            reject(new Error("palette-not-found"));
            return;
          }
          const primary = colors[0].rgb;
          const secondary =
            colors.find((entry) => getRgbDistance(primary, entry.rgb) >= 72)?.rgb ||
            colors.find((entry) => getRgbDistance(primary, entry.rgb) >= 36)?.rgb ||
            shiftRgbLightness(primary, getRgbLuminance(primary) > 0.45 ? -0.24 : 0.24, 0.04);
          const ordered = [primary, secondary].sort((left, right) => getRgbLuminance(right) - getRgbLuminance(left));
          resolve({
            accent: ordered[0],
            base: ordered[1],
            line: getRgbLuminance(ordered[1]) < getRgbLuminance(ordered[0]) ? ordered[1] : ordered[0],
          });
        } catch (error) {
          reject(error);
        }
      };
      image.onerror = () => reject(new Error("palette-image-load-failed"));
      image.src = imageSource;
    });
  const ensureProfileCoverPalette = async () => {
    const avatarUrl = normalizeText(state.payload?.user?.avatarUrl);
    if (!avatarUrl) {
      if (state.profileCover.source || state.profileCover.status !== "idle" || state.profileCover.palette) {
        state.profileCover = { source: "", status: "idle", palette: null };
        render();
      }
      return;
    }
    if (state.profileCover.source === avatarUrl && ["pending", "ready", "error"].includes(state.profileCover.status)) return;
    state.profileCover = { source: avatarUrl, status: "pending", palette: null };
    try {
      const palette = await extractProfilePaletteFromImage(avatarUrl);
      if (state.profileCover.source !== avatarUrl) return;
      state.profileCover = { source: avatarUrl, status: "ready", palette };
      render();
    } catch {
      if (state.profileCover.source !== avatarUrl) return;
      state.profileCover = { source: avatarUrl, status: "error", palette: null };
      render();
    }
  };
  const areMemoDepsEqual = (left = [], right = []) =>
    left.length === right.length && left.every((value, index) => value === right[index]);
  const memoizeRenderedFragment = (key, deps, renderFactory) => {
    const cached = derivedDataCache.renderedFragments.get(key);
    if (cached && areMemoDepsEqual(cached.deps, deps)) return cached.html;
    const html = renderFactory();
    derivedDataCache.renderedFragments.set(key, { deps: deps.slice(), html });
    return html;
  };
  const normalizePhone = (value) => normalizeText(value).replace(/[^\d+]/g, "");
  const getBarberRatingValue = (barber = {}) => {
    const parsed = Number.parseFloat(normalizeText(barber?.rating).replace(",", "."));
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const getSortedBookingBarbers = () => {
    const barbers = Array.isArray(state.payload?.booking?.barbers) ? state.payload.booking.barbers : [];
    return [...barbers].sort((left, right) => {
      const ratingDiff = getBarberRatingValue(right) - getBarberRatingValue(left);
      if (Math.abs(ratingDiff) > 0.001) return ratingDiff;
      return normalizeText(left?.name).localeCompare(normalizeText(right?.name), "ru");
    });
  };
  const getBookingRouteBarberId = (location = window.location) => {
    const pathname = normalizeText(location?.pathname).replace(/\/+$/, "") || "/";
    if (pathname !== "/booking") return "";
    try {
      const params = new URLSearchParams(location?.search || "");
      return normalizeText(params.get("barber"));
    } catch {
      return "";
    }
  };
  const buildBookingBarberHref = (barberId = "") => {
    const safeBarberId = normalizeText(barberId);
    if (!safeBarberId) return "/booking/";
    return `/booking/?barber=${encodeURIComponent(safeBarberId)}`;
  };
  const formatBookingTimeRange = (startTime = "", endTime = "") => {
    const start = normalizeText(startTime);
    const end = normalizeText(endTime);
    if (start && end) return `${start} - ${end}`;
    return start || end || "";
  };
  const getBookingSelectedTimeSlot = () => {
    if (!state.booking.selectedTime) return null;
    const bookingTimes = Array.isArray(state.booking.times) ? state.booking.times : [];
    return bookingTimes.find((time) => normalizeText(time?.start) === normalizeText(state.booking.selectedTime)) || null;
  };
  const getBookingSelectedTimeLabel = () => {
    const selectedSlot = getBookingSelectedTimeSlot();
    if (selectedSlot) {
      return normalizeText(selectedSlot.label) || formatBookingTimeRange(selectedSlot.start, selectedSlot.end);
    }
    return normalizeText(state.booking.selectedTime);
  };
  const buildReferralQrPayload = (user = {}) => {
    const phone = normalizePhone(user.phone || "");
    if (!phone) return "";
    const url = new URL("/login/", window.location.origin);
    if (normalizeText(state.payload?.referral?.referralCode)) {
      url.searchParams.set("ref", normalizeText(state.payload.referral.referralCode));
    }
    url.searchParams.set("phone", phone);
    if (normalizeText(user.displayName)) url.searchParams.set("name", normalizeText(user.displayName));
    return url.toString();
  };
  const parseReferralQrPayload = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return null;
    if (/^[+\d()\s-]+$/.test(safeValue)) {
      const phone = normalizePhone(safeValue);
      return phone ? { phone, name: "" } : null;
    }
    try {
      const parsed = new URL(safeValue);
      const phone = normalizePhone(parsed.searchParams.get("phone"));
      const referralCode = normalizeText(parsed.searchParams.get("ref")).toUpperCase();
      if (!phone && !referralCode) return null;
      return {
        phone,
        name: normalizeText(parsed.searchParams.get("name")),
        referralCode,
      };
    } catch {
      return null;
    }
  };
  const extractBackgroundImageUrl = (value) => {
    const match = /url\((['"]?)(.*?)\1\)/.exec(normalizeText(value));
    return normalizeText(match?.[2]);
  };
  const teardownPromoMarqueeAutoScroll = () => {
    if (!promoMarqueeAutoScroll) return;
    if (promoMarqueeAutoScroll.frame) window.cancelAnimationFrame(promoMarqueeAutoScroll.frame);
    if (Array.isArray(promoMarqueeAutoScroll.cleanupHandlers)) {
      promoMarqueeAutoScroll.cleanupHandlers.forEach((cleanup) => {
        try {
          cleanup();
        } catch {}
      });
    }
    promoMarqueeAutoScroll = null;
  };
  const setupPromoMarqueeAutoScroll = (scope = ROOT) => {
    const marquee = scope.querySelector(".promo-marquee.is-animated");
    if (!marquee) {
      teardownPromoMarqueeAutoScroll();
      return;
    }
    const track = marquee.querySelector(".promo-track.is-animated");
    const firstLane = marquee.querySelector(".promo-lane");
    if (!track || !firstLane) {
      teardownPromoMarqueeAutoScroll();
      return;
    }
    if (promoMarqueeAutoScroll?.marquee === marquee) return;
    teardownPromoMarqueeAutoScroll();
    const isTouchDevice = "ontouchstart" in window || Number(window.navigator?.maxTouchPoints || 0) > 0;
    const hasScrollableOverflow = track.scrollWidth > marquee.clientWidth + 8;
    if (!isTouchDevice || !hasScrollableOverflow) return;
    const autoScrollState = {
      marquee,
      track,
      frame: null,
      lastTimestamp: window.performance.now(),
      pauseUntil: 0,
      isDragging: false,
      dragStartX: 0,
      dragStartOffset: 0,
      dragLastX: 0,
      dragLastTime: 0,
      recentMoves: [],
      velocity: 0,
      offset: 0,
      cleanupHandlers: [],
    };
    const getLoopWidth = () => {
      const trackGap = Number.parseFloat(window.getComputedStyle(track).gap || "0") || 0;
      return firstLane.scrollWidth + trackGap;
    };
    const applyOffset = () => {
      track.style.transform = `translate3d(${-autoScrollState.offset}px, 0, 0)`;
    };
    const pauseAutoScroll = (duration = 2200) => {
      autoScrollState.pauseUntil = window.performance.now() + duration;
    };
    const normalizeOffset = () => {
      const loopWidth = getLoopWidth();
      if (!loopWidth) return;
      while (autoScrollState.offset >= loopWidth) autoScrollState.offset -= loopWidth;
      while (autoScrollState.offset < 0) autoScrollState.offset += loopWidth;
    };
    const tick = (timestamp) => {
      if (promoMarqueeAutoScroll !== autoScrollState) return;
      if (!document.body.contains(marquee)) {
        teardownPromoMarqueeAutoScroll();
        return;
      }
      const now = Number.isFinite(timestamp) ? timestamp : window.performance.now();
      const delta = Math.min(34, Math.max(0, now - autoScrollState.lastTimestamp));
      autoScrollState.lastTimestamp = now;
      if (!autoScrollState.isDragging) {
        if (Math.abs(autoScrollState.velocity) > 0.001) {
          autoScrollState.offset += autoScrollState.velocity * delta;
          autoScrollState.velocity *= Math.pow(0.996, delta);
        } else if (now >= autoScrollState.pauseUntil) {
          autoScrollState.velocity = 0;
          autoScrollState.offset += delta * 0.05;
        }
        normalizeOffset();
        applyOffset();
      }
      autoScrollState.frame = window.requestAnimationFrame(tick);
    };
    const bindEvent = (target, eventName, handler, options) => {
      target.addEventListener(eventName, handler, options);
      autoScrollState.cleanupHandlers.push(() => target.removeEventListener(eventName, handler, options));
    };
    const startDrag = (clientX) => {
      autoScrollState.isDragging = true;
      autoScrollState.dragStartX = clientX;
      autoScrollState.dragStartOffset = autoScrollState.offset;
      autoScrollState.dragLastX = clientX;
      autoScrollState.dragLastTime = window.performance.now();
      autoScrollState.recentMoves = [{ x: clientX, time: autoScrollState.dragLastTime }];
      autoScrollState.velocity = 0;
      pauseAutoScroll(2600);
    };
    const moveDrag = (clientX) => {
      if (!autoScrollState.isDragging) return;
      const now = window.performance.now();
      const timeDelta = Math.max(1, now - autoScrollState.dragLastTime);
      const positionDelta = clientX - autoScrollState.dragLastX;
      autoScrollState.velocity = (-positionDelta / timeDelta) * 0.9;
      autoScrollState.dragLastX = clientX;
      autoScrollState.dragLastTime = now;
      autoScrollState.recentMoves.push({ x: clientX, time: now });
      autoScrollState.recentMoves = autoScrollState.recentMoves.filter((item) => now - item.time <= 120);
      autoScrollState.offset = autoScrollState.dragStartOffset - (clientX - autoScrollState.dragStartX);
      normalizeOffset();
      applyOffset();
    };
    const endDrag = () => {
      if (!autoScrollState.isDragging) return;
      autoScrollState.isDragging = false;
      const recentMoves = autoScrollState.recentMoves;
      if (recentMoves.length >= 2) {
        const firstMove = recentMoves[0];
        const lastMove = recentMoves[recentMoves.length - 1];
        const elapsed = Math.max(1, lastMove.time - firstMove.time);
        autoScrollState.velocity = (-(lastMove.x - firstMove.x) / elapsed) * 1.15;
      }
      if (Math.abs(autoScrollState.velocity) < 0.002) autoScrollState.velocity = 0;
      autoScrollState.recentMoves = [];
      pauseAutoScroll(1800);
    };
    bindEvent(marquee, "pointerdown", (event) => {
      startDrag(event.clientX);
    }, { passive: true });
    bindEvent(window, "pointermove", (event) => {
      moveDrag(event.clientX);
    }, { passive: true });
    bindEvent(window, "pointerup", () => {
      endDrag();
    }, { passive: true });
    bindEvent(window, "pointercancel", () => {
      endDrag();
    }, { passive: true });
    bindEvent(marquee, "touchstart", (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      startDrag(touch.clientX);
    }, { passive: true });
    bindEvent(window, "touchmove", (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      moveDrag(touch.clientX);
    }, { passive: true });
    bindEvent(window, "touchend", () => {
      endDrag();
    }, { passive: true });
    bindEvent(window, "touchcancel", () => {
      endDrag();
    }, { passive: true });
    promoMarqueeAutoScroll = autoScrollState;
    track.style.willChange = "transform";
    autoScrollState.cleanupHandlers.push(() => {
      track.style.transform = "";
      track.style.willChange = "";
    });
    applyOffset();
    autoScrollState.frame = window.requestAnimationFrame(tick);
  };
  const resolveMediaAssetUrl = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    try {
      return new URL(safeValue, window.location.origin).toString();
    } catch {
      return safeValue;
    }
  };
  const queryById = (root, id) => {
    if (!root || !id) return null;
    return root.querySelector(`#${id}`);
  };
  const setupMediaWaveLoading = (scope = ROOT) => {
    const container = scope instanceof Element ? scope : ROOT;
    if (!container) return;
    container.querySelectorAll("img:not([data-no-wave='1'])").forEach((img) => {
      if (img.dataset.waveBound === "1") return;
      img.dataset.waveBound = "1";
      img.classList.add("media-wave");
      const imageUrl = resolveMediaAssetUrl(img.currentSrc || img.getAttribute("src") || "");
      const markReady = () => {
        if (imageUrl) loadedImageUrls.add(imageUrl);
        img.classList.add("is-ready");
      };
      if ((imageUrl && loadedImageUrls.has(imageUrl)) || (img.complete && (img.naturalWidth || img.width))) {
        markReady();
        return;
      }
      img.addEventListener("load", markReady, { once: true });
      img.addEventListener("error", () => img.classList.add("is-ready"), { once: true });
    });
    container.querySelectorAll("[style*='background-image']").forEach((node) => {
      if (node.dataset.waveBound === "1") return;
      const url = extractBackgroundImageUrl(node.style.backgroundImage);
      if (!url) return;
      const backgroundUrl = resolveMediaAssetUrl(url);
      node.dataset.waveBound = "1";
      node.classList.add("media-wave-surface");
      const markReady = () => {
        if (backgroundUrl) loadedBackgroundUrls.add(backgroundUrl);
        node.classList.add("is-ready");
      };
      if (backgroundUrl && loadedBackgroundUrls.has(backgroundUrl)) {
        markReady();
        return;
      }
      const preload = new Image();
      preload.onload = markReady;
      preload.onerror = () => node.classList.add("is-ready");
      preload.src = backgroundUrl || url;
    });
  };
  const setupInteractiveBarberCards = (scope = ROOT) => {
    const container = scope instanceof Element ? scope : ROOT;
    if (!container) return;
    const hasCoarsePointer = Boolean(window.matchMedia?.("(pointer: coarse)")?.matches);
    const hasTouchPoints = Number(window.navigator?.maxTouchPoints || 0) > 0;
    const supportsPointerTilt = Boolean(window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches) && !hasCoarsePointer && !hasTouchPoints;
    container.querySelectorAll("[data-tilt-card='barber-profile']").forEach((card) => {
      if (card.dataset.tiltBound === "1") return;
      card.dataset.tiltBound = "1";
      const isHomeRotatingCard = Boolean(card.closest(".home-barber-rotating-card"));
      const restoreRotateYStrength = supportsPointerTilt ? 7 : 10.5;
      const restoreRotateXStrength = supportsPointerTilt ? 5.5 : 8;
      const initialTiltY = Number.parseFloat(normalizeText(homeBarberTiltSnapshot?.tiltY).replace("deg", "")) || 0;
      const initialTiltX = Number.parseFloat(normalizeText(homeBarberTiltSnapshot?.tiltX).replace("deg", "")) || 0;
      let currentRatioX = isHomeRotatingCard ? Math.min(1, Math.max(0, 0.5 + initialTiltY / restoreRotateYStrength)) : 0.5;
      let currentRatioY = isHomeRotatingCard ? Math.min(1, Math.max(0, 0.5 - initialTiltX / restoreRotateXStrength)) : 0.5;
      let targetRatioX = currentRatioX;
      let targetRatioY = currentRatioY;
      let pointerInside = supportsPointerTilt && card.matches(":hover");
      let autoTiltResumeAt = 0;
      const applyTilt = (ratioX, ratioY) => {
        const rotateYStrength = supportsPointerTilt ? 7 : 10.5;
        const rotateXStrength = supportsPointerTilt ? 5.5 : 8;
        const rotateY = (ratioX - 0.5) * rotateYStrength;
        const rotateX = (0.5 - ratioY) * rotateXStrength;
        const tiltX = `${rotateX.toFixed(2)}deg`;
        const tiltY = `${rotateY.toFixed(2)}deg`;
        const sheenX = `${((ratioX - 0.5) * 28).toFixed(2)}%`;
        const sheenY = `${((ratioY - 0.5) * 20).toFixed(2)}%`;
        const textShimmer = `${(ratioX * 100).toFixed(2)}%`;
        card.style.setProperty("--tilt-x", tiltX);
        card.style.setProperty("--tilt-y", tiltY);
        card.style.setProperty("--sheen-x", sheenX);
        card.style.setProperty("--sheen-y", sheenY);
        card.style.setProperty("--text-shimmer", textShimmer);
        if (card.closest(".home-barber-rotating-card")) {
          homeBarberTiltSnapshot = {
            tiltX,
            tiltY,
            sheenX,
            sheenY,
            textShimmer,
          };
        }
      };
      const tickTilt = (timestamp) => {
        if (!card.isConnected) return;
        if (supportsPointerTilt) pointerInside = card.matches(":hover");
        if (isHomeRotatingCard && !pointerInside && timestamp >= autoTiltResumeAt) {
          const elapsed = (timestamp - homeBarberAutoTiltStartedAt) / 1000;
          const autoTiltAmplitudeX = supportsPointerTilt ? 0.28 : 0.42;
          const autoTiltAmplitudeY = supportsPointerTilt ? 0.18 : 0.28;
          targetRatioX = 0.5 + Math.sin(elapsed * 0.92) * autoTiltAmplitudeX;
          targetRatioY = 0.5 + Math.cos(elapsed * 0.7 + 0.35) * autoTiltAmplitudeY;
        }
        const smoothing = pointerInside ? 0.16 : isHomeRotatingCard ? 0.085 : 0.12;
        currentRatioX += (targetRatioX - currentRatioX) * smoothing;
        currentRatioY += (targetRatioY - currentRatioY) * smoothing;
        applyTilt(currentRatioX, currentRatioY);
        window.requestAnimationFrame(tickTilt);
      };
      const pauseAutoTilt = (delayMs = 2200) => {
        autoTiltResumeAt = window.performance.now() + delayMs;
      };
      if (supportsPointerTilt) {
        card.addEventListener("pointerenter", () => {
          pointerInside = true;
          card.classList.add("is-tilt-active");
        });
        card.addEventListener("pointermove", (event) => {
          const rect = card.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          pointerInside = true;
          card.classList.add("is-tilt-active");
          targetRatioX = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
          targetRatioY = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
        });
        card.addEventListener("pointerleave", () => {
          pointerInside = false;
          card.classList.remove("is-tilt-active");
          if (!isHomeRotatingCard) {
            targetRatioX = 0.5;
            targetRatioY = 0.5;
          } else {
            pauseAutoTilt(260);
          }
        });
      }
      card.addEventListener("pointerdown", () => {
        pauseAutoTilt(450);
      }, { passive: true });
      applyTilt(currentRatioX, currentRatioY);
      window.requestAnimationFrame(tickTilt);
    });
  };
  const stopHomeBarberRotation = () => {
    if (!homeBarberRotationTimer) return;
    window.clearInterval(homeBarberRotationTimer);
    homeBarberRotationTimer = null;
  };
  const restartHomeBarberRotation = () => {
    stopHomeBarberRotation();
    setupHomeBarberRotation();
  };
  const clearHomeBarberTransitionTimers = () => {
    if (homeBarberTransitionSwapTimer) {
      window.clearTimeout(homeBarberTransitionSwapTimer);
      homeBarberTransitionSwapTimer = null;
    }
    if (homeBarberTransitionResetTimer) {
      window.clearTimeout(homeBarberTransitionResetTimer);
      homeBarberTransitionResetTimer = null;
    }
  };
  const triggerHomeBarberRotationStep = async (direction = 1) => {
    const activeBarbers = getSortedBookingBarbers();
    if (state.currentPage !== "home" || activeBarbers.length <= 1) {
      state.homeBarberIncomingIndex = -1;
      state.homeBarberTransitionStage = "idle";
      clearHomeBarberTransitionTimers();
      return;
    }
    clearHomeBarberTransitionTimers();
    const step = direction < 0 ? -1 : 1;
    const nextIndex = (state.homeBarberRotationIndex + step + activeBarbers.length) % activeBarbers.length;
    const nextBarber = activeBarbers[nextIndex] || null;
    state.homeBarberTransitionStage = "is-preparing";
    if (isAuthenticated() && nextBarber?.id) {
      try {
        await ensureBarberProfileServices(nextBarber.id, { suppressRender: true });
      } catch {
        // ignore prefetch errors and continue with transition fallback content
      }
    }
    if (state.currentPage !== "home") {
      state.homeBarberIncomingIndex = -1;
      state.homeBarberTransitionStage = "idle";
      clearHomeBarberTransitionTimers();
      return;
    }
    state.homeBarberIncomingIndex = nextIndex;
    state.homeBarberTransitionStage = "is-transitioning";
    updateHomeBarberRotationDom();
    homeBarberTransitionSwapTimer = window.setTimeout(() => {
      const currentBarbers = getSortedBookingBarbers();
      if (state.currentPage !== "home" || currentBarbers.length <= 1) {
        state.homeBarberIncomingIndex = -1;
        state.homeBarberTransitionStage = "idle";
        updateHomeBarberRotationDom();
        return;
      }
      state.homeBarberRotationIndex = state.homeBarberIncomingIndex >= 0 ? state.homeBarberIncomingIndex : (state.homeBarberRotationIndex + 1) % currentBarbers.length;
      state.homeBarberIncomingIndex = -1;
      state.homeBarberTransitionStage = "idle";
      updateHomeBarberRotationDom();
    }, 420);
  };
  const setupHomeBarberRotation = () => {
    if (state.currentPage !== "home") {
      stopHomeBarberRotation();
      clearHomeBarberTransitionTimers();
      state.homeBarberIncomingIndex = -1;
      state.homeBarberTransitionStage = "idle";
      return;
    }
    const barbers = getSortedBookingBarbers();
    if (barbers.length <= 1) {
      stopHomeBarberRotation();
      clearHomeBarberTransitionTimers();
      state.homeBarberIncomingIndex = -1;
      state.homeBarberTransitionStage = "idle";
      return;
    }
    if (state.homeBarberRotationIndex >= barbers.length) state.homeBarberRotationIndex = 0;
    if (homeBarberRotationTimer) return;
    homeBarberRotationTimer = window.setInterval(() => {
      if (state.currentPage !== "home") {
        stopHomeBarberRotation();
        clearHomeBarberTransitionTimers();
        return;
      }
      if (state.homeBarberTransitionStage !== "idle") return;
      const activeBarbers = getSortedBookingBarbers();
      if (activeBarbers.length <= 1) {
        stopHomeBarberRotation();
        clearHomeBarberTransitionTimers();
        return;
      }
      void triggerHomeBarberRotationStep();
    }, 6500);
  };
  const setupHomeBarberRotationSwipe = (scope = ROOT) => {
    const container = scope instanceof Element ? scope : ROOT;
    if (!container) return;
    const rotationRoot = container.matches?.("[data-home-barber-rotation-root]")
      ? container
      : container.querySelector?.("[data-home-barber-rotation-root]");
    if (!rotationRoot || rotationRoot.dataset.swipeBound === "1") return;
    rotationRoot.dataset.swipeBound = "1";
    let activePointerId = null;
    let startX = 0;
    let startY = 0;
    let swipeTriggered = false;
    const isSwipeEligible = (event) => {
      if (state.currentPage !== "home") return false;
      if (getSortedBookingBarbers().length <= 1) return false;
      if (isDesktopLikeDevice() && event.pointerType === "mouse") return false;
      return event.isPrimary !== false;
    };
    const resetSwipe = () => {
      activePointerId = null;
      swipeTriggered = false;
      startX = 0;
      startY = 0;
    };
    rotationRoot.addEventListener("pointerdown", (event) => {
      if (!isSwipeEligible(event)) return;
      activePointerId = event.pointerId;
      swipeTriggered = false;
      startX = event.clientX;
      startY = event.clientY;
      try {
        rotationRoot.setPointerCapture?.(event.pointerId);
      } catch {
        // ignore unsupported pointer capture environments
      }
    }, { passive: true });
    rotationRoot.addEventListener("pointermove", (event) => {
      if (activePointerId !== event.pointerId || swipeTriggered) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (Math.abs(deltaX) < 46) return;
      if (Math.abs(deltaX) <= Math.abs(deltaY) * 1.15) return;
      if (state.homeBarberTransitionStage !== "idle") {
        resetSwipe();
        return;
      }
      swipeTriggered = true;
      homeBarberSwipeHandledAt = Date.now();
      restartHomeBarberRotation();
      void triggerHomeBarberRotationStep(deltaX < 0 ? 1 : -1);
      resetSwipe();
    }, { passive: true });
    const finishSwipe = (event) => {
      if (activePointerId == null) return;
      if (event?.pointerId != null && event.pointerId !== activePointerId) return;
      try {
        rotationRoot.releasePointerCapture?.(activePointerId);
      } catch {
        // ignore unsupported pointer capture environments
      }
      resetSwipe();
    };
    rotationRoot.addEventListener("pointerup", finishSwipe, { passive: true });
    rotationRoot.addEventListener("pointercancel", finishSwipe, { passive: true });
    rotationRoot.addEventListener("lostpointercapture", finishSwipe, { passive: true });
  };
  const setupTransferRecipientCarousels = (scope = ROOT) => {
    const container = scope instanceof Element ? scope : ROOT;
    if (!container) return;
    container.querySelectorAll(".referral-transfer-recipient-carousel").forEach((carousel) => {
      const strip = carousel.querySelector("[data-transfer-recipient-strip]");
      const prevButton = carousel.querySelector(".referral-transfer-scroll-btn-prev");
      const nextButton = carousel.querySelector(".referral-transfer-scroll-btn-next");
      if (!strip || !prevButton || !nextButton) return;
      const syncButtons = () => {
        const itemWidths = Array.from(strip.querySelectorAll(".referral-transfer-recipient")).reduce(
          (total, item) => total + item.getBoundingClientRect().width,
          0,
        );
        const computedGap = Number.parseFloat(window.getComputedStyle(strip).columnGap || window.getComputedStyle(strip).gap || "0") || 0;
        const itemsCount = strip.querySelectorAll(".referral-transfer-recipient").length;
        const contentWidth = itemWidths + Math.max(0, itemsCount - 1) * computedGap;
        const maxScroll = Math.max(0, strip.scrollWidth - strip.clientWidth);
        const hasOverflow = maxScroll > 8 && contentWidth - strip.clientWidth > 8;
        const currentScroll = Math.max(0, strip.scrollLeft);
        carousel.classList.toggle("has-overflow", hasOverflow);
        prevButton.classList.toggle("is-hidden", !hasOverflow || currentScroll <= 8);
        nextButton.classList.toggle("is-hidden", !hasOverflow || currentScroll >= maxScroll - 8);
      };
      if (carousel.dataset.carouselBound !== "1") {
        carousel.dataset.carouselBound = "1";
        strip.addEventListener("scroll", syncButtons, { passive: true });
      }
      syncButtons();
      window.requestAnimationFrame(syncButtons);
    });
  };
  const getPageFromPath = (pathname) => {
    const normalized = normalizeText(pathname || window.location.pathname).replace(/\/+$/, "") || "/";
    if (normalized === "/" || normalized === "/home") return "home";
    if (/^\/barber\/[^/]+$/i.test(normalized)) return "barber";
    if (normalized === "/referral") return "referral";
    if (normalized === "/booking") return "booking";
    if (normalized === "/shop") return "shop";
    if (normalized === "/achievements") return "achievements";
    if (normalized === "/profile") return "profile";
    return "";
  };
  const getBarberIdFromPath = (pathname) => {
    const normalized = normalizeText(pathname || window.location.pathname).replace(/\/+$/, "");
    const match = normalized.match(/^\/barber\/([^/]+)$/i);
    return match ? decodeURIComponent(match[1]) : "";
  };
  const syncPageFromLocation = () => {
    state.currentPage = getPageFromPath(window.location.pathname) || "home";
    state.activeBarberProfileId = state.currentPage === "barber" ? getBarberIdFromPath(window.location.pathname) : "";
  };

  const getStorage = (type) => {
    try {
      return type === "session" ? window.sessionStorage : window.localStorage;
    } catch {
      return null;
    }
  };

  const readStorage = (storage, key) => {
    try {
      return storage?.getItem ? storage.getItem(key) : null;
    } catch {
      return null;
    }
  };

  const writeStorage = (storage, key, value) => {
    try {
      if (storage?.setItem) storage.setItem(key, value);
    } catch {
      // ignore
    }
  };

  const removeStorage = (storage, key) => {
    try {
      if (storage?.removeItem) storage.removeItem(key);
    } catch {
      // ignore
    }
  };

  const isAuthenticated = () => Boolean(normalizeText(state.session?.token));

  const buildLoginUrl = (nextPath = "") => {
    const loginUrl = new URL(LOGIN_PAGE_URL, window.location.origin);
    const safeNextPath = normalizeText(nextPath);
    if (safeNextPath) loginUrl.searchParams.set("next", safeNextPath);
    return `${loginUrl.pathname}${loginUrl.search}${loginUrl.hash}`;
  };

  const buildSessionPayload = (payload = {}) => ({
    token: normalizeText(payload.token),
    user: {
      id: normalizeText(payload.user?.id),
      phone: normalizePhone(payload.user?.phone),
      displayName: normalizeText(payload.user?.displayName || payload.user?.phone),
      access: {
        isBarber: payload.user?.access?.isBarber === true,
        role: normalizeText(payload.user?.access?.role) || "client",
        barberId: normalizeText(payload.user?.access?.barberId),
        barberName: normalizeText(payload.user?.access?.barberName),
      },
      authenticatedViaBarberAccess: payload.user?.authenticatedViaBarberAccess === true,
    },
  });

  const loadSession = () => {
    const raw = readStorage(getStorage("local"), SESSION_STORAGE_KEY) || readStorage(getStorage("session"), SESSION_STORAGE_KEY);
    if (!raw) return null;
    try {
      return buildSessionPayload(JSON.parse(raw));
    } catch {
      return null;
    }
  };

  const persistSession = (payload) => {
    const serialized = JSON.stringify(buildSessionPayload(payload));
    writeStorage(getStorage("local"), SESSION_STORAGE_KEY, serialized);
    writeStorage(getStorage("session"), SESSION_STORAGE_KEY, serialized);
  };

  const clearSession = () => {
    removeStorage(getStorage("local"), SESSION_STORAGE_KEY);
    removeStorage(getStorage("session"), SESSION_STORAGE_KEY);
    stopHomeEventsStream();
    clearTopbarAnnouncement();
    lastKnownReferralBalance = null;
  };
  const clearLogoutMarker = () => {
    removeStorage(getStorage("local"), LOGOUT_MARKER_STORAGE_KEY);
    removeStorage(getStorage("session"), LOGOUT_MARKER_STORAGE_KEY);
  };

  const redirectToLogin = (nextPath = "", options = {}) => {
    const fallbackPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const targetUrl = buildLoginUrl(normalizeText(nextPath) || fallbackPath);
    if (options.replace === false) {
      window.location.assign(targetUrl);
      return;
    }
    window.location.replace(targetUrl);
  };

  const setLogoutMarker = () => {
    const marker = String(Date.now());
    writeStorage(getStorage("local"), LOGOUT_MARKER_STORAGE_KEY, marker);
    writeStorage(getStorage("session"), LOGOUT_MARKER_STORAGE_KEY, marker);
  };
  const validateStoredHomeSession = async () => {
    const token = normalizeText(state.session?.token);
    if (!token) return false;
    try {
      const response = await fetch(`${API_ROOT}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (!response.ok) return false;
      const refreshedToken = normalizeText(response.headers.get("x-home-session-token"));
      if (refreshedToken) {
        state.session.token = refreshedToken;
        persistSession(state.session);
      }
      return true;
    } catch {
      return false;
    }
  };

  const formatPhone = (value) => {
    const digits = normalizePhone(value).replace(/^\+7/, "").replace(/^8/, "");
    if (digits.length !== 10) return normalizeText(value) || "Не указан";
    return `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8, 10)}`;
  };

  const extractPhoneDigits = (value) => {
    const rawDigits = normalizeText(value).replace(/\D/g, "");
    if (!rawDigits) return "";
    let digits = rawDigits;
    if (digits.startsWith("7") || digits.startsWith("8")) digits = digits.slice(1);
    return digits.slice(0, 10);
  };

  const formatPhoneInputValue = (digits) => {
    const safeDigits = extractPhoneDigits(digits);
    if (!safeDigits) return "";
    let output = "+7";
    const part1 = safeDigits.slice(0, 3);
    const part2 = safeDigits.slice(3, 6);
    const part3 = safeDigits.slice(6, 8);
    const part4 = safeDigits.slice(8, 10);
    if (part1) {
      output += ` (${part1}`;
      if (part1.length === 3) output += ")";
    }
    if (part2) output += ` ${part2}`;
    if (part3) output += `-${part3}`;
    if (part4) output += `-${part4}`;
    return output;
  };

  const countLocalDigitsInSlice = (value) => extractPhoneDigits(value).length;

  const removeDigitFromMaskedValue = (input, mode) => {
    const current = input.value || "";
    const digits = extractPhoneDigits(current);
    if (!digits.length) {
      input.value = "";
      return true;
    }
    const start = input.selectionStart ?? current.length;
    const end = input.selectionEnd ?? start;
    if (start !== end) return false;

    const removeIndex =
      mode === "backspace"
        ? countLocalDigitsInSlice(current.slice(0, start)) - 1
        : countLocalDigitsInSlice(current.slice(0, start));
    if (removeIndex < 0 || removeIndex >= digits.length) return false;

    const nextDigits = `${digits.slice(0, removeIndex)}${digits.slice(removeIndex + 1)}`;
    input.value = formatPhoneInputValue(nextDigits);
    const nextPos = input.value.length;
    try {
      input.setSelectionRange(nextPos, nextPos);
    } catch {
      // ignore
    }
    return true;
  };

  const applyPhoneMask = (input) => {
    const digits = extractPhoneDigits(input.value);
    input.value = formatPhoneInputValue(digits);
    const nextPos = input.value.length;
    try {
      input.setSelectionRange(nextPos, nextPos);
    } catch {
      // ignore
    }
  };

  const attachPhoneMask = (input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Backspace" && event.key !== "Delete") return;
      const value = input.value || "";
      const start = input.selectionStart ?? value.length;
      const end = input.selectionEnd ?? start;
      if (start !== end) return;

      if (event.key === "Backspace") {
        if (start <= 0) return;
        const prevChar = value[start - 1];
        if (/\d/.test(prevChar)) return;
        if (removeDigitFromMaskedValue(input, "backspace")) event.preventDefault();
        return;
      }

      const nextChar = value[start];
      if (!nextChar || /\d/.test(nextChar)) return;
      if (removeDigitFromMaskedValue(input, "delete")) event.preventDefault();
    });

    input.addEventListener("input", () => applyPhoneMask(input));
    input.addEventListener("blur", () => {
      if (!extractPhoneDigits(input.value)) input.value = "";
    });
  };

  const formatDateOnly = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "Без даты";
    const parsed = new Date(`${safeValue}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return safeValue;
    return parsed.toLocaleDateString("ru-RU", { day: "2-digit", month: "long", weekday: "short" });
  };

  const DEFAULT_APP_TIME_ZONE = "Asia/Irkutsk";
  const getAppTimeZone = () => normalizeText(state?.payload?.site?.timeZones?.client) || DEFAULT_APP_TIME_ZONE;
  const dateTimeFormatterCache = new Map();
  const getDateTimeFormatter = (options = {}) => {
    const timeZone = getAppTimeZone();
    const cacheKey = JSON.stringify({ timeZone, ...options });
    if (!dateTimeFormatterCache.has(cacheKey)) {
      dateTimeFormatterCache.set(
        cacheKey,
        new Intl.DateTimeFormat("ru-RU", {
          timeZone,
          ...options,
        }),
      );
    }
    return dateTimeFormatterCache.get(cacheKey);
  };
  const formatZonedDateValue = (value, options = {}) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    const parsed = new Date(safeValue);
    if (Number.isNaN(parsed.getTime())) return safeValue;
    return getDateTimeFormatter(options).format(parsed);
  };
  const sanitizeTimeToken = (value) => {
    const match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
    if (!match) return "";
    return `${match[1].padStart(2, "0")}:${match[2]}`;
  };
  const parseTimeRangeParts = (value) => {
    const safeValue = normalizeText(value).replace(/[\u2014\u2013]/g, "-");
    if (!safeValue) return { start: "", end: "" };
    const [startRaw, endRaw = ""] = safeValue.split("-").map((part) => sanitizeTimeToken(part));
    return { start: startRaw, end: endRaw };
  };
  const timeZoneFormatterCache = new Map();
  const getTimeZoneFormatter = (zone) => {
    const targetZone = normalizeText(zone) || getAppTimeZone();
    const cacheKey = targetZone || "default";
    if (!timeZoneFormatterCache.has(cacheKey)) {
      timeZoneFormatterCache.set(
        cacheKey,
        new Intl.DateTimeFormat("en-CA", {
          timeZone: targetZone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    }
    return timeZoneFormatterCache.get(cacheKey);
  };
  const getTimeZoneParts = (dateObj, zone) => {
    const formatter = getTimeZoneFormatter(zone);
    return formatter.formatToParts(dateObj).reduce((acc, part) => {
      if (part.type !== "literal") {
        acc[part.type] = part.value;
      }
      return acc;
    }, {});
  };
  const getTimeZoneOffsetMs = (dateObj, zone) => {
    const parts = getTimeZoneParts(dateObj, zone);
    const asUtc = Date.UTC(
      Number(parts.year || 0),
      Number(parts.month || 1) - 1,
      Number(parts.day || 1),
      Number(parts.hour || 0),
      Number(parts.minute || 0),
      Number(parts.second || 0),
    );
    return asUtc - dateObj.getTime();
  };
  const parseZonedDateTime = (dateValue, timeToken, zone) => {
    const targetZone = normalizeText(zone) || getAppTimeZone();
    const safeDate = normalizeText(dateValue).slice(0, 10);
    const safeTime = sanitizeTimeToken(timeToken) || "00:00";
    const dateMatch = safeDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const timeMatch = safeTime.match(/^(\d{2}):(\d{2})$/);
    if (!dateMatch || !timeMatch) return null;
    const year = Number(dateMatch[1]);
    const month = Number(dateMatch[2]);
    const day = Number(dateMatch[3]);
    const hours = Number(timeMatch[1]);
    const minutes = Number(timeMatch[2]);
    const utcMillis = Date.UTC(year, month - 1, day, hours, minutes, 0);
    let candidate = new Date(utcMillis);
    try {
      let offsetMs = getTimeZoneOffsetMs(candidate, targetZone);
      candidate = new Date(utcMillis - offsetMs);
      const adjustedOffsetMs = getTimeZoneOffsetMs(candidate, targetZone);
      if (adjustedOffsetMs !== offsetMs) {
        candidate = new Date(utcMillis - adjustedOffsetMs);
      }
      return Number.isNaN(candidate.getTime()) ? null : candidate;
    } catch {
      const fallback = new Date(`${safeDate}T${safeTime}:00`);
      return Number.isNaN(fallback.getTime()) ? null : fallback;
    }
  };

  const formatDateTime = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "Без даты";
    return formatZonedDateValue(safeValue, { day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" });
  };

  const formatShortDate = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    return formatZonedDateValue(safeValue, { day: "2-digit", month: "short" });
  };
  const formatShortDateTime = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    return formatZonedDateValue(safeValue, { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  };

  const formatProfileDateOnly = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    const parsed = new Date(`${safeValue}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return safeValue;
    return parsed.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  const formatProfileDateTime = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    return formatZonedDateValue(safeValue, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const parseAppointmentStart = (dateValue, timeValue) => {
    const safeDate = normalizeText(dateValue);
    if (!safeDate) return null;
    const startTime = parseTimeRangeParts(timeValue).start || "00:00";
    return parseZonedDateTime(safeDate, startTime);
  };

  const formatAppointmentEta = (dateValue, timeValue) => {
    const startAt = parseAppointmentStart(dateValue, timeValue);
    if (!startAt) return "";
    const diffMs = startAt.getTime() - Date.now();
    if (diffMs <= 0) return "Сейчас";
    const totalMinutes = Math.max(1, Math.round(diffMs / 60000));
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;
    if (days > 0) return `Через ${days} д ${hours} ч`;
    if (hours > 0) return `Через ${hours} ч ${minutes} мин`;
    return `Через ${minutes} мин`;
  };

  const parseAppointmentEnd = (dateValue, timeValue) => {
    const startAt = parseAppointmentStart(dateValue, timeValue);
    if (!startAt) return null;
    const { start, end } = parseTimeRangeParts(timeValue);
    const endTime = end || start;
    if (endTime) {
      let parsed = parseZonedDateTime(normalizeText(dateValue), endTime);
      if (parsed) {
        if (end && start && end <= start) {
          parsed = new Date(parsed.getTime() + 24 * 60 * 60 * 1000);
        }
        if (!Number.isNaN(parsed.getTime())) return parsed;
      }
    }
    return new Date(startAt.getTime() + 60 * 60 * 1000);
  };

  const escapeIcsText = (value) =>
    normalizeText(value)
      .replace(/\\/g, "\\\\")
      .replace(/\n/g, "\\n")
      .replace(/,/g, "\\,")
      .replace(/;/g, "\\;");

  const formatIcsDateTime = (value) => {
    const parsed = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(parsed.getTime())) return "";
    return parsed.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  };

  const downloadAppointmentReminder = (appointment) => {
    const safeAppointment = appointment || {};
    const startAt = parseAppointmentStart(safeAppointment.date, safeAppointment.time);
    if (!startAt) {
      openSheet("Напоминание", `<div class="list-item"><p class="list-title">Не удалось подготовить напоминание.</p><p class="subtitle">У записи не найдены дата или время.</p></div>`);
      return;
    }
    const endAt = parseAppointmentEnd(safeAppointment.date, safeAppointment.time) || new Date(startAt.getTime() + 60 * 60 * 1000);
    const siteHome = state.payload?.site?.home || {};
    const location = normalizeText(siteHome.address || "BrotherShop");
    const servicesLabel = Array.isArray(safeAppointment.services) ? safeAppointment.services.filter(Boolean).join(", ") : "";
    const title = `BrotherShop - ${normalizeText(safeAppointment.barber || "Запись")}`;
    const description = [servicesLabel, "Напоминание создано с сайта BrotherShop."].filter(Boolean).join("\\n");
    const icsBody = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//BrotherShop//Booking Reminder//RU",
      "BEGIN:VEVENT",
      `UID:${Date.now()}-${normalizeText(safeAppointment.id || "booking")}@brothershop`,
      `DTSTAMP:${formatIcsDateTime(new Date())}`,
      `DTSTART:${formatIcsDateTime(startAt)}`,
      `DTEND:${formatIcsDateTime(endAt)}`,
      `SUMMARY:${escapeIcsText(title)}`,
      `DESCRIPTION:${escapeIcsText(description)}`,
      `LOCATION:${escapeIcsText(location)}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT90M",
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeIcsText(title)}`,
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([icsBody], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `brothershop-reminder-${normalizeText(safeAppointment.date || "booking")}.ics`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const syncHomeAboutCardState = (toggleButton, expanded) => {
    if (!toggleButton) return;
    const wrap = toggleButton.querySelector(".home-about-text-wrap");
    const text = toggleButton.querySelector(".home-about-text");
    const more = toggleButton.querySelector(".home-about-more");
    if (!wrap || !text) return;
    const computedStyle = window.getComputedStyle(text);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 24;
    const collapsedHeight = Math.ceil(lineHeight * 4);
    toggleButton.classList.toggle("is-expanded", expanded);
    toggleButton.classList.toggle("is-collapsed", !expanded);
    toggleButton.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (more) more.textContent = expanded ? "Свернуть" : "Показать еще";
    wrap.style.maxHeight = expanded ? `${text.scrollHeight}px` : `${Math.min(text.scrollHeight, collapsedHeight)}px`;
  };

  const animateHomeAboutCard = (toggleButton, expanded) => {
    if (!toggleButton) return;
    const wrap = toggleButton.querySelector(".home-about-text-wrap");
    const text = toggleButton.querySelector(".home-about-text");
    const more = toggleButton.querySelector(".home-about-more");
    if (!wrap || !text) return;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const computedStyle = window.getComputedStyle(text);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 24;
    const collapsedHeight = Math.ceil(lineHeight * 4);
    if (reducedMotion) {
      syncHomeAboutCardState(toggleButton, expanded);
      return;
    }
    const currentHeight = wrap.getBoundingClientRect().height;
    toggleButton.classList.add("is-animating");
    wrap.style.maxHeight = `${currentHeight}px`;
    wrap.getBoundingClientRect();
    toggleButton.classList.toggle("is-expanded", expanded);
    toggleButton.classList.toggle("is-collapsed", !expanded);
    toggleButton.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (more) more.textContent = expanded ? "Свернуть" : "Показать еще";
    const targetHeight = expanded ? text.scrollHeight : Math.min(text.scrollHeight, collapsedHeight);
    window.requestAnimationFrame(() => {
      wrap.style.maxHeight = `${targetHeight}px`;
    });
    const cleanup = () => {
      toggleButton.classList.remove("is-animating");
      wrap.removeEventListener("transitionend", cleanup);
      wrap.style.maxHeight = expanded ? `${text.scrollHeight}px` : `${Math.min(text.scrollHeight, collapsedHeight)}px`;
    };
    wrap.addEventListener("transitionend", cleanup);
  };

  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(normalizeText(reader.result));
      reader.onerror = () => reject(new Error("Не удалось прочитать файл."));
      reader.readAsDataURL(file);
    });

  const cropImageFileToSquareDataUrl = async (file, outputSize = 720) => {
    const source = await readFileAsDataUrl(file);
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const side = Math.min(image.naturalWidth || image.width, image.naturalHeight || image.height);
        const sx = Math.max(0, Math.round(((image.naturalWidth || image.width) - side) / 2));
        const sy = Math.max(0, Math.round(((image.naturalHeight || image.height) - side) / 2));
        const canvas = document.createElement("canvas");
        canvas.width = outputSize;
        canvas.height = outputSize;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Не удалось обработать изображение."));
          return;
        }
        context.drawImage(image, sx, sy, side, side, 0, 0, outputSize, outputSize);
        resolve(canvas.toDataURL("image/jpeg", 0.9));
      };
      image.onerror = () => reject(new Error("Не удалось обработать изображение."));
      image.src = source;
    });
  };

  const buildProfileHistoryItems = (visitHistory = [], operations = []) => {
    const visitItems = visitHistory.map((visit) => ({
      id: `visit-${normalizeText(visit.id)}`,
      type: "visit",
      visitId: normalizeText(visit.id),
      barber: normalizeText(visit.barber),
      services: Array.isArray(visit.services) ? visit.services : [],
      createdAt: normalizeText(visit.when || `${visit.date || ""}T00:00:00`),
      title: normalizeText(visit.barber) || "Визит",
      subtitle: visit.services?.length ? normalizeText(visit.services.join(", ")) : "Детали визита",
      amountRub: -Math.abs(Number(visit.amountRub) || 0),
      amountBs: 0,
      status: normalizeText(visit.status),
      dateLabel: formatDateTime(visit.when || `${visit.date || ""}T${visit.time || "00:00:00"}`),
    }));
    const operationItems = operations
      .filter((operation) => normalizeText(operation.type) !== "visit" && !Number(operation.amountBs))
      .map((operation) => ({
        id: `operation-${normalizeText(operation.id)}`,
        type: "payment",
        createdAt: normalizeText(operation.createdAt),
        title: normalizeText(operation.title) || "Операция",
        subtitle: normalizeText(operation.description),
        amountRub: Number(operation.amountRub) || 0,
        amountBs: Number(operation.amountBs) || 0,
        status: normalizeText(operation.status),
        dateLabel: formatDateTime(operation.createdAt),
    }));
    return [...visitItems, ...operationItems].sort((left, right) => normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)));
  };
  const getProfileHistoryItems = (visitHistory = [], operations = []) => {
    if (
      derivedDataCache.profileHistory.visitHistoryRef === visitHistory &&
      derivedDataCache.profileHistory.operationsRef === operations
    ) {
      return derivedDataCache.profileHistory.items;
    }
    const items = buildProfileHistoryItems(visitHistory, operations);
    derivedDataCache.profileHistory = {
      visitHistoryRef: visitHistory,
      operationsRef: operations,
      items,
    };
    derivedDataCache.filteredProfileHistory = { itemsRef: null, filter: "", filtered: [] };
    return items;
  };

  const matchesProfileHistoryFilter = (item, filter) => {
    if (filter === "visits") return item.type === "visit";
    if (filter === "payments") return item.type === "payment";
    return true;
  };
  const getFilteredProfileHistoryItems = (items = [], filter = "all") => {
    if (derivedDataCache.filteredProfileHistory.itemsRef === items && derivedDataCache.filteredProfileHistory.filter === filter) {
      return derivedDataCache.filteredProfileHistory.filtered;
    }
    const filtered = items.filter((item) => matchesProfileHistoryFilter(item, filter));
    derivedDataCache.filteredProfileHistory = {
      itemsRef: items,
      filter,
      filtered,
    };
    return filtered;
  };

  const renderProfileHistoryRow = (item) => `
    <div class="timeline-item bank-row history-row">
      <div class="history-row-main">
        <div class="history-row-head">
          <div class="history-row-meta">
            <span class="status-badge ${item.type === "visit" ? "status-green" : "status-red"}">${item.type === "visit" ? "Визит" : "Оплата"}</span>
            <span class="subtitle">${formatProfileDateTime(item.createdAt)}</span>
          </div>
          ${item.amountRub ? `<div class="amount-rub history-row-amount ${item.amountRub < 0 ? "negative" : ""}">${item.amountRub > 0 ? "+" : ""}${formatRub(Math.abs(item.amountRub))}</div>` : ""}
        </div>
        <p class="list-title">${normalizeText(item.title)}</p>
        <p class="subtitle">${normalizeText(item.subtitle)}</p>
      </div>
    </div>
  `;

  const formatRub = (value) => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return "0 ₽";
    return `${numeric.toLocaleString("ru-RU")} ₽`;
  };

  const getBookingPricingSummary = (bookingState = state.booking, referral = state.payload?.referral || {}) => {
    const selectedServices = (Array.isArray(bookingState?.services) ? bookingState.services : []).filter((service) =>
      (bookingState?.selectedServices || []).includes(service.id),
    );
    const totalRub = Math.max(
      0,
      Math.round(selectedServices.reduce((total, service) => total + (Number(service.price) || 0), 0)),
    );
    const bsToRubRate = Math.max(1, Number(referral?.program?.bsToRubRate) || 1);
    const balanceBs = Math.max(0, Math.trunc(Number(referral?.bsBalance) || 0));
    const maxCoverBs = Math.max(0, Math.min(balanceBs, Math.floor(totalRub / bsToRubRate)));
    const appliedBs = Math.max(0, Math.min(maxCoverBs, Math.trunc(Number(bookingState?.appliedBs) || 0)));
    const coveredRub = appliedBs * bsToRubRate;
    return {
      selectedServices,
      totalRub,
      bsToRubRate,
      balanceBs,
      maxCoverBs,
      appliedBs,
      coveredRub,
      payableRub: Math.max(0, totalRub - coveredRub),
    };
  };

  const syncBookingBsCover = () => {
    const pricing = getBookingPricingSummary();
    state.booking.appliedBs = pricing.appliedBs;
    if (pricing.appliedBs > 0) state.booking.bsCoverExpanded = true;
    return pricing;
  };

  const avatarMarkup = (user, size) => {
    const avatarUrl = normalizeText(user?.avatarUrl);
    const title = normalizeText(user?.displayName || user?.fullName || "U");
    const initials = title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("") || "U";
    if (avatarUrl) {
      return `<div class="profile-avatar" style="width:${size}px;height:${size}px;"><img src="${avatarUrl}" alt="${title}" /></div>`;
    }
    return `<div class="profile-avatar" style="width:${size}px;height:${size}px;display:grid;place-items:center;background:linear-gradient(135deg,var(--md-sys-color-primary),#0b6662);color:#fff;font:700 1rem/1 var(--font-display);">${initials}</div>`;
  };
  const PROFILE_AVATAR_DELETE_SENTINEL = "__DELETE__";
  const getProfileAvatarUploadHint = () => "Файл до 5 МБ. Фото автоматически обрежется по центру.";
  const renderProfileAvatarUploadControl = (user, options = {}) => {
    const prefix = normalizeText(options.prefix || "profile-avatar");
    const title = normalizeText(options.title || "Загрузить новое фото");
    const currentAvatarUrl = normalizeText(user?.avatarUrl || "");
    const showCameraButton = options.showCameraButton !== false;
    return `
      <div
        class="profile-avatar-upload-card"
        id="${prefix}-card"
        tabindex="0"
        data-current-avatar-url="${currentAvatarUrl}"
        aria-label="Загрузка фото профиля"
      >
        <div class="profile-avatar-upload-preview-shell">
          <div class="profile-avatar-upload-preview" id="${prefix}-preview">${avatarMarkup(user, 84)}</div>
        </div>
        <div class="profile-avatar-upload-copy">
          <strong>${title}</strong>
          <span class="muted-text" id="${prefix}-status">${getProfileAvatarUploadHint()}</span>
          <div class="inline-actions profile-avatar-upload-actions">
            <button class="ghost-btn file-select-btn profile-avatar-upload-action-main" type="button" id="${prefix}-choose-btn">Загрузить с устройства</button>
            ${showCameraButton ? `<button class="ghost-btn profile-avatar-upload-action-secondary" type="button" id="${prefix}-camera-btn">Сделать снимок</button>` : ""}
            <button class="ghost-btn profile-avatar-upload-action-secondary" type="button" id="${prefix}-delete-btn">Удалить</button>
          </div>
        </div>
        <input id="${prefix}-input" class="visually-hidden-input" type="file" name="avatarFile" accept="image/*" />
        <input id="${prefix}-camera-input" class="visually-hidden-input" type="file" accept="image/*" capture="environment" />
        <input id="${prefix}-prepared" type="hidden" name="avatarPreparedUrl" value="" />
      </div>
    `;
  };

  const statusColorClass = (value) => (value === "green" ? "green" : value === "yellow" ? "yellow" : "red");
  const referralColorLabel = (value) => {
    if (value === "green") return "Активный";
    if (value === "yellow") return "Редкий";
    return "Неактивный";
  };
  const humanizeReferralTransferError = (error) => {
    const message = normalizeText(error?.message).toLowerCase();
    if (!message) return "Не удалось выполнить перевод BS. Попробуйте еще раз.";
    if (message.includes("телефон")) return "Укажите номер телефона получателя.";
    if (message.includes("получател") || message.includes("найден")) return "Клиент с таким номером не найден.";
    if (message.includes("самому себе") || message.includes("самом")) return "Нельзя переводить BS самому себе.";
    if (message.includes("сумм")) return "Укажите корректную сумму BS.";
    if (message.includes("недостат")) return "На балансе недостаточно BS для перевода.";
    return "Не удалось выполнить перевод BS. Проверьте номер и попробуйте снова.";
  };
  const getReferralLevelName = (referralProgram = {}, activeReferralsCount = 0) => {
    const currentLevelName = normalizeText(referralProgram.currentLevel?.name);
    if (currentLevelName) return currentLevelName;
    return Number(activeReferralsCount || referralProgram.activeReferralsCount || 0) > 0 ? "Не определен" : "Гость";
  };
  const iconMarkup = (name) => {
    if (name === "settings") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.1"></circle><path d="M19.14 12.94a7.8 7.8 0 0 0 .05-.94 7.8 7.8 0 0 0-.05-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.35 7.35 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.49-.42h-3.84a.5.5 0 0 0-.49.42l-.36 2.54c-.58.22-1.13.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.84a.5.5 0 0 0 .12.64l2.03 1.58a7.8 7.8 0 0 0-.05.94c0 .32.02.63.05.94L2.82 14.52a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.54a.5.5 0 0 0 .49.42h3.84a.5.5 0 0 0 .49-.42l.36-2.54c.58-.22 1.13-.54 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58Z"></path></svg>';
    }
    if (name === "telegram") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.5 4.5-3 14.2c-.2 1-1 1.2-1.8.8l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.8.4l.3-4.7 8.7-7.8c.4-.3-.1-.5-.5-.2l-10.8 6.8-4.7-1.5c-1-.3-1-1 .2-1.4L20 3.8c.9-.3 1.7.2 1.5 1.7Z"></path></svg>';
    }
    if (name === "whatsapp") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7l-3.2.9.9-3.1A8 8 0 1 1 20 11.5Z"></path><path d="M9.1 8.4c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1 1-.9 2.4 0 1.4 1 2.8 1.2 3 .2.2 2.1 3.3 5.1 4.4 2.5 1 3 1 3.5.9.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.1-1.4-.1-.2-.4-.3-.9-.5l-1.5-.7c-.4-.2-.7-.1-.9.2l-.7.9c-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-.7-.7-1.2-1.5-1.4-1.9-.1-.4 0-.6.1-.8l.3-.3.3-.4c.1-.2.2-.4.3-.6 0-.2 0-.4-.1-.6l-.7-1.7Z"></path></svg>';
    }
    if (name === "mail") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>';
    }
    if (name === "phone") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7A2 2 0 0 1 22 16.9Z"></path></svg>';
    }
    if (name === "copy") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"></path></svg>';
    }
    if (name === "transfer") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h10"></path><path d="m13 3 4 4-4 4"></path><path d="M17 17H7"></path><path d="m11 21-4-4 4-4"></path></svg>';
    }
    if (name === "receive") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12"></path><path d="m7 11 5 5 5-5"></path><path d="M5 20h14"></path></svg>';
    }
    if (name === "reward") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.6 6.7 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z"></path></svg>';
    }
    if (name === "trophy") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v2h2a1 1 0 0 1 1 1v1a5 5 0 0 1-4.5 4.97A5.5 5.5 0 0 1 13 15.7V18h3v2H8v-2h3v-2.3a5.5 5.5 0 0 1-1.5-2.73A5 5 0 0 1 5 8V7a1 1 0 0 1 1-1h2V4Zm-1 4a3 3 0 0 0 2.1 2.87A8.2 8.2 0 0 1 8.03 8H7Zm10 0a8.2 8.2 0 0 1-1.07 2.87A3 3 0 0 0 18 8h-1Z"></path></svg>';
    }
    if (name === "wallet") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5.5A2.5 2.5 0 0 1 3 16.5v-9Z"></path><path d="M16 12h5"></path><circle cx="16.5" cy="12" r="1"></circle></svg>';
    }
    if (name === "qr") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="5" height="5" rx="1"></rect><rect x="16" y="3" width="5" height="5" rx="1"></rect><rect x="3" y="16" width="5" height="5" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>';
    }
    if (name === "scan") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7V5a1 1 0 0 1 1-1h2M20 7V5a1 1 0 0 0-1-1h-2M4 17v2a1 1 0 0 0 1 1h2M20 17v2a1 1 0 0 1-1 1h-2"></path><path d="M7 12h10"></path></svg>';
    }
    if (name === "chevron-left") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6-6 6 6 6"></path></svg>';
    }
    if (name === "chevron-right") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 6 6 6-6 6"></path></svg>';
    }
    if (name === "close") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18"></path><path d="M18 6 6 18"></path></svg>';
    }
    return "";
  };

  const appointmentMetaIcon = (name) => {
    if (name === "calendar") {
      return '<span class="appointment-label-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="3"></rect><path d="M7.5 3.5v4"></path><path d="M16.5 3.5v4"></path><path d="M3.5 9.5h17"></path><path d="M8 13h.01"></path><path d="M12 13h.01"></path><path d="M16 13h.01"></path><path d="M8 17h.01"></path><path d="M12 17h.01"></path></svg></span>';
    }
    if (name === "clock") {
      return '<span class="appointment-label-icon appointment-label-icon-clock" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3 2"></path></svg></span>';
    }
    return "";
  };

  const apiRequest = async (path, options) => {
    const token = normalizeText(state.session?.token);
    if (!token) {
      clearSession();
      redirectToLogin();
      throw new Error("Сессия недоступна.");
    }
    const response = await fetch(`${API_ROOT}${path}`, {
      method: options?.method || "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        ...(options?.body ? { "Content-Type": "application/json" } : {}),
      },
      body: options?.body,
    });
    const refreshedToken = normalizeText(response.headers.get("x-home-session-token"));
    if (refreshedToken && refreshedToken !== token) {
      state.session.token = refreshedToken;
      persistSession(state.session);
      restartHomeEventsStream();
    }
    if (response.status === 401 || response.status === 403) {
      clearSession();
      redirectToLogin();
      throw new Error("Сессия истекла.");
    }
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(normalizeText(payload.message || payload.error) || "Ошибка запроса.");
    return payload;
  };

  const publicApiRequest = async (path) => {
    const response = await fetch(`${API_ROOT}${path}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(normalizeText(payload.message || payload.error) || "Ошибка запроса.");
    return payload;
  };

  const ensureSitePresenceSessionId = () => {
    const existing = normalizeText(window.sessionStorage.getItem(SITE_PRESENCE_SESSION_KEY));
    if (existing) return existing;
    const nextValue =
      typeof window.crypto?.randomUUID === "function"
        ? window.crypto.randomUUID()
        : `presence-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
    window.sessionStorage.setItem(SITE_PRESENCE_SESSION_KEY, nextValue);
    return nextValue;
  };

  const sendSitePresence = async (mode = "online") => {
    const token = normalizeText(state.session?.token);
    if (!token) return;
    const sessionId = ensureSitePresenceSessionId();
    const endpoint = mode === "offline" ? "/presence/offline" : "/presence";
    try {
      await fetch(`${API_ROOT}${endpoint}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
        keepalive: mode === "offline",
      });
    } catch {
      // Best-effort presence sync.
    }
  };
  const stopHomeRealtimeRefresh = () => {
    if (!homeRealtimeRefreshTimer) return;
    window.clearTimeout(homeRealtimeRefreshTimer);
    homeRealtimeRefreshTimer = null;
  };
  const stopHomeEventsStream = () => {
    stopHomeRealtimeRefresh();
    if (homeEventsReconnectTimer) {
      window.clearTimeout(homeEventsReconnectTimer);
      homeEventsReconnectTimer = null;
    }
    if (homeEventsSource) {
      homeEventsSource.close();
      homeEventsSource = null;
    }
  };
  const refreshAppPayloadFromRealtime = async () => {
    if (!isAuthenticated()) return null;
    if (homeRealtimeRefreshPromise) return homeRealtimeRefreshPromise;
    homeRealtimeRefreshPromise = (async () => {
      try {
        const previousBalance = getReferralBalance(state.payload);
        const payload = await apiRequest("/app");
        commitAppPayload(payload, { allowBalanceAnnouncement: true });
        const nextBalance = getReferralBalance(payload);
        if (state.currentPage === "booking") {
          void syncBookingSelectionFromLocation();
        }
        refreshLiveAppDom({ animateReferralBalance: nextBalance > previousBalance });
        return payload;
      } catch {
        return null;
      } finally {
        homeRealtimeRefreshPromise = null;
      }
    })();
    return homeRealtimeRefreshPromise;
  };
  const fetchReferralQrSvgMarkup = async (size = 360) => {
    const token = normalizeText(state.session?.token);
    if (!token) throw new Error("Сессия недоступна.");
    const response = await fetch(`${API_ROOT}/referral/qr?size=${encodeURIComponent(String(size))}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "image/svg+xml, text/plain;q=0.9, */*;q=0.1",
      },
    });
    if (response.status === 401 || response.status === 403) {
      clearSession();
      redirectToLogin();
      throw new Error("Сессия истекла.");
    }
    const svgMarkup = await response.text();
    if (!response.ok || !normalizeText(svgMarkup).startsWith("<")) {
      throw new Error("Не удалось подготовить QR.");
    }
    return svgMarkup;
  };
  const scheduleHomeRealtimeRefresh = () => {
    if (!isAuthenticated()) return;
    if (homeRealtimeRefreshTimer) {
      window.clearTimeout(homeRealtimeRefreshTimer);
    }
    homeRealtimeRefreshTimer = window.setTimeout(() => {
      homeRealtimeRefreshTimer = null;
      void refreshAppPayloadFromRealtime();
    }, HOME_REALTIME_REFRESH_DEBOUNCE_MS);
  };
  const startHomeEventsStream = () => {
    if (!isAuthenticated() || homeEventsSource || typeof window.EventSource !== "function") return;
    const token = normalizeText(state.session?.token);
    if (!token) return;
    const streamUrl = new URL(HOME_EVENTS_STREAM_PATH, window.location.origin);
    streamUrl.searchParams.set("token", token);
    const source = new window.EventSource(streamUrl.toString());
    const restart = () => {
      if (homeEventsSource !== source) return;
      source.close();
      homeEventsSource = null;
      if (!isAuthenticated()) return;
      if (homeEventsReconnectTimer) {
        window.clearTimeout(homeEventsReconnectTimer);
      }
      homeEventsReconnectTimer = window.setTimeout(() => {
        homeEventsReconnectTimer = null;
        startHomeEventsStream();
      }, HOME_REALTIME_RECONNECT_DELAY_MS);
    };
    source.addEventListener("home-sync", () => {
      scheduleHomeRealtimeRefresh();
    });
    source.onopen = () => {
      if (!homeEventsReconnectTimer) return;
      window.clearTimeout(homeEventsReconnectTimer);
      homeEventsReconnectTimer = null;
    };
    source.onerror = () => {
      restart();
    };
    homeEventsSource = source;
  };
  const restartHomeEventsStream = () => {
    stopHomeEventsStream();
    startHomeEventsStream();
  };
  const requestIncomingBalanceNotificationPermission = async () => {
    if (!canUseBrowserNotifications()) return "unsupported";
    const currentPermission = window.Notification.permission;
    if (currentPermission !== "default") return currentPermission;
    try {
      return await window.Notification.requestPermission();
    } catch {
      return window.Notification.permission || "default";
    }
  };

  const stopSitePresenceLoop = () => {
    if (!sitePresenceTimer) return;
    window.clearInterval(sitePresenceTimer);
    sitePresenceTimer = null;
  };

  const startSitePresenceLoop = () => {
    stopSitePresenceLoop();
    void sendSitePresence("online");
    sitePresenceTimer = window.setInterval(() => {
      if (document.visibilityState === "hidden") return;
      void sendSitePresence("online");
    }, SITE_PRESENCE_PING_INTERVAL_MS);
  };

  const buildBookingStatusSheet = (label) => `
    <div class="booking-status-sheet" aria-live="polite">
      <div class="booking-status-icon" aria-hidden="true">
        <span class="booking-status-icon-ring"></span>
        <span class="booking-status-icon-check"></span>
      </div>
      <div class="booking-status-title">${normalizeText(label)}</div>
    </div>
  `;

  const buildTransferBsSheet = () => {
    const draft = state.referralTransferDraft || {};
    const selectedQuickAmount = Number(draft.amountBs || state.referralQuickAmount || 0);
    const currentBalance = Number(state.payload?.referral?.bsBalance || 0);
    const transferAmount = Math.max(0, Number(draft.amountBs || 0));
    const balanceAfterTransfer = Math.max(0, currentBalance - transferAmount);
    const transferError = normalizeText(state.referralTransferError);
    const scanTransferAction = !IS_DESKTOP_SHEET_DISMISS
      ? `<button
          class="referral-wallet-action referral-wallet-action-scan referral-transfer-bank-scan-action"
          type="button"
          data-action="open-sheet"
          data-sheet="scan-transfer-qr"
          aria-label="Сканировать QR"
          title="Сканировать QR"
        >${iconMarkup("scan")}</button>`
      : "";
    return `<form class="referral-transfer-bank-sheet" id="referral-transfer-form">
      <section class="referral-transfer-bank-hero">
        <div class="referral-transfer-bank-hero-copy">
          <span class="field-label">Баланс BS</span>
          <strong>${currentBalance} BS</strong>
        </div>
      </section>
      ${transferError ? `<div class="referral-transfer-bank-error" role="alert">${transferError}</div>` : ""}
      <section class="referral-transfer-bank-section">
        <div class="referral-transfer-bank-section-head">
          <span class="field-label">Получатель</span>
          <span class="referral-transfer-bank-section-note">Найдём клиента по номеру</span>
        </div>
        <div class="referral-transfer-bank-contact-row">
          <label class="field referral-transfer-bank-field referral-transfer-bank-contact-field">
            <input type="tel" inputmode="tel" autocomplete="tel" name="targetPhone" placeholder="+7 (999) 123-45-67" value="${formatPhoneInputValue(draft.targetPhone)}" required />
          </label>
          ${scanTransferAction}
        </div>
      </section>
      <section class="referral-transfer-bank-section">
        <div class="referral-transfer-bank-section-head">
          <span class="field-label">Сумма перевода</span>
          <span class="referral-transfer-bank-section-note">Без комиссии</span>
        </div>
        <label class="field referral-transfer-bank-field referral-transfer-bank-amount-field">
          <input type="number" name="amountBs" min="1" step="1" value="${normalizeText(draft.amountBs)}" placeholder="0" required />
          <span class="referral-transfer-bank-currency">BS</span>
        </label>
        <div class="referral-transfer-bank-presets">
          ${REFERRAL_TRANSFER_QUICK_AMOUNTS
            .map(
              (amount) => `
                <button
                  class="referral-transfer-bank-preset ${selectedQuickAmount === amount ? "is-selected" : ""}"
                  type="button"
                  data-action="transfer-preset"
                  data-amount="${amount}"
                >
                  ${amount} BS
                </button>`,
            )
            .join("")}
        </div>
      </section>
      <section class="referral-transfer-bank-section">
        <div class="referral-transfer-bank-section-head">
          <span class="field-label">Комментарий</span>
          <span class="referral-transfer-bank-section-note">Необязательно</span>
        </div>
        <label class="field referral-transfer-bank-field">
          <input name="comment" placeholder="Например: спасибо" value="${normalizeText(draft.comment)}" />
        </label>
      </section>
      <section class="referral-transfer-bank-summary">
        <div class="referral-transfer-bank-summary-row">
          <span>Сейчас доступно</span>
          <strong id="transfer-bs-current-balance">${currentBalance} BS</strong>
        </div>
        <div class="referral-transfer-bank-summary-row">
          <span>После перевода</span>
          <strong id="transfer-bs-balance-after">${balanceAfterTransfer} BS</strong>
        </div>
      </section>
      <div class="referral-transfer-bank-actions">
        <button class="primary-btn referral-transfer-bank-submit" type="submit">Продолжить</button>
        <button class="ghost-btn referral-transfer-bank-cancel" type="button" data-action="close-sheet">Отмена</button>
      </div>
    </form>`;
  };
  const reopenTransferBsSheetWithError = (errorMessage) => {
    state.referralTransferError = normalizeText(errorMessage);
    openSheet("Перевести BS", buildTransferBsSheet(), "", "sheet-wide transfer-bs-sheet", { syncHistory: false });
  };
  const refreshTransferBsSheet = () => {
    state.referralTransferError = "";
    openSheet("Перевести BS", buildTransferBsSheet(), "", "sheet-wide transfer-bs-sheet", { syncHistory: false });
  };
  const syncTransferBsAmountUi = (form) => {
    if (!form) return;
    const amountInput = form.elements?.amountBs;
    const normalizedAmount = Math.max(0, Number(amountInput?.value || 0));
    const matchedPreset = REFERRAL_TRANSFER_QUICK_AMOUNTS.find((amount) => amount === normalizedAmount) || null;
    state.referralQuickAmount = matchedPreset;
    state.referralTransferDraft = {
      ...(state.referralTransferDraft || {}),
      amountBs: normalizedAmount,
    };
    form.querySelectorAll(".referral-transfer-bank-preset[data-amount]").forEach((button) => {
      const isSelected = Number(button.dataset.amount || 0) === matchedPreset;
      button.classList.toggle("is-selected", isSelected);
    });
    const balanceAfterNode = queryById(form, "transfer-bs-balance-after");
    if (balanceAfterNode) {
      const currentBalance = Number(state.payload?.referral?.bsBalance || 0);
      balanceAfterNode.textContent = `${Math.max(0, currentBalance - normalizedAmount)} BS`;
    }
  };
  const buildConfirmTransferBsSheet = () => {
    const draft = state.referralTransferDraft || {};
    const currentBalance = Number(state.payload?.referral?.bsBalance || 0);
    const transferAmount = Math.max(0, Number(draft.amountBs || 0));
    const balanceAfterTransfer = Math.max(0, currentBalance - transferAmount);
    return `<div class="referral-transfer-bank-sheet referral-transfer-bank-confirm-sheet">
      <section class="referral-transfer-bank-hero">
        <div class="referral-transfer-bank-hero-copy">
          <span class="field-label">Подтверждение</span>
          <strong>${transferAmount} BS</strong>
          <p class="subtitle">Проверьте данные получателя перед отправкой. Перевод зачислится сразу.</p>
        </div>
      </section>
      <section class="referral-transfer-bank-section">
        <div class="referral-transfer-bank-section-head">
          <span class="field-label">Получатель</span>
        </div>
        <div class="referral-transfer-bank-counterparty">
          <div class="referral-transfer-bank-counterparty-avatar">
            ${avatarMarkup({ displayName: draft.recipientShortName || draft.fullName || "Клиент" }, 56)}
          </div>
          <div class="referral-transfer-bank-counterparty-copy">
            <strong>${normalizeText(draft.recipientShortName || "Не найден")}</strong>
            <span>${draft.targetPhone ? formatPhone(draft.targetPhone) : ""}</span>
          </div>
        </div>
      </section>
      <section class="referral-transfer-bank-summary">
        <div class="referral-transfer-bank-summary-row">
          <span>Сумма перевода</span>
          <strong>${transferAmount} BS</strong>
        </div>
        <div class="referral-transfer-bank-summary-row">
          <span>Комментарий</span>
          <strong>${normalizeText(draft.comment) || "Без комментария"}</strong>
        </div>
        <div class="referral-transfer-bank-summary-row">
          <span>После перевода</span>
          <strong>${balanceAfterTransfer} BS</strong>
        </div>
      </section>
      <div class="referral-transfer-bank-actions">
        <button class="primary-btn referral-transfer-bank-submit" type="button" data-action="confirm-referral-transfer">Отправить</button>
        <button class="ghost-btn referral-transfer-bank-cancel" type="button" data-action="open-sheet" data-sheet="transfer-bs">Назад</button>
      </div>
    </div>`;
  };

  const buildManageBookingSheet = (appointment) => {
    const safeAppointment = appointment || {};
    const etaLabel = formatAppointmentEta(safeAppointment.date, safeAppointment.time);
    const services = Array.isArray(safeAppointment.services) ? safeAppointment.services.filter(Boolean) : [];
    const barberAvatar = normalizeText(safeAppointment.barberAvatarUrl || safeAppointment.avatarUrl || "");
    const targetId = normalizeText(state.pendingBookingCancellationId || safeAppointment.id || "");
    const primaryActionHtml = IS_DESKTOP_SHEET_DISMISS
      ? `<button class="primary-btn manage-booking-primary" type="button" data-action="book-another">Записаться еще</button>`
      : `<button class="primary-btn manage-booking-primary" type="button" data-action="download-booking-reminder" data-id="${targetId}">В календарь</button>`;
    return `
      <div class="manage-booking-sheet">
        <article class="appointment-card has-booking manage-booking-card">
          <div class="section-head appointment-head manage-booking-head">
            <div>
              <div class="section-eyebrow">Моя запись</div>
            </div>
            <div class="appointment-head-eta">${normalizeText(etaLabel || "Скоро")}</div>
          </div>
          <div class="manage-booking-overview">
            <div class="appointment-grid manage-booking-grid">
              <div class="appointment-meta">
                <span class="field-label">${appointmentMetaIcon("calendar")}Дата</span>
                <strong>${safeAppointment.date ? formatDateOnly(safeAppointment.date) : "Дата уточняется"}</strong>
              </div>
              <div class="appointment-meta appointment-meta-time">
                <span class="field-label">${appointmentMetaIcon("clock")}Время</span>
                <strong>${normalizeText(safeAppointment.timeLabel || safeAppointment.time || "Время уточняется")}</strong>
              </div>
            </div>
            <div class="appointment-barber manage-booking-barber">
              ${avatarMarkup({ avatarUrl: barberAvatar, displayName: safeAppointment.barber || "BS" }, 60)}
              <div>
                <p class="list-title">${normalizeText(safeAppointment.barber || "Текущая запись")}</p>
                <p class="subtitle">${services.length ? normalizeText(services.join(", ")) : "Детали записи доступны в booking."}</p>
              </div>
            </div>
          </div>
        </article>
        <div class="manage-booking-actions">
          ${primaryActionHtml}
          <button class="ghost-btn manage-booking-cancel-btn" type="button" data-action="open-sheet" data-sheet="cancel-booking" data-id="${targetId}">Отменить запись</button>
        </div>
      </div>
    `;
  };

  const stopReferralQrScanner = () => {
    referralQrScannerSession += 1;
    if (referralQrScannerFrame) {
      window.cancelAnimationFrame(referralQrScannerFrame);
      referralQrScannerFrame = null;
    }
    if (referralQrScannerStream) {
      referralQrScannerStream.getTracks().forEach((track) => track.stop());
      referralQrScannerStream = null;
    }
  };

  const buildHistoryState = (sheet = null) => ({
    page: state.currentPage,
    sheet: sheet
      ? {
          title: normalizeText(sheet.title),
          bodyHtml: sheet.bodyHtml || "",
          footerHtml: sheet.footerHtml || "",
          className: normalizeText(sheet.className),
        }
      : null,
  });

  const applySheetStateToDom = (sheetState) => {
    const backdrop = ROOT.querySelector("#sheet-backdrop");
    const sheet = backdrop?.querySelector(".sheet");
    if (!backdrop || !sheet) return;
    const nextClass = sheetState === "closing" ? "is-closing" : sheetState === "open" ? "is-open" : "is-entering";
    backdrop.classList.remove("is-entering", "is-open", "is-closing");
    sheet.classList.remove("is-entering", "is-open", "is-closing");
    backdrop.classList.add(nextClass);
    sheet.classList.add(nextClass);
  };
  const ensureRenderHosts = () => {
    let appHost = ROOT.querySelector("[data-render-host='app']");
    let sheetHost = ROOT.querySelector("[data-render-host='sheet']");
    if (appHost && sheetHost) return { appHost, sheetHost };
    ROOT.innerHTML = `<div data-render-host="app"></div><div data-render-host="sheet"></div>`;
    appHost = ROOT.querySelector("[data-render-host='app']");
    sheetHost = ROOT.querySelector("[data-render-host='sheet']");
    return { appHost, sheetHost };
  };

  const openSheet = (title, bodyHtml, footerHtml, className = "", options = {}) => {
    stopReferralQrScanner();
    if (sheetCloseTimer) {
      window.clearTimeout(sheetCloseTimer);
      sheetCloseTimer = null;
    }
    if (sheetOpenFrame) {
      window.cancelAnimationFrame(sheetOpenFrame);
      sheetOpenFrame = null;
    }
    state.sheet = { title, bodyHtml, footerHtml: footerHtml || "", className: normalizeText(className) };
    state.sheetState = "entering";
    if (options.syncHistory !== false) {
      window.history.pushState(buildHistoryState(state.sheet), "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
    }
    render({ app: false });
    sheetOpenFrame = window.requestAnimationFrame(() => {
      state.sheetState = "open";
      sheetOpenFrame = null;
      applySheetStateToDom("open");
    });
  };

  const closeSheet = (options = {}) => {
    if (!state.sheet) return;
    if (options.syncHistory !== false && window.history.state?.sheet && !suppressSheetHistoryBack) {
      window.history.back();
      return;
    }
    stopReferralQrScanner();
    if (sheetCloseTimer) {
      window.clearTimeout(sheetCloseTimer);
      sheetCloseTimer = null;
    }
    if (sheetOpenFrame) {
      window.cancelAnimationFrame(sheetOpenFrame);
      sheetOpenFrame = null;
    }
    state.sheetState = "closing";
    applySheetStateToDom("closing");
    sheetCloseTimer = window.setTimeout(() => {
      state.sheet = null;
      state.sheetState = "closed";
      sheetCloseTimer = null;
      render({ app: false });
    }, 280);
  };

  const dismissSheet = () => {
    if (!state.sheet) return;
    suppressSheetHistoryBack = true;
    window.history.replaceState(buildHistoryState(), "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
    closeSheet({ syncHistory: false });
    window.setTimeout(() => {
      suppressSheetHistoryBack = false;
    }, 0);
  };

  const scrollToBookingStep = (stepName) => {
    if (state.currentPage !== "booking") return;
    window.requestAnimationFrame(() => {
      const target = document.querySelector(`[data-booking-step="${normalizeText(stepName)}"]`);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const logout = () => {
    setLogoutMarker();
    clearSession();
    const landingUrl = new URL("/", window.location.origin);
    landingUrl.searchParams.set("logout", Date.now().toString());
    window.location.replace(landingUrl.toString());
  };

  const renderTopbar = () => {
    const user = state.payload?.user || {};
    const siteHome = state.payload?.site?.home || {};
    const authenticated = isAuthenticated();
    return memoizeRenderedFragment(
      "topbar",
      [user, siteHome, authenticated, state.topbarAnnouncementActive, state.topbarAnnouncementText],
      () => `
        <header class="topbar ${state.topbarAnnouncementActive ? "is-announcing" : ""}">
          <div class="topbar-content">
            <div class="brand">
              ${normalizeText(siteHome.logoText) ? `<span class="brand-title">${normalizeText(siteHome.logoText)}</span>` : ""}
            </div>
            <div class="topbar-side">
              ${authenticated
                ? `<button class="chip" type="button" data-action="navigate" data-href="/profile/">${avatarMarkup(user, 44)}<span>${normalizeText(user.displayName || "Клиент")}</span></button>`
                : `<a class="ghost-btn" href="${buildLoginUrl("/booking/")}">Войти</a>`}
            </div>
          </div>
          <div class="topbar-announcement" aria-live="polite" aria-atomic="true">
            <span class="topbar-announcement-label">${normalizeText(state.topbarAnnouncementText)}</span>
          </div>
        </header>
      `,
    );
  };

  const renderBottomNav = () => {
    if (!isAuthenticated()) return "";
    const items = [
      {
        id: "home",
        label: "Home",
        href: "/home/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M8.74 4.06a4.5 4.5 0 0 1 6.52 0l3.75 3.88A4.5 4.5 0 0 1 20.3 11.07v5.98A2.95 2.95 0 0 1 17.35 20H6.65A2.95 2.95 0 0 1 3.7 17.05v-5.98a4.5 4.5 0 0 1 1.29-3.13l3.75-3.88ZM10.78 12.3c0-.66.54-1.2 1.2-1.2h.04c.66 0 1.2.54 1.2 1.2V20h-2.44v-7.7Z" clip-rule="evenodd"></path></svg>',
      },
      {
        id: "referral",
        label: "BS",
        href: "/referral/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M6.9 4.1c1.68 0 3.04 1.36 3.04 3.04S8.58 10.2 6.9 10.2 3.86 8.82 3.86 7.14 5.22 4.1 6.9 4.1ZM17.1 4.1c1.68 0 3.04 1.36 3.04 3.04s-1.36 3.04-3.04 3.04-3.04-1.36-3.04-3.04 1.36-3.04 3.04-3.04ZM9.15 12.1c2.8 0 5.08 2.28 5.08 5.08A2.82 2.82 0 0 1 11.4 20H4.77a2.82 2.82 0 0 1-2.83-2.82c0-2.8 2.28-5.08 5.09-5.08h2.12ZM18.94 12.62c1.72 0 3.12 1.4 3.12 3.12A2.26 2.26 0 0 1 19.8 18h-2.65c.13-.43.2-.88.2-1.34 0-1.44-.56-2.75-1.47-3.73.54-.2 1.12-.31 1.66-.31Z" clip-rule="evenodd"></path></svg>',
      },
      {
        id: "booking",
        label: "Booking",
        href: "/booking/",
        icon: BOOKING_NAV_ICON,
        activeIcon: BOOKING_NAV_ICON_ACTIVE,
        className: "nav-pill-booking",
      },
      {
        id: "shop",
        label: "Shop",
        href: "/shop/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7.35 4.1A2.85 2.85 0 0 1 10.2 1.25h3.6a2.85 2.85 0 0 1 2.85 2.85v.7h1.5A2.85 2.85 0 0 1 21 7.65v8.2a3.15 3.15 0 0 1-3.15 3.15H6.15A3.15 3.15 0 0 1 3 15.85v-8.2A2.85 2.85 0 0 1 5.85 4.8h1.5v-.7Zm2.1 0v.7h5.1v-.7a.75.75 0 0 0-.75-.75H10.2a.75.75 0 0 0-.75.75Zm-1.8 5.15c0-.58.47-1.05 1.05-1.05h6.6a1.05 1.05 0 1 1 0 2.1H8.7c-.58 0-1.05-.47-1.05-1.05Z" clip-rule="evenodd"></path></svg>',
      },
      {
        id: "profile",
        label: "Profile",
        href: "/profile/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M12 3.25A4.75 4.75 0 1 0 12 12.75A4.75 4.75 0 1 0 12 3.25ZM6.77 14.25a4.52 4.52 0 0 0-4.52 4.52c0 1.1.9 1.98 1.98 1.98h15.54c1.09 0 1.98-.89 1.98-1.98a4.52 4.52 0 0 0-4.52-4.52H6.77Z" clip-rule="evenodd"></path></svg>',
      },
    ];
    const navPage = state.currentPage === "achievements" ? "profile" : state.currentPage;
    const activeIndex = Math.max(0, items.findIndex((item) => item.id === navPage));
    const indicatorIndex = Number.isFinite(Number(state.navIndicatorIndex)) ? Number(state.navIndicatorIndex) : activeIndex;
    return memoizeRenderedFragment("bottom-nav", [state.currentPage, activeIndex, indicatorIndex], () => `
      <nav class="bottom-nav" data-active-index="${activeIndex}" data-active-page="${navPage}" style="--indicator-index:${indicatorIndex}; --nav-count:${items.length};">
        <div class="bottom-nav-indicator" aria-hidden="true"></div>
        ${items
          .map(
            (item) =>
              `<a class="nav-pill nav-link ${normalizeText(item.className)} ${item.id === state.currentPage ? "active" : ""}" href="${item.href}" aria-label="${item.label}" title="${item.label}"><span class="nav-icon-wrap">${item.id === state.currentPage && item.activeIcon ? item.activeIcon : item.icon}</span></a>`,
          )
          .join("")}
      </nav>
    `);
  };

  const renderHomeBarberRotation = (barbers = []) => {
    const safeBarbers = Array.isArray(barbers) ? barbers : [];
    const safeHomeBarberIndex = safeBarbers.length ? ((state.homeBarberRotationIndex % safeBarbers.length) + safeBarbers.length) % safeBarbers.length : 0;
    const safeIncomingHomeBarberIndex = safeBarbers.length && state.homeBarberIncomingIndex >= 0
      ? ((state.homeBarberIncomingIndex % safeBarbers.length) + safeBarbers.length) % safeBarbers.length
      : -1;
    const activeHomeBarber = safeBarbers.length ? safeBarbers[safeHomeBarberIndex] : null;
    const incomingHomeBarber = safeIncomingHomeBarberIndex >= 0 ? safeBarbers[safeIncomingHomeBarberIndex] : null;
    const activeServicesRef = activeHomeBarber?.id ? state.barberProfileServices?.[normalizeText(activeHomeBarber.id)] : null;
    const incomingServicesRef = incomingHomeBarber?.id ? state.barberProfileServices?.[normalizeText(incomingHomeBarber.id)] : null;
    return memoizeRenderedFragment(
      "page-home-rotation",
      [
        safeBarbers,
        state.homeBarberRotationIndex,
        state.homeBarberIncomingIndex,
        state.homeBarberTransitionStage,
        activeHomeBarber?.id,
        incomingHomeBarber?.id,
        activeServicesRef,
        incomingServicesRef,
        normalizeText(homeBarberTiltSnapshot?.tiltX),
        normalizeText(homeBarberTiltSnapshot?.tiltY),
        normalizeText(homeBarberTiltSnapshot?.sheenX),
        normalizeText(homeBarberTiltSnapshot?.sheenY),
        normalizeText(homeBarberTiltSnapshot?.textShimmer),
      ],
      () => {
        if (!activeHomeBarber) {
          return `<div class="empty-state home-barber-rotating-empty">Список мастеров скоро обновится. Откройте запись, чтобы увидеть доступных специалистов.</div>`;
        }
        const homeBarberSceneStyle = getHomeBarberTiltSceneStyle();
        const renderDots = (activeIndex) => `<div class="home-barber-rotating-dots" aria-label="Барбер ${activeIndex + 1} из ${safeBarbers.length}">${safeBarbers
          .map(
            (_, index) =>
              `<span class="home-barber-rotating-dot ${index === activeIndex ? "is-active" : ""}" aria-hidden="true"></span>`,
          )
          .join("")}</div>`;
        return `
          <div class="home-barber-rotating-wrap">
            <div class="home-barber-rotating-stage ${normalizeText(state.homeBarberTransitionStage)}">
              <div class="home-barber-rotating-layer is-current">
                ${renderBarberProfileHeroCard(activeHomeBarber, {
                  barberId: activeHomeBarber.id,
                  articleClassName: "barber-profile-hero home-barber-rotating-card",
                  articleAttributes: 'data-action="switch-home-barber"',
                  sceneStyle: homeBarberSceneStyle,
                  hideActions: !isAuthenticated(),
                  secondaryHref: `/barber/${encodeURIComponent(normalizeText(activeHomeBarber.id))}/`,
                  secondaryLabel: "Подробнее",
                  footerOverlay: renderDots(safeHomeBarberIndex),
                })}
              </div>
              ${incomingHomeBarber
                ? `<div class="home-barber-rotating-layer is-incoming">
                    ${renderBarberProfileHeroCard(incomingHomeBarber, {
                      barberId: incomingHomeBarber.id,
                      articleClassName: "barber-profile-hero home-barber-rotating-card",
                      articleAttributes: 'data-action="switch-home-barber"',
                      sceneStyle: homeBarberSceneStyle,
                      hideActions: !isAuthenticated(),
                      secondaryHref: `/barber/${encodeURIComponent(normalizeText(incomingHomeBarber.id))}/`,
                      secondaryLabel: "Подробнее",
                      footerOverlay: renderDots(safeIncomingHomeBarberIndex),
                    })}
                  </div>`
                : ""}
            </div>
          </div>
        `;
      },
    );
  };
  const updateHomeBarberRotationDom = () => {
    if (state.currentPage !== "home") return;
    const rotationRoot = ROOT.querySelector("[data-home-barber-rotation-root]");
    if (!rotationRoot) return;
    setupHomeBarberRotationSwipe(rotationRoot);
    const homeBarbers = getSortedBookingBarbers();
    const html = renderHomeBarberRotation(homeBarbers);
    if (rotationRoot.innerHTML === html) return;
    rotationRoot.innerHTML = html;
    setupInteractiveBarberCards(rotationRoot);
  };

  const renderHomePage = () => {
    const siteHome = state.payload?.site?.home || {};
    const activeAppointments = Array.isArray(state.payload?.booking?.activeAppointments) ? state.payload.booking.activeAppointments : [];
    const barbers = getSortedBookingBarbers();
    return memoizeRenderedFragment("page-home", [siteHome, activeAppointments, barbers, Math.floor((state.liveClockTick || 0) / 1000)], () => {
      const promos = Array.isArray(siteHome.promos) ? siteHome.promos : [];
      const promoLaneItems = (() => {
        const indexedPromos = promos.map((promo, index) => ({ ...promo, _promoIndex: index }));
        if (indexedPromos.length <= 1) return indexedPromos;
        const repeated = [];
        while (repeated.length < Math.max(6, indexedPromos.length * 2)) {
          repeated.push(...indexedPromos);
        }
        return repeated.slice(0, Math.max(6, indexedPromos.length * 2));
      })();
      const promoCards = promoLaneItems.length
        ? promoLaneItems
            .map(
              (promo) => `
                <article class="promo-thumb" style="${normalizeText(promo.imageUrl) ? `background-image:url('${normalizeText(promo.imageUrl)}');` : ""}">
                  <button class="promo-thumb-surface" type="button" data-action="open-promo" data-id="${normalizeText(promo.id)}" data-index="${Number.isInteger(promo._promoIndex) ? promo._promoIndex : ""}" aria-label="${normalizeText(promo.title) || "Акция"}">
                    <span class="promo-thumb-overlay">
                      <strong>${normalizeText(promo.title)}</strong>
                      <small>${normalizeText(promo.subtitle)}</small>
                    </span>
                  </button>
                </article>`,
            )
            .join("")
        : "";
      const nextAppointment = activeAppointments[0] || null;
      const appointmentBarber = nextAppointment
        ? barbers.find((barber) =>
            normalizeText(barber.id) === normalizeText(nextAppointment.barberId) ||
            normalizeText(barber.name) === normalizeText(nextAppointment.barber),
          ) || null
        : null;
      const appointmentBarberAvatar = normalizeText(
        nextAppointment?.barberAvatarUrl ||
        nextAppointment?.avatarUrl ||
        appointmentBarber?.avatarUrl,
      );
      const appointmentEtaLabel = nextAppointment ? formatAppointmentEta(nextAppointment.date, nextAppointment.time) : "";
      const mapLink = normalizeText(siteHome.mapLink);
      const phone = normalizeText(siteHome.phone);
      const bookingButtonText = normalizeText(siteHome.bookingButtonText);
      const aboutTitle = normalizeText(siteHome.aboutTitle);
      const aboutText = normalizeText(siteHome.aboutText || "");
      const aboutExpandable = aboutText.length > 110;
      const hasAboutBlock = Boolean(aboutTitle || aboutText || normalizeText(siteHome.aboutImageUrl));
      const hasMapBlock = Boolean(normalizeText(siteHome.mapTitle) || normalizeText(siteHome.mapCaption) || normalizeText(siteHome.mapImageUrl) || normalizeText(siteHome.mapLink));
      const hasContactsBlock = Boolean(normalizeText(siteHome.contactsTitle) || phone || normalizeText(siteHome.telegramUrl) || normalizeText(siteHome.whatsappUrl) || normalizeText(siteHome.email));
      const hasMapContactsRow = hasMapBlock || hasContactsBlock;
      const aboutCardTag = aboutExpandable ? "button" : "article";
      const aboutCardAttrs = aboutExpandable
        ? `class="content-card home-about-card home-about-toggle ${state.homeAboutExpanded ? "is-expanded" : "is-collapsed"}" type="button" data-action="toggle-home-about" aria-expanded="${state.homeAboutExpanded ? "true" : "false"}"`
        : `class="content-card home-about-card"`;
      return `
      <section class="page home-page home-mobile-layout">
        <section class="home-frame home-promo-strip">
          <section class="promo-marquee${promos.length > 1 ? " is-animated" : ""}" aria-label="Акции">
            <div class="promo-track${promos.length > 1 ? " is-animated" : ""}">
            ${promos.length
              ? promos.length > 1
                ? `<div class="promo-lane">${promoCards}</div><div class="promo-lane" aria-hidden="true">${promoCards}</div>`
                : `<div class="promo-lane">${promoCards}</div>`
                : `<div class="empty-state promo-empty">Скоро здесь появятся актуальные предложения и акции.</div>`}
            </div>
          </section>
        </section>
        <article class="appointment-card${nextAppointment ? " has-booking" : ""}">
          ${nextAppointment ? `
            <div class="section-head appointment-head">
              <div>
                <div class="section-eyebrow">Моя запись</div>
              </div>
              <div class="appointment-head-eta">${normalizeText(appointmentEtaLabel || "Скоро")}</div>
            </div>
            <button class="appointment-overview" type="button" data-action="open-sheet" data-sheet="manage-booking" data-id="${normalizeText(nextAppointment?.id)}">
              <div class="appointment-grid">
                <div class="appointment-meta">
                  <span class="field-label">${appointmentMetaIcon("calendar")}Дата</span>
                  <strong>${nextAppointment ? formatDateOnly(nextAppointment.date) : "Выберите день"}</strong>
                </div>
                <div class="appointment-meta appointment-meta-time">
                  <span class="field-label">${appointmentMetaIcon("clock")}Время</span>
                  <strong>${nextAppointment ? normalizeText(nextAppointment.timeLabel || nextAppointment.time) : "Выберите слот"}</strong>
                </div>
              </div>
              <div class="appointment-barber">
                ${nextAppointment
                  ? avatarMarkup({ avatarUrl: appointmentBarberAvatar, displayName: nextAppointment.barber }, 56)
                  : avatarMarkup({ displayName: "BS" }, 56)}
                <div>
                  <p class="list-title">${nextAppointment ? normalizeText(nextAppointment.barber || "BrotherShop") : "BrotherShop"}</p>
                  <p class="subtitle">${nextAppointment ? normalizeText((nextAppointment.services || []).join(", ") || "Детали записи доступны в booking") : "Открой booking и собери удобный слот."}</p>
                </div>
              </div>
            </button>
            ${bookingButtonText ? `<div class="appointment-cta-wrap">
              <a class="primary-btn booking-cta booking-cta-compact" href="/booking/">${bookingButtonText}</a>
            </div>` : ""}
          ` : ``}
          ${nextAppointment || !bookingButtonText ? "" : `<div class="appointment-cta-wrap"><a class="primary-btn booking-cta" href="/booking/">${bookingButtonText}</a></div>`}
        </article>
        ${hasAboutBlock ? `<${aboutCardTag} ${aboutCardAttrs}>
          <div>
            ${aboutTitle ? `<h2 class="section-title">${aboutTitle}</h2>` : ""}
            ${aboutText ? `<div class="home-about-text-wrap"><p class="section-text home-about-text">${aboutText}</p></div>` : ""}
            ${aboutExpandable ? `<span class="home-about-more">${state.homeAboutExpanded ? "Свернуть" : "Показать еще"}</span>` : ""}
          </div>
        </${aboutCardTag}>` : ""}
        ${hasMapContactsRow ? `<section class="home-map-contacts-row">
          ${hasMapBlock ? `
          <article class="content-card map-card">
          ${normalizeText(siteHome.mapTitle) ? `<h2 class="map-title">${normalizeText(siteHome.mapTitle)}</h2>` : ""}
          <${mapLink ? "a" : "div"} class="map-link-card"${mapLink ? ` href="${mapLink}" target="_blank" rel="noopener noreferrer"` : ""}>
            <div class="map-image" style="${normalizeText(siteHome.mapImageUrl) ? `background-image:url('${normalizeText(siteHome.mapImageUrl)}');` : ""}">
              <div class="map-overlay-card">
                <div class="map-overlay-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><circle cx="6.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="16.5" r="2.5"></circle><path d="M8.6 8.9 19 3.5"></path><path d="M8.6 15.1 19 20.5"></path><path d="m11.2 12 7.8-8.5"></path><path d="m11.2 12 7.8 8.5"></path></svg>
                </div>
                <div class="map-overlay-copy">
                  ${normalizeText(siteHome.logoText) ? `<strong>${normalizeText(siteHome.logoText)}</strong>` : ""}
                  ${normalizeText(siteHome.mapCaption) ? `<span>${normalizeText(siteHome.mapCaption)}</span>` : ""}
                </div>
                ${mapLink ? `<span class="map-overlay-action">На карте</span>` : ""}
              </div>
            </div>
          </${mapLink ? "a" : "div"}>
        </article>` : ""}
          ${hasContactsBlock ? `
          <article class="content-card contacts-card">
          ${normalizeText(siteHome.contactsTitle) ? `<h2 class="section-title">${normalizeText(siteHome.contactsTitle)}</h2>` : ""}
          <div class="contact-actions">
            ${phone ? `<a class="ghost-btn square-btn icon-btn contacts-phone phone-link" href="tel:${normalizePhone(phone)}" aria-label="Телефон">${iconMarkup("phone")}<span>${phone}</span></a>` : ""}
            ${normalizeText(siteHome.telegramUrl) ? `<a class="ghost-btn square-btn icon-btn" href="${normalizeText(siteHome.telegramUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Telegram">${iconMarkup("telegram")}<span>Telegram</span></a>` : ""}
            ${normalizeText(siteHome.whatsappUrl) ? `<a class="ghost-btn square-btn icon-btn" href="${normalizeText(siteHome.whatsappUrl)}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${iconMarkup("whatsapp")}<span>WhatsApp</span></a>` : ""}
            ${normalizeText(siteHome.email) ? `<a class="ghost-btn square-btn icon-btn" href="mailto:${normalizeText(siteHome.email)}" aria-label="Email">${iconMarkup("mail")}<span>Email</span></a>` : ""}
          </div>
          ${phone && !normalizeText(siteHome.telegramUrl) && !normalizeText(siteHome.whatsappUrl) && !normalizeText(siteHome.email) ? `<p class="app-note">Сейчас доступен звонок по телефону. Остальные способы связи можно добавить в CRM.</p>` : ""}
        </article>` : ""}
        </section>` : ""}
        <article class="content-card home-legal-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Правовая информация</div>
            </div>
          </div>
          <div class="home-legal-copy">
            <details class="home-legal-disclosure">
              <summary class="home-legal-summary">
                Краткая правовая информация и документы сайта
              </summary>
              <p class="section-text home-legal-text">
                На сайте действует
                <a href="/legal/">страница с правовой информацией</a>,
                где собраны документы по обработке персональных данных, правилам записи, оплате и использованию cookie.
                Владелец: Гуторов Тимур Сергеевич, плательщик налога на профессиональный доход. ИНН: 380415073157.
              </p>
            </details>
          </div>
        </article>
        <article class="content-card home-barbers-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Барберы</div>
              <h2 class="section-title">Мастера BrotherShop</h2>
            </div>
          </div>
          <div class="barber-grid">
            ${barbers.length
              ? barbers
              .map(
                (barber) => `
                  <button class="barber-card home-barber-card" type="button" data-action="open-barber-profile" data-id="${normalizeText(barber.id)}">
                    <div class="booking-barber-surface home-barber-surface">
                      <div class="home-barber-head">
                        <p class="barber-name">${normalizeText(barber.name)}</p>
                      </div>
                      ${normalizeText(barber.cardDescription || barber.description) ? `<p class="subtitle home-barber-description">${normalizeText(barber.cardDescription || barber.description)}</p>` : ""}
                      <div class="home-barber-bottom">
                        ${normalizeText(barber.phrase) ? `<p class="subtitle home-barber-phrase">${normalizeText(barber.phrase)}</p>` : ""}
                      </div>
                      <div class="booking-barber-visual">
                        <div class="booking-barber-visual-frame">
                          ${normalizeText(barber.avatarUrl)
                            ? `<img class="booking-barber-photo" src="${normalizeText(barber.avatarUrl)}" alt="${normalizeText(barber.name)}" />`
                            : avatarMarkup({ avatarUrl: barber.avatarUrl, displayName: barber.name }, 154)}
                        </div>
                      </div>
                    </div>
                  </button>`,
              )
              .join("")
              : `<div class="empty-state">Список мастеров скоро обновится. Откройте запись, чтобы увидеть доступных специалистов.</div>`}
          </div>
        </article>
        <div data-home-barber-rotation-root>${renderHomeBarberRotation(barbers)}</div>
      </section>
    `;
    });
  };

  const renderReferralPage = () => {
    const referral = state.payload?.referral || {};
    const referrals = Array.isArray(referral.referrals) ? referral.referrals : [];
    const referralProgram = referral.program || {};
    const transferRecipients = Array.isArray(referral.recentTransferRecipients) ? referral.recentTransferRecipients : [];
    const levels = Array.isArray(referralProgram.levels) ? referralProgram.levels : [];
    const operations = Array.isArray(referral.operations) ? referral.operations : [];
    return memoizeRenderedFragment("page-referral", [referral, state.transferHistoryFilter, state.referralLinkCopied, state.referralSection], () => {
      const referralPreview = referrals.slice(0, 4);
      const { transferOut: transferOutOperations, transferIn: transferInOperations } = getReferralOperationGroups(operations);
      const filteredBsActivity = getFilteredReferralActivity(operations, state.transferHistoryFilter);
      const activityPreview = filteredBsActivity.slice(0, 5);
      const outgoingTransfers = transferOutOperations.length;
      const sentTotal = transferOutOperations.reduce((total, operation) => total + Math.abs(Number(operation.amountBs) || 0), 0);
      const receivedTotal = transferInOperations.reduce((total, operation) => total + Math.max(0, Number(operation.amountBs) || 0), 0);
      const averageTransfer = outgoingTransfers ? Math.round(sentTotal / outgoingTransfers) : 0;
      const levelProgress = Math.max(0, Math.min(100, Number(referral.scale?.progress || 0)));
      const nextReferralTarget = Math.max(0, Number(referral.scale?.next || 0));
      const currentReferralCount = Math.max(0, Number(referral.program?.activeReferralsCount || referral.stats?.green || referral.scale?.current || 0));
      const referralLevelName = getReferralLevelName(referralProgram, currentReferralCount);
      const isStatsSection = state.referralSection === "stats";
      const activeReferralsCount = referrals.filter((item) => normalizeText(item.color) === "green").length;
      const warmReferralsCount = referrals.filter((item) => normalizeText(item.color) === "yellow").length;
      const inactiveReferralsCount = referrals.filter((item) => normalizeText(item.color) === "red" || !["green", "yellow"].includes(normalizeText(item.color))).length;
      const totalReferralVisits = referrals.reduce((total, item) => total + Math.max(0, Number(item.completedVisits) || 0), 0);
      const totalReferralBs = referrals.reduce((total, item) => total + Math.max(0, Number(item.rewardedVisits) || 0), 0);
      const networkCoverage = referrals.length ? Math.round((activeReferralsCount / referrals.length) * 100) : 0;
      const now = new Date();
      const topReferralThisMonth =
        referrals
          .filter((item) => {
            const date = normalizeText(item.lastVisitAt);
            if (!date) return false;
            const parsed = new Date(date);
            return !Number.isNaN(parsed.getTime()) && parsed.getMonth() === now.getMonth() && parsed.getFullYear() === now.getFullYear();
          })
          .sort((left, right) => (Number(right.rewardedVisits || 0) - Number(left.rewardedVisits || 0)) || (Number(right.completedVisits || 0) - Number(left.completedVisits || 0)))[0] ||
        referrals
          .slice()
          .sort((left, right) => (Number(right.rewardedVisits || 0) - Number(left.rewardedVisits || 0)) || (Number(right.completedVisits || 0) - Number(left.completedVisits || 0)))[0] ||
        null;
      return `
      <section class="page referral-page">
        <div class="referral-wallet-hero">
          <article class="hero-card referral-wallet-card">
            <div class="referral-wallet-sheen"></div>
            <div class="referral-wallet-head">
              <div>
                <h1 class="hero-title">Бонусы</h1>
              </div>
              <button class="referral-wallet-mark" type="button" data-action="open-sheet" data-sheet="my-transfer-qr" aria-label="Мой QR">${iconMarkup("qr")}</button>
            </div>
            <div class="referral-wallet-balance">
              <span class="field-label referral-wallet-balance-label">Баланс BS</span>
              <div class="referral-wallet-balance-number">${referral.bsBalance || 0}</div>
            </div>
            <div class="referral-wallet-footer">
              <div class="referral-wallet-actions">
                <button class="referral-wallet-action referral-copy-btn ${state.referralLinkCopied ? "is-copied" : ""}" type="button" data-action="copy-referral">${iconMarkup("copy")}<span>${state.referralLinkCopied ? "Ссылка скопирована" : "Реферальная ссылка"}</span></button>
                <button class="referral-wallet-action" type="button" data-action="open-sheet" data-sheet="transfer-bs">${iconMarkup("transfer")}<span>Перевести BS</span></button>
              </div>
            </div>
          </article>
          <article class="list-card referral-level-card">
            <div class="section-head referral-level-card-head">
              <div>
                <div class="section-eyebrow">Уровень</div>
                <h2 class="section-title">${referralLevelName}</h2>
              </div>
              <button class="referral-wallet-balance-note referral-wallet-level-link" type="button" data-action="open-sheet" data-sheet="referral-levels">Все уровни</button>
            </div>
            <div class="referral-wallet-progress">
              <div class="referral-wallet-progress-head">
                <span class="field-label">Прогресс до следующего уровня</span>
                <strong>${referral.scale?.isMaxLevel ? "MAX" : `${currentReferralCount}/${nextReferralTarget}`}</strong>
              </div>
              <div class="progress-track referral-wallet-progress-track"><div class="progress-bar referral-wallet-progress-bar" style="width:${levelProgress}%"></div></div>
            </div>
          </article>
        </div>
        <div class="filter-row referral-section-tabs referral-pill-row" data-pill-group="referral-section">
          <span class="referral-pill-indicator" aria-hidden="true"></span>
          <button class="nav-pill ${!isStatsSection ? "active" : ""}" type="button" data-action="set-referral-section" data-section="overview">Обзор</button>
          <button class="nav-pill ${isStatsSection ? "active" : ""}" type="button" data-action="set-referral-section" data-section="stats">Статистика</button>
        </div>
        ${isStatsSection
          ? `
        <div class="referral-section-panel referral-stats-stack">
        <article class="list-card referral-insights-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Статистика переводов</div>
              <h2 class="section-title">BS</h2>
            </div>
          </div>
          <div class="referral-insights-grid">
            <div class="referral-insight-tile">
              <span class="field-label">Отправлено</span>
              <strong>${sentTotal} BS</strong>
              <span class="subtitle">${outgoingTransfers} переводов</span>
            </div>
            <div class="referral-insight-tile">
              <span class="field-label">Получено</span>
              <strong>${receivedTotal} BS</strong>
              <span class="subtitle">${transferInOperations.length} входящих</span>
            </div>
            <div class="referral-insight-tile">
              <span class="field-label">Средний перевод</span>
              <strong>${averageTransfer} BS</strong>
              <span class="subtitle">${transferRecipients.length} получателей</span>
            </div>
          </div>
        </article>
        <article class="list-card referral-insights-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Реферальная сеть</div>
              <h2 class="section-title">Рефералы</h2>
            </div>
          </div>
          <div class="referral-insights-grid">
            <div class="referral-insight-tile">
              <span class="field-label">Всего рефералов</span>
              <strong>${referrals.length}</strong>
              <span class="subtitle">Текущий уровень: ${referralLevelName}</span>
            </div>
            <div class="referral-insight-tile">
              <span class="field-label">Активные</span>
              <strong>${activeReferralsCount}</strong>
              <span class="subtitle">${networkCoverage}% сети активны</span>
            </div>
            <div class="referral-insight-tile">
              <span class="field-label">Редкие</span>
              <strong>${warmReferralsCount}</strong>
              <span class="subtitle">Нужен новый визит</span>
            </div>
            <div class="referral-insight-tile">
              <span class="field-label">Неактивные</span>
              <strong>${inactiveReferralsCount}</strong>
              <span class="subtitle">Без текущей активности</span>
            </div>
            <div class="referral-insight-tile">
              <span class="field-label">Всего визитов</span>
              <strong>${totalReferralVisits}</strong>
              <span class="subtitle">По всем рефералам</span>
            </div>
            <div class="referral-insight-tile">
              <span class="field-label">Принесли BS</span>
              <strong>${totalReferralBs}</strong>
              <span class="subtitle">${topReferralThisMonth ? `Лидер: ${normalizeText(topReferralThisMonth.fullName)}` : "Лидера пока нет"}</span>
            </div>
          </div>
        </article>
        </div>`
          : `
        <div class="referral-section-panel referral-overview-stack">
        <article class="list-card referral-transfer-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Переводы</div>
              <h2 class="section-title">Быстрые отправки</h2>
            </div>
          </div>
          <button class="referral-transfer-hub" type="button" data-action="open-sheet" data-sheet="transfer-bs">
            <div>
              <p class="list-title">Отправить BS клиенту</p>
              <p class="subtitle">Перевод по номеру телефона с моментальным подтверждением.</p>
            </div>
            <span class="referral-transfer-hub-arrow">${iconMarkup("transfer")}</span>
          </button>
          ${transferRecipients.length
            ? `<div class="referral-transfer-recipient-carousel">
                <button class="ghost-btn icon-only-btn referral-transfer-scroll-btn referral-transfer-scroll-btn-prev" type="button" data-action="scroll-transfer-recipients" data-direction="prev" aria-label="Прокрутить получателей влево">${iconMarkup("chevron-left")}</button>
                <div class="referral-transfer-recipient-strip" data-transfer-recipient-strip>
                ${transferRecipients
                  .map(
                    (recipient) => `
                      <button
                        class="referral-transfer-recipient"
                        type="button"
                        data-action="open-quick-transfer"
                        data-phone="${normalizeText(recipient.phone)}"
                        data-name="${normalizeText(recipient.fullName)}"
                        data-short-name="${normalizeText(recipient.shortName || recipient.fullName)}"
                      >
                        ${avatarMarkup({ avatarUrl: recipient.avatarUrl, displayName: recipient.shortName || recipient.fullName }, 56)}
                        <span class="referral-transfer-recipient-name">${normalizeText(recipient.shortName || recipient.fullName)}</span>
                      </button>`,
                  )
                  .join("")}
                </div>
                <button class="ghost-btn icon-only-btn referral-transfer-scroll-btn referral-transfer-scroll-btn-next" type="button" data-action="scroll-transfer-recipients" data-direction="next" aria-label="Прокрутить получателей вправо">${iconMarkup("chevron-right")}</button>
              </div>` 
            : ``}
        </article>
        <article class="list-card referral-transfer-history-card">
          <div class="referral-subsection">
            <div class="section-head">
              <div>
                <div class="section-eyebrow">История переводов</div>
                <h2 class="section-title">Последние переводы BS</h2>
              </div>
              <span class="status-badge">${filteredBsActivity.length}</span>
            </div>
            <div class="filter-row referral-history-filter-row referral-pill-row" data-pill-group="referral-history">
              <span class="referral-pill-indicator" aria-hidden="true"></span>
              <button class="nav-pill ${state.transferHistoryFilter === "all" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="all">Все</button>
              <button class="nav-pill ${state.transferHistoryFilter === "transfers" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="transfers">Переводы</button>
              <button class="nav-pill ${state.transferHistoryFilter === "rewards" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="rewards">Награды</button>
            </div>
            <div class="referral-activity-list">
              ${activityPreview.length
                ? activityPreview.map((operation) => renderReferralOperationCard(operation)).join("")
                : `<div class="empty-state">Пока нет движений BS.</div>`}
            </div>
            <div class="profile-history-more referral-panel-more"><button class="ghost-btn history-more-btn" type="button" data-action="open-sheet" data-sheet="referral-history">Показать все</button></div>
          </div>
        </article>
        <article class="list-card referral-panel-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Реферальная сеть</div>
              <h2 class="section-title">Рефералы</h2>
            </div>
            <span class="status-badge">${referral.stats?.green || 0}</span>
          </div>
          ${topReferralThisMonth
            ? `<div class="referral-spotlight-card referral-spotlight-embedded">
                <div class="referral-spotlight-kicker">Лучший в этом месяце</div>
                <div class="referral-spotlight-body">
                  <div class="referral-spotlight-avatar">${avatarMarkup({ displayName: topReferralThisMonth.fullName }, 72)}</div>
                  <div class="referral-spotlight-copy">
                    <p class="list-title">${normalizeText(topReferralThisMonth.fullName)}</p>
                    <p class="subtitle">${topReferralThisMonth.phone ? formatPhone(topReferralThisMonth.phone) : "Телефон скрыт"}</p>
                  </div>
                  <div class="referral-spotlight-stats">
                    <div class="referral-spotlight-stat">
                      <span class="field-label">BS</span>
                      <strong>${topReferralThisMonth.rewardedVisits || 0}</strong>
                    </div>
                    <div class="referral-spotlight-stat">
                      <span class="field-label">Визиты</span>
                      <strong>${topReferralThisMonth.completedVisits || 0}</strong>
                    </div>
                  </div>
                </div>
                <p class="subtitle referral-spotlight-note">${topReferralThisMonth.lastVisitAt ? `Последний визит ${formatDateTime(topReferralThisMonth.lastVisitAt)}` : "Новый лидер по текущим начислениям."}</p>
              </div>`
            : ""}
          <div class="list">
            ${referralPreview.length
              ? referralPreview
                  .map(
                    (item) => `
                      <div class="list-item referral-referral-card">
                        <div class="section-head">
                          <div><p class="list-title">${normalizeText(item.fullName)}</p><p class="subtitle">${item.phone ? formatPhone(item.phone) : "Телефон скрыт"}</p></div>
                          <span class="status-badge ${statusColorClass(item.color)}">${referralColorLabel(item.color)}</span>
                        </div>
                        <div class="referral-referral-metrics">
                          <div class="referral-referral-metric">
                            <span class="field-label">Визиты</span>
                            <strong>${item.completedVisits || 0}</strong>
                          </div>
                          <div class="referral-referral-metric">
                            <span class="field-label">Принес BS</span>
                            <strong>${item.rewardedVisits || 0}</strong>
                          </div>
                        </div>
                        <div class="muted-text">Последний визит: ${item.lastVisitAt ? formatDateTime(item.lastVisitAt) : "Нет данных"}</div>
                      </div>`,
                  )
                  .join("")
              : `<div class="referral-referrals-onboarding">
                  <div class="referral-transfer-onboarding-copy">
                    <div class="section-eyebrow">Старт</div>
                    <p class="list-title">Пригласите первого клиента</p>
                    <p class="subtitle">Отправьте персональную ссылку и после первого визита здесь появятся ваши рефералы и их активность.</p>
                  </div>
                  <button class="primary-btn referral-transfer-onboarding-cta" type="button" data-action="copy-referral">
                    ${iconMarkup("copy")}
                    <span>${state.referralLinkCopied ? "Ссылка скопирована" : "Пригласить первого клиента"}</span>
                  </button>
                </div>`}
          </div>
          <div class="profile-history-more referral-panel-more"><button class="ghost-btn history-more-btn" type="button" data-action="open-sheet" data-sheet="referrals">Показать все</button></div>
        </article>
        </div>
        `}
      </section>
    `;
    });
  };
  const refreshReferralSectionDom = () => {
    if (state.currentPage !== "referral") return false;
    const appHost = ROOT.querySelector("[data-render-host='app']");
    const currentPageRoot = appHost?.querySelector(".referral-page");
    if (!currentPageRoot) return false;
    const template = document.createElement("template");
    template.innerHTML = renderReferralPage().trim();
    const nextPageRoot = template.content.querySelector(".referral-page");
    const nextPanel = nextPageRoot?.querySelector(".referral-section-panel");
    const currentTabs = currentPageRoot.querySelector(".referral-section-tabs");
    const currentPanel = currentPageRoot.querySelector(".referral-section-panel");
    if (!nextPanel || !currentTabs || !currentPanel) return false;
    const currentButtons = Array.from(currentTabs.querySelectorAll(".nav-pill"));
    currentButtons.forEach((button) => {
      const buttonSection = normalizeText(button.dataset.section) || "overview";
      button.classList.toggle("active", buttonSection === state.referralSection);
    });
    scheduleReferralPillSync(currentPageRoot);
    currentPanel.replaceWith(nextPanel);
    scheduleReferralPillSync(currentPageRoot);
    return true;
  };
  const syncReferralPillRow = (row) => {
    if (!(row instanceof HTMLElement)) return false;
    const indicator = row.querySelector(".referral-pill-indicator");
    const buttons = Array.from(row.querySelectorAll(".nav-pill"));
    if (!(indicator instanceof HTMLElement) || !buttons.length) return false;
    const isInitialSync = !row.dataset.pillReady;
    const activeIndex = Math.max(0, buttons.findIndex((button) => button.classList.contains("active")));
    const activeButton = buttons[activeIndex] || buttons[0];
    if (!(activeButton instanceof HTMLElement)) return false;
    if (isInitialSync) row.classList.add("is-pill-initializing");
    const rowRect = row.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    indicator.style.width = `${buttonRect.width}px`;
    indicator.style.height = `${buttonRect.height}px`;
    indicator.style.top = `${Math.max(0, buttonRect.top - rowRect.top)}px`;
    indicator.style.transform = `translateX(${Math.max(0, buttonRect.left - rowRect.left)}px)`;
    if (isInitialSync) {
      row.dataset.pillReady = "true";
      window.requestAnimationFrame(() => {
        row.classList.remove("is-pill-initializing");
      });
    }
    return true;
  };
  const syncReferralPillRows = (scope = ROOT) => {
    if (scope instanceof HTMLElement && scope.classList.contains("referral-pill-row")) {
      syncReferralPillRow(scope);
      return;
    }
    scope?.querySelectorAll?.(".referral-pill-row")?.forEach((row) => {
      syncReferralPillRow(row);
    });
  };
  const scheduleReferralPillSync = (scope = ROOT) => {
    if (referralPillSyncFrame !== null) {
      window.cancelAnimationFrame(referralPillSyncFrame);
      referralPillSyncFrame = null;
    }
    referralPillSyncFrame = window.requestAnimationFrame(() => {
      referralPillSyncFrame = null;
      syncReferralPillRows(scope);
      window.requestAnimationFrame(() => {
        syncReferralPillRows(scope);
      });
    });
  };
  const refreshReferralTransferHistoryDom = () => {
    if (state.currentPage !== "referral" || state.referralSection === "stats") return false;
    const appHost = ROOT.querySelector("[data-render-host='app']");
    const currentPageRoot = appHost?.querySelector(".referral-page");
    const currentHistoryCard = currentPageRoot?.querySelector(".referral-transfer-history-card");
    if (!currentPageRoot || !currentHistoryCard) return false;
    const template = document.createElement("template");
    template.innerHTML = renderReferralPage().trim();
    const nextPageRoot = template.content.querySelector(".referral-page");
    const nextHistoryCard = nextPageRoot?.querySelector(".referral-transfer-history-card");
    if (!nextHistoryCard) return false;
    const currentFilterRow = currentHistoryCard.querySelector(".referral-history-filter-row");
    const nextFilterRow = nextHistoryCard.querySelector(".referral-history-filter-row");
    if (currentFilterRow && nextFilterRow) {
      const currentButtons = Array.from(currentFilterRow.querySelectorAll(".nav-pill"));
      const nextButtons = Array.from(nextFilterRow.querySelectorAll(".nav-pill"));
      currentButtons.forEach((button, index) => {
        button.classList.toggle("active", nextButtons[index]?.classList.contains("active") === true);
      });
      scheduleReferralPillSync(currentHistoryCard);
    }
    const currentBadge = currentHistoryCard.querySelector(".status-badge");
    const nextBadge = nextHistoryCard.querySelector(".status-badge");
    if (currentBadge && nextBadge) currentBadge.outerHTML = nextBadge.outerHTML;
    const currentList = currentHistoryCard.querySelector(".referral-activity-list");
    const nextList = nextHistoryCard.querySelector(".referral-activity-list");
    if (currentList && nextList) currentList.innerHTML = nextList.innerHTML;
    return true;
  };
  const refreshReferralHistorySheetDom = () => {
    if (normalizeText(state.sheet?.title) !== "История BS") return false;
    const sheetHost = ROOT.querySelector("[data-render-host='sheet']");
    const sheetRoot = sheetHost?.querySelector(".sheet");
    const currentFilterRow = sheetRoot?.querySelector(".referral-history-filter-row");
    const currentList = sheetRoot?.querySelector(".referral-history-list");
    if (!currentFilterRow || !currentList) return false;
    const operations = Array.isArray(state.payload?.referral?.operations) ? state.payload.referral.operations : [];
    const filteredOperations = getFilteredReferralActivity(operations, state.transferHistoryFilter);
    const currentButtons = Array.from(currentFilterRow.querySelectorAll(".nav-pill"));
    currentButtons.forEach((button) => {
      button.classList.toggle("active", normalizeText(button.dataset.filter) === state.transferHistoryFilter);
    });
    currentList.innerHTML = filteredOperations.length
      ? filteredOperations.map((operation) => renderReferralOperationCard(operation)).join("")
      : `<div class="empty-state">По этому фильтру пока нет движений BS.</div>`;
    scheduleReferralPillSync(currentFilterRow);
    return true;
  };
  const refreshProfileHistoryDom = () => {
    if (state.currentPage !== "profile") return false;
    const appHost = ROOT.querySelector("[data-render-host='app']");
    const currentPageRoot = appHost?.querySelector(".profile-page");
    const currentHistoryCard = currentPageRoot?.querySelector(".profile-history-card");
    if (!currentPageRoot || !currentHistoryCard) return false;
    const template = document.createElement("template");
    template.innerHTML = renderCurrentPage().trim();
    const nextPageRoot = template.content.querySelector(".profile-page");
    const nextHistoryCard = nextPageRoot?.querySelector(".profile-history-card");
    if (!nextHistoryCard) return false;
    const currentFilterRow = currentHistoryCard.querySelector(".profile-history-filter-row");
    const nextFilterRow = nextHistoryCard.querySelector(".profile-history-filter-row");
    if (currentFilterRow && nextFilterRow) {
      const currentButtons = Array.from(currentFilterRow.querySelectorAll(".nav-pill"));
      const nextButtons = Array.from(nextFilterRow.querySelectorAll(".nav-pill"));
      currentButtons.forEach((button, index) => {
        button.classList.toggle("active", nextButtons[index]?.classList.contains("active") === true);
      });
      scheduleReferralPillSync(currentHistoryCard);
    }
    const currentTimeline = currentHistoryCard.querySelector(".timeline");
    const nextTimeline = nextHistoryCard.querySelector(".timeline");
    if (currentTimeline && nextTimeline) currentTimeline.innerHTML = nextTimeline.innerHTML;
    return true;
  };

  const buildQuickTransferSheet = (recipient = {}) => {
    const fullName = normalizeText(recipient.fullName || recipient.shortName || "Клиент");
    const shortName = normalizeText(recipient.shortName || recipient.fullName || "Клиент");
    const phone = normalizeText(recipient.phone || recipient.targetPhone);
    const currentBalance = Number(state.payload?.referral?.bsBalance || 0);
    return `
      <form class="referral-transfer-bank-sheet referral-quick-transfer-bank-sheet" id="quick-transfer-form" data-phone="${phone}" data-name="${fullName}" data-short-name="${shortName}">
        <section class="referral-transfer-bank-hero">
          <div class="referral-transfer-bank-hero-copy">
            <span class="field-label">Баланс BS</span>
            <strong>${currentBalance} BS</strong>
          </div>
        </section>
        <section class="referral-transfer-bank-section">
          <div class="referral-transfer-bank-section-head">
            <span class="field-label">Получатель</span>
          </div>
          <div class="referral-transfer-bank-counterparty">
            <div class="referral-transfer-bank-counterparty-avatar">
              ${avatarMarkup({ displayName: shortName }, 62)}
            </div>
            <div class="referral-transfer-bank-counterparty-copy">
              <strong>${fullName}</strong>
              <span>${phone ? formatPhone(phone) : "Телефон не указан"}</span>
            </div>
          </div>
        </section>
        <section class="referral-transfer-bank-section">
          <div class="referral-transfer-bank-section-head">
            <span class="field-label">Сумма перевода</span>
            <span class="referral-transfer-bank-section-note">Без комиссии</span>
          </div>
          <label class="field referral-transfer-bank-field referral-transfer-bank-amount-field">
            <input type="number" name="amountBs" min="1" step="1" placeholder="0" required />
            <span class="referral-transfer-bank-currency">BS</span>
          </label>
          <div class="referral-transfer-bank-presets">
            ${REFERRAL_TRANSFER_QUICK_AMOUNTS
              .map(
                (amount) => `
                  <button
                    class="referral-transfer-bank-preset"
                    type="button"
                    data-action="quick-transfer-amount"
                    data-phone="${phone}"
                    data-name="${fullName}"
                    data-short-name="${shortName}"
                    data-amount="${amount}"
                  >
                    ${amount} BS
                  </button>`,
              )
              .join("")}
          </div>
        </section>
        <div class="referral-transfer-bank-actions">
          <button class="primary-btn referral-transfer-bank-submit referral-quick-transfer-custom" type="submit">Продолжить</button>
          <button class="ghost-btn referral-transfer-bank-cancel" type="button" data-action="close-sheet">Отмена</button>
        </div>
      </form>
    `;
  };

  const buildReferralQrSheet = () => {
    const user = state.payload?.user || {};
    const phone = normalizePhone(user.phone);
    const qrPayload = buildReferralQrPayload(user);
    const displayName = normalizeText(user.displayName || user.phone || "Клиент");
    if (!phone || !qrPayload) {
      return `<div class="empty-state">Для QR-перевода в профиле должен быть указан телефон.</div>`;
    }
    return `
      <div class="referral-transfer-bank-sheet referral-qr-bank-sheet">
        <section class="referral-transfer-bank-hero">
          <div class="referral-transfer-bank-hero-copy">
            <strong>${displayName}</strong>
            <p class="subtitle">${formatPhone(phone)}</p>
          </div>
        </section>
        <section class="referral-transfer-bank-section referral-qr-bank-frame">
          <div class="referral-qr-stage is-loading" data-qr-stage data-qr-size="360">
            <div class="referral-qr-loading" aria-hidden="true">
              <span class="referral-qr-loading-orb"></span>
            </div>
            <div class="referral-qr-svg-shell" data-qr-svg-host aria-label="QR для перевода BS"></div>
          </div>
        </section>
        <section class="referral-transfer-bank-summary">
          <div class="referral-transfer-bank-summary-row referral-qr-bank-note">
            <span>Этот QR работает в двух сценариях: для перевода BS подставит получателя, а для нового клиента откроет приглашение по вашей рефералке.</span>
          </div>
        </section>
      </div>
    `;
  };

  const buildReferralQrScannerSheet = () => `
    <div class="referral-transfer-bank-sheet referral-qr-bank-sheet">
      <section class="referral-transfer-bank-hero">
        <div class="referral-transfer-bank-hero-copy">
          <strong>Наведите камеру на QR</strong>
          <p class="subtitle" id="referral-qr-scan-status">Ожидание доступа к камере...</p>
        </div>
      </section>
      <section class="referral-transfer-bank-section referral-qr-bank-frame referral-qr-bank-scanner-frame">
        <video id="referral-qr-video" class="referral-qr-video" autoplay playsinline muted></video>
      </section>
      <section class="referral-transfer-bank-summary">
        <div class="referral-transfer-bank-summary-row referral-qr-bank-note">
          <span>Если QR считан, форма перевода откроется автоматически с заполненным получателем.</span>
        </div>
      </section>
    </div>
  `;

  const waitForReferralQrVideoReady = (video, timeoutMs = 2400) =>
    new Promise((resolve) => {
      if (!video) {
        resolve(false);
        return;
      }
      if (video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0) {
        resolve(true);
        return;
      }
      let settled = false;
      const finish = (ready) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        video.removeEventListener("loadedmetadata", handleReady);
        video.removeEventListener("canplay", handleReady);
        resolve(ready);
      };
      const handleReady = () => finish(video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0);
      const timer = window.setTimeout(() => finish(video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0), timeoutMs);
      video.addEventListener("loadedmetadata", handleReady, { once: true });
      video.addEventListener("canplay", handleReady, { once: true });
    });

  const startReferralQrScanner = async () => {
    const video = document.getElementById("referral-qr-video");
    const status = document.getElementById("referral-qr-scan-status");
    if (!video || !status) return;
    const scannerSession = referralQrScannerSession + 1;
    referralQrScannerSession = scannerSession;
    const hasMediaDevices = Boolean(window.navigator?.mediaDevices?.getUserMedia);
    if (!window.isSecureContext || !hasMediaDevices) {
      status.textContent = "Сканирование доступно только в защищённом браузере с доступом к камере.";
      return;
    }
    if (!("BarcodeDetector" in window)) {
      status.textContent = "В этом браузере QR-сканер не поддерживается. Откройте страницу в Chrome или Edge.";
      return;
    }
    try {
      if (typeof window.BarcodeDetector.getSupportedFormats === "function") {
        const supportedFormats = await window.BarcodeDetector.getSupportedFormats();
        if (!Array.isArray(supportedFormats) || !supportedFormats.includes("qr_code")) {
          status.textContent = "В этом браузере QR-сканирование недоступно. Попробуйте Chrome или Edge.";
          return;
        }
      }
      const detector = new window.BarcodeDetector({ formats: ["qr_code"] });
      let stream = null;
      try {
        stream = await window.navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });
      } catch {
        stream = await window.navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
      }
      if (scannerSession !== referralQrScannerSession || normalizeText(state.sheet?.title) !== "Сканировать QR") {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      referralQrScannerStream = stream;
      video.muted = true;
      video.autoplay = true;
      video.playsInline = true;
      video.srcObject = stream;
      await video.play().catch(() => {});
      const videoReady = await waitForReferralQrVideoReady(video);
      if (scannerSession !== referralQrScannerSession || normalizeText(state.sheet?.title) !== "Сканировать QR") {
        stopReferralQrScanner();
        return;
      }
      if (!videoReady) {
        status.textContent = "Камера подключена, но браузер не начал показ видео. Попробуйте Chrome или перезапустите доступ к камере.";
        return;
      }
      status.textContent = "Ищем QR-код...";
      const scan = async () => {
        if (scannerSession !== referralQrScannerSession || normalizeText(state.sheet?.title) !== "Сканировать QR") {
          stopReferralQrScanner();
          return;
        }
        if (!video.videoWidth || !video.videoHeight) {
          referralQrScannerFrame = window.requestAnimationFrame(scan);
          return;
        }
        try {
          const barcodes = await detector.detect(video);
          const match = Array.isArray(barcodes)
            ? barcodes.map((item) => parseReferralQrPayload(item?.rawValue)).find(Boolean)
            : null;
          if (match?.phone) {
            stopReferralQrScanner();
            state.referralTransferDraft = {
              ...(state.referralTransferDraft || {}),
              targetPhone: match.phone,
              fullName: match.name || "",
              recipientShortName: match.name || "",
            };
            state.referralTransferError = "";
            openNamedSheet("transfer-bs");
            return;
          }
        } catch {
          // ignore detector frame errors
        }
        referralQrScannerFrame = window.requestAnimationFrame(scan);
      };
      referralQrScannerFrame = window.requestAnimationFrame(scan);
    } catch (error) {
      status.textContent = normalizeText(error?.message || "Не удалось получить доступ к камере.");
      stopReferralQrScanner();
    }
  };

  const getReferralOperationIconName = (operation = {}) => {
    const type = normalizeText(operation.type);
    if (type === "transfer_out") return "transfer";
    if (type === "transfer_in") return "receive";
    if (type === "reward") return "reward";
    return "wallet";
  };

  const getReferralOperationToneClass = (operation = {}) => {
    const type = normalizeText(operation.type);
    if (type === "transfer_out") return "is-outgoing";
    if (type === "transfer_in") return "is-incoming";
    if (type === "reward") return "is-reward";
    return "";
  };

  const getReferralOperationStatusLabel = (operation = {}) => {
    const type = normalizeText(operation.type);
    if (type === "transfer_out") return "Отправка";
    if (type === "transfer_in") return "Поступление";
    if (type === "reward") return "Награда";
    return "Операция";
  };
  const getReferralOperationMetaLabel = (operation = {}) => {
    const type = normalizeText(operation.type);
    const counterpartName = normalizeText(operation.counterpartName);
    const timestamp = formatShortDateTime(operation.createdAt);
    if (type === "transfer_out" || type === "transfer_in") {
      return [counterpartName, timestamp].filter(Boolean).join(" · ");
    }
    return timestamp;
  };
  const getReferralOperationComment = (operation = {}) => {
    const type = normalizeText(operation.type);
    const explicitComment = normalizeText(operation.comment);
    if (explicitComment) return explicitComment;
    const description = normalizeText(operation.description);
    if (!description) return "";
    if (type === "transfer_out" || type === "transfer_in") {
      const transferComment = description.split(" · ").slice(1).join(" · ").trim();
      return transferComment;
    }
    if (type === "manual_adjust" || type === "manual_set") {
      const adminMarker = /\.?\s*Админ:[^.]*\.\s*/i;
      const normalizedDescription = description.replace(adminMarker, " ").trim();
      const manualPrefix = /^(Баланс изменён с .*? BS до .*? BS\.?|Начислено \d+ BS\.?|Списано \d+ BS\.?)/i;
      const manualComment = normalizedDescription.replace(manualPrefix, "").trim();
      return manualComment;
    }
    return "";
  };
  const getReferralOperationAvatarUrl = (operation = {}) => {
    const counterpartId = normalizeText(operation.counterpartId);
    const counterpartPhone = normalizePhone(operation.counterpartPhone || "");
    const referrals = Array.isArray(state.payload?.referral?.referrals) ? state.payload.referral.referrals : [];
    const recentRecipients = Array.isArray(state.payload?.referral?.recentTransferRecipients) ? state.payload.referral.recentTransferRecipients : [];
    const matchedRecipient =
      referrals.find((item) => normalizeText(item.id) === counterpartId || normalizePhone(item.phone || "") === counterpartPhone) ||
      recentRecipients.find((item) => normalizeText(item.id) === counterpartId || normalizePhone(item.phone || "") === counterpartPhone) ||
      null;
    return normalizeText(matchedRecipient?.avatarUrl || operation.counterpartAvatarUrl);
  };

  const renderReferralOperationCard = (operation = {}) => `
    <div class="referral-activity-row ${getReferralOperationToneClass(operation)}">
      <div class="referral-activity-icon ${normalizeText(operation.counterpartName) || getReferralOperationAvatarUrl(operation) ? "has-avatar" : ""}">
        ${normalizeText(operation.counterpartName) || getReferralOperationAvatarUrl(operation)
          ? avatarMarkup({ avatarUrl: getReferralOperationAvatarUrl(operation), displayName: operation.counterpartName }, 46)
          : iconMarkup(getReferralOperationIconName(operation))}
      </div>
      <div class="referral-activity-copy">
        <p class="list-title">${normalizeText(operation.title)}</p>
        <p class="subtitle">${getReferralOperationMetaLabel(operation)}</p>
        ${getReferralOperationComment(operation) ? `<p class="subtitle referral-activity-comment">${getReferralOperationComment(operation)}</p>` : ""}
      </div>
      <div class="referral-activity-meta">
        <div class="amount-bs ${Number(operation.amountBs) < 0 ? "negative" : ""}">${Number(operation.amountBs) > 0 ? "+" : ""}${Number(operation.amountBs) || 0} BS</div>
        <span class="referral-activity-status">${getReferralOperationStatusLabel(operation)}</span>
      </div>
    </div>
  `;

  const matchesTransferHistoryFilter = (operation, filter) => {
    const type = normalizeText(operation?.type);
    if (filter === "transfers") return type === "transfer_out" || type === "transfer_in";
    if (filter === "rewards") return type === "reward";
    return true;
  };
  const getReferralOperationGroups = (operations = []) => {
    if (derivedDataCache.referralOperations.operationsRef === operations) {
      return {
        transferOut: derivedDataCache.referralOperations.transferOut,
        transferIn: derivedDataCache.referralOperations.transferIn,
      };
    }
    const transferOut = operations.filter((operation) => normalizeText(operation.type) === "transfer_out");
    const transferIn = operations.filter((operation) => normalizeText(operation.type) === "transfer_in");
    derivedDataCache.referralOperations = {
      operationsRef: operations,
      transferOut,
      transferIn,
    };
    derivedDataCache.filteredReferralActivity = { operationsRef: null, filter: "", filtered: [] };
    return { transferOut, transferIn };
  };
  const getFilteredReferralActivity = (operations = [], filter = "all") => {
    if (derivedDataCache.filteredReferralActivity.operationsRef === operations && derivedDataCache.filteredReferralActivity.filter === filter) {
      return derivedDataCache.filteredReferralActivity.filtered;
    }
    const filtered = operations
      .filter((operation) => matchesTransferHistoryFilter(operation, filter))
      .sort((left, right) => normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)));
    derivedDataCache.filteredReferralActivity = {
      operationsRef: operations,
      filter,
      filtered,
    };
    return filtered;
  };

  const buildReferralLevelsSheet = () => {
    const referral = state.payload?.referral || {};
    const referralProgram = referral.program || {};
    const levels = Array.isArray(referralProgram.levels) ? referralProgram.levels : [];
    const currentLevelId = normalizeText(referralProgram.currentLevel?.id);
    if (!levels.length) {
      return `<div class="empty-state">Уровни программы еще не настроены.</div>`;
    }
    return `
      <div class="referral-levels-sheet">
        <div class="referral-levels-sheet-hero">
          <div class="referral-levels-sheet-summary">
            <div class="referral-levels-sheet-stat">
              <span class="field-label">Текущий уровень</span>
              <strong>${getReferralLevelName(referralProgram, referralProgram.activeReferralsCount || referral.stats?.green || 0)}</strong>
            </div>
            <div class="referral-levels-sheet-stat">
              <span class="field-label">Бонус другу BS</span>
              <strong>${Number(referralProgram.friendDiscountRub || 0)} ₽</strong>
            </div>
            <div class="referral-levels-sheet-stat">
              <span class="field-label">Курс BS</span>
              <strong>1 BS = ${Number(referralProgram.bsToRubRate || 1)} ₽</strong>
            </div>
          </div>
          ${normalizeText(referral.description?.participationText) ? `<p class="muted-text referral-levels-sheet-note">${normalizeText(referral.description?.participationText)}</p>` : ""}
        </div>
        <div class="referral-levels-sheet-list">
        ${levels
          .map(
            (level) => `
              <div class="referral-level-card referral-level-card-compact ${normalizeText(level.id) === currentLevelId ? "is-current" : ""}">
                <div class="referral-level-card-top">
                  <div class="referral-level-card-main">
                    <p class="list-title">${normalizeText(level.name)}</p>
                    <div class="referral-level-card-range">
                      <span class="tag">${Number(level.minReferrals || 0)}-${level.maxReferrals === null || level.maxReferrals === "" ? "∞" : Number(level.maxReferrals)} рефералов</span>
                    </div>
                  </div>
                  ${normalizeText(level.id) === currentLevelId ? `<span class="status-badge status-green">Текущий</span>` : ""}
                </div>
                <div class="referral-level-rewards referral-level-rewards-compact">
                  ${(Array.isArray(level.serviceRewards) ? level.serviceRewards : [])
                    .map(
                      (reward) => `
                        <div class="referral-level-reward referral-level-reward-compact">
                          <span class="referral-level-reward-label">${normalizeText(reward.label)}</span>
                          <strong class="referral-level-reward-value">${Number(reward.bsAmount || 0)} BS</strong>
                        </div>`,
                    )
                    .join("") || `<div class="empty-state">Награды для уровня еще не заданы.</div>`}
                </div>
              </div>`,
          )
          .join("")}
        </div>
      </div>
    `;
  };

  const buildAccountAchievements = () => {
    const user = state.payload?.user || {};
    const referral = state.payload?.referral || {};
    const profile = state.payload?.profile || {};
    const visitHistory = Array.isArray(profile.visitHistory) ? profile.visitHistory : [];
    const transferOperations = (Array.isArray(referral.operations) ? referral.operations : []).filter((operation) => {
      const type = normalizeText(operation?.type);
      return type === "transfer_out" || type === "transfer_in";
    });
    const sentTransfers = transferOperations.filter((operation) => normalizeText(operation.type) === "transfer_out").length;
    const activeReferrals = Number(referral.program?.activeReferralsCount || referral.stats?.green || 0);
    const profileFieldsFilled = [
      normalizeText(user.avatarUrl),
      normalizeText(user.displayName),
      normalizeText(user.phone),
      normalizeText(user.birthDate),
      normalizeText(user.gender),
      normalizeText(user.telegramId),
    ].filter(Boolean).length;
    const profileFieldTarget = 6;
    return [
      {
        id: "first-visit",
        title: "Первый визит",
        description: "Завершите первую запись в BrotherShop.",
        current: visitHistory.length,
        target: 1,
        progressLabel: `${visitHistory.length}/1`,
      },
      {
        id: "regular-guest",
        title: "Постоянный гость",
        description: "Наберите 5 завершённых визитов.",
        current: visitHistory.length,
        target: 5,
        progressLabel: `${visitHistory.length}/5 визитов`,
      },
      {
        id: "referral-start",
        title: "Первый реферал",
        description: "Пригласите первого активного реферала.",
        current: activeReferrals,
        target: 1,
        progressLabel: `${activeReferrals}/1`,
      },
      {
        id: "referral-brother",
        title: "Старший брат",
        description: "Доведите сеть до 5 активных рефералов.",
        current: activeReferrals,
        target: 5,
        progressLabel: `${activeReferrals}/5 рефералов`,
      },
      {
        id: "transfer-first",
        title: "Первый перевод",
        description: "Сделайте первый перевод BS другому клиенту.",
        current: sentTransfers,
        target: 1,
        progressLabel: `${sentTransfers}/1`,
      },
      {
        id: "profile-complete",
        title: "Профиль собран",
        description: "Заполните профиль полностью и добавьте фото.",
        current: profileFieldsFilled,
        target: profileFieldTarget,
        progressLabel: `${profileFieldsFilled}/${profileFieldTarget}`,
      },
    ].map((item) => ({
      ...item,
      unlocked: item.current >= item.target,
      progress: Math.max(0, Math.min(100, Math.round((item.current / Math.max(1, item.target)) * 100))),
    }));
  };

  const renderAchievementsPage = () => {
    return memoizeRenderedFragment("page-achievements", [state.payload?.user, state.payload?.profile, state.payload?.referral], () => {
      const achievements = buildAccountAchievements();
      const unlockedCount = achievements.filter((item) => item.unlocked).length;
      return `
      <section class="page profile-page achievements-page">
        <article class="hero-card page-hero achievements-hero">
          <div class="hero-eyebrow">Аккаунт</div>
          <h1 class="hero-title">Достижения</h1>
          <p class="subtitle achievements-hero-copy">Прогресс аккаунта, визитов, рефералов и переводов BS.</p>
          <div class="profile-summary-strip achievements-summary-strip">
            <div class="profile-summary-cell"><span class="field-label">Открыто</span><strong>${unlockedCount}</strong></div>
            <div class="profile-summary-cell"><span class="field-label">Всего</span><strong>${achievements.length}</strong></div>
          </div>
        </article>
        <div class="achievements-grid">
          ${achievements.map((item) => `
            <article class="list-card achievement-card ${item.unlocked ? "is-unlocked" : ""}">
              <div class="section-head">
                <div>
                  <div class="section-eyebrow">${item.unlocked ? "Открыто" : "В процессе"}</div>
                  <h2 class="section-title">${item.title}</h2>
                </div>
                <span class="status-badge ${item.unlocked ? "green" : "yellow"}">${item.progressLabel}</span>
              </div>
              <p class="subtitle achievement-description">${item.description}</p>
              <div class="progress-track"><div class="progress-bar" style="width:${item.progress}%"></div></div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
    });
  };

  const renderBookingPage = () => {
    const booking = state.booking;
    const bookingStepClass = booking.stepAnimationsEnabled ? "booking-step-active" : "";
    const barbers = getSortedBookingBarbers();
    const selectedBarber = barbers.find((item) => normalizeText(item.id) === normalizeText(booking.barberId)) || null;
    const isBookingBlocked = booking.canBook === false;
    const bookingLimitMessage = normalizeText(booking.limitMessage);
    const bookingPricing = getBookingPricingSummary(booking, state.payload?.referral || {});
    const selectedServices = bookingPricing.selectedServices;
    const selectedTotal = bookingPricing.totalRub;
    const completedSteps = [
      Boolean(selectedBarber),
      Boolean(booking.selectedServices.length),
      Boolean(booking.selectedDate),
      Boolean(booking.selectedTime),
    ].filter(Boolean).length;
    const showServicesStep = Boolean(selectedBarber);
    const showDateStep = Boolean(selectedBarber && booking.selectedServices.length && !isBookingBlocked);
    const showTimeStep = Boolean(showDateStep && booking.selectedDate);
    const showCommentStep = Boolean(showTimeStep && booking.selectedTime);
    const showSummaryStep = Boolean(showCommentStep);
    return `
      <section class="page booking-page">
        <div class="booking-hero booking-hero-floating">
          <h1 class="booking-hero-title">Онлайн-запись</h1>
        </div>
        <div class="booking-grid booking-flow">
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="barber">
            <div class="booking-step-head"><div class="section-eyebrow">1. Барбер</div></div>
            <div class="barber-grid">
              ${barbers
                .map(
                  (barber) => `
                    <button class="barber-card ${normalizeText(booking.barberId) === normalizeText(barber.id) ? "is-selected" : ""}" data-action="select-barber" data-id="${normalizeText(barber.id)}">
                      <div class="booking-barber-surface">
                        <div class="booking-barber-copy">
                          <p class="barber-name">${normalizeText(barber.name)}</p>
                          ${normalizeText(barber.phrase || barber.description) ? `<p class="subtitle">${normalizeText(barber.phrase || barber.description)}</p>` : ""}
                          <div class="booking-barber-meta">
                            <span class="booking-barber-pill">Услуг: ${Number.isFinite(Number(barber.servicesCount)) ? Number(barber.servicesCount) : 0}</span>
                          </div>
                        </div>
                        <div class="booking-barber-visual">
                          <div class="booking-barber-visual-frame">
                            ${normalizeText(barber.avatarUrl)
                              ? `<img class="booking-barber-photo" src="${normalizeText(barber.avatarUrl)}" alt="${normalizeText(barber.name)}" />`
                              : avatarMarkup({ avatarUrl: barber.avatarUrl, displayName: barber.name }, 154)}
                          </div>
                        </div>
                      </div>
                    </button>`,
                )
                .join("")}
            </div>
          </article>
          ${showServicesStep ? `
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="services">
            <div class="booking-step-head"><div class="section-eyebrow">2. Услуги</div></div>
            ${isBookingBlocked && bookingLimitMessage ? `<div class="booking-step-alert status-red"><p class="list-title">Лимит активных записей достигнут</p><p class="subtitle">${bookingLimitMessage}</p></div>` : ""}
            <div class="list">
              ${booking.services.length
                ? booking.services
                    .map((service) => {
                      const selected = booking.selectedServices.includes(service.id);
                      return `<button class="service-item ${selected ? "is-selected" : ""}" data-action="toggle-service" data-id="${service.id}"><div class="section-head"><div><p class="list-title">${normalizeText(service.name)}</p><p class="subtitle">${normalizeText(service.description || "")}</p></div><strong>${formatRub(service.price)}</strong></div><div class="muted-text">${service.duration || 0} мин</div></button>`;
                    })
                    .join("")
                : `<div class="empty-state">${isBookingBlocked && bookingLimitMessage ? bookingLimitMessage : selectedBarber ? "Подбираем доступные услуги..." : "Выберите мастера, чтобы увидеть услуги."}</div>`}
            </div>
          </article>
          ` : ""}
          ${showDateStep ? `
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="date">
            <div class="booking-step-head"><div class="section-eyebrow">3. Дата</div></div>
            <div class="list">
              ${booking.dates.length
                ? booking.dates
                    .map((date) => `<button class="slot-item ${booking.selectedDate === date ? "is-selected" : ""}" data-action="select-date" data-id="${date}"><span class="list-title">${formatDateOnly(date)}</span></button>`)
                    .join("")
                : `<div class="empty-state">${booking.selectedServices.length ? "Подбираем ближайшие даты..." : "Добавьте услуги, чтобы увидеть свободные даты."}</div>`}
            </div>
          </article>
          ` : ""}
          ${showTimeStep ? `
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="time">
            <div class="booking-step-head"><div class="section-eyebrow">4. Время</div></div>
            <div class="list">
              ${booking.times.length
                ? booking.times
                    .map((time) => `<button class="slot-item ${booking.selectedTime === normalizeText(time.start) ? "is-selected" : ""}" data-action="select-time" data-id="${normalizeText(time.start)}"><span class="list-title">${normalizeText(time.label || `${time.start} - ${time.end}`)}</span></button>`)
                    .join("")
                : `<div class="empty-state">${booking.selectedDate ? "На эту дату свободных окон пока нет." : "Выберите дату, чтобы увидеть свободное время."}</div>`}
            </div>
          </article>
          ` : ""}
          ${showCommentStep ? `
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="comment">
            <div class="booking-step-head"><div class="section-eyebrow">5. Комментарий</div></div>
            <label class="field booking-comment-field">
              <span class="field-label">Комментарий для мастера</span>
              <textarea id="booking-comment-input" placeholder="Например: хочу покороче по бокам, оставить длину сверху или удобно после 18:00.">${normalizeText(booking.comment)}</textarea>
            </label>
          </article>
          ` : ""}
        </div>
        <article class="hero-card booking-summary ${bookingStepClass} ${showSummaryStep ? "is-ready" : "is-preview"}" data-booking-step="summary">
          <div class="booking-step-head"><div class="section-eyebrow">Подтверждение</div></div>
          <h2 class="section-title">${selectedBarber ? "Проверьте детали записи" : "Соберите запись по шагам"}</h2>
          <div class="booking-summary-status">
            <div>
              <span class="field-label">Готовность</span>
              <strong>${showSummaryStep ? "Можно подтверждать запись" : "Заполните шаги слева"}</strong>
            </div>
            <span class="status-badge ${showSummaryStep ? "green" : "yellow"}">${Math.min(completedSteps, 4)}/4</span>
          </div>
          ${selectedBarber ? `<div class="summary-master-row">${avatarMarkup({ avatarUrl: selectedBarber.avatarUrl, displayName: selectedBarber.name }, 68)}<div><p class="list-title">${normalizeText(selectedBarber.name)}</p><p class="subtitle">${normalizeText(selectedBarber.description || "Выбранный мастер")}</p></div></div>` : `<div class="summary-master-row summary-placeholder"><div><p class="list-title">Мастер еще не выбран</p><p class="subtitle">Сначала выберите барбера, чтобы начать запись.</p></div></div>`}
          <div class="summary-grid">
            <div class="summary-item"><span class="field-label">Дата</span><strong>${booking.selectedDate ? formatDateOnly(booking.selectedDate) : "не выбрана"}</strong></div>
            <div class="summary-item"><span class="field-label">Время</span><strong>${getBookingSelectedTimeLabel() || "не выбрано"}</strong></div>
            <div class="summary-item"><span class="field-label">Сумма</span><strong>${formatRub(selectedTotal)}</strong></div>
          </div>
          ${bookingPricing.maxCoverBs > 0 ? `
            <div class="booking-bs-cover-card ${booking.bsCoverExpanded ? "is-expanded" : "is-collapsed"}">
              <button class="booking-bs-cover-toggle" type="button" data-action="toggle-booking-bs">
                <div class="booking-bs-cover-head">
                  <div>
                    <strong>${bookingPricing.appliedBs > 0 ? `Списать ${bookingPricing.appliedBs} BS` : "Использовать BS"}</strong>
                  </div>
                  <div class="booking-bs-cover-side">
                    <span class="status-badge green">${bookingPricing.maxCoverBs} BS</span>
                    <span class="booking-bs-chevron" aria-hidden="true">${iconMarkup(booking.bsCoverExpanded ? "chevron-left" : "chevron-right")}</span>
                  </div>
                </div>
              </button>
              ${booking.bsCoverExpanded ? `
                <label class="field booking-bs-field">
                  <input id="booking-bs-input" type="number" min="0" max="${bookingPricing.maxCoverBs}" step="1" value="${bookingPricing.appliedBs || ""}" placeholder="0" />
                </label>
                <p class="subtitle booking-bs-note">К оплате после списания: <strong>${formatRub(bookingPricing.payableRub)}</strong></p>
              ` : ""}
            </div>
          ` : ""}
          <div class="service-chip-row">
            ${selectedServices.length ? selectedServices.map((service) => `<span class="service-chip">${normalizeText(service.name)}</span>`).join("") : `<span class="muted-text">Добавьте хотя бы одну услугу, чтобы увидеть итог записи.</span>`}
          </div>
          ${isBookingBlocked && bookingLimitMessage ? `<div class="booking-step-alert status-red"><p class="list-title">Новая запись пока недоступна</p><p class="subtitle">${bookingLimitMessage}</p></div>` : ""}
          <div class="hero-actions booking-submit-wrap"><button class="primary-btn" data-action="submit-booking" ${!selectedBarber || !booking.selectedServices.length || !booking.selectedDate || !booking.selectedTime || booking.submitting || isBookingBlocked ? "disabled" : ""}>${booking.submitting ? "Отправляем..." : "Подтвердить запись"}</button></div>
        </article>
      </section>
    `;
  };

  const renderShopPage = () => {
    const shop = state.payload?.site?.shop || {};
    const teaserTitle = normalizeText(shop.teaserTitle);
    const teaserText = normalizeText(shop.teaserText);
    return `<section class="page shop-page"><article class="soon-card clean-soon-card shop-coming-card"><div class="shop-coming-shell"><div class="hero-eyebrow">Магазин</div>${teaserTitle ? `<h1 class="hero-title">${teaserTitle}</h1>` : ""}${teaserText ? `<p class="section-text">${teaserText}</p>` : ""}<div class="shop-teaser-grid"><div class="teaser-block"></div><div class="teaser-block"></div><div class="teaser-block"></div></div></div></article></section>`;
  };

  const resolveBarberAccentColor = (value, fallback = "#ff8a2a") => {
    const safeValue = normalizeText(value);
    return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(safeValue) ? safeValue : fallback;
  };
  const renderBarberProfileHeroCard = (barber, options = {}) => {
    if (!barber) return "";
    const barberId = normalizeText(options.barberId || barber.id);
    const reviews = Array.isArray(barber.reviews) ? barber.reviews.filter(Boolean) : [];
    const ratingValue = Math.max(0, Math.min(5, Number.parseFloat(normalizeText(barber.rating || "5").replace(",", ".")) || 5));
    const filledStars = Math.round(ratingValue);
    const accentColor = resolveBarberAccentColor(barber.color, "#ff8a2a");
    const displayName = normalizeText(barber.name || barber.fullName || "Барбер");
    const fullName = normalizeText(barber.fullName || barber.name || displayName);
    const alias = normalizeText(barber.nickname);
    const normalizeIdentityLabel = (value) =>
      normalizeText(value)
        .replace(/[^\p{L}\p{N}]+/gu, "")
        .toLowerCase();
    const description = normalizeText(barber.cardDescription || barber.description);
    const rawSignature = normalizeText(barber.cardPhrase || barber.phrase);
    const signature =
      rawSignature && rawSignature.toLowerCase() !== description.toLowerCase() ? rawSignature : "";
    const cachedBarberServices = Array.isArray(options.cachedServices)
      ? options.cachedServices
      : Array.isArray(state.barberProfileServices?.[barberId]?.items)
        ? state.barberProfileServices[barberId].items
        : [];
    const barberServices = (Array.isArray(barber.services) && barber.services.length ? barber.services : cachedBarberServices)
      .map((service) => (typeof service === "string" ? service : normalizeText(service?.name || service?.title || service?.label)))
      .filter(Boolean);
    const visibleServices = barberServices.slice(0, 4);
    const servicesSummary = visibleServices.length
      ? visibleServices.join(" • ")
      : Number.isFinite(Number(barber.servicesCount)) && Number(barber.servicesCount) > 0
        ? `Услуг: ${Number(barber.servicesCount)}`
        : "Загрузка услуг...";
    const servicesMarkup = visibleServices.length
      ? visibleServices.map((service) => `<span class="barber-profile-service-chip">${service}</span>`).join("")
      : `<span class="barber-profile-service-chip is-placeholder">${servicesSummary}</span>`;
    const portraitUrl = normalizeText(barber.avatarUrl || barber.cardImageUrl);
    const reviewLabel = reviews.length ? `${reviews.length} отзывов` : "Первые отзывы появятся позже";
    const introText = description || rawSignature || "Барбер доступен для онлайн-записи в BrotherShop.";
    const identityLine = [alias, fullName]
      .filter((value, index, items) => value && normalizeIdentityLabel(value) !== normalizeIdentityLabel(displayName) && items.indexOf(value) === index)
      .join(" • ");
    const primaryHref = normalizeText(options.primaryHref || buildBookingBarberHref(barberId));
    const primaryLabel = normalizeText(options.primaryLabel || "Записаться");
    const secondaryHref = normalizeText(options.secondaryHref || "/");
    const secondaryLabel = normalizeText(options.secondaryLabel || "Все барберы");
    const articleClassName = normalizeText(options.articleClassName || "barber-profile-hero");
    const articleAttributes = normalizeText(options.articleAttributes);
    const footerOverlay = normalizeText(options.footerOverlay);
    const sceneStyle = normalizeText(options.sceneStyle);
    const hideActions = options.hideActions === true;
    return `
      <article class="${articleClassName}" style="--barber-accent:${accentColor};"${articleAttributes ? ` ${articleAttributes}` : ""}>
        <div class="barber-profile-scene" data-tilt-card="barber-profile"${sceneStyle ? ` style="${sceneStyle}"` : ""}>
          <div class="barber-profile-surface">
          <div class="barber-profile-backdrop" aria-hidden="true">
            <div class="barber-profile-backdrop-glow"></div>
            <div class="barber-profile-backdrop-orb barber-profile-backdrop-orb-a"></div>
            <div class="barber-profile-backdrop-orb barber-profile-backdrop-orb-b"></div>
            <div class="barber-profile-backdrop-wave"></div>
            <div class="barber-profile-backdrop-grid"></div>
            <div class="barber-profile-backdrop-name">BROTHERSHOP</div>
          </div>
          <div class="barber-profile-layout">
            <div class="home-barber-rotating-glint" aria-hidden="true"></div>
            <div class="barber-profile-copy">
              <div class="barber-profile-copy-head">
                <span class="barber-profile-kicker">Барбер BrotherShop</span>
              </div>
              <h1 class="barber-profile-title">${displayName}</h1>
              ${identityLine ? `<p class="barber-profile-subtitle">${identityLine}</p>` : ""}
              ${signature ? `<p class="barber-profile-signature">${signature}</p>` : ""}
              <p class="barber-profile-description">${introText}</p>
              <div class="barber-profile-services">
                <span class="barber-profile-services-label">Услуги</span>
                <div class="barber-profile-services-list">${servicesMarkup}</div>
              </div>
              ${hideActions
                ? ""
                : `<div class="hero-actions barber-profile-action-row">
                    <a class="primary-btn barber-profile-primary-btn" href="${primaryHref}">${primaryLabel}</a>
                    <a class="ghost-btn barber-profile-secondary-btn" href="${secondaryHref}">${secondaryLabel}</a>
                  </div>`}
            </div>
            <div class="barber-profile-meta">
              <div class="barber-profile-meta-item" aria-label="Рейтинг ${ratingValue.toFixed(1)} из 5">
                <span class="barber-profile-meta-label">Рейтинг</span>
                <span class="barber-profile-meta-note">${Array.from({ length: 5 }, (_, index) => `<span class="barber-profile-star ${index < filledStars ? "is-filled" : ""}">★</span>`).join("")}</span>
                <strong>${ratingValue.toFixed(1)}</strong>
              </div>
              <div class="barber-profile-meta-item">
                <span class="barber-profile-meta-label">Услуги</span>
                <strong class="barber-profile-meta-services">${servicesSummary}</strong>
                <span class="barber-profile-meta-note">доступно для записи</span>
              </div>
            </div>
            <div class="barber-profile-art">
              ${portraitUrl
                ? `
                  <div class="barber-profile-art-stack">
                    <img class="barber-profile-art-outline" src="${portraitUrl}" alt="" aria-hidden="true" />
                    <img class="barber-profile-art-image" src="${portraitUrl}" alt="${displayName}" />
                  </div>
                `
                : `<div class="barber-profile-poster-fallback">${avatarMarkup({ avatarUrl: "", displayName }, 188)}</div>`}
            </div>
            ${footerOverlay}
          </div>
          </div>
        </div>
      </article>
    `;
  };

  const renderBarberProfilePage = () => {
    const barbers = getSortedBookingBarbers();
    const activeBarberId = normalizeText(state.activeBarberProfileId || getBarberIdFromPath(window.location.pathname));
    const barber = barbers.find((item) => normalizeText(item.id) === activeBarberId) || null;
    if (!barber) {
      return `
      <section class="page barber-profile-page">
        <article class="hero-card barber-profile-hero barber-profile-empty">
          <div class="hero-eyebrow">Барбер</div>
          <h1 class="hero-title">Мастер не найден</h1>
          <p class="section-text">Вернитесь на главную и выберите барбера из актуального списка.</p>
          <div class="hero-actions">
            <a class="primary-btn" href="/">На главную</a>
          </div>
        </article>
      </section>
    `;
    }
    const reviews = Array.isArray(barber.reviews) ? barber.reviews.filter(Boolean) : [];
    const ratingValue = Math.max(0, Math.min(5, Number.parseFloat(normalizeText(barber.rating || "5").replace(",", ".")) || 5));
    const filledStars = Math.round(ratingValue);
    const activeBarberIndex = Math.max(0, barbers.findIndex((item) => normalizeText(item.id) === activeBarberId));
    const accentColor = resolveBarberAccentColor(barber.color, "#ff8a2a");
    const displayName = normalizeText(barber.name || barber.fullName || "Барбер");
    const fullName = normalizeText(barber.fullName || barber.name || displayName);
    const alias = normalizeText(barber.nickname);
    const normalizeIdentityLabel = (value) =>
      normalizeText(value)
        .replace(/[^\p{L}\p{N}]+/gu, "")
        .toLowerCase();
    const description = normalizeText(barber.cardDescription || barber.description);
    const rawSignature = normalizeText(barber.cardPhrase || barber.phrase);
    const signature =
      rawSignature && rawSignature.toLowerCase() !== description.toLowerCase() ? rawSignature : "";
    const cachedBarberServices = Array.isArray(state.barberProfileServices?.[activeBarberId]?.items)
      ? state.barberProfileServices[activeBarberId].items
      : [];
    const barberServices = (Array.isArray(barber.services) && barber.services.length ? barber.services : cachedBarberServices)
      .map((service) => (typeof service === "string" ? service : normalizeText(service?.name || service?.title || service?.label)))
      .filter(Boolean);
    const visibleServices = barberServices.slice(0, 4);
    const servicesSummary = visibleServices.length ? visibleServices.join(" • ") : "Загрузка услуг...";
    const servicesMarkup = visibleServices.length
      ? visibleServices.map((service) => `<span class="barber-profile-service-chip">${service}</span>`).join("")
      : `<span class="barber-profile-service-chip is-placeholder">Загрузка услуг...</span>`;
    const portraitUrl = normalizeText(barber.avatarUrl || barber.cardImageUrl);
    const reviewLabel = reviews.length ? `${reviews.length} отзывов` : "Первые отзывы появятся позже";
    const introText = description || rawSignature || "Барбер доступен для онлайн-записи в BrotherShop.";
    const identityLine = [alias, fullName]
      .filter((value, index, items) => value && normalizeIdentityLabel(value) !== normalizeIdentityLabel(displayName) && items.indexOf(value) === index)
      .join(" • ");
    return `
      <section class="page barber-profile-page">
        ${renderBarberProfileHeroCard(barber, {
          barberId: activeBarberId,
          cachedServices: cachedBarberServices,
          articleClassName: "barber-profile-hero",
          secondaryHref: "/",
          secondaryLabel: "Все барберы",
        })}
        <article class="content-card barber-profile-mobile-sheet">
          <div class="hero-actions barber-profile-mobile-actions">
            <a class="primary-btn barber-profile-primary-btn" href="${buildBookingBarberHref(activeBarberId)}">Записаться</a>
            <a class="ghost-btn barber-profile-secondary-btn" href="/">Все барберы</a>
          </div>
          <div class="barber-profile-mobile-meta">
            <div class="barber-profile-meta-item" aria-label="Рейтинг ${ratingValue.toFixed(1)} из 5">
              <span class="barber-profile-meta-label">Рейтинг</span>
              <span class="barber-profile-meta-note">${Array.from({ length: 5 }, (_, index) => `<span class="barber-profile-star ${index < filledStars ? "is-filled" : ""}">★</span>`).join("")}</span>
              <strong>${ratingValue.toFixed(1)}</strong>
            </div>
            <div class="barber-profile-meta-item">
              <span class="barber-profile-meta-label">Услуги</span>
                    <strong class="barber-profile-meta-services">${servicesSummary}</strong>
              <span class="barber-profile-meta-note">доступно для записи</span>
            </div>
          </div>
        </article>
        ${reviews.length
          ? `
            <article class="content-card barber-profile-panel barber-reviews-card">
              <div class="section-head barber-profile-panel-head">
                <div>
                  <div class="section-eyebrow">Отзывы</div>
                  <h2 class="section-title">Что говорят клиенты</h2>
                </div>
              </div>
              <div class="barber-reviews-list">${reviews
                .map((review) => `
                  <article class="barber-review-item">
                    <div class="barber-review-head">
                      <strong>${normalizeText(review.author || review.name || "Клиент")}</strong>
                      <span class="subtitle">${normalizeText(review.date || "")}</span>
                    </div>
                    ${normalizeText(review.rating) ? `<div class="barber-review-rating">${"★".repeat(Math.max(1, Math.min(5, Math.round(Number(review.rating) || 0))))}</div>` : ""}
                    <p class="section-text">${normalizeText(review.text || review.comment || "")}</p>
                  </article>
                `)
                .join("")}</div>
            </article>
          `
          : `
            <article class="content-card barber-profile-panel barber-reviews-card">
              <div class="section-head barber-profile-panel-head">
                <div>
                  <div class="section-eyebrow">Комментарии</div>
                  <h2 class="section-title">Что пишут о барбере</h2>
                </div>
              </div>
              <div class="barber-review-empty"><p class="section-text">Пока комментариев нет. Первые отзывы клиентов появятся здесь.</p></div>
            </article>
          `}
      </section>
    `;
  };

  const renderProfilePage = () => {
    const user = state.payload?.user || {};
    const profile = state.payload?.profile || {};
    const booking = state.payload?.booking || {};
    const visitHistory = Array.isArray(profile.visitHistory) ? profile.visitHistory : [];
    const operations = Array.isArray(profile.operations) ? profile.operations : [];
    const notices = Array.isArray(profile.notices) ? profile.notices : [];
    const activeAppointments = Array.isArray(booking.activeAppointments) ? booking.activeAppointments : [];
    return memoizeRenderedFragment("page-profile", [user, profile, booking, state.profileHistoryFilter, state.profileCover.status, state.profileCover.source, state.profileAvatarPanelState, state.profileAvatarUploading], () => {
      const historyItems = getProfileHistoryItems(visitHistory, operations);
      const filteredHistory = getFilteredProfileHistoryItems(historyItems, state.profileHistoryFilter);
      const historyPreview = filteredHistory.slice(0, 3);
      const genderLabel = user.gender === "male" ? "Мужской" : user.gender === "female" ? "Женский" : user.gender === "other" ? "Другой" : "Не указан";
      const profileBio = [user.birthDate ? formatProfileDateOnly(user.birthDate) : "", normalizeText(user.gender) ? genderLabel : ""].filter(Boolean).join(" · ");
      const noticeLabel = user.noticeCount || 0;
      const isDesktopDevice = isDesktopLikeDevice();
      const isAvatarPanelVisible = state.profileAvatarPanelState !== "closed";
      const avatarPanelClass =
        state.profileAvatarPanelState === "open"
          ? "is-open"
          : state.profileAvatarPanelState === "closing"
            ? "is-closing"
            : "";
      const completionFields = [
        normalizeText(user.avatarUrl),
        normalizeText(user.displayName),
        normalizeText(user.phone),
        normalizeText(user.birthDate),
        normalizeText(user.gender),
        normalizeText(user.telegramId),
      ];
      const profileCompletion = Math.round((completionFields.filter(Boolean).length / completionFields.length) * 100);
      const hasAvatar = Boolean(normalizeText(user.avatarUrl));
      return `
      <section class="page profile-page">
        <article class="hero-card page-hero profile-hero">
          <div class="profile-cover"></div>
          <div class="profile-cover-actions">
            <button class="ghost-btn profile-cover-action icon-only-btn" type="button" data-action="navigate" data-href="/achievements/" aria-label="Достижения">${iconMarkup("trophy")}</button>
            <button class="ghost-btn profile-cover-action profile-cover-settings icon-only-btn" type="button" data-action="open-sheet" data-sheet="profile-menu" aria-label="Настройки">${iconMarkup("settings")}</button>
          </div>
          <div class="profile-social-head">
            <div class="profile-avatar-panel-shell">
              <button class="profile-avatar-trigger" type="button" data-action="toggle-profile-avatar-panel" aria-label="Сменить фото профиля" aria-expanded="${state.profileAvatarPanelState === "open" ? "true" : "false"}">
                ${avatarMarkup(user, 108)}
              </button>
              <div class="profile-avatar-panel ${avatarPanelClass}" aria-hidden="${isAvatarPanelVisible ? "false" : "true"}">
                <button class="ghost-btn profile-avatar-panel-action" type="button" data-action="profile-avatar-upload-device" ${state.profileAvatarUploading ? "disabled" : ""}>Загрузить с устройства</button>
                ${isDesktopDevice ? "" : `<button class="ghost-btn profile-avatar-panel-action" type="button" data-action="profile-avatar-open-camera" ${state.profileAvatarUploading ? "disabled" : ""}>Сделать снимок</button>`}
                <button class="ghost-btn profile-avatar-panel-action profile-avatar-panel-remove" type="button" data-action="profile-avatar-remove" ${hasAvatar && !state.profileAvatarUploading ? "" : "disabled"}>Удалить</button>
                <input id="profile-avatar-device-input" class="visually-hidden-input" type="file" accept="image/*" />
                ${isDesktopDevice ? "" : `<input id="profile-avatar-camera-input" class="visually-hidden-input" type="file" accept="image/*" capture="environment" />`}
              </div>
            </div>
            <div class="profile-social-copy">
              <div class="profile-title-row">
                <div>
                  <div class="hero-eyebrow">Личный кабинет</div>
                  <h1 class="hero-title">${normalizeText(user.displayName || "Клиент")}</h1>
                </div>
              </div>
              ${profileBio ? `<p class="profile-bio">${profileBio}</p>` : ""}
              <div class="profile-hero-phone-line">${formatPhone(user.phone)}</div>
            </div>
          </div>
          ${profileCompletion < 100 ? `<button class="profile-progress-card profile-progress-trigger" type="button" data-action="open-sheet" data-sheet="profile-edit"><div class="section-head"><div><div class="section-eyebrow">Прогресс профиля</div><h2 class="section-title">Профиль заполнен на ${profileCompletion}%</h2></div><span class="status-badge status-green">${completionFields.filter(Boolean).length}/${completionFields.length}</span></div><div class="progress-track"><div class="progress-bar" style="width:${profileCompletion}%"></div></div></button>` : ""}
          <div class="profile-summary-strip">
            <div class="profile-summary-cell"><span class="field-label">Визиты</span><strong>${visitHistory.length}</strong></div>
            <div class="profile-summary-cell"><span class="field-label">Замечания</span><button class="metric-trigger" type="button" data-action="open-sheet" data-sheet="profile-notices"><strong>${noticeLabel}</strong></button></div>
          </div>
        </article>
        <article class="list-card profile-next-booking-card">
          <div class="section-head">
            <div><div class="section-eyebrow">Активные записи</div><h2 class="section-title">${activeAppointments.length ? "Ближайшие визиты" : "Записей пока нет"}</h2></div>
          </div>
          ${activeAppointments.length
            ? `<div class="profile-active-bookings-list">${activeAppointments
                .map(
                  (appointment) => `<button class="profile-next-booking-surface" type="button" data-action="open-sheet" data-sheet="manage-booking" data-id="${normalizeText(appointment.id)}">
                    <div class="profile-next-booking-main">
                      <div class="profile-next-booking-head">
                        <p class="list-title">${normalizeText((appointment.services || []).join(", ") || "Детали доступны в booking")}</p>
                      </div>
                      <div class="profile-next-booking-meta">
                        <strong class="profile-next-booking-date">${formatDateOnly(appointment.date)}</strong>
                        <span class="profile-next-booking-dot" aria-hidden="true"></span>
                        <strong class="profile-next-booking-time">${normalizeText(appointment.timeLabel || appointment.time)}</strong>
                      </div>
                    </div>
                  </button>`,
                )
                .join("")}</div>`
            : `<div class="empty-state">Когда появятся активные записи, они будут отображаться здесь.</div>`}
        </article>
        <article class="list-card profile-history-card" data-action="open-sheet" data-sheet="profile-history">
          <div class="section-head">
            <div><div class="section-eyebrow">История посещений</div><h2 class="section-title">Последние операции</h2></div>
          </div>
          <div class="filter-row referral-pill-row profile-history-filter-row" data-pill-group="profile-history">
            <span class="referral-pill-indicator" aria-hidden="true"></span>
            <button class="nav-pill ${state.profileHistoryFilter === "all" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="all">Все</button>
            <button class="nav-pill ${state.profileHistoryFilter === "visits" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="visits">Визиты</button>
            <button class="nav-pill ${state.profileHistoryFilter === "payments" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="payments">Оплата</button>
          </div>
          <div class="timeline">${historyPreview.length ? historyPreview.map(renderProfileHistoryRow).join("") : `<div class="empty-state">История пока пуста.</div>`}</div>
          <div class="profile-history-more"><button class="ghost-btn history-more-btn" type="button" data-action="open-sheet" data-sheet="profile-history">Вся история</button></div>
        </article>
      </section>
    `;
    });
  };

  const renderSheet = () => {
    if (!state.sheet) return `<div class="sheet-backdrop" id="sheet-backdrop"></div>`;
    const sheetStateClass = state.sheetState === "closing" ? "is-closing" : state.sheetState === "open" ? "is-open" : "is-entering";
    const className = normalizeText(state.sheet.className);
    const isSuccessSheet = className.includes("sheet-success");
    const isPromoSheet = className.includes("promo-sheet-shell");
    return `<div class="sheet-backdrop ${sheetStateClass}" id="sheet-backdrop"><div class="sheet ${sheetStateClass} ${className}">${isSuccessSheet || isPromoSheet ? `<button class="ghost-btn icon-only-btn sheet-close-btn ${isSuccessSheet ? "sheet-success-close" : "promo-sheet-close"}" type="button" data-action="dismiss-sheet" aria-label="Закрыть">${iconMarkup("close")}</button>` : `<div class="sheet-head"><h3 class="section-title sheet-title">${state.sheet.title}</h3><button class="ghost-btn icon-only-btn sheet-close-btn" type="button" data-action="dismiss-sheet" aria-label="Закрыть">${iconMarkup("close")}</button></div>`}<div class="sheet-body">${state.sheet.bodyHtml || ""}</div>${state.sheet.footerHtml ? `<div style="margin-top:16px;">${state.sheet.footerHtml}</div>` : ""}</div></div>`;
  };

  const renderCurrentPage = () => {
    if (state.bootstrapError) {
      return `
        <section class="app-bootstrap-error loading-state">
          <p class="list-title">Не удалось загрузить приложение</p>
          <p>${normalizeText(state.bootstrapError)}</p>
          <div class="sheet-actions app-bootstrap-error-actions">
            ${isAuthenticated() ? `<button class="secondary-btn" type="button" data-action="logout">Выйти</button>` : ""}
            <button class="primary-btn" type="button" data-action="reload-app">Повторить</button>
          </div>
        </section>
      `;
    }
    if (!state.payload) return `<div class="loading-state">Загрузка приложения...</div>`;
    if (state.currentPage === "referral") return renderReferralPage();
    if (state.currentPage === "booking") return renderBookingPage();
    if (state.currentPage === "shop") return renderShopPage();
    if (state.currentPage === "barber") return renderBarberProfilePage();
    if (state.currentPage === "achievements") return renderAchievementsPage();
    if (state.currentPage === "profile") return renderProfilePage();
    return renderHomePage();
  };

  const syncDocumentMeta = () => {
    const barbers = getSortedBookingBarbers();
    const activeBarber = state.currentPage === "barber"
      ? barbers.find((item) => normalizeText(item.id) === normalizeText(state.activeBarberProfileId || getBarberIdFromPath(window.location.pathname))) || null
      : null;
    const titles = {
      home:
        normalizeText(window.location.pathname).replace(/\/+$/, "") === "/home"
          ? APP_HOME_TITLE
          : SEO_HOME_TITLE,
      referral: "BrotherShop • Бонусы",
      booking: "BrotherShop • Запись",
      shop: "BrotherShop • Магазин",
      barber: activeBarber ? `BrotherShop • ${normalizeText(activeBarber.name)}` : "BrotherShop • Барбер",
      achievements: "BrotherShop • Достижения",
      profile: "BrotherShop • Профиль",
    };
    document.title = titles[state.currentPage] || "BrotherShop";
    const ensureHeadTag = (selector, factory) => {
      let node = document.head.querySelector(selector);
      if (!node) {
        node = factory();
        document.head.appendChild(node);
      }
      return node;
    };
    const setMetaContent = (selector, attributeName, attributeValue, content) => {
      const node = ensureHeadTag(selector, () => {
        const meta = document.createElement("meta");
        meta.setAttribute(attributeName, attributeValue);
        return meta;
      });
      node.setAttribute("content", content);
    };
    const canonicalHref =
      state.currentPage === "home" && normalizeText(window.location.pathname).replace(/\/+$/, "") === ""
        ? `${window.location.origin}/`
        : `${window.location.origin}${window.location.pathname}`;
    const canonical = ensureHeadTag("link[rel='canonical']", () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });
    canonical.setAttribute("href", canonicalHref);
    setMetaContent(
      "meta[name='description']",
      "name",
      "description",
      state.currentPage === "home"
        ? normalizeText(window.location.pathname).replace(/\/+$/, "") === "/home"
          ? "Клиентское приложение BrotherShop."
          : SEO_HOME_DESCRIPTION
        : "BrotherShop",
    );
    setMetaContent(
      "meta[name='robots']",
      "name",
      "robots",
      state.currentPage === "home" && normalizeText(window.location.pathname).replace(/\/+$/, "") === ""
        ? "index,follow,max-image-preview:large"
        : "noindex,nofollow",
    );
    setMetaContent(
      "meta[property='og:title']",
      "property",
      "og:title",
      state.currentPage === "home"
        ? normalizeText(window.location.pathname).replace(/\/+$/, "") === "/home"
          ? APP_HOME_TITLE
          : SEO_HOME_TITLE
        : document.title,
    );
    setMetaContent(
      "meta[property='og:description']",
      "property",
      "og:description",
      state.currentPage === "home"
        ? normalizeText(window.location.pathname).replace(/\/+$/, "") === "/home"
          ? "Клиентское приложение BrotherShop."
          : SEO_HOME_OG_DESCRIPTION
        : "BrotherShop",
    );
    setMetaContent("meta[property='og:url']", "property", "og:url", canonicalHref);
  };

  const navigateTo = (href, options = {}) => {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) {
      window.location.assign(url.toString());
      return;
    }
    const nextPage = getPageFromPath(url.pathname);
    if (!nextPage) {
      window.location.assign(url.toString());
      return;
    }
    if (!isAuthenticated()) {
      const normalizedPath = normalizeText(url.pathname).replace(/\/+$/, "") || "/";
      if (nextPage === "home" && normalizedPath === "/") {
        if (options.replace) {
          window.history.replaceState(buildHistoryState(), "", url.pathname + url.search + url.hash);
        } else if (`${url.pathname}${url.search}${url.hash}` !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
          window.history.pushState(buildHistoryState(), "", url.pathname + url.search + url.hash);
        }
        state.currentPage = "home";
        state.routeTransitionActive = true;
        render();
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      redirectToLogin(`${url.pathname}${url.search}${url.hash}`, {
        replace: !(state.currentPage === "home" && (normalizeText(window.location.pathname).replace(/\/+$/, "") || "/") === "/"),
      });
      return;
    }
    if (!options.replace && `${url.pathname}${url.search}${url.hash}` === `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      return;
    }
    if (options.replace) {
      window.history.replaceState(buildHistoryState(), "", url.pathname + url.search + url.hash);
    } else {
      window.history.pushState(buildHistoryState(), "", url.pathname + url.search + url.hash);
    }
    state.navIndicatorIndex = Math.max(0, ["home", "referral", "booking", "shop", "profile"].findIndex((item) => item === state.currentPage));
    state.currentPage = nextPage;
    state.activeBarberProfileId = nextPage === "barber" ? getBarberIdFromPath(url.pathname) : "";
    state.booking.stepAnimationsEnabled = nextPage === "booking";
    state.routeTransitionActive = true;
    render();
    if (nextPage === "booking") {
      void syncBookingSelectionFromLocation();
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const syncBookingSelectionFromLocation = async () => {
    if (state.currentPage !== "booking" || !isAuthenticated()) return;
    const requestedBarberId = getBookingRouteBarberId(window.location);
    if (!requestedBarberId) return;
    const barbers = getSortedBookingBarbers();
    if (!barbers.some((barber) => normalizeText(barber.id) === requestedBarberId)) return;
    if (normalizeText(state.booking.barberId) === requestedBarberId && state.booking.services.length) return;
    state.booking.barberId = requestedBarberId;
    await loadServices();
  };

  const renderNow = () => {
    renderFrame = null;
    syncDocumentMeta();
    const { appHost, sheetHost } = ensureRenderHosts();
    let appChanged = false;
    let sheetChanged = false;
    if (pendingRenderApp) {
      const appHtml = `<div class="client-app"><div class="app-shell ${state.routeTransitionActive ? "route-transition" : ""}">${renderTopbar()}${renderCurrentPage()}${renderBottomNav()}</div></div>`;
      appChanged = lastRenderedHtml.app !== appHtml;
      if (appChanged) {
        appHost.innerHTML = appHtml;
        lastRenderedHtml.app = appHtml;
      }
    }
    if (pendingRenderSheet) {
      const sheetHtml = renderSheet();
      sheetChanged = lastRenderedHtml.sheet !== sheetHtml;
      if (sheetChanged) {
        sheetHost.innerHTML = sheetHtml;
        lastRenderedHtml.sheet = sheetHtml;
      }
    }
    pendingRenderApp = false;
    pendingRenderSheet = false;
    document.documentElement.classList.toggle("sheet-open", Boolean(state.sheet));
    document.body.classList.toggle("sheet-open", Boolean(state.sheet));
    state.routeTransitionActive = false;
    bindEvents({
      appRoot: appChanged ? appHost : null,
      sheetRoot: sheetChanged ? sheetHost : null,
    });
    const renderScope = appHost.querySelector(".client-app") || appHost;
    const sheetScope = sheetHost.querySelector(".sheet-backdrop");
    if (appChanged) setupMediaWaveLoading(renderScope);
    if (sheetChanged && sheetScope) setupMediaWaveLoading(sheetScope);
    if (appChanged) setupInteractiveBarberCards(renderScope);
    if (appChanged) scheduleReferralPillSync(renderScope);
    if (sheetChanged && sheetScope) scheduleReferralPillSync(sheetScope);
    applyProfileCoverTheme(renderScope);
    setupPromoMarqueeAutoScroll(renderScope);
    setupHomeBarberRotation();
    if (state.currentPage === "home" && isAuthenticated()) {
      const homeBarbers = getSortedBookingBarbers();
      const activeHomeBarber = homeBarbers.length
        ? homeBarbers[((state.homeBarberRotationIndex % homeBarbers.length) + homeBarbers.length) % homeBarbers.length]
        : null;
      if (activeHomeBarber?.id) ensureBarberProfileServices(activeHomeBarber.id).catch(() => {});
      const incomingHomeBarber = homeBarbers.length && state.homeBarberIncomingIndex >= 0
        ? homeBarbers[((state.homeBarberIncomingIndex % homeBarbers.length) + homeBarbers.length) % homeBarbers.length]
        : null;
      if (incomingHomeBarber?.id) ensureBarberProfileServices(incomingHomeBarber.id).catch(() => {});
    }
    if (
      state.currentPage === "referral" ||
      ["Быстрый перевод", "Перевести BS"].includes(normalizeText(state.sheet?.title))
    ) {
      setupTransferRecipientCarousels(sheetChanged && sheetScope ? sheetScope : renderScope);
    }
    const nav = appHost.querySelector(".bottom-nav");
    if (nav) {
      const targetIndex = Number(nav.dataset.activeIndex || 0);
      window.requestAnimationFrame(() => {
        nav.style.setProperty("--indicator-index", String(targetIndex));
      });
      state.navIndicatorIndex = targetIndex;
    }
    if (state.currentPage === "booking" && state.booking.stepAnimationsEnabled) {
      state.booking.stepAnimationsEnabled = false;
    }
    if (state.currentPage === "barber") {
      ensureBarberProfileServices().catch(() => {});
    }
    syncAppointmentEtaTimer();
    ensureProfileCoverPalette().catch(() => {});
  };

  const render = (options = {}) => {
    pendingRenderApp = options.app === false ? pendingRenderApp : true;
    pendingRenderSheet = options.sheet === false ? pendingRenderSheet : true;
    if (renderFrame !== null) return;
    renderFrame = window.requestAnimationFrame(renderNow);
  };

  const loadServices = async () => {
    if (!state.booking.barberId) return;
    state.booking.loading = true;
    const payload = await apiRequest(`/booking/services?barberId=${encodeURIComponent(state.booking.barberId)}`);
    state.booking.canBook = payload?.canBook !== false;
    state.booking.limitMessage = normalizeText(payload?.message);
    state.booking.bookingLimit = Math.max(0, Number(payload?.bookingLimit) || 0);
    state.booking.activeAppointmentsCount = Math.max(0, Number(payload?.activeAppointments) || 0);
    state.booking.services = state.booking.canBook && Array.isArray(payload.services) ? payload.services : [];
    state.booking.selectedServices = [];
    state.booking.appliedBs = 0;
    state.booking.bsCoverExpanded = false;
    state.booking.dates = [];
    state.booking.selectedDate = "";
    state.booking.times = [];
    state.booking.selectedTime = "";
    state.booking.comment = "";
    state.booking.loading = false;
    render();
  };

  const ensureBarberProfileServices = async (explicitBarberId = "", options = {}) => {
    const barberId = normalizeText(explicitBarberId || state.activeBarberProfileId || getBarberIdFromPath(window.location.pathname));
    if (!barberId) return;
    const suppressRender = options?.suppressRender === true;
    const existing = state.barberProfileServices?.[barberId];
    if (existing?.status === "loading" || existing?.status === "ready") return;
    state.barberProfileServices[barberId] = { status: "loading", items: [] };
    try {
      const payload = await apiRequest(`/booking/services?barberId=${encodeURIComponent(barberId)}`);
      const items = Array.isArray(payload?.services)
        ? payload.services
            .map((service) => normalizeText(service?.name || service?.title || service?.label || service))
            .filter(Boolean)
        : [];
      state.barberProfileServices[barberId] = { status: "ready", items };
    } catch (error) {
      state.barberProfileServices[barberId] = { status: "error", items: [] };
    }
    if (!suppressRender && (
      (state.currentPage === "barber" && normalizeText(state.activeBarberProfileId || getBarberIdFromPath(window.location.pathname)) === barberId) ||
      (state.currentPage === "home" && Array.isArray(state.payload?.booking?.barbers) && normalizeText(state.payload.booking.barbers[((state.homeBarberRotationIndex % state.payload.booking.barbers.length) + state.payload.booking.barbers.length) % state.payload.booking.barbers.length]?.id) === barberId)
    )) {
      if (state.currentPage === "home") updateHomeBarberRotationDom();
      else render({ sheet: false });
    }
  };

  const loadDates = async () => {
    if (!state.booking.barberId || !state.booking.selectedServices.length) {
      state.booking.dates = [];
      state.booking.selectedDate = "";
      state.booking.times = [];
      state.booking.selectedTime = "";
      state.booking.comment = "";
      render();
      return;
    }
    const payload = await apiRequest(`/booking/dates?barberId=${encodeURIComponent(state.booking.barberId)}&serviceIds=${encodeURIComponent(state.booking.selectedServices.join(","))}`);
    state.booking.dates = Array.isArray(payload.dates) ? payload.dates : [];
    syncBookingBsCover();
    state.booking.selectedDate = "";
    state.booking.times = [];
    state.booking.selectedTime = "";
    state.booking.comment = "";
    render();
  };

  const loadTimes = async () => {
    if (!state.booking.barberId || !state.booking.selectedServices.length || !state.booking.selectedDate) return;
    const payload = await apiRequest(`/booking/times?barberId=${encodeURIComponent(state.booking.barberId)}&serviceIds=${encodeURIComponent(state.booking.selectedServices.join(","))}&date=${encodeURIComponent(state.booking.selectedDate)}`);
    state.booking.times = Array.isArray(payload.times) ? payload.times : [];
    syncBookingBsCover();
    state.booking.selectedTime = "";
    state.booking.comment = "";
    render();
  };

  const submitBooking = async () => {
    if (!state.booking.barberId || !state.booking.selectedServices.length || !state.booking.selectedDate || !state.booking.selectedTime) return;
    state.booking.submitting = true;
    render();
    try {
      await apiRequest("/booking/appointments", {
        method: "POST",
        body: JSON.stringify({
          barberId: state.booking.barberId,
          serviceIds: state.booking.selectedServices,
          date: state.booking.selectedDate,
          startTime: state.booking.selectedTime,
          comment: normalizeText(state.booking.comment),
          coverBsAmount: Math.max(0, Math.trunc(Number(state.booking.appliedBs) || 0)),
        }),
      });
      commitAppPayload(await apiRequest("/app"));
      state.booking = {
        barberId: "",
        services: [],
        selectedServices: [],
        appliedBs: 0,
        bsCoverExpanded: false,
        dates: [],
        selectedDate: "",
        times: [],
        selectedTime: "",
        comment: "",
        canBook: true,
        limitMessage: "",
        bookingLimit: 0,
        activeAppointmentsCount: 0,
        loading: false,
        submitting: false,
        stepAnimationsEnabled: false,
      };
      render({ sheet: false });
      openSheet("Запись создана", buildBookingStatusSheet("Запись создана"), "", "sheet-success");
    } catch (error) {
      state.booking.submitting = false;
      openSheet("Ошибка записи", `<div class="list-item"><p class="list-title">${normalizeText(error.message || "Не удалось создать запись.")}</p></div>`);
      return;
    }
  };

  const cancelHomeBooking = async (appointmentId) => {
    const safeId = normalizeText(appointmentId);
    if (!safeId) throw new Error("Не удалось определить запись.");
    await apiRequest(`/booking/appointments/${encodeURIComponent(safeId)}/cancel`, {
      method: "POST",
    });
    state.pendingBookingCancellationId = "";
    commitAppPayload(await apiRequest("/app"));
    render({ sheet: false });
    dismissSheet();
  };

  const requestReferralTransferPreview = async (draft) => {
    const payload = await apiRequest("/referral/transfer/preview", {
      method: "POST",
      body: JSON.stringify({
        targetPhone: normalizePhone(draft?.targetPhone),
      }),
    });
    return payload?.recipient || null;
  };

  const submitReferralTransfer = async (draft) => {
    const payload = await apiRequest("/referral/transfer", {
      method: "POST",
      body: JSON.stringify({
        targetPhone: normalizePhone(draft?.targetPhone),
        amountBs: Number(draft?.amountBs || 0),
        comment: normalizeText(draft?.comment),
      }),
    });
    state.referralTransferDraft = null;
    state.referralTransferError = "";
    if (payload?.referral) {
      commitAppPayload({
        ...(state.payload || {}),
        referral: payload.referral,
      });
    } else {
      commitAppPayload(await apiRequest("/app"));
    }
    render({ sheet: false });
    dismissSheet();
  };

  const openNamedSheet = (sheetId) => {
    if (sheetId === "bs") {
      const referral = state.payload?.referral || {};
      openSheet("BS баланс", `<div class="metric-card"><div class="section-eyebrow">Сейчас</div><div class="metric-value">${referral.bsBalance || 0} BS</div><p class="muted-text">Следующая цель: ${referral.scale?.next || 0} BS</p></div>`);
      return;
    }
    if (sheetId === "referral-levels") {
      openSheet("Уровни и награды", buildReferralLevelsSheet(), "", "sheet-wide");
      return;
    }
    if (sheetId === "referrals") {
      const items = Array.isArray(state.payload?.referral?.referrals) ? state.payload.referral.referrals : [];
      openSheet(
        "Мои рефералы",
        items.length
          ? `<div class="list referral-sheet-list">${items
              .map(
                (item) => `<div class="list-item referral-sheet-item"><div class="section-head"><div><p class="list-title">${normalizeText(item.fullName)}</p><p class="subtitle">${item.phone ? formatPhone(item.phone) : "Телефон скрыт"}</p></div><span class="status-badge ${statusColorClass(item.color)}">${referralColorLabel(item.color)}</span></div><div class="referral-sheet-meta"><span>Выполненных записей: <strong>${item.completedVisits || 0}</strong></span><span>Начисляемых BS: <strong>${item.rewardedVisits || 0}</strong></span><span>Последний визит: <strong>${item.lastVisitAt ? formatDateTime(item.lastVisitAt) : "Нет данных"}</strong></span></div></div>`,
              )
              .join("")}</div>`
          : `<div class="empty-state">Рефералов пока нет.</div>`,
        "",
        "sheet-wide",
      );
      return;
    }
    if (sheetId === "referral-history") {
      const operations = Array.isArray(state.payload?.referral?.operations) ? state.payload.referral.operations : [];
      const filteredOperations = getFilteredReferralActivity(operations, state.transferHistoryFilter);
      openSheet(
        "История BS",
        operations.length
          ? `<div class="filter-row sheet-filter-row referral-history-filter-row referral-pill-row" data-pill-group="referral-history">
              <span class="referral-pill-indicator" aria-hidden="true"></span>
              <button class="nav-pill ${state.transferHistoryFilter === "all" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="all">Все</button>
              <button class="nav-pill ${state.transferHistoryFilter === "transfers" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="transfers">Переводы</button>
              <button class="nav-pill ${state.transferHistoryFilter === "rewards" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="rewards">Награды</button>
            </div>
            <div class="referral-activity-list referral-history-list">${filteredOperations.length
              ? filteredOperations.map((operation) => renderReferralOperationCard(operation)).join("")
              : `<div class="empty-state">По этому фильтру пока нет движений BS.</div>`}</div>`
          : `<div class="empty-state">Пока нет начислений и списаний.</div>`,
        "",
        "sheet-wide referral-history-sheet",
      );
      return;
    }
    if (sheetId === "transfer-bs") {
      openSheet(
        "Перевести BS",
        buildTransferBsSheet(),
        "",
        "sheet-wide transfer-bs-sheet",
      );
      return;
    }
    if (sheetId === "my-transfer-qr") {
      openSheet("Мой QR", buildReferralQrSheet(), "", "sheet-wide");
      return;
    }
    if (sheetId === "scan-transfer-qr") {
      openSheet("Сканировать QR", buildReferralQrScannerSheet(), "", "sheet-wide");
      return;
    }
    if (sheetId === "quick-transfer") {
      const draft = state.referralTransferDraft || {};
      openSheet("Быстрый перевод", buildQuickTransferSheet(draft), "", "sheet-wide");
      return;
    }
    if (sheetId === "confirm-transfer-bs") {
      openSheet(
        "Подтверждение перевода",
        buildConfirmTransferBsSheet(),
        "",
        "sheet-wide transfer-bs-sheet",
      );
      return;
    }
    if (sheetId === "manage-booking") {
      const appointment = Array.isArray(state.payload?.booking?.activeAppointments)
        ? state.payload.booking.activeAppointments.find((item) => normalizeText(item.id) === normalizeText(state.pendingBookingCancellationId))
        : null;
      openSheet(
        "Управление записью",
        buildManageBookingSheet(appointment),
        "",
        "sheet-wide",
      );
      return;
    }
    if (sheetId === "cancel-booking") {
      const appointment = Array.isArray(state.payload?.booking?.activeAppointments)
        ? state.payload.booking.activeAppointments.find((item) => normalizeText(item.id) === normalizeText(state.pendingBookingCancellationId))
        : null;
      const targetId = normalizeText(state.pendingBookingCancellationId || appointment?.id || "");
      openSheet(
        "Отменить запись",
        `<div class="list-item"><p class="list-title">Отменить текущую запись?</p><p class="subtitle">Запись будет отменена без возможности её вернуть.${appointment?.date ? ` · ${formatDateOnly(appointment.date)}` : ""}${appointment?.time || appointment?.timeLabel ? ` · ${normalizeText(appointment?.timeLabel || appointment?.time)}` : ""}</p></div><div class="inline-actions"><button class="danger-btn" type="button" data-action="confirm-cancel-booking" data-id="${targetId}">Отменить запись</button><button class="ghost-btn" type="button" data-action="close-sheet">Назад</button></div>`,
      );
      return;
    }
    if (sheetId === "profile-menu") {
      openSheet("Настройки", `<div class="list"><button class="list-item menu-action" type="button" data-action="open-sheet" data-sheet="profile-edit"><p class="list-title">Редактировать профиль</p><p class="subtitle">Имя, телефон, дата рождения, пол и фото.</p></button><button class="list-item menu-action" type="button" data-action="open-sheet" data-sheet="profile-security"><p class="list-title">Безопасность</p><p class="subtitle">Смена пароля, Telegram и защита доступа.</p></button><button class="list-item menu-action" type="button" data-action="open-sheet" data-sheet="profile-notifications"><p class="list-title">Настройки уведомлений</p><p class="subtitle">Уведомления о записях и пополнениях BS.</p></button><button class="list-item menu-action danger-surface" type="button" data-action="open-sheet" data-sheet="profile-logout-confirm"><p class="list-title">Выход</p><p class="subtitle">Выйти из аккаунта.</p></button></div>`);
      return;
    }
    if (sheetId === "profile-logout-confirm") {
      openSheet("Подтвердите выход", `<div class="list-item"><p class="list-title">Выйти из аккаунта?</p><p class="subtitle">Вы выйдете из аккаунта на этом устройстве.</p></div><div class="inline-actions"><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="profile-menu">Назад</button><button class="danger-btn" type="button" data-action="logout">Выйти из аккаунта</button></div>`);
      return;
    }
    if (sheetId === "profile-edit") {
      const user = state.payload?.user || {};
      openSheet("Редактировать профиль", `<form class="form-grid profile-edit-form-layout" id="profile-edit-form"><label class="field"><span class="field-label">ФИО</span><input name="displayName" value="${normalizeText(user.displayName)}" required /></label><label class="field"><span class="field-label">Телефон</span><input name="phone" value="${normalizeText(user.phone)}" required /></label><label class="field"><span class="field-label">Дата рождения</span><input type="date" name="birthDate" value="${normalizeText(user.birthDate)}" /></label><label class="field"><span class="field-label">Пол</span><select name="gender"><option value="">Не указан</option><option value="male" ${user.gender === "male" ? "selected" : ""}>Мужской</option><option value="female" ${user.gender === "female" ? "selected" : ""}>Женский</option><option value="other" ${user.gender === "other" ? "selected" : ""}>Другой</option></select></label><div class="field profile-avatar-field"><span class="field-label">Фото</span>${renderProfileAvatarUploadControl(user, { prefix: "profile-avatar-edit", title: "Загрузить фото", showCameraButton: !isDesktopLikeDevice() })}</div><div class="inline-actions profile-edit-submit"><button class="primary-btn" type="submit" disabled>Сохранить</button><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="profile-menu">Назад</button></div></form>`, "", "sheet-wide profile-edit-sheet");
      return;
    }
    if (sheetId === "profile-security") {
      const user = state.payload?.user || {};
      openSheet("Безопасность", `<form class="form-grid" id="profile-password-form"><div class="telegram-sheet-card profile-edit-telegram profile-security-telegram"><div class="profile-security-row-copy"><p class="list-title">${user.telegramId ? "Telegram привязан" : "Telegram не подключен"}</p><p class="subtitle">${user.telegramId ? "Быстрый вход через Telegram уже доступен." : "Подключите Telegram для быстрого входа в личный кабинет."}</p></div><div class="inline-actions"><button class="tonal-btn" type="button" data-action="${user.telegramId ? "unlink-telegram" : "link-telegram"}">${user.telegramId ? "Отвязать Telegram" : "Привязать Telegram"}</button></div></div><div class="security-password-toggle"><button class="security-password-trigger" type="button" data-action="show-password-change"><div class="profile-security-row-copy"><p class="list-title">Сменить пароль</p><p class="subtitle">Задайте новый пароль для входа на сайте.</p></div><span class="security-password-trigger-action">Изменить</span></button></div><div id="security-password-fields" hidden><label class="field"><span class="field-label">Новый пароль</span><input type="password" name="password" /></label></div><div class="inline-actions"><button class="primary-btn" type="submit" disabled>Сохранить</button><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="profile-menu">Назад</button></div></form>`);
      return;
    }
    if (sheetId === "profile-notifications") {
      const user = state.payload?.user || {};
      openSheet("Уведомления", `<form class="form-grid" id="profile-notifications-form"><label class="toggle-card"><div><p class="list-title">Уведомления о записях</p><p class="subtitle">Показывать уведомления на сайте о создании и изменениях записи к барберу.</p></div><input type="checkbox" name="bookingNotificationsEnabled" ${user.bookingNotificationsEnabled !== false ? "checked" : ""} /></label><label class="toggle-card"><div><p class="list-title">Уведомления о пополнении BS</p><p class="subtitle">Системные уведомления браузера и анимация в шапке при поступлении бонусов.</p></div><input type="checkbox" name="balanceNotificationsEnabled" ${user.balanceNotificationsEnabled !== false ? "checked" : ""} /></label><div class="inline-actions"><button class="primary-btn" type="submit" disabled>Сохранить</button><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="profile-menu">Назад</button></div></form>`);
      return;
    }
    if (sheetId === "profile-notices") {
      const notices = Array.isArray(state.payload?.profile?.notices) ? state.payload.profile.notices : [];
      openSheet("Замечания", notices.length ? `<div class="list">${notices.map((notice) => `<div class="list-item"><p class="list-title">${normalizeText(notice.title)}</p><p class="subtitle">${normalizeText(notice.description)} · ${formatProfileDateTime(notice.createdAt)}</p></div>`).join("")}</div>` : `<div class="empty-state">Замечаний нет.</div>`);
      return;
    }
    if (sheetId === "profile-name") {
      const user = state.payload?.user || {};
      openSheet("ФИО", `<form class="form-grid" id="profile-name-form"><label class="field"><span class="field-label">ФИО</span><input name="displayName" value="${normalizeText(user.displayName)}" required /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-phone") {
      const user = state.payload?.user || {};
      openSheet("Телефон", `<form class="form-grid" id="profile-phone-form"><label class="field"><span class="field-label">Телефон</span><input name="phone" value="${normalizeText(user.phone)}" required /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-birthdate") {
      const user = state.payload?.user || {};
      openSheet("Дата рождения", `<form class="form-grid" id="profile-birthdate-form"><label class="field"><span class="field-label">Дата рождения</span><input type="date" name="birthDate" value="${normalizeText(user.birthDate)}" /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-gender") {
      const user = state.payload?.user || {};
      openSheet("Пол", `<form class="form-grid" id="profile-gender-form"><label class="field"><span class="field-label">Пол</span><select name="gender"><option value="">Не указан</option><option value="male" ${user.gender === "male" ? "selected" : ""}>Мужской</option><option value="female" ${user.gender === "female" ? "selected" : ""}>Женский</option><option value="other" ${user.gender === "other" ? "selected" : ""}>Другой</option></select></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-password") {
      openSheet("Новый пароль", `<form class="form-grid" id="profile-password-form"><label class="field"><span class="field-label">Новый пароль</span><input type="password" name="password" required /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-history") {
      const profile = state.payload?.profile || {};
      const visitHistory = Array.isArray(profile.visitHistory) ? profile.visitHistory : [];
      const operations = Array.isArray(profile.operations) ? profile.operations : [];
      const historyItems = getProfileHistoryItems(visitHistory, operations);
      const filteredHistory = getFilteredProfileHistoryItems(historyItems, state.profileHistoryFilter);
      openSheet("Вся история", `<div class="filter-row sheet-filter-row referral-pill-row profile-history-filter-row" data-pill-group="profile-history"><span class="referral-pill-indicator" aria-hidden="true"></span><button class="nav-pill ${state.profileHistoryFilter === "all" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="all">Все</button><button class="nav-pill ${state.profileHistoryFilter === "visits" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="visits">Визиты</button><button class="nav-pill ${state.profileHistoryFilter === "payments" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="payments">Оплата</button></div><div class="timeline">${filteredHistory.length ? filteredHistory.map(renderProfileHistoryRow).join("") : `<div class="empty-state">История пока пуста.</div>`}</div>`);
      return;
    }
  };

  const saveProfilePatch = async (patch) => {
    const safePatch = patch || {};
    if (state.payload?.user) {
      const nextUserPatch = Object.fromEntries(
        Object.entries(safePatch).filter(([key, value]) => value !== undefined && (value !== "" || key === "avatarUrl")),
      );
      commitAppPayload({
        ...state.payload,
        user: {
          ...state.payload.user,
          ...nextUserPatch,
        },
      });
    }
    closeSheet();
    try {
      await apiRequest("/profile", {
        method: "PUT",
        body: JSON.stringify(safePatch),
      });
      commitAppPayload(await apiRequest("/app"));
      render();
    } catch (error) {
      commitAppPayload(await apiRequest("/app").catch(() => state.payload));
      render();
      throw error;
    }
  };
  const handleProfileAvatarFileSelection = async (file) => {
    if (!(file instanceof File) || !file.name) {
      throw new Error("Выберите изображение.");
    }
    if (!normalizeText(file.type).startsWith("image/")) {
      throw new Error("Нужен файл изображения.");
    }
    if (Number(file.size) > 5 * 1024 * 1024) {
      throw new Error("Файл должен быть не больше 5 МБ.");
    }
    state.profileAvatarUploading = true;
    render();
    try {
      const avatarUrl = await cropImageFileToSquareDataUrl(file);
      await saveProfilePatch({ avatarUrl });
      state.profileAvatarPanelState = "closed";
    } finally {
      state.profileAvatarUploading = false;
      render();
    }
  };
  const removeProfileAvatar = async () => {
    state.profileAvatarUploading = true;
    render();
    try {
      await saveProfilePatch({ avatarUrl: "" });
      state.profileAvatarPanelState = "closed";
    } finally {
      state.profileAvatarUploading = false;
      render();
    }
  };
  const openProfileAvatarPanel = () => {
    if (profileAvatarPanelCloseTimer) {
      window.clearTimeout(profileAvatarPanelCloseTimer);
      profileAvatarPanelCloseTimer = null;
    }
    state.profileAvatarPanelState = "open";
    render();
  };
  const closeProfileAvatarPanel = () => {
    if (state.profileAvatarPanelState === "closed" || state.profileAvatarPanelState === "closing") return;
    if (profileAvatarPanelCloseTimer) {
      window.clearTimeout(profileAvatarPanelCloseTimer);
      profileAvatarPanelCloseTimer = null;
    }
    state.profileAvatarPanelState = "closing";
    const panel = ROOT.querySelector(".profile-avatar-panel");
    const trigger = ROOT.querySelector(".profile-avatar-trigger");
    if (panel) {
      panel.classList.remove("is-open");
      panel.classList.add("is-closing");
      panel.setAttribute("aria-hidden", "false");
    }
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
    }
    profileAvatarPanelCloseTimer = window.setTimeout(() => {
      state.profileAvatarPanelState = "closed";
      profileAvatarPanelCloseTimer = null;
      render();
    }, 240);
  };
  const toggleProfileAvatarPanel = () => {
    if (state.profileAvatarPanelState === "open") {
      closeProfileAvatarPanel();
      return;
    }
    openProfileAvatarPanel();
  };

  const startTelegramLink = async () => {
    const payload = await apiRequest("/profile/telegram/start", { method: "POST" });
    state.telegramLinkRequestId = normalizeText(payload.requestId);
    openSheet(
      "Привязать Telegram",
      `<div class="list-item"><p class="list-title">Откройте Telegram и подтвердите привязку.</p><p class="subtitle">${normalizeText(payload.botUsername) ? `Бот: @${normalizeText(payload.botUsername)}` : "Бот недоступен."}</p></div>${normalizeText(payload.botLink) ? `<a class="primary-btn" href="${normalizeText(payload.botLink)}" target="_blank" rel="noopener noreferrer">Открыть Telegram</a>` : ""}<div class="inline-actions"><button class="ghost-btn" type="button" data-action="check-telegram-link">Проверить статус</button></div>`,
    );
  };

  const checkTelegramLink = async () => {
    if (!state.telegramLinkRequestId) return;
    const payload = await apiRequest(`/profile/telegram/status?requestId=${encodeURIComponent(state.telegramLinkRequestId)}`);
    if (payload?.done && payload?.success && payload?.user) {
      commitAppPayload(await apiRequest("/app"));
      state.telegramLinkRequestId = "";
      render({ sheet: false });
      openSheet("Telegram привязан", `<div class="list-item"><p class="list-title">Аккаунт успешно привязан.</p></div>`);
      return;
    }
    if (payload?.done && !payload?.success) {
      state.telegramLinkRequestId = "";
      openSheet("Привязка не завершена", `<div class="list-item"><p class="list-title">${normalizeText(payload.message || "Не удалось завершить привязку.")}</p></div>`);
      return;
    }
    openSheet("Привязать Telegram", `<div class="list-item"><p class="list-title">Привязка еще не завершена.</p><p class="subtitle">Вернитесь в Telegram и подтвердите вход, затем проверьте статус снова.</p></div><div class="inline-actions"><button class="ghost-btn" type="button" data-action="check-telegram-link">Проверить статус</button></div>`);
  };

  const unlinkTelegram = async () => {
    await apiRequest("/profile/telegram/unlink", { method: "POST" });
    commitAppPayload(await apiRequest("/app"));
    render({ sheet: false });
  };

  const syncReferralCopyButtons = () => {
    document.querySelectorAll("[data-action='copy-referral']").forEach((button) => {
      const copied = state.referralLinkCopied === true;
      button.classList.toggle("is-copied", copied);
      const label = button.querySelector("span:last-child");
      if (!label) return;
      if (button.classList.contains("referral-wallet-action")) {
        label.textContent = copied ? "Ссылка скопирована" : "Реферальная ссылка";
      } else {
        label.textContent = copied ? "Ссылка скопирована" : "Пригласить первого клиента";
      }
    });
  };

  const openPromoSheet = (promoId, promoIndex) => {
    const promos = Array.isArray(state.payload?.site?.home?.promos) ? state.payload.site.home.promos : [];
    const numericPromoIndex = Number.parseInt(promoIndex, 10);
    const promo =
      (Number.isInteger(numericPromoIndex) && numericPromoIndex >= 0 && numericPromoIndex < promos.length
        ? promos[numericPromoIndex]
        : null) ||
      promos.find((item) => normalizeText(item.id) === normalizeText(promoId));
    if (!promo) return;
    openSheet(
      normalizeText(promo.title || "Акция"),
      `<article class="promo-sheet-card">
        ${normalizeText(promo.imageUrl) ? `<div class="promo-sheet-hero" style="background-image:url('${normalizeText(promo.imageUrl)}');"><div class="promo-sheet-hero-glow"></div><div class="promo-sheet-hero-copy"><strong>${normalizeText(promo.title)}</strong></div></div>` : `<div class="promo-sheet-hero promo-sheet-hero-empty"><div class="promo-sheet-hero-copy"><strong>${normalizeText(promo.title)}</strong></div></div>`}
        <div class="promo-sheet-body">
          ${normalizeText(promo.subtitle) ? `<div class="promo-sheet-summary"><p class="list-title">${normalizeText(promo.subtitle)}</p></div>` : ""}
          <div class="promo-sheet-copy">
            <p>${normalizeText(promo.details) || "Подробности акции скоро появятся."}</p>
          </div>
          ${normalizeText(promo.buttonLabel) && normalizeText(promo.buttonUrl) ? `<a class="primary-btn" href="${normalizeText(promo.buttonUrl)}" target="_blank" rel="noopener noreferrer">${normalizeText(promo.buttonLabel)}</a>` : ""}
        </div>
      </article>`,
      "",
      "sheet-wide promo-sheet-shell",
    );
  };

  const installDelegatedHandlers = () => {
    if (delegatedHandlersBound) return;
    delegatedHandlersBound = true;

    ROOT.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (link && ROOT.contains(link)) {
        const href = normalizeText(link.getAttribute("href"));
        if (
          href &&
          !href.startsWith("#") &&
          !link.hasAttribute("download") &&
          (!link.target || link.target === "_self") &&
          !(/^(mailto:|tel:|https?:)/i.test(href) && !href.startsWith("/"))
        ) {
          if (!(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) {
            event.preventDefault();
            navigateTo(href);
            return;
          }
        }
      }

      if (
        state.currentPage === "profile" &&
        state.profileAvatarPanelState === "open" &&
        !event.target.closest(".profile-avatar-panel-shell")
      ) {
        closeProfileAvatarPanel();
      }

      const actionNode = event.target.closest("[data-action]");
      if (!actionNode || !ROOT.contains(actionNode)) return;
      const action = normalizeText(actionNode.dataset.action);
      if (!action) return;

      switch (action) {
        case "logout":
          event.preventDefault();
          logout();
          return;
        case "reload-app":
          event.preventDefault();
          window.location.reload();
          return;
        case "link-telegram":
          event.preventDefault();
          void startTelegramLink();
          return;
        case "unlink-telegram":
          event.preventDefault();
          void unlinkTelegram();
          return;
        case "check-telegram-link":
          event.preventDefault();
          void checkTelegramLink();
          return;
        case "show-password-change": {
          event.preventDefault();
          const passwordFields = document.getElementById("security-password-fields");
          if (!passwordFields) return;
          passwordFields.hidden = false;
          actionNode.hidden = true;
          const passwordInput = passwordFields.querySelector("input[name='password']");
          if (passwordInput) passwordInput.focus();
          passwordInput?.dispatchEvent(new Event("input", { bubbles: true }));
          return;
        }
        case "close-sheet":
          event.preventDefault();
          closeSheet();
          return;
        case "dismiss-sheet":
          event.preventDefault();
          dismissSheet();
          return;
        case "open-sheet":
          event.preventDefault();
          closeProfileAvatarPanel();
          if (["cancel-booking", "manage-booking"].includes(normalizeText(actionNode.dataset.sheet))) {
            state.pendingBookingCancellationId = normalizeText(actionNode.dataset.id);
          }
          openNamedSheet(actionNode.dataset.sheet);
          return;
        case "toggle-profile-avatar-panel":
          event.preventDefault();
          toggleProfileAvatarPanel();
          return;
        case "profile-avatar-upload-device": {
          event.preventDefault();
          const input = document.getElementById("profile-avatar-device-input");
          try {
            if (typeof input?.showPicker === "function") input.showPicker();
            else input?.click();
          } catch {
            input?.click();
          }
          return;
        }
        case "profile-avatar-open-camera": {
          event.preventDefault();
          const input = document.getElementById("profile-avatar-camera-input");
          try {
            if (typeof input?.showPicker === "function") input.showPicker();
            else input?.click();
          } catch {
            input?.click();
          }
          return;
        }
        case "profile-avatar-remove":
          event.preventDefault();
          void removeProfileAvatar().catch((error) => {
            openSheet("Ошибка изображения", `<div class="list-item"><p class="list-title">${normalizeText(error?.message || "Не удалось удалить фото.")}</p></div>`);
          });
          return;
        case "navigate": {
          event.preventDefault();
          const href = normalizeText(actionNode.dataset.href);
          if (!href) return;
          navigateTo(href);
          return;
        }
        case "open-barber-profile": {
          event.preventDefault();
          const barberId = normalizeText(actionNode.dataset.id);
          if (!barberId) return;
          navigateTo(`/barber/${encodeURIComponent(barberId)}/`);
          return;
        }
        case "book-another":
          event.preventDefault();
          closeSheet();
          {
            const appointmentId = normalizeText(actionNode.dataset.id || state.pendingBookingCancellationId);
            const appointment = Array.isArray(state.payload?.booking?.activeAppointments)
              ? state.payload.booking.activeAppointments.find((item) => normalizeText(item.id) === appointmentId)
              : null;
            window.setTimeout(() => navigateTo(buildBookingBarberHref(appointment?.barberId)), 180);
          }
          return;
        case "download-booking-reminder": {
          event.preventDefault();
          const appointmentId = normalizeText(actionNode.dataset.id || state.pendingBookingCancellationId);
          const appointment = Array.isArray(state.payload?.booking?.activeAppointments)
            ? state.payload.booking.activeAppointments.find((item) => normalizeText(item.id) === appointmentId)
            : null;
          downloadAppointmentReminder(appointment);
          return;
        }
        case "set-history-filter":
          event.preventDefault();
          event.stopPropagation();
          {
            const nextFilter = normalizeText(actionNode.dataset.filter) || "all";
            if (state.profileHistoryFilter === nextFilter) return;
            state.profileHistoryFilter = nextFilter;
          }
          if (actionNode.closest("[data-render-host='sheet']")) {
            openNamedSheet("profile-history");
            return;
          }
          {
            const filterRow = actionNode.closest(".profile-history-filter-row");
            if (filterRow) {
              filterRow.querySelectorAll(".nav-pill").forEach((button) => {
                button.classList.toggle("active", normalizeText(button.dataset.filter) === state.profileHistoryFilter);
              });
              scheduleReferralPillSync(filterRow);
            }
          }
          if (!refreshProfileHistoryDom()) render();
          return;
        case "set-transfer-filter":
          event.preventDefault();
          event.stopPropagation();
          {
            const nextFilter = normalizeText(actionNode.dataset.filter) || "all";
            if (state.transferHistoryFilter === nextFilter) return;
            state.transferHistoryFilter = nextFilter;
          }
          if (actionNode.closest("[data-render-host='sheet']")) {
            {
              const filterRow = actionNode.closest(".referral-history-filter-row");
              if (filterRow) {
                filterRow.querySelectorAll(".nav-pill").forEach((button) => {
                  button.classList.toggle("active", normalizeText(button.dataset.filter) === state.transferHistoryFilter);
                });
                scheduleReferralPillSync(filterRow);
              }
            }
            if (!refreshReferralHistorySheetDom()) openNamedSheet("referral-history");
            return;
          }
          {
            const filterRow = actionNode.closest(".referral-history-filter-row");
            if (filterRow) {
              filterRow.querySelectorAll(".nav-pill").forEach((button) => {
                button.classList.toggle("active", normalizeText(button.dataset.filter) === state.transferHistoryFilter);
              });
              scheduleReferralPillSync(filterRow);
            }
          }
          if (!refreshReferralTransferHistoryDom()) render();
          return;
        case "set-referral-section":
          event.preventDefault();
          event.stopPropagation();
          {
            const nextSection = normalizeText(actionNode.dataset.section) || "overview";
            if (state.referralSection === nextSection) return;
            state.referralSection = nextSection;
          }
          {
            const sectionRow = actionNode.closest(".referral-section-tabs");
            if (sectionRow) {
              sectionRow.querySelectorAll(".nav-pill").forEach((button) => {
                button.classList.toggle("active", normalizeText(button.dataset.section) === state.referralSection);
              });
              scheduleReferralPillSync(sectionRow);
            }
          }
          if (!refreshReferralSectionDom()) render();
          return;
        case "open-promo":
          event.preventDefault();
          openPromoSheet(actionNode.dataset.id, actionNode.dataset.index);
          return;
        case "copy-referral":
          event.preventDefault();
          void (async () => {
            const linkValue = `${window.location.origin}${normalizeText(state.payload?.referral?.referralLink || "/login/")}`;
            try {
              await navigator.clipboard.writeText(linkValue);
              state.referralLinkCopied = true;
              syncReferralCopyButtons();
              if (referralCopyFeedbackTimer) window.clearTimeout(referralCopyFeedbackTimer);
              referralCopyFeedbackTimer = window.setTimeout(() => {
                state.referralLinkCopied = false;
                syncReferralCopyButtons();
              }, 1600);
            } catch {
              openSheet("Скопируйте ссылку", `<div class="list-item"><p class="list-title">${linkValue}</p><p class="subtitle">Не удалось скопировать автоматически. Скопируйте ссылку вручную.</p></div>`);
            }
          })();
          return;
        case "open-quick-transfer":
          event.preventDefault();
          state.referralTransferDraft = {
            targetPhone: normalizeText(actionNode.dataset.phone),
            recipientShortName: normalizeText(actionNode.dataset.shortName || actionNode.dataset.name),
            fullName: normalizeText(actionNode.dataset.name),
          };
          state.referralTransferError = "";
          openNamedSheet("quick-transfer");
          return;
        case "scroll-transfer-recipients": {
          event.preventDefault();
          const carousel = actionNode.closest(".referral-transfer-recipient-carousel");
          const strip = carousel?.querySelector("[data-transfer-recipient-strip]");
          if (!strip) return;
          const firstCard = strip.querySelector(".referral-transfer-recipient");
          const step = Math.max(strip.clientWidth * 0.82, (firstCard?.clientWidth || 160) + 12);
          const direction = normalizeText(actionNode.dataset.direction) === "prev" ? -1 : 1;
          strip.scrollBy({ left: step * direction, behavior: "smooth" });
          return;
        }
        case "transfer-preset":
          event.preventDefault();
          state.referralQuickAmount = Number(actionNode.dataset.amount || 0);
          state.referralTransferDraft = {
            ...(state.referralTransferDraft || {}),
            amountBs: Number(actionNode.dataset.amount || 0),
          };
          {
            const transferForm = actionNode.closest("#referral-transfer-form");
            const amountInput = transferForm?.elements?.amountBs;
            if (transferForm && amountInput) {
              amountInput.value = String(state.referralQuickAmount);
              syncTransferBsAmountUi(transferForm);
            } else {
              refreshTransferBsSheet();
            }
          }
          return;
        case "quick-transfer-amount":
          event.preventDefault();
          void (async () => {
            try {
              const draft = {
                targetPhone: normalizeText(actionNode.dataset.phone),
                amountBs: Number(actionNode.dataset.amount || 0),
                recipientShortName: normalizeText(actionNode.dataset.shortName || actionNode.dataset.name),
                fullName: normalizeText(actionNode.dataset.name),
                comment: "",
              };
              const recipient = await requestReferralTransferPreview(draft);
              state.referralTransferError = "";
              state.referralTransferDraft = {
                ...draft,
                recipientId: normalizeText(recipient?.id),
                recipientShortName: normalizeText(recipient?.shortName || draft.recipientShortName || draft.fullName),
              };
              openNamedSheet("confirm-transfer-bs");
            } catch (error) {
              state.referralTransferDraft = draft;
              reopenTransferBsSheetWithError(humanizeReferralTransferError(error));
            }
          })();
          return;
        case "select-barber":
          event.preventDefault();
          void (async () => {
            state.booking.barberId = normalizeText(actionNode.dataset.id);
            window.history.replaceState(buildHistoryState(state.sheet), "", `${buildBookingBarberHref(state.booking.barberId)}${window.location.hash}`);
            await loadServices();
            scrollToBookingStep("services");
          })();
          return;
        case "switch-home-barber":
          if (event.target.closest("a, button, input, textarea, select, label") && !actionNode.matches("a, button")) return;
          if (Date.now() - homeBarberSwipeHandledAt < 420) return;
          event.preventDefault();
          if (state.homeBarberTransitionStage !== "idle") return;
          restartHomeBarberRotation();
          void triggerHomeBarberRotationStep(1);
          return;
        case "toggle-service":
          event.preventDefault();
          void (async () => {
            const id = normalizeText(actionNode.dataset.id);
            state.booking.selectedServices = state.booking.selectedServices.includes(id)
              ? state.booking.selectedServices.filter((item) => item !== id)
              : [...state.booking.selectedServices, id];
            await loadDates();
            syncBookingBsCover();
            if (state.booking.selectedServices.length) scrollToBookingStep("date");
          })();
          return;
        case "select-date":
          event.preventDefault();
          void (async () => {
            state.booking.selectedDate = normalizeText(actionNode.dataset.id);
            await loadTimes();
            scrollToBookingStep("time");
          })();
          return;
        case "select-time":
          event.preventDefault();
          {
            const nextTime = normalizeText(actionNode.dataset.id);
            if (state.booking.selectedTime === nextTime) {
              scrollToBookingStep("comment");
              return;
            }
            state.booking.selectedTime = nextTime;
          }
          render();
          scrollToBookingStep("comment");
          return;
        case "toggle-booking-bs":
          event.preventDefault();
          state.booking.bsCoverExpanded = !state.booking.bsCoverExpanded;
          render();
          return;
        case "toggle-home-about":
          event.preventDefault();
          state.homeAboutExpanded = !state.homeAboutExpanded;
          animateHomeAboutCard(actionNode, state.homeAboutExpanded);
          return;
        case "submit-booking":
          event.preventDefault();
          void submitBooking();
          return;
        case "confirm-referral-transfer":
          event.preventDefault();
          void (async () => {
            try {
              await submitReferralTransfer(state.referralTransferDraft || {});
            } catch (error) {
              reopenTransferBsSheetWithError(humanizeReferralTransferError(error));
            }
          })();
          return;
        case "confirm-cancel-booking":
          event.preventDefault();
          void (async () => {
            try {
              await cancelHomeBooking(actionNode.dataset.id);
            } catch (error) {
              openSheet("Ошибка отмены", `<div class="list-item"><p class="list-title">${normalizeText(error.message || "Не удалось отменить запись.")}</p></div>`);
            }
          })();
          return;
        default:
          break;
      }
    });

    ROOT.addEventListener("click", (event) => {
      const backdrop = event.target.closest("#sheet-backdrop");
      if (backdrop && event.target === backdrop) {
        if (IS_DESKTOP_SHEET_DISMISS) {
          dismissSheet();
          return;
        }
        closeSheet();
      }
    });
    ROOT.addEventListener("pointerdown", (event) => {
      if (
        state.currentPage === "profile" &&
        state.profileAvatarPanelState === "open" &&
        !event.target.closest(".profile-avatar-panel-shell")
      ) {
        closeProfileAvatarPanel();
      }
    });
  };

  const bindEvents = ({ appRoot = null, sheetRoot = null } = {}) => {
    const quickTransferForm = queryById(sheetRoot, "quick-transfer-form");
    if (quickTransferForm) {
      quickTransferForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const amountInput = quickTransferForm.elements?.amountBs;
        try {
          const draft = {
            targetPhone: normalizeText(quickTransferForm.dataset.phone),
            amountBs: Number(amountInput?.value || 0),
            recipientShortName: normalizeText(quickTransferForm.dataset.shortName || quickTransferForm.dataset.name),
            fullName: normalizeText(quickTransferForm.dataset.name),
            comment: "",
          };
          const recipient = await requestReferralTransferPreview(draft);
          state.referralTransferError = "";
          state.referralTransferDraft = {
            ...draft,
            recipientId: normalizeText(recipient?.id),
            recipientShortName: normalizeText(recipient?.shortName || draft.recipientShortName || draft.fullName),
          };
          openNamedSheet("confirm-transfer-bs");
        } catch (error) {
          state.referralTransferDraft = {
            targetPhone: normalizeText(quickTransferForm.dataset.phone),
            amountBs: Number(amountInput?.value || 0),
            recipientShortName: normalizeText(quickTransferForm.dataset.shortName || quickTransferForm.dataset.name),
            fullName: normalizeText(quickTransferForm.dataset.name),
            comment: "",
          };
          reopenTransferBsSheetWithError(humanizeReferralTransferError(error));
        }
      });
    }
    const bookingCommentInput = queryById(appRoot, "booking-comment-input");
    if (bookingCommentInput) {
      bookingCommentInput.addEventListener("input", () => {
        state.booking.comment = normalizeText(bookingCommentInput.value);
      });
      bookingCommentInput.addEventListener("blur", () => {
        render();
        scrollToBookingStep("summary");
      });
    }
    const bookingBsInput = queryById(appRoot, "booking-bs-input");
    if (bookingBsInput) {
      bookingBsInput.addEventListener("input", () => {
        state.booking.appliedBs = Math.max(0, Math.trunc(Number(bookingBsInput.value) || 0));
        if (state.booking.appliedBs > 0) state.booking.bsCoverExpanded = true;
      });
      bookingBsInput.addEventListener("blur", () => {
        syncBookingBsCover();
        render();
      });
    }
    const profileAvatarDeviceInput = queryById(appRoot, "profile-avatar-device-input");
    if (profileAvatarDeviceInput) {
      profileAvatarDeviceInput.addEventListener("change", async () => {
        const file = profileAvatarDeviceInput.files && profileAvatarDeviceInput.files[0];
        profileAvatarDeviceInput.value = "";
        if (!file) return;
        try {
          await handleProfileAvatarFileSelection(file);
        } catch (error) {
          openSheet("Ошибка изображения", `<div class="list-item"><p class="list-title">${normalizeText(error?.message || "Не удалось обработать изображение.")}</p></div>`);
        }
      });
    }
    const profileAvatarCameraInput = queryById(appRoot, "profile-avatar-camera-input");
    if (profileAvatarCameraInput) {
      profileAvatarCameraInput.addEventListener("change", async () => {
        const file = profileAvatarCameraInput.files && profileAvatarCameraInput.files[0];
        profileAvatarCameraInput.value = "";
        if (!file) return;
        try {
          await handleProfileAvatarFileSelection(file);
        } catch (error) {
          openSheet("Ошибка изображения", `<div class="list-item"><p class="list-title">${normalizeText(error?.message || "Не удалось обработать изображение.")}</p></div>`);
        }
      });
    }
    const referralQrStages = sheetRoot?.querySelectorAll?.("[data-qr-stage]") || [];
    referralQrStages.forEach((stage) => {
      if (!(stage instanceof HTMLElement)) return;
      const host = stage.querySelector("[data-qr-svg-host]");
      if (!(host instanceof HTMLElement)) return;
      const qrSize = Math.max(220, Number(stage.dataset.qrSize) || 360);
      host.innerHTML = "";
      stage.classList.add("is-loading");
      stage.classList.remove("is-ready", "is-error");
      void (async () => {
        try {
          const svgMarkup = await fetchReferralQrSvgMarkup(qrSize);
          host.innerHTML = svgMarkup;
          stage.classList.remove("is-loading", "is-error");
          stage.classList.add("is-ready");
        } catch {
          stage.classList.remove("is-loading", "is-ready");
          stage.classList.add("is-error");
        }
      })();
    });
    const setupProfileFormDirtyState = (form, hasChanges) => {
      if (!form || typeof hasChanges !== "function") return;
      const submitButton = form.querySelector("button[type='submit']");
      if (!submitButton) return;
      const syncState = () => {
        submitButton.disabled = !hasChanges();
      };
      form.addEventListener("input", syncState);
      form.addEventListener("change", syncState);
      syncState();
    };

    const bindProfileForm = (root, id, buildPatch) => {
      const form = queryById(root, id);
      if (!form) return;
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        try {
          const patch = await buildPatch(new FormData(form), form);
          await saveProfilePatch(patch);
        } catch (error) {
          openSheet("Ошибка сохранения", `<div class="list-item"><p class="list-title">${normalizeText(error.message || "Не удалось сохранить профиль.")}</p></div>`);
        }
      });
    };
    const getClipboardImageFile = async () => {
      if (!navigator.clipboard?.read) {
        throw new Error("Вставка из буфера недоступна в этом браузере. Используйте Ctrl+V или выбор файла.");
      }
      const items = await navigator.clipboard.read();
      for (const item of items) {
        const imageType = item.types.find((type) => normalizeText(type).startsWith("image/"));
        if (!imageType) continue;
        const blob = await item.getType(imageType);
        return new File([blob], `avatar-${Date.now()}.png`, { type: blob.type || imageType });
      }
      throw new Error("В буфере не найдено изображение.");
    };
    const bindProfileAvatarUploader = (root, options = {}) => {
      const prefix = normalizeText(options.prefix);
      const form = queryById(root, normalizeText(options.formId));
      const avatarInput = queryById(root, `${prefix}-input`);
      const avatarPreview = queryById(root, `${prefix}-preview`);
      const avatarCard = queryById(root, `${prefix}-card`);
      const avatarStatus = queryById(root, `${prefix}-status`);
      const avatarPrepared = queryById(root, `${prefix}-prepared`);
      const avatarChooseButton = queryById(root, `${prefix}-choose-btn`);
      const avatarCameraButton = queryById(root, `${prefix}-camera-btn`);
      const avatarDeleteButton = queryById(root, `${prefix}-delete-btn`);
      const avatarCameraInput = queryById(root, `${prefix}-camera-input`);
      const currentAvatarUrl = normalizeText(options.currentAvatarUrl || state.payload?.user?.avatarUrl || "");
      if (!form || !avatarInput || !avatarPreview || !avatarCard || !avatarStatus || !avatarPrepared) return;

      const syncAvatarDirtyState = () => {
        form.dataset.avatarChanged = avatarPrepared.value ? "true" : "false";
        form.dispatchEvent(new Event("input", { bubbles: true }));
        form.dispatchEvent(new Event("change", { bubbles: true }));
      };
      const resetAvatarSelection = () => {
        avatarInput.value = "";
        if (avatarCameraInput) avatarCameraInput.value = "";
        avatarPrepared.value = "";
        avatarPreview.classList.remove("avatar-preview-ready");
        avatarPreview.innerHTML = avatarMarkup({ ...(state.payload?.user || {}), avatarUrl: currentAvatarUrl }, 84);
        avatarCard.classList.remove("is-loading", "is-ready", "is-dragover");
        avatarStatus.textContent = getProfileAvatarUploadHint();
        if (avatarDeleteButton) avatarDeleteButton.disabled = !currentAvatarUrl;
        syncAvatarDirtyState();
      };
      const markAvatarForDelete = () => {
        avatarInput.value = "";
        if (avatarCameraInput) avatarCameraInput.value = "";
        avatarPrepared.value = PROFILE_AVATAR_DELETE_SENTINEL;
        avatarPreview.classList.remove("avatar-preview-ready");
        avatarPreview.innerHTML = avatarMarkup({ ...(state.payload?.user || {}), avatarUrl: "" }, 84);
        avatarCard.classList.remove("is-loading", "is-dragover");
        avatarCard.classList.add("is-ready");
        avatarStatus.textContent = "Фото будет удалено после сохранения.";
        if (avatarDeleteButton) avatarDeleteButton.disabled = false;
        syncAvatarDirtyState();
      };
      const applyAvatarPreview = (avatarUrl, statusText) => {
        avatarPrepared.value = avatarUrl;
        avatarPreview.classList.remove("avatar-preview-ready");
        avatarPreview.innerHTML = `<div class="profile-avatar avatar-preview-enter" style="width:84px;height:84px;"><img src="${avatarUrl}" alt="Новое фото профиля" /></div>`;
        requestAnimationFrame(() => avatarPreview.classList.add("avatar-preview-ready"));
        avatarCard.classList.remove("is-loading", "is-dragover");
        avatarCard.classList.add("is-ready");
        avatarStatus.textContent = statusText;
        if (avatarDeleteButton) avatarDeleteButton.disabled = false;
        syncAvatarDirtyState();
      };
      const processAvatarFile = async (file, sourceLabel = "") => {
        if (!(file instanceof File) || !file.name) {
          throw new Error("Выберите изображение.");
        }
        if (!normalizeText(file.type).startsWith("image/")) {
          throw new Error("Нужен файл изображения.");
        }
        if (Number(file.size) > 5 * 1024 * 1024) {
          throw new Error("Файл должен быть не больше 5 МБ.");
        }
        avatarCard.classList.add("is-loading");
        avatarCard.classList.remove("is-ready");
        avatarStatus.textContent = "Подготавливаем новое фото...";
        const preparedUrl = await cropImageFileToSquareDataUrl(file);
        applyAvatarPreview(
          preparedUrl,
          sourceLabel
            ? `Фото ${sourceLabel}. Сохраните профиль, чтобы применить изменения.`
            : "Новое фото готово. Сохраните профиль, чтобы применить изменения.",
        );
      };
      const handleAvatarError = (error) => {
        avatarCard.classList.remove("is-loading", "is-dragover");
        avatarStatus.textContent = getProfileAvatarUploadHint();
        openSheet("Ошибка изображения", `<div class="list-item"><p class="list-title">${normalizeText(error?.message || "Не удалось обработать изображение.")}</p></div>`);
      };
      const tryProcessAvatarFile = async (file, sourceLabel = "") => {
        try {
          await processAvatarFile(file, sourceLabel);
        } catch (error) {
          handleAvatarError(error);
        }
      };
      const getImageFileFromClipboardEvent = (event) => {
        const items = Array.from(event.clipboardData?.items || []);
        for (const item of items) {
          if (!normalizeText(item.type).startsWith("image/")) continue;
          const file = item.getAsFile();
          if (file) return file;
        }
        return null;
      };
      const openAvatarFilePicker = async () => {
        if (typeof window.showOpenFilePicker === "function" && window.isSecureContext) {
          try {
            const [handle] = await window.showOpenFilePicker({
              multiple: false,
              excludeAcceptAllOption: false,
              types: [
                {
                  description: "Изображения",
                  accept: {
                    "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"],
                  },
                },
              ],
            });
            if (!handle) return;
            const file = await handle.getFile();
            await tryProcessAvatarFile(file, "выбрано");
            return;
          } catch (error) {
            if (normalizeText(error?.name) === "AbortError") return;
          }
        }
        try {
          if (typeof avatarInput.showPicker === "function") avatarInput.showPicker();
          else avatarInput.click();
        } catch {
          avatarInput.click();
        }
      };

      avatarInput.addEventListener("change", async () => {
        const file = avatarInput.files && avatarInput.files[0];
        if (!file) {
          resetAvatarSelection();
          return;
        }
        await tryProcessAvatarFile(file, "выбрано");
      });
      if (avatarCameraInput) {
        avatarCameraInput.addEventListener("change", async () => {
          const file = avatarCameraInput.files && avatarCameraInput.files[0];
          if (!file) return;
          await tryProcessAvatarFile(file, "снято");
        });
      }
      avatarCard.addEventListener("dragover", (event) => {
        event.preventDefault();
        avatarCard.classList.add("is-dragover");
      });
      avatarCard.addEventListener("dragleave", () => {
        avatarCard.classList.remove("is-dragover");
      });
      avatarCard.addEventListener("drop", async (event) => {
        event.preventDefault();
        avatarCard.classList.remove("is-dragover");
        const file = Array.from(event.dataTransfer?.files || []).find((item) => normalizeText(item.type).startsWith("image/"));
        if (!file) {
          handleAvatarError(new Error("Перетащите файл изображения."));
          return;
        }
        await tryProcessAvatarFile(file, "перетащено");
      });
      const handlePaste = async (event) => {
        const file = getImageFileFromClipboardEvent(event);
        if (!file) return;
        event.preventDefault();
        await tryProcessAvatarFile(file, "вставлено из буфера");
      };
      avatarCard.addEventListener("paste", handlePaste);
      form.addEventListener("paste", handlePaste);
      if (avatarChooseButton) {
        avatarChooseButton.addEventListener("click", () => {
          void openAvatarFilePicker();
        });
      }
      if (avatarCameraButton && avatarCameraInput) {
        avatarCameraButton.addEventListener("click", () => {
          try {
            if (typeof avatarCameraInput.showPicker === "function") avatarCameraInput.showPicker();
            else avatarCameraInput.click();
          } catch {
            avatarCameraInput.click();
          }
        });
      }
      if (avatarDeleteButton) {
        avatarDeleteButton.addEventListener("click", () => {
          markAvatarForDelete();
        });
      }
      resetAvatarSelection();
    };
    bindProfileForm(sheetRoot, "profile-name-form", async (formData) => ({ displayName: normalizeText(formData.get("displayName")) }));
    bindProfileForm(sheetRoot, "profile-phone-form", async (formData) => ({ phone: normalizeText(formData.get("phone")) }));
    bindProfileForm(sheetRoot, "profile-birthdate-form", async (formData) => ({ birthDate: normalizeText(formData.get("birthDate")) }));
    bindProfileForm(sheetRoot, "profile-gender-form", async (formData) => ({ gender: normalizeText(formData.get("gender")) }));
    bindProfileForm(sheetRoot, "profile-password-form", async (formData) => ({ password: normalizeText(formData.get("password")) }));
    bindProfileForm(sheetRoot, "profile-notifications-form", async (formData) => {
      const bookingNotificationsEnabled = formData.get("bookingNotificationsEnabled") === "on";
      const balanceNotificationsEnabled = formData.get("balanceNotificationsEnabled") === "on";
      const balanceNotificationsWasEnabled = state.payload?.user?.balanceNotificationsEnabled !== false;
      if (balanceNotificationsEnabled && !balanceNotificationsWasEnabled) {
        await requestIncomingBalanceNotificationPermission();
      }
      return {
        bookingNotificationsEnabled,
        balanceNotificationsEnabled,
      };
    });
    const profilePasswordForm = queryById(sheetRoot, "profile-password-form");
    setupProfileFormDirtyState(profilePasswordForm, () => {
      const passwordField = profilePasswordForm?.elements?.password;
      return normalizeText(passwordField?.value).length > 0;
    });
    const profileNotificationsForm = queryById(sheetRoot, "profile-notifications-form");
    if (profileNotificationsForm) {
      const initialBookingNotificationsEnabled = state.payload?.user?.bookingNotificationsEnabled !== false;
      const initialBalanceNotificationsEnabled = state.payload?.user?.balanceNotificationsEnabled !== false;
      setupProfileFormDirtyState(profileNotificationsForm, () => {
        const currentBookingValue = profileNotificationsForm.elements?.bookingNotificationsEnabled?.checked === true;
        const currentBalanceValue = profileNotificationsForm.elements?.balanceNotificationsEnabled?.checked === true;
        return (
          currentBookingValue !== initialBookingNotificationsEnabled ||
          currentBalanceValue !== initialBalanceNotificationsEnabled
        );
      });
    }
    const profilePhoneForm = queryById(sheetRoot, "profile-phone-form");
    const profilePhoneInput = profilePhoneForm?.elements?.phone;
    if (profilePhoneInput) {
      applyPhoneMask(profilePhoneInput);
      attachPhoneMask(profilePhoneInput);
    }
    const referralTransferForm = queryById(sheetRoot, "referral-transfer-form");
    if (referralTransferForm) {
      const targetPhoneInput = referralTransferForm.elements?.targetPhone;
      if (targetPhoneInput) {
        applyPhoneMask(targetPhoneInput);
        attachPhoneMask(targetPhoneInput);
        targetPhoneInput.addEventListener("input", () => {
          state.referralTransferDraft = {
            ...(state.referralTransferDraft || {}),
            targetPhone: normalizePhone(targetPhoneInput.value),
          };
          if (state.referralTransferError) {
            state.referralTransferError = "";
          }
        });
      }
      const amountInput = referralTransferForm.elements?.amountBs;
      if (amountInput) {
        amountInput.addEventListener("input", () => {
          syncTransferBsAmountUi(referralTransferForm);
          if (state.referralTransferError) {
            state.referralTransferError = "";
          }
        });
        syncTransferBsAmountUi(referralTransferForm);
      }
      const commentInput = referralTransferForm.elements?.comment;
      if (commentInput) {
        commentInput.addEventListener("input", () => {
          state.referralTransferDraft = {
            ...(state.referralTransferDraft || {}),
            comment: normalizeText(commentInput.value),
          };
          if (state.referralTransferError) {
            state.referralTransferError = "";
          }
        });
      }
      referralTransferForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new window.FormData(referralTransferForm);
        try {
          const draft = {
            targetPhone: normalizePhone(formData.get("targetPhone")),
            amountBs: Number(formData.get("amountBs") || 0),
            comment: normalizeText(formData.get("comment")),
          };
          const recipient = await requestReferralTransferPreview(draft);
          state.referralTransferError = "";
          state.referralTransferDraft = {
            ...draft,
            recipientId: normalizeText(recipient?.id),
            recipientShortName: normalizeText(recipient?.shortName || recipient?.fullName),
          };
          openNamedSheet("confirm-transfer-bs");
        } catch (error) {
          state.referralTransferDraft = {
            targetPhone: normalizePhone(formData.get("targetPhone")),
            amountBs: Number(formData.get("amountBs") || 0),
            comment: normalizeText(formData.get("comment")),
          };
          reopenTransferBsSheetWithError(humanizeReferralTransferError(error));
        }
      });
    }
    if (normalizeText(state.sheet?.title) === "Сканировать QR") {
      startReferralQrScanner();
    }
    bindProfileForm(sheetRoot, "profile-edit-form", async (formData) => {
      const patch = {
        displayName: normalizeText(formData.get("displayName")),
        phone: normalizeText(formData.get("phone")),
        birthDate: normalizeText(formData.get("birthDate")),
        gender: normalizeText(formData.get("gender")),
        avatarUrl: normalizeText(state.payload?.user?.avatarUrl || ""),
      };
      const preparedAvatarUrl = normalizeText(formData.get("avatarPreparedUrl"));
      if (preparedAvatarUrl === PROFILE_AVATAR_DELETE_SENTINEL) {
        patch.avatarUrl = "";
        return patch;
      }
      if (preparedAvatarUrl) {
        patch.avatarUrl = preparedAvatarUrl;
        return patch;
      }
      const file = formData.get("avatarFile");
      if (file instanceof File && file.name) {
        if (!normalizeText(file.type).startsWith("image/")) {
          throw new Error("Нужен файл изображения.");
        }
        if (Number(file.size) > 5 * 1024 * 1024) {
          throw new Error("Файл должен быть не больше 5 МБ.");
        }
        patch.avatarUrl = await cropImageFileToSquareDataUrl(file);
      }
      return patch;
    });
    const profileEditForm = queryById(sheetRoot, "profile-edit-form");
    if (profileEditForm) {
      const profileEditPhoneInput = profileEditForm.elements?.phone;
      if (profileEditPhoneInput) {
        applyPhoneMask(profileEditPhoneInput);
        attachPhoneMask(profileEditPhoneInput);
      }
      const initialUser = state.payload?.user || {};
      setupProfileFormDirtyState(profileEditForm, () => {
        const currentDisplayName = normalizeText(profileEditForm.elements?.displayName?.value);
        const currentPhone = normalizeText(profileEditForm.elements?.phone?.value);
        const currentBirthDate = normalizeText(profileEditForm.elements?.birthDate?.value);
        const currentGender = normalizeText(profileEditForm.elements?.gender?.value);
        const hasAvatarChange = profileEditForm.dataset.avatarChanged === "true";
        return (
          currentDisplayName !== normalizeText(initialUser.displayName) ||
          currentPhone !== normalizeText(initialUser.phone) ||
          currentBirthDate !== normalizeText(initialUser.birthDate) ||
          currentGender !== normalizeText(initialUser.gender) ||
          hasAvatarChange
        );
      });
    }
    bindProfileAvatarUploader(sheetRoot, {
      formId: "profile-edit-form",
      prefix: "profile-avatar-edit",
      currentAvatarUrl: normalizeText(state.payload?.user?.avatarUrl || ""),
    });
  };

  const init = async () => {
    syncPageFromLocation();
    installDelegatedHandlers();
    state.session = loadSession();
    const normalizedPath = normalizeText(window.location.pathname).replace(/\/+$/, "") || "/";
    if (normalizedPath === "/" && isAuthenticated()) {
      const hasValidStoredSession = await validateStoredHomeSession();
      if (hasValidStoredSession) {
        window.location.replace("/home/");
        return;
      }
      clearSession();
      state.session = null;
    }
    if (!isAuthenticated()) {
      if (state.currentPage === "home" && normalizedPath === "/") {
        clearLogoutMarker();
        window.history.replaceState(buildHistoryState(), "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
      } else {
        redirectToLogin(`${window.location.pathname}${window.location.search}${window.location.hash}`);
        return;
      }
    }
    if (isAuthenticated()) {
      window.history.replaceState(buildHistoryState(), "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
    }
    window.addEventListener("popstate", (event) => {
      suppressSheetHistoryBack = true;
      stopReferralQrScanner();
      state.navIndicatorIndex = Math.max(0, ["home", "referral", "booking", "shop", "profile"].findIndex((item) => item === state.currentPage));
      syncPageFromLocation();
      if (!isAuthenticated()) {
        const normalizedPath = normalizeText(window.location.pathname).replace(/\/+$/, "") || "/";
        if (!(state.currentPage === "home" && normalizedPath === "/")) {
          redirectToLogin(`${window.location.pathname}${window.location.search}${window.location.hash}`);
          return;
        }
        clearLogoutMarker();
      }
      state.booking.stepAnimationsEnabled = state.currentPage === "booking";
      state.routeTransitionActive = true;
      if (event.state?.sheet && isAuthenticated()) {
        state.sheet = {
          title: normalizeText(event.state.sheet.title),
          bodyHtml: event.state.sheet.bodyHtml || "",
          footerHtml: event.state.sheet.footerHtml || "",
          className: normalizeText(event.state.sheet.className),
        };
        state.sheetState = "open";
      } else {
        state.sheet = null;
        state.sheetState = "closed";
      }
      render();
      if (state.currentPage === "booking") {
        void syncBookingSelectionFromLocation();
      }
      suppressSheetHistoryBack = false;
    });
    if (!isAuthenticated()) {
      if (!(state.currentPage === "home" && normalizedPath === "/")) {
        redirectToLogin(`${window.location.pathname}${window.location.search}${window.location.hash}`);
        return;
      }
      clearLogoutMarker();
      try {
        commitAppPayload(await publicApiRequest("/public"));
        state.bootstrapError = "";
        render();
      } catch (error) {
        state.bootstrapError =
          normalizeText(error?.message) || "Не удалось загрузить данные приложения.";
        render();
      }
      return;
    }
    try {
      commitAppPayload(await apiRequest("/app"));
      state.bootstrapError = "";
      if (state.currentPage === "home") {
        const homeBarbers = getSortedBookingBarbers();
        const activeHomeBarber = homeBarbers.length
          ? homeBarbers[((state.homeBarberRotationIndex % homeBarbers.length) + homeBarbers.length) % homeBarbers.length]
          : null;
        if (activeHomeBarber?.id) {
          await ensureBarberProfileServices(activeHomeBarber.id, { suppressRender: true });
        }
      }
      if (state.currentPage === "booking") {
        await syncBookingSelectionFromLocation();
      }
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          void sendSitePresence("online");
          if (!homeEventsSource) startHomeEventsStream();
        }
      });
      document.addEventListener("copy", (event) => {
        if (isEditableTarget(event.target)) return;
        if (getProtectedAssetTarget(event.target)) event.preventDefault();
      }, true);
      document.addEventListener("cut", (event) => {
        if (isEditableTarget(event.target)) return;
        if (getProtectedAssetTarget(event.target)) event.preventDefault();
      }, true);
      document.addEventListener("contextmenu", (event) => {
        if (isEditableTarget(event.target)) return;
        if (getProtectedAssetTarget(event.target)) event.preventDefault();
      }, true);
      document.addEventListener("dragstart", (event) => {
        if (getProtectedAssetTarget(event.target)) event.preventDefault();
      }, true);
      window.addEventListener("resize", () => {
        setupPromoMarqueeAutoScroll();
        scheduleReferralPillSync();
      }, { passive: true });
      window.addEventListener("load", () => {
        scheduleReferralPillSync();
      }, { once: true });
      window.addEventListener("beforeunload", () => {
        stopHomeEventsStream();
        void sendSitePresence("offline");
      });
      startSitePresenceLoop();
      startHomeEventsStream();
      render();
    } catch (error) {
      stopSitePresenceLoop();
      state.bootstrapError =
        normalizeText(error?.message) || "Не удалось загрузить данные приложения.";
      render();
    }
  };

  init();
})();
