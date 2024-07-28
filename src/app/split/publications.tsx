export default function Publications() {
  return (
    <div id="publications" className="flex flex-col">
      <p className="m-6 pb-4 pt-24 text-3xl font-bold text-white">
        Publications
      </p>
      <div className="hover:shadow-gray-400/2 flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 text-white hover:border-slate-400 hover:shadow-lg">
        <div className="flex-col pt-4 max-md:justify-center md:flex-row">
          <div className="flex w-full flex-col items-center justify-center px-3 pb-6 md:flex-row">
            <span className=" text-md flex items-center justify-center p-3 px-10 font-bold">
              Thesis: Exploring Delay Tolerant Networks in New York's subway
              system
            </span>
            <div className="bflex w-full flex-row items-center justify-center">
              <span className="flex items-center justify-center md:justify-end md:pr-4">
                Built with:
                {/* <!-- Java SVG --> */}
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z"
                      fill="#E76F00"
                    ></path>
                    <path
                      d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z"
                      fill="#E76F00"
                    ></path>
                    <path
                      d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z"
                      fill="#5382A1"
                    ></path>
                    <path
                      d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z"
                      fill="#5382A1"
                    ></path>
                    <path
                      d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z"
                      fill="#5382A1"
                    ></path>
                    <path
                      d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z"
                      fill="#5382A1"
                    ></path>
                    <path
                      d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z"
                      fill="#5382A1"
                    ></path>
                    <path
                      d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z"
                      fill="#5382A1"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <div className="flex p-4">
            <div className="flex w-full flex-col px-8 py-4">
              <span className="text-semibold text-md">
                • Evaluated pseudo-realistic traces to evaluate network
                protocols.{" "}
              </span>
              <span className="text-semibold text-md">
                • Reseached network interface and environment impacts on
                protocol performance.{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="md:px flex flex-1 flex-col gap-3 max-md:px-32 md:mt-0 md:flex-row">
          <div className="flex-1"></div>
        </div>

        <div className="flex flex-row items-end justify-end gap-3 p-2">
          <div className="md:w-11/12"></div>

          <a
            href="https://scholar.google.com/citations?hl=en&user=ebQQOzIAAAAJ"
            className="relative flex h-11 w-1/2 flex-row items-center justify-center gap-2 rounded-md bg-slate-100 p-4 text-black  md:w-1/4"
            target="_blank"
            rel="noreferrer"
          >
            <button className="group relative flex h-11 w-1/2 items-center justify-center rounded-md bg-slate-100 p-4 text-black md:w-1/4 ">
              <div className="flex items-center justify-center gap-3">
                <svg
                  fill="#000000"
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M14.573 2.729c-0.729 0.484-4.292 2.849-7.917 5.255s-6.589 4.396-6.589 4.422c0 0.026 0.182 0.146 0.406 0.266 0.224 0.13 3.797 2.109 7.953 4.411l7.542 4.193 0.193-0.099c0.109-0.052 2.891-1.641 6.188-3.521l5.99-3.427 0.036 10.599h3.557v-12.401l-4.615-3.094c-6.219-4.167-11.188-7.448-11.307-7.474-0.063-0.010-0.703 0.38-1.438 0.87zM7.141 22.177l0.016 2.672 8.828 5.292 8.891-5.339v-2.641c0-1.458-0.016-2.646-0.031-2.646-0.021 0-1.76 1.042-3.87 2.323l-4.406 2.661-0.578 0.339-1.755-1.052c-1.464-0.875-2.927-1.755-4.385-2.641l-2.672-1.615c-0.031-0.010-0.042 1.177-0.036 2.646z"></path>
                  </g>
                </svg>
                <span className="items-center text-xs">Google Scholar</span>
              </div>
            </button>
          </a>

          <a
            href="https://arxiv.org/pdf/2405.02647"
            className="group relative flex h-11 w-1/2 flex-row items-center justify-center gap-2 rounded-md bg-slate-100 p-4 text-black  md:w-1/4"
            target="_blank"
            rel="noreferrer"
          >
            <button className="relative flex h-11 w-1/2 items-center justify-center rounded-md bg-slate-100 p-4 text-black">
              <div className="flex items-center justify-center gap-2">
                <span className="items-center text-sm">Read</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z" />
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
