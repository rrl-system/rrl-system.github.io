const icons = {
    "eye-slash-regular": {viewBox: "0 0 640 512", size: "640", version: "5.15.6", path: "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"},
    "lock": {viewBox: "0 0 448 512", size: "512", version: "5.15.6", path: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},
    "bars": {viewBox: "0 0 448 512", size: "512", version: "6.4.0", path: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"},
    "user": {viewBox:"0 0 448 512", size: "512", version: "6.4.0", path: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"},
    "xmark": {viewBox: "0 0 384 512", size: "512", version: "6.4.2", path: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"},
    "arrow-rotate-right-solid": {viewBox: "0 0 512 512", size: "24", version: "6.5.1", path: "M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"},
    "arrow-rotate-left-solid": {viewBox: "0 0 512 512", size: "24", version: "6.5.1", path: "M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"},
    "file-regular": {viewBox: "0 0 384 512", size: "24", version: "6.5.1", path: "M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"},
    "trash-xmark-regular": {viewBox: "0 0 448 512", size: "24", version: "6.5.0", path: "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80h13.7H416h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H412.4L388.4 452.7c-2.5 33.4-30.3 59.3-63.8 59.3H123.4c-33.5 0-61.3-25.9-63.8-59.3L35.6 128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80.1 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM83.7 128l23.8 321.2c.6 8.4 7.6 14.8 16 14.8H324.6c8.4 0 15.3-6.5 16-14.8L364.3 128H83.7zm62.2 81.9c7.8-7.8 20.5-7.8 28.3 0L224 259.7l49.9-49.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L252.3 288l49.9 49.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0L224 316.3l-49.9 49.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3L195.7 288l-49.9-49.9c-7.8-7.8-7.8-20.5 0-28.3z"},
    "times": {viewBox: "0 0 352 512", size: "512", version: "5.15.4", path: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},
    "github": {viewBox: "0 0 112 112", size: "112", version: "1.0.0", path: "M88,51.3c0-5.5-1.9-10.2-5.3-13.7c0.6-1.3,2.3-6.5-0.5-13.5c0,0-4.2-1.4-14,5.3c-4.1-1.1-8.4-1.7-12.7-1.8	c-4.3,0-8.7,0.6-12.7,1.8c-9.7-6.6-14-5.3-14-5.3c-2.8,7-1,12.2-0.5,13.5C25,41.2,23,45.7,23,51.3c0,19.6,11.9,23.9,23.3,25.2 c-1.5,1.3-2.8,3.5-3.2,6.8c-3,1.3-10.2,3.6-14.9-4.3c0,0-2.7-4.9-7.8-5.3c0,0-5-0.1-0.4,3.1c0,0,3.3,1.6,5.6,7.5c0,0,3,9.1,17.2,6	c0,4.3,0.1,8.3,0.1,9.5h25.2c0-1.7,0.1-7.2,0.1-14c0-4.7-1.7-7.9-3.4-9.4C76,75.2,88,70.9,88,51.3z"},
    "mail": {viewBox: "0 0 512 512", size: "512", version: "6.4.2", path: "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"},
    "envelope1": {viewBox: "0 0 512 512", size: "512", version: "6.4.2", path: "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"},
    "viber": {viewBox: "0 0 512 512", size: "512", version: "6.4.2", path: "M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"},
    "whatsapp": {viewBox: "0 0 448 512", size: "512", version: "6.4.2", path: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},
    "github1": {viewBox: "0 0 496 512", size: "512", version: "6.4.2", path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},
    "telegram": {viewBox: "0 0 112 112", size: "112", version: "1.0.0", path: "M18.4,53.2l64.7-24.9c3-1.1,5.6,0.7,4.7,5.3l0,0l-11,51.8c-0.8,3.7-3,4.6-6.1,2.8L53.9,75.8l-8.1,7.8 c-0.9,0.9-1.7,1.6-3.4,1.6l1.2-17l31.1-28c1.4-1.2-0.3-1.9-2.1-0.7L34.2,63.7l-16.6-5.2C14,57.4,14,54.9,18.4,53.2L18.4,53.2z"},
    "vk": {viewBox: "0 0 112 112", size: "112", version: "1.0.0", path: "M88.2,80.7l-9.8,0.1c0,0-2.1,0.4-4.9-1.5c-3.7-2.5-7.2-9.1-9.9-8.2C60.9,72,61,77.9,61,77.9s0,1.3-0.6,1.9c-0.7,0.7-2,0.9-2,0.9H54c0,0-9.7,0.6-18.3-8.3c-9.3-9.7-17.6-29-17.6-29s-0.5-1.3,0-1.9c0.6-0.7,2.2-0.7,2.2-0.7l10.5-0.1c0,0,1,0.2,1.7,0.7c0.6,0.4,0.9,1.2,0.9,1.2s1.7,4.3,4,8.2c4.4,7.6,6.4,9.3,7.9,8.4c2.2-1.2,1.5-10.7,1.5-10.7s0-3.5-1.1-5c-0.9-1.2-2.5-1.5-3.3-1.6c-0.6-0.1,0.4-1.5,1.6-2.1c1.9-0.9,5.2-1,9.2-0.9c3.1,0,4,0.2,5.2,0.5c3.6,0.9,2.4,4.3,2.4,12.4c0,2.6-0.5,6.3,1.4,7.5c0.8,0.5,2.8,0.1,7.7-8.3c2.3-4,4.1-8.6,4.1-8.6s0.4-0.8,1-1.2s1.4-0.3,1.4-0.3l11.1-0.1c0,0,3.3-0.4,3.9,1.1c0.6,1.6-1.2,5.3-5.8,11.3c-7.4,9.9-8.3,9-2.1,14.7c5.9,5.5,7.1,8.1,7.3,8.5C93.4,80.4,88.2,80.7,88.2,80.7z"},
    "envelope": {viewBox: "0 0 112 112", size: "112", version: "1.0.0", path: "M27.2,28h57.6c4,0,7.2,3.2,7.2,7.2l0,0v42.7c0,3.9-3.2,7.2-7.2,7.2l0,0H27.2c-4,0-7.2-3.2-7.2-7.2V35.2C20,31.1,23.2,28,27.2,28 M56,52.9l28.8-17.8H27.2L56,52.9 M27.2,77.7h57.6V43.5L56,61.3L27.2,43.5V77.7z"},
    "telegram2": {viewBox: "0 0 30 27", "width": "30", "height": "27", version: "1.0.0", "text": '<path d="M29.4126 0.475523C28.9299 0.0333156 28.244 -0.114048 27.6222 0.0908545L1.24402 8.78623C0.525131 9.02318 0.0376305 9.6649 0.00206411 10.4209C-0.0334437 11.177 0.391654 11.8617 1.08505 12.1652L7.60859 15.0194C7.6404 15.167 9.51312 23.8527 9.57681 24.148C9.65855 24.5272 9.85103 24.865 10.2588 24.9689C10.6712 25.0739 10.9626 24.8485 11.2703 24.6181C11.4416 24.4899 16.1114 20.9932 16.1114 20.9932L21.7709 25.6244C22.1005 25.8943 22.5034 26.0351 22.9142 26.0351C23.1098 26.035 23.3073 26.0031 23.4993 25.938C24.095 25.736 24.5366 25.2498 24.6805 24.6376L29.952 2.22537C30.1018 1.58816 29.8952 0.91773 29.4126 0.475523ZM11.692 16.6549C11.6888 16.6625 11.6857 16.6711 11.6827 16.6814L10.5914 20.494L9.37361 14.8459L17.7476 10.1932L11.8929 16.315C11.8007 16.4114 11.7328 16.528 11.692 16.6549ZM12.0384 21.8419L12.534 20.1102L13.0081 18.4538L14.7068 19.8439L12.0384 21.8419ZM28.2368 1.82189L22.9654 24.2341C22.9628 24.2452 22.9593 24.2606 22.9335 24.2693C22.9079 24.278 22.8955 24.2681 22.8867 24.2608L16.6939 19.1932C16.6937 19.1931 16.6936 19.1929 16.6934 19.1928L13.8242 16.8448L23.0423 7.20625C23.3434 6.89142 23.3691 6.40386 23.1029 6.05904C22.8366 5.71416 22.3584 5.61566 21.9777 5.8273L8.32824 13.411L1.79134 10.5509C1.77142 10.5422 1.76046 10.5374 1.76204 10.5037C1.76363 10.4701 1.77499 10.4663 1.79562 10.4595L28.1738 1.76417C28.1866 1.76001 28.201 1.75521 28.2222 1.77455C28.2434 1.794 28.2399 1.80876 28.2368 1.82189Z" fill="url(#paint0_linear_31_74)"/><defs><linearGradient id="paint0_linear_31_74" x1="-2.8754" y1="-11.1579" x2="32.089" y2="-9.53969" gradientUnits="userSpaceOnUse"><stop stop-color="#00B292"/><stop offset="0.290505" stop-color="#2DFFD9"/><stop offset="0.635914" stop-color="#54FFE0"/><stop offset="0.978018" stop-color="#03776F"/></linearGradient></defs>'},
    "chart-pie-simple-circle-dollar-solid": {viewBox: "0 0 640 512", version: "1.0.0", path: "M496 192c4.6 0 9.3 .2 13.8 .5C494.5 83.7 401 0 288 0c-9 0-16 7.6-16 16.6V240H375.2c31.5-29.8 74-48 120.8-48zM320 368c0-28.8 6.9-56 19.2-80H224V66.7c0-18.5-15.7-33.3-33.8-29.5C81.5 60.1 0 156.5 0 272C0 404.6 107.5 512 240 512c43.8 0 84.8-11.7 120.1-32.2C335 449.4 320 410.5 320 368zm320 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM472.8 335.4c-.4 .7-.9 1.6-.8 3.6l0 .1c0 .4 0 1.9 4.8 4.5c5.6 3 13.5 5.2 23.9 8.2l.2 0c9.3 2.6 21.1 6 30.5 11.5c10.2 6 20 16.1 20.5 32.3c.5 18.2-9.7 30.4-21.7 36.9c-5.8 3.1-12.1 5.1-18.3 6.2v10.8c0 8.8-7.2 16-16 16s-16-7.2-16-16V438.1c-8.6-1.7-16.7-4.3-23.7-6.6l0 0 0 0c-1.7-.6-3.4-1.1-5-1.6c-8.4-2.6-13.2-11.6-10.5-20s11.6-13.2 20-10.5c2 .6 3.9 1.2 5.8 1.8c11.4 3.6 20.4 6.5 29.9 6.8c6.7 .2 13.8-1.1 18.5-3.6c2.2-1.2 3.4-2.4 4-3.3c.5-.8 1.1-2.1 1-4.5c0-1.4-.2-3-4.7-5.6c-5.3-3.1-12.9-5.4-23.2-8.3l-1.8-.5c-8.9-2.5-19.8-5.6-28.6-10.3c-9.9-5.3-20.6-14.7-21.6-30.7c-1.2-18.8 10-30.9 21.8-37.2c5.7-3.1 12-5.1 18-6.3V288c0-8.8 7.2-16 16-16s16 7.2 16 16v9.4c6.3 .9 12.3 2.3 17.9 3.7c8.6 2.1 13.8 10.8 11.7 19.4s-10.8 13.8-19.4 11.7c-9.3-2.3-18.2-4-26.4-4.1c-6.2-.1-13.6 1.3-18.7 4c-2.4 1.3-3.6 2.5-4.2 3.4z"},
    "noun-project-6441386": {viewBox: "0 0 73.27 83.53", version: "1.0.0", path: "M29.51,26.29c-.74,0-1.35-.6-1.35-1.35s.6-1.35,1.35-1.35h19.42c.74,0,1.35,.6,1.35,1.35s-.6,1.35-1.35,1.35H29.51Zm0,10.85c-.74,0-1.35-.6-1.35-1.35s.6-1.35,1.35-1.35h19.42c.74,0,1.35,.6,1.35,1.35s-.6,1.35-1.35,1.35H29.51Zm0,10.87c-.74,0-1.35-.6-1.35-1.35s.6-1.35,1.35-1.35h19.42c.74,0,1.35,.6,1.35,1.35s-.6,1.35-1.35,1.35H29.51Zm0,10.73c-.74,0-1.35-.6-1.35-1.35s.6-1.35,1.35-1.35h10.46c.74,0,1.35,.6,1.35,1.35s-.6,1.35-1.35,1.35h-10.46Zm0,10.18c-.74,0-1.35-.6-1.35-1.35s.6-1.35,1.35-1.35h7.38c.74,0,1.35,.6,1.35,1.35s-.6,1.35-1.35,1.35h-7.38ZM19.86,14.05H9.3v10.56h10.56V14.05h0Zm-11.91-2.69h13.25c.74,0,1.35,.6,1.35,1.35v13.25c0,.74-.6,1.35-1.35,1.35H7.96c-.74,0-1.35-.6-1.35-1.35V12.71c0-.74,.6-1.35,1.35-1.35h0Zm11.91,24.42H9.3v10.56h10.56v-10.56h0Zm-11.91-2.69h13.25c.74,0,1.35,.6,1.35,1.35v13.25c0,.74-.6,1.35-1.35,1.35H7.96c-.74,0-1.35-.6-1.35-1.35v-13.25c0-.74,.6-1.35,1.35-1.35h0Zm11.91,23.96H9.3v10.56h10.56v-10.56h0Zm-11.91-2.69h13.25c.74,0,1.35,.6,1.35,1.35v13.25c0,.74-.6,1.35-1.35,1.35H7.96c-.74,0-1.35-.6-1.35-1.35v-13.25c0-.74,.6-1.35,1.35-1.35h0Zm44.43,15.94c-.35-.66-.09-1.47,.56-1.82,.66-.35,1.47-.09,1.82,.56l2.15,4.09,9.3-9.3c.53-.53,1.38-.53,1.9,0s.53,1.38,0,1.9l-10.29,10.29c-.75,.78-2.11,.62-2.65-.4l-2.8-5.32h0Zm17.11-8.78c-5.04-5.04-13.21-5.04-18.24,0s-5.02,13.22,0,18.24c5.04,5.04,13.21,5.04,18.24,0,5.04-5.04,5.04-13.21,0-18.24h0ZM35.54,0h-12.05c-.47,0-.86,.39-.86,.86v3.82c0,.47,.39,.86,.86,.86h12.05c.47,0,.86-.39,.86-.86V.86c0-.47-.39-.86-.86-.86h0Zm3.55,4.11c0,2.21-1.1,4.11-3.55,4.11h-12.05c-2.45,0-3.55-1.91-3.55-4.11H1.59c-.87,0-1.59,.72-1.59,1.59V75.95c0,.87,.72,1.59,1.59,1.59H46.39c-2.98-6.01-1.75-13.23,2.95-17.94,2.53-2.53,5.91-4.19,9.68-4.51V5.71c0-.87-.72-1.59-1.59-1.59,0,0-18.34,0-18.34,0Zm-9.58,11.3c-.74,0-1.35-.6-1.35-1.35s.6-1.35,1.35-1.35h19.42c.74,0,1.35,.6,1.35,1.35s-.6,1.35-1.35,1.35H29.51Z"},
    "noun-project-6441352": {viewBox: "0 0 75.06 84.84", version: "1.0.0", path: "M30.73,17.28c-.71,0-1.29-.58-1.29-1.29s.58-1.29,1.29-1.29h18.54c.71,0,1.29,.58,1.29,1.29s-.58,1.29-1.29,1.29H30.73ZM24.98,0c-2.33,0-3.39,1.82-3.39,3.93H4.09C1.84,3.93,0,5.76,0,8.02V75.04c0,2.25,1.84,4.09,4.09,4.09H48.46c2.75,3.51,7,5.71,11.72,5.71,8.22,0,14.88-6.66,14.88-14.88,0-7.75-5.95-14.17-13.6-14.83V8.02c0-2.25-1.84-4.09-4.09-4.09h-17.5C39.87,1.82,38.82,0,36.48,0h-11.5Zm14.89,6.5c0,2.11-1.05,3.93-3.39,3.93h-11.5c-2.33,0-3.39-1.82-3.39-3.93H4.09c-.83,0-1.52,.69-1.52,1.52V75.04c0,.83,.69,1.52,1.52,1.52H46.84c-2.84-5.74-1.67-12.63,2.82-17.12,2.41-2.41,5.64-4,9.24-4.3V8.02c0-.83-.69-1.52-1.52-1.52h-17.5Zm-3.39-3.93c.45,0,.82,.37,.82,.82v3.65c0,.45-.37,.82-.82,.82h-11.5c-.45,0-.82-.37-.82-.82V3.39c0-.45,.37-.82,.82-.82h11.5Zm32.4,58.69c4.81,4.81,4.81,12.6,0,17.41s-12.6,4.81-17.41,0-4.83-12.58,0-17.41c4.81-4.81,12.6-4.81,17.41,0h0Zm-16.33,8.38c-.33-.63-.09-1.4,.54-1.73,.63-.33,1.4-.09,1.73,.54l2.05,3.9,8.88-8.88c.5-.5,1.32-.5,1.82,0s.5,1.32,0,1.82l-9.82,9.82c-.77,.77-2.03,.56-2.53-.38l-2.67-5.08h0ZM10.16,54.43h12.65c.71,0,1.29,.58,1.29,1.29v12.65c0,.71-.58,1.29-1.29,1.29H10.16c-.71,0-1.29-.58-1.29-1.29v-12.65c0-.71,.58-1.29,1.29-1.29h0Zm11.36,2.57v10.08H11.45v-10.08s10.08,0,10.08,0Zm-11.36-22.86h12.65c.71,0,1.29,.58,1.29,1.29v12.65c0,.71-.58,1.29-1.29,1.29H10.16c-.71,0-1.29-.58-1.29-1.29v-12.65c0-.71,.58-1.29,1.29-1.29h0Zm11.36,2.57v10.08H11.45v-10.08h10.08ZM10.16,13.41h12.65c.71,0,1.29,.58,1.29,1.29v12.65c0,.71-.58,1.29-1.29,1.29H10.16c-.71,0-1.29-.58-1.29-1.29V14.69c0-.71,.58-1.29,1.29-1.29h0Zm11.36,2.57v10.08H11.45V15.98h10.08Zm9.21,52.37c-.71,0-1.29-.58-1.29-1.29s.58-1.29,1.29-1.29h7.04c.71,0,1.29,.58,1.29,1.29s-.58,1.29-1.29,1.29h-7.04Zm0-9.72c-.71,0-1.29-.58-1.29-1.29s.58-1.29,1.29-1.29h9.98c.71,0,1.29,.58,1.29,1.29s-.58,1.29-1.29,1.29c0,0-9.98,0-9.98,0Zm0-10.24c-.71,0-1.29-.58-1.29-1.29s.58-1.29,1.29-1.29h18.54c.71,0,1.29,.58,1.29,1.29s-.58,1.29-1.29,1.29H30.73Zm0-10.38c-.71,0-1.29-.58-1.29-1.29s.58-1.29,1.29-1.29h18.54c.71,0,1.29,.58,1.29,1.29s-.58,1.29-1.29,1.29H30.73Zm0-10.35c-.71,0-1.29-.58-1.29-1.29s.58-1.29,1.29-1.29h18.54c.71,0,1.29,.58,1.29,1.29s-.58,1.29-1.29,1.29H30.73Z"},
    "memo-circle-check-solid": {viewBox: "0 0 576 512", version: "6.5.0", path: "M0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V198.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm64 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16s7.2 16 16 16H240c8.8 0 16-7.2 16-16s-7.2-16-16-16H80zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H80zm208 48a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm188.7-43.3L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"},
    "square-list-sharp-solid": {viewBox: "0 0 448 512", version: "6.5.0", path: "M0 32H448V480H0V32zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248H168v48h24H352h24V136H352 192zm0 96H168v48h24H352h24V232H352 192zm0 96H168v48h24H352h24V328H352 192z"},
    "right-from-bracket-solid": {viewBox: "0 0 512 512", "width": "16", "height": "16", version: "6.5.0", path: "M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"},
    "download-file": {viewBox: "0 0 122.88 120.89", size: "16", version: "1.0.0", path: "M84.58,47a7.71,7.71,0,1,1,10.8,11L66.09,86.88a7.72,7.72,0,0,1-10.82,0L26.4,58.37a7.71,7.71,0,1,1,10.81-11L53.1,63.12l.16-55.47a7.72,7.72,0,0,1,15.43.13l-.15,55L84.58,47ZM0,113.48.1,83.3a7.72,7.72,0,1,1,15.43.14l-.07,22q46,.09,91.91,0l.07-22.12a7.72,7.72,0,1,1,15.44.14l-.1,30h-.09a7.71,7.71,0,0,1-7.64,7.36q-53.73.1-107.38,0A7.7,7.7,0,0,1,0,113.48Z"},
    "bars": {viewBox: "0 0 448 512", size: "512", version: "6.4.0", path: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"},
    "bell": {size: "24", path: "M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"},
    "credit-card": {viewBox: "0 0 576 512", version: "1.0.0", path: "M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"},
    "house-sharp-solid": {viewBox: "0 0 576 512", version: "6.5.0", path: "M511.8 287.6H576V240L288.4 0 0 240v47.6H64.1V512H224V352H352V512H512.8l-1-224.4z"},
    "bell-sharp-solid": {viewBox: "0 0 448 512", version: "6.5.0", path: "M256 0H192V51.2C119 66 64 130.6 64 208v88L0 368v48H448V368l-64-72V208c0-77.4-55-142-128-156.8V0zm32 448H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"},
    "noavatar": {viewBox: "0 0 100 100", "width": "100", "height": "100", version: "1.0.0", path: "M50 0C22.385 0 0 22.385 0 50C0 77.615 22.385 100 50 100C77.615 100 100 77.615 100 50C100 22.385 77.615 0 50 0ZM32.5 37.5C32.5 35.2019 32.9526 32.9262 33.8321 30.803C34.7116 28.6798 36.0006 26.7507 37.6256 25.1256C39.2507 23.5006 41.1798 22.2116 43.303 21.3321C45.4262 20.4527 47.7019 20 50 20C52.2981 20 54.5738 20.4527 56.697 21.3321C58.8202 22.2116 60.7493 23.5006 62.3744 25.1256C63.9994 26.7507 65.2884 28.6798 66.1679 30.803C67.0474 32.9262 67.5 35.2019 67.5 37.5C67.5 42.1413 65.6563 46.5925 62.3744 49.8744C59.0925 53.1563 54.6413 55 50 55C45.3587 55 40.9075 53.1563 37.6256 49.8744C34.3437 46.5925 32.5 42.1413 32.5 37.5ZM81.29 74.92C77.5472 79.6281 72.789 83.4298 67.3708 86.041C61.9527 88.6523 56.0146 90.0056 50 90C43.9854 90.0056 38.0473 88.6523 32.6292 86.041C27.211 83.4298 22.4528 79.6281 18.71 74.92C26.815 69.105 37.875 65 50 65C62.125 65 73.185 69.105 81.29 74.92Z"},
    "user-group-solid": {viewBox: "0 0 640 512", "width": "640", "height": "512", version: "6.5.1", path: "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"},
    "user-alien-solid": {viewBox: "0 0 448 512", width: "448", height: "512", version: "6.5.0", path: "M64 167C64 74.8 135.6 0 224 0s160 74.8 160 167c0 101-106.6 185-139.2 208.3c-6.1 4.3-13.4 6.5-20.8 6.5s-14.7-2.1-20.8-6.5C170.6 352 64 268.1 64 167zm244.6 9c-37.9 0-68.6 30.7-68.6 68.6c0 6.3 5.1 11.4 11.4 11.4h16c37.9 0 68.6-30.7 68.6-68.6c0-6.3-5.1-11.4-11.4-11.4h-16zM208 244.6c0-37.9-30.7-68.6-68.6-68.6h-16c-6.3 0-11.4 5.1-11.4 11.4c0 37.9 30.7 68.6 68.6 68.6h16c6.3 0 11.4-5.1 11.4-11.4zM0 486.4C0 415 55.7 356.6 126.1 352.3c23.8 23.2 46.1 40.2 58.5 49.1c12 8.6 25.9 12.4 39.4 12.4s27.4-3.8 39.4-12.4c12.4-8.8 34.7-25.8 58.5-49.1C392.3 356.6 448 415 448 486.4c0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4z"},
    "cake-candles-solid": {viewBox: "0 0 448 512", width: "448", height: "512", version: "6.5.0", path: "M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"},
    "calendar-days-solid": {viewBox: "0 0 448 512", width: "448", height: "512", version: "6.5.1", path: "M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"},
    "calendar-solid": {viewBox: "0 0 448 512", width: "448", height: "512", version: "6.5.1", path: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"},
    "calendar-week-solid": {viewBox: "0 0 448 512", width: "448", height: "512", version: "6.5.1", path: "M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"},
    "cloud-arrow-up-solid": {viewBox: "0 0 640 512", width: "640", height: "512", version: "6.5.0", path: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"},

}
export default icons;