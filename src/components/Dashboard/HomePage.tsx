"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Transaction" total="₦3.456K" rate="0.43%" levelUp>

          <svg
            className="fill-primary dark:fill-white"
            width="20"
            height="20"
            fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84.992 84.992"
          >
            <g>
              <g>
                <g>
                  <path d="M63.611,77.556c-1.207,0-2.303-0.176-3.256-0.52c-0.947-0.338-1.854-0.892-2.691-1.641
				c-0.842-0.751-1.645-1.65-2.377-2.674c-0.746-1.044-1.492-2.107-2.213-3.16l-9.885-15.154H26.451v15.539
				c0,2.52-0.584,4.438-1.734,5.709c-1.162,1.278-2.611,1.899-4.428,1.899c-1.881,0-3.342-0.628-4.469-1.919
				c-1.125-1.283-1.695-3.198-1.695-5.689V54.407h-9.58C2.039,54.407,0,52.368,0,49.862s2.039-4.545,4.545-4.545h9.58v-7.757h-9.58
				C2.039,37.561,0,35.522,0,33.017s2.039-4.545,4.545-4.545h9.58V17.146c0-2.189,0.238-3.909,0.707-5.11
				c0.586-1.39,1.508-2.464,2.834-3.322c1.326-0.86,2.719-1.278,4.258-1.278c1.189,0,2.221,0.194,3.061,0.579
				c0.863,0.394,1.594,0.906,2.236,1.565c0.654,0.669,1.33,1.547,2.012,2.606c0.701,1.09,1.424,2.225,2.191,3.437l8.492,12.849
				h18.746V15.046c0-2.554,0.547-4.484,1.625-5.739c1.082-1.259,2.506-1.871,4.352-1.871c1.908,0,3.371,0.613,4.469,1.874
				c1.093,1.254,1.646,3.185,1.646,5.736v13.426h9.693c2.506,0,4.545,2.039,4.545,4.545s-2.039,4.544-4.545,4.544h-9.693v7.758
				h9.693c2.506,0,4.545,2.038,4.545,4.545c0,2.506-2.039,4.543-4.545,4.543h-9.693v14.467
				C70.754,74.716,68.418,77.556,63.611,77.556z M24.951,51.407h19.051c0.506,0,0.979,0.256,1.256,0.68l10.312,15.809
				c0.688,1.01,1.426,2.055,2.157,3.081c0.604,0.841,1.256,1.575,1.938,2.183c0.549,0.492,1.121,0.846,1.707,1.055
				c0.629,0.229,1.381,0.343,2.24,0.343c1.747,0,4.143,0,4.143-5.683V52.907c0-0.828,0.673-1.5,1.5-1.5h11.193
				c0.853,0,1.545-0.693,1.545-1.545s-0.692-1.545-1.545-1.545H69.254c-0.828,0-1.5-0.672-1.5-1.5V36.061c0-0.828,0.672-1.5,1.5-1.5
				h11.193c0.852,0,1.545-0.692,1.545-1.544s-0.693-1.545-1.545-1.545H69.254c-0.828,0-1.5-0.672-1.5-1.5V15.046
				c0-2.25-0.494-3.29-0.91-3.767c-0.363-0.418-0.908-0.844-2.205-0.844c-0.971,0-1.572,0.239-2.076,0.826
				c-0.409,0.479-0.899,1.523-0.899,3.784v14.926c0,0.828-0.672,1.5-1.5,1.5H39.109c-0.504,0-0.975-0.253-1.252-0.673l-8.951-13.545
				c-0.781-1.23-1.5-2.359-2.197-3.443c-0.572-0.891-1.123-1.609-1.637-2.135c-0.379-0.391-0.814-0.694-1.334-0.932
				c-0.439-0.201-1.068-0.308-1.814-0.308c-0.955,0-1.789,0.253-2.627,0.796c-0.816,0.529-1.352,1.144-1.686,1.934
				c-0.172,0.44-0.486,1.602-0.486,3.981v12.825c0,0.828-0.672,1.5-1.5,1.5H4.545C3.693,31.472,3,32.165,3,33.017
				s0.693,1.544,1.545,1.544h11.08c0.828,0,1.5,0.672,1.5,1.5v10.757c0,0.828-0.672,1.5-1.5,1.5H4.545
				C3.693,48.317,3,49.011,3,49.862s0.693,1.545,1.545,1.545h11.08c0.828,0,1.5,0.672,1.5,1.5v17.039
				c0,1.719,0.33,3.004,0.953,3.715c0.547,0.627,1.207,0.895,2.211,0.895c0.963,0,1.621-0.273,2.205-0.917
				c0.625-0.688,0.957-1.966,0.957-3.69V52.907C23.451,52.079,24.123,51.407,24.951,51.407z M60.162,63.331
				c-0.494,0-0.969-0.246-1.252-0.674l-5.896-8.924c-0.303-0.461-0.33-1.052-0.067-1.537c0.262-0.486,0.771-0.789,1.319-0.789h5.896
				c0.828,0,1.5,0.672,1.5,1.5v8.924c0,0.662-0.436,1.246-1.068,1.437C60.451,63.31,60.305,63.331,60.162,63.331z M57.055,54.407
				l1.607,2.432v-2.432H57.055z M60.162,48.317h-9.92c-0.504,0-0.975-0.253-1.252-0.673l-7.107-10.757
				c-0.305-0.461-0.332-1.052-0.07-1.538c0.262-0.485,0.77-0.789,1.32-0.789h17.029c0.828,0,1.5,0.672,1.5,1.5v10.757
				C61.662,47.646,60.99,48.317,60.162,48.317z M51.049,45.317h7.613v-7.757h-12.74L51.049,45.317z M40.029,48.317H24.951
				c-0.828,0-1.5-0.672-1.5-1.5V36.061c0-0.828,0.672-1.5,1.5-1.5h8.063c0.506,0,0.979,0.256,1.256,0.681l7.016,10.757
				c0.301,0.461,0.324,1.049,0.063,1.533C41.086,48.017,40.58,48.317,40.029,48.317z M26.451,45.317H37.26l-5.059-7.757h-5.75
				V45.317z M29.041,31.473h-4.09c-0.828,0-1.5-0.672-1.5-1.5v-6.271c0-0.664,0.436-1.249,1.072-1.438
				c0.635-0.188,1.322,0.062,1.684,0.618l4.09,6.271c0.301,0.461,0.326,1.05,0.064,1.534C30.098,31.17,29.592,31.473,29.041,31.473z
				"/>
                </g>
              </g>
            </g>
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Comission" total="₦45,2K" rate="4.35%" levelUp>
        <svg
            className="fill-primary dark:fill-white"
            width="20"
            height="20"
            fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84.992 84.992"
          >
            <g>
              <g>
                <g>
                  <path d="M63.611,77.556c-1.207,0-2.303-0.176-3.256-0.52c-0.947-0.338-1.854-0.892-2.691-1.641
				c-0.842-0.751-1.645-1.65-2.377-2.674c-0.746-1.044-1.492-2.107-2.213-3.16l-9.885-15.154H26.451v15.539
				c0,2.52-0.584,4.438-1.734,5.709c-1.162,1.278-2.611,1.899-4.428,1.899c-1.881,0-3.342-0.628-4.469-1.919
				c-1.125-1.283-1.695-3.198-1.695-5.689V54.407h-9.58C2.039,54.407,0,52.368,0,49.862s2.039-4.545,4.545-4.545h9.58v-7.757h-9.58
				C2.039,37.561,0,35.522,0,33.017s2.039-4.545,4.545-4.545h9.58V17.146c0-2.189,0.238-3.909,0.707-5.11
				c0.586-1.39,1.508-2.464,2.834-3.322c1.326-0.86,2.719-1.278,4.258-1.278c1.189,0,2.221,0.194,3.061,0.579
				c0.863,0.394,1.594,0.906,2.236,1.565c0.654,0.669,1.33,1.547,2.012,2.606c0.701,1.09,1.424,2.225,2.191,3.437l8.492,12.849
				h18.746V15.046c0-2.554,0.547-4.484,1.625-5.739c1.082-1.259,2.506-1.871,4.352-1.871c1.908,0,3.371,0.613,4.469,1.874
				c1.093,1.254,1.646,3.185,1.646,5.736v13.426h9.693c2.506,0,4.545,2.039,4.545,4.545s-2.039,4.544-4.545,4.544h-9.693v7.758
				h9.693c2.506,0,4.545,2.038,4.545,4.545c0,2.506-2.039,4.543-4.545,4.543h-9.693v14.467
				C70.754,74.716,68.418,77.556,63.611,77.556z M24.951,51.407h19.051c0.506,0,0.979,0.256,1.256,0.68l10.312,15.809
				c0.688,1.01,1.426,2.055,2.157,3.081c0.604,0.841,1.256,1.575,1.938,2.183c0.549,0.492,1.121,0.846,1.707,1.055
				c0.629,0.229,1.381,0.343,2.24,0.343c1.747,0,4.143,0,4.143-5.683V52.907c0-0.828,0.673-1.5,1.5-1.5h11.193
				c0.853,0,1.545-0.693,1.545-1.545s-0.692-1.545-1.545-1.545H69.254c-0.828,0-1.5-0.672-1.5-1.5V36.061c0-0.828,0.672-1.5,1.5-1.5
				h11.193c0.852,0,1.545-0.692,1.545-1.544s-0.693-1.545-1.545-1.545H69.254c-0.828,0-1.5-0.672-1.5-1.5V15.046
				c0-2.25-0.494-3.29-0.91-3.767c-0.363-0.418-0.908-0.844-2.205-0.844c-0.971,0-1.572,0.239-2.076,0.826
				c-0.409,0.479-0.899,1.523-0.899,3.784v14.926c0,0.828-0.672,1.5-1.5,1.5H39.109c-0.504,0-0.975-0.253-1.252-0.673l-8.951-13.545
				c-0.781-1.23-1.5-2.359-2.197-3.443c-0.572-0.891-1.123-1.609-1.637-2.135c-0.379-0.391-0.814-0.694-1.334-0.932
				c-0.439-0.201-1.068-0.308-1.814-0.308c-0.955,0-1.789,0.253-2.627,0.796c-0.816,0.529-1.352,1.144-1.686,1.934
				c-0.172,0.44-0.486,1.602-0.486,3.981v12.825c0,0.828-0.672,1.5-1.5,1.5H4.545C3.693,31.472,3,32.165,3,33.017
				s0.693,1.544,1.545,1.544h11.08c0.828,0,1.5,0.672,1.5,1.5v10.757c0,0.828-0.672,1.5-1.5,1.5H4.545
				C3.693,48.317,3,49.011,3,49.862s0.693,1.545,1.545,1.545h11.08c0.828,0,1.5,0.672,1.5,1.5v17.039
				c0,1.719,0.33,3.004,0.953,3.715c0.547,0.627,1.207,0.895,2.211,0.895c0.963,0,1.621-0.273,2.205-0.917
				c0.625-0.688,0.957-1.966,0.957-3.69V52.907C23.451,52.079,24.123,51.407,24.951,51.407z M60.162,63.331
				c-0.494,0-0.969-0.246-1.252-0.674l-5.896-8.924c-0.303-0.461-0.33-1.052-0.067-1.537c0.262-0.486,0.771-0.789,1.319-0.789h5.896
				c0.828,0,1.5,0.672,1.5,1.5v8.924c0,0.662-0.436,1.246-1.068,1.437C60.451,63.31,60.305,63.331,60.162,63.331z M57.055,54.407
				l1.607,2.432v-2.432H57.055z M60.162,48.317h-9.92c-0.504,0-0.975-0.253-1.252-0.673l-7.107-10.757
				c-0.305-0.461-0.332-1.052-0.07-1.538c0.262-0.485,0.77-0.789,1.32-0.789h17.029c0.828,0,1.5,0.672,1.5,1.5v10.757
				C61.662,47.646,60.99,48.317,60.162,48.317z M51.049,45.317h7.613v-7.757h-12.74L51.049,45.317z M40.029,48.317H24.951
				c-0.828,0-1.5-0.672-1.5-1.5V36.061c0-0.828,0.672-1.5,1.5-1.5h8.063c0.506,0,0.979,0.256,1.256,0.681l7.016,10.757
				c0.301,0.461,0.324,1.049,0.063,1.533C41.086,48.017,40.58,48.317,40.029,48.317z M26.451,45.317H37.26l-5.059-7.757h-5.75
				V45.317z M29.041,31.473h-4.09c-0.828,0-1.5-0.672-1.5-1.5v-6.271c0-0.664,0.436-1.249,1.072-1.438
				c0.635-0.188,1.322,0.062,1.684,0.618l4.09,6.271c0.301,0.461,0.326,1.05,0.064,1.534C30.098,31.17,29.592,31.473,29.041,31.473z
				"/>
                </g>
              </g>
            </g>
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Agents" total="2450" rate="2.59%" levelUp>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
              fill=""
            />
            <path
              d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
              fill=""
            />
            <path
              d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
              fill=""
            />
          </svg>
        </CardDataStats>
        <CardDataStats title="Total Users" total="3456" rate="0.95%" levelDown>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
              fill=""
            />
            <path
              d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
              fill=""
            />
            <path
              d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
              fill=""
            />
          </svg>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        <div className="col-span-12 ">
          <TableOne />
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default HomePage;
