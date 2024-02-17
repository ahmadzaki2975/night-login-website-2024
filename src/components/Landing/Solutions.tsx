import Image from "next/image";
import NL from "@/../../public/assets/images/LogoRed.png";
import NADC from "@/../../public/assets/images/NADC.svg";
import NCSC from "@/../../public/assets/images/NCSC.svg";
import NDSC from "@/../../public/assets/images/NDSC.svg";
import NGDC from "@/../../public/assets/images/NGDC.svg";
import NHCI from "@/../../public/assets/images/NHCI.svg";
import NWDC from "@/../../public/assets/images/NWDC.svg";
import Button from "../Button";
import Link from "next/link";

export default function Solutions() {
  return (
    <main className="flex justify-center items-start pb-20">
      <section className="flex h-fit items-end flex-col-reverse lg:flex-row pb-[100px]">
        <div
          className="flex flex-col gap-[22px] items-center lg:items-start pb-4"
          data-aos="fade-right"
        >
          <h1 className="font-bold text-[45px] md:text-[64px] max-w-[505px] leading-[100%] text-center lg:text-left mt-5 lg:mt-0">
            IT Solutions for Your Projects
          </h1>
          <p className="font-medium text-[#606060] text-[16px] lg:text-[20px]">
            Let us transform your ideas into reality
          </p>
          <Link href="/projects">
            <Button title="Request Project Now!" color="red" />
          </Link>
        </div>
        <div className="relative flex justify-center" data-aos="fade-left">
          {/* Drone SVG */}
          <svg
            width="471"
            height="386"
            viewBox="0 0 471 386"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full"
          >
            <path
              d="M33 0L99.4217 278H376.595L457 0H33Z"
              fill="url(#paint0_linear_26_3)"
              fillOpacity="0.5"
              className="animate-pulse"
            />
            <g clipPath="url(#clip0_26_3)">
              <path
                d="M171.8 299.034C171.256 299.035 170.736 299.251 170.351 299.635C169.967 300.019 169.751 300.54 169.751 301.084V382.974C169.751 383.518 169.967 384.039 170.351 384.423C170.736 384.808 171.256 385.024 171.8 385.025H185.694C186.237 385.024 186.758 384.808 187.142 384.423C187.526 384.039 187.742 383.518 187.743 382.974V301.084C187.742 300.54 187.526 300.019 187.142 299.635C186.758 299.251 186.237 299.035 185.694 299.034H171.8Z"
                fill="#2E2E2E"
              />
              <path
                d="M287.342 299.034C286.799 299.035 286.278 299.251 285.894 299.635C285.51 300.019 285.294 300.54 285.293 301.084V382.974C285.294 383.518 285.51 384.039 285.894 384.423C286.278 384.808 286.799 385.024 287.342 385.025H301.237C301.78 385.024 302.301 384.808 302.685 384.423C303.069 384.039 303.285 383.518 303.286 382.974V301.084C303.285 300.54 303.069 300.019 302.685 299.635C302.301 299.251 301.78 299.035 301.237 299.034H287.342Z"
                fill="#2E2E2E"
              />
              <g className="animate-blade-r origin-[350px]">
                <path // R1 Blade
                  d="M352.257 233.972L245.723 225.743L330.715 240.242L351.082 236.715L352.257 233.972Z"
                  fill="#2E2E2E"
                />
                <path
                  d="M331.498 238.951L351.865 235.425L352.065 234.958L353.04 235.033L351.865 237.776L331.498 241.303L246.506 225.743L271.693 228.749L331.498 238.951Z"
                  fill="#D62340"
                />
                <path // R2 Blade
                  d="M361.657 233.972L468.191 225.743L383.199 240.242L362.832 236.715L361.657 233.972Z"
                  fill="#2E2E2E"
                />
                <path
                  d="M383.982 238.951L363.615 235.425L363.415 234.958L362.44 235.033L363.615 237.776L383.982 241.303L468.974 225.743L443.787 228.749L383.982 238.951Z"
                  fill="#D62340"
                />
              </g>
              <g className="animate-blade-l origin-[120px]">
                <path // L1 Blade
                  d="M110.988 233.972L4.45328 225.743L89.446 240.242L109.813 236.715L110.988 233.972Z"
                  fill="#2E2E2E"
                />
                <path
                  d="M88.2711 238.951L108.638 235.425L108.838 234.958L109.813 235.033L108.638 237.776L88.2711 241.303L3.27844 225.743L28.4658 228.749L88.2711 238.951Z"
                  fill="#D62340"
                />
                <path // L2 Blade
                  d="M120.388 233.972L226.922 225.743L141.93 240.242L121.563 236.715L120.388 233.972Z"
                  fill="#2E2E2E"
                />
                <path
                  d="M143.105 238.951L122.738 235.425L122.538 234.958L121.563 235.033L122.738 237.776L143.105 241.303L228.097 225.743L202.91 228.749L143.105 238.951Z"
                  fill="#D62340"
                />
              </g>
              <path
                d="M370.274 276.685L361.265 277.077L278.736 311.914L274.013 315.872L259.039 328.412H212.039L197.884 315.872L192.502 311.103L113.338 277.469L106.288 276.685L129.788 265.321H129.913C135.24 260.262 181.371 256.308 237.497 256.308C293.624 256.308 339.755 260.262 345.081 265.321H345.598L370.274 276.685Z"
                fill="#2E2E2E"
              />
              <path
                d="M129.143 265.902C129.31 265.432 129.395 264.937 129.396 264.439V245.826C129.396 244.657 128.932 243.535 128.106 242.709C127.279 241.882 126.158 241.417 124.989 241.417H123.2C124.669 239.934 125.667 238.048 126.067 235.998C126.467 233.949 126.252 231.826 125.449 229.899C124.645 227.971 123.29 226.324 121.553 225.166C119.816 224.008 117.775 223.39 115.688 223.39C113.6 223.39 111.56 224.008 109.823 225.166C108.086 226.324 106.73 227.971 105.927 229.899C105.124 231.826 104.909 233.949 105.309 235.998C105.709 238.048 106.707 239.934 108.176 241.417H106.386C105.808 241.417 105.235 241.531 104.7 241.753C104.165 241.974 103.679 242.299 103.27 242.709C102.861 243.118 102.536 243.604 102.315 244.139C102.093 244.674 101.979 245.247 101.979 245.826V264.439C101.979 265.201 102.177 265.95 102.555 266.612C101.225 266.845 99.8944 267.098 98.5643 267.391C97.754 267.572 97.0298 268.025 96.5113 268.674C95.9929 269.322 95.7111 270.129 95.7127 270.959V275.382C95.7127 276.351 96.0975 277.281 96.7826 277.966C97.4677 278.651 98.3968 279.036 99.3657 279.036H140.755V268.064C136.933 267.101 133.055 266.379 129.143 265.902Z"
                fill="#2E2E2E"
              />
              <path
                d="M374.08 267.391C372.75 267.098 371.42 266.845 370.09 266.612C370.467 265.95 370.665 265.201 370.665 264.439V245.826C370.665 245.247 370.551 244.674 370.33 244.139C370.108 243.604 369.784 243.118 369.374 242.709C368.965 242.299 368.479 241.974 367.945 241.753C367.41 241.531 366.837 241.417 366.258 241.417H364.469C365.938 239.934 366.936 238.048 367.336 235.998C367.736 233.949 367.521 231.826 366.718 229.899C365.914 227.971 364.559 226.324 362.822 225.166C361.085 224.008 359.044 223.39 356.957 223.39C354.869 223.39 352.829 224.008 351.092 225.166C349.355 226.324 347.999 227.971 347.196 229.899C346.393 231.826 346.178 233.949 346.578 235.998C346.978 238.048 347.975 239.934 349.445 241.417H347.655C347.077 241.417 346.504 241.531 345.969 241.753C345.434 241.974 344.948 242.299 344.539 242.709C344.13 243.118 343.805 243.604 343.584 244.139C343.362 244.674 343.248 245.247 343.248 245.826V264.439C343.249 264.937 343.335 265.432 343.502 265.902C339.59 266.379 335.712 267.101 331.89 268.064V279.036H373.279C374.248 279.036 375.177 278.651 375.862 277.966C376.547 277.281 376.932 276.351 376.932 275.382V270.959C376.933 270.129 376.652 269.322 376.133 268.674C375.615 268.025 374.891 267.572 374.08 267.391Z"
                fill="#2E2E2E"
              />
              <path
                d="M243.803 324.885H227.275C226.663 324.885 226.057 325.006 225.491 325.24C224.926 325.474 224.412 325.818 223.979 326.251C223.546 326.684 223.203 327.198 222.969 327.764C222.734 328.33 222.614 328.936 222.614 329.549V333.153C222.614 334.099 222.903 335.024 223.441 335.802C223.98 336.581 224.742 337.177 225.628 337.511C224.944 338.332 224.571 339.367 224.572 340.435V341.468C224.572 342.205 224.75 342.931 225.091 343.585C225.432 344.238 225.926 344.799 226.531 345.22V358.977H244.547V345.22C245.152 344.799 245.646 344.238 245.987 343.585C246.328 342.931 246.506 342.205 246.506 341.468V340.435C246.507 339.367 246.134 338.332 245.45 337.511C246.336 337.177 247.098 336.581 247.636 335.802C248.175 335.024 248.464 334.099 248.464 333.153V329.549C248.464 328.936 248.343 328.33 248.109 327.764C247.875 327.198 247.532 326.684 247.099 326.251C246.666 325.818 246.152 325.474 245.586 325.24C245.021 325.006 244.415 324.885 243.803 324.885Z"
                fill="#2E2E2E"
              />
              <path
                d="M218.743 357.031C218.007 357.031 217.302 357.324 216.782 357.845C216.261 358.365 215.969 359.071 215.968 359.807V382.051C215.969 382.788 216.261 383.494 216.782 384.014C217.302 384.535 218.007 384.828 218.743 384.829H252.335C253.071 384.828 253.776 384.535 254.296 384.014C254.817 383.494 255.109 382.788 255.11 382.051V359.807C255.109 359.071 254.816 358.365 254.296 357.845C253.776 357.324 253.07 357.031 252.335 357.031H218.743Z"
                fill="#D62340"
              />
              <path
                d="M274.013 315.872L259.039 328.412H212.039L197.884 315.872H211.96L212.575 312.804C212.756 311.901 213.243 311.089 213.954 310.505C214.665 309.922 215.556 309.602 216.476 309.602H255.777C256.696 309.602 257.588 309.922 258.299 310.505C259.01 311.089 259.497 311.901 259.678 312.804L260.293 315.872H274.013Z"
                fill="#D62340"
              />
              <path
                d="M235.539 381.902C241.596 381.902 246.506 376.989 246.506 370.929C246.506 364.87 241.596 359.957 235.539 359.957C229.482 359.957 224.572 364.87 224.572 370.929C224.572 376.989 229.482 381.902 235.539 381.902Z"
                fill="#blue"
              />
              <path
                d="M235.539 377.199C239 377.199 241.806 374.392 241.806 370.929C241.806 367.467 239 364.66 235.539 364.66C232.078 364.66 229.272 367.467 229.272 370.929C229.272 374.392 232.078 377.199 235.539 377.199Z"
                fill="#E6E6E6"
              />
              <path
                d="M239.327 365.943C240.246 367.148 240.697 368.646 240.596 370.159C240.495 371.672 239.848 373.097 238.777 374.169C237.705 375.241 236.281 375.887 234.769 375.989C233.257 376.09 231.76 375.639 230.555 374.719C231.095 375.432 231.782 376.021 232.569 376.447C233.356 376.872 234.225 377.124 235.117 377.185C236.009 377.246 236.904 377.115 237.742 376.801C238.579 376.487 239.34 375.997 239.972 375.365C240.604 374.732 241.094 373.971 241.408 373.133C241.721 372.295 241.852 371.4 241.791 370.507C241.73 369.614 241.478 368.745 241.053 367.958C240.628 367.17 240.04 366.483 239.327 365.943Z"
                fill="white"
              />
              <path
                d="M377.128 272.065H95.9085V273.86H377.128V272.065Z"
                fill="#E6E6E6"
              />
              <path
                d="M251.793 312.933H220.46V319.203H251.793V312.933Z"
                fill="#E6E6E6"
              />
              <path d="M471 384.811H0V386H471V384.811Z" fill="#2E2E2E" />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_26_3"
                x1="245"
                y1="18.5687"
                x2="242.245"
                y2="281.208"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D62340" stopOpacity="0" />
                <stop
                  offset="0.745013"
                  stopColor="#D62340"
                  stopOpacity="0.265846"
                />
                <stop offset="1" stopColor="#D62340" />
              </linearGradient>
              <clipPath id="clip0_26_3">
                <rect
                  width="471"
                  height="293"
                  fill="white"
                  transform="translate(0 93)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="absolute top-[40px] flex flex-col items-center gap-[13.5px]">
            <div className="flex gap-[16.25px]">
              <Image
                className="hover:scale-[1.1] cursor-pointer transition w-[50px] md:w-[62.5px] h-auto"
                src={NWDC}
                alt="Logo NWDC"
              />
              <Image
                className="hover:scale-[1.1] cursor-pointer transition w-[55px] md:w-[68px] h-auto"
                src={NL}
                alt="Logo NL"
              />
              <Image
                className="hover:scale-[1.1] cursor-pointer transition w-[50px] md:w-[62.5px] h-auto"
                src={NHCI}
                alt="Logo NHCI"
              />
            </div>
            <div className="flex gap-[16.25px]">
              <Image
                className="hover:scale-[1.1] cursor-pointer transition w-[50px] md:w-[62.5px] h-auto"
                src={NCSC}
                alt="Logo NL"
              />
              <Image
                className="hover:scale-[1.1] cursor-pointer transition w-[50px] md:w-[62.5px] h-auto"
                src={NADC}
                alt="Logo NL"
              />
              <Image
                className="hover:scale-[1.1] cursor-pointer transition w-[50px] md:w-[62.5px] h-auto"
                src={NDSC}
                alt="Logo NL"
              />
              <Image
                className="hover:scale-[1.1] cursor-pointer transition w-[50px] md:w-[62.5px] h-auto"
                src={NGDC}
                alt="Logo NL"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
