import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
	logo: (
		// (
		//   <>
		//     <svg height="153.125" width="445.425" viewBox="0 0 153.125 445.425">
		//       <defs id="SvgjsDefs1001">
		//         <linearGradient id="SvgjsLinearGradient1015">
		//           <stop id="SvgjsStop1016" stop-color="#7f00ff" offset="0"></stop>
		//           <stop id="SvgjsStop1017" stop-color="#e100ff" offset="1"></stop>
		//         </linearGradient>
		//         <linearGradient id="SvgjsLinearGradient1018">
		//           <stop id="SvgjsStop1019" stop-color="#7f00ff" offset="0"></stop>
		//           <stop id="SvgjsStop1020" stop-color="#e100ff" offset="1"></stop>
		//         </linearGradient>
		//         <linearGradient id="SvgjsLinearGradient1021">
		//           <stop id="SvgjsStop1022" stop-color="#7f00ff" offset="0"></stop>
		//           <stop id="SvgjsStop1023" stop-color="#e100ff" offset="1"></stop>
		//         </linearGradient>
		//       </defs>
		//       <g id="SvgjsG1007" transform="matrix(2.7227865150003963,0,0,2.7227865150003963,0.00002003439428286024,0.011363673767940778)" fill="url(#SvgjsLinearGradient1015)">
		//         <path xmlns="http://www.w3.org/2000/svg" d="M23.11 55.78L1.69 43.41A3.39 3.39 0 0 1 0 40.48V15.75a3.39 3.39 0 0 1 1.69-2.94L23.11.45a3.39 3.39 0 0 1 3.39 0l21.41 12.37a3.39 3.39 0 0 1 1.69 2.94v24.72a3.39 3.39 0 0 1-1.69 2.94L26.5 55.78a3.39 3.39 0 0 1-3.39 0z"></path></g><g id="SvgjsG1008"  transform="matrix(2.259723685240267,0,0,2.259723685240267,34.542397624507544,-10.353186657761029)" fill="#f6f6f6"><path d="M8.886 59.94539 c-0.34383 0 -0.6876 -0.10506 -1.053 -0.31623 l-5.2511 -3.0354 c-0.7302 -0.4224 -1.0518 -0.9798 -1.0518 -1.8234 l0 -29.643 c0 -0.8436 0.32162 -1.401 1.0518 -1.8234 l11.342 -6.5556 c0.23039 -0.13858 0.49981 -0.21838 0.7878 -0.21838 c0.8448 0 1.53 0.6852 1.53 1.53 c0 0.57598 -0.31858 1.0776 -0.78894 1.3386 l-10.862 6.279 l0 28.542 l4.296 2.4834 l10.122 -5.8506 l0 -5.8524 c0 -0.8448 0.6852 -1.53 1.53 -1.53 s1.53 0.6852 1.53 1.53 l0 6.4026 c0 0.8436 -0.32162 1.401 -1.0524 1.8174 l-11.077 6.4086 c-0.36539 0.21117 -0.7092 0.31676 -1.0531 0.31676 z M20.538 60.00052735 c-0.8448 0 -1.5307 -0.68694 -1.5307 -1.5317 c0 -0.57598 0.31858 -1.0776 0.78894 -1.3386 l5.037 -2.9112 l0 -11.704 l-4.296 -2.4834 l-5.0382 2.9124 c-0.23039 0.13858 -0.49981 0.21838 -0.7878 0.21838 c-0.8448 0 -1.53 -0.6852 -1.53 -1.53 c0 -0.57598 0.31858 -1.0776 0.78894 -1.3386 l5.514 -3.1872 c0.36539 -0.21117 0.7092 -0.31676 1.0531 -0.31676 s0.68766 0.10559 1.0531 0.31676 l5.2511 3.0354 c0.7302 0.4224 1.0518 0.9798 1.0518 1.8234 l0 12.805 c0 0.8436 -0.32162 1.401 -1.0518 1.8234 l-5.5158 3.1884 c-0.23039 0.13858 -0.49981 0.21838 -0.7878 0.21838 z M8.877 53.2656 c-1.0092 0 -1.5302 -0.8886 -1.5302 -1.5379 l0.0072072 -23.234 c0 -0.8436 0.32162 -1.401 1.0524 -1.8234 l11.077 -6.4026 c0.36539 -0.21117 0.7092 -0.31676 1.0531 -0.31676 s0.68766 0.10559 1.0531 0.31676 l5.2511 3.0354 c0.7308 0.4224 1.0536 0.9798 1.053 1.8234 l-0.006621 6.4032 c0 0.8256 -0.681 1.5306 -1.533 1.5306 c-0.25981 0 -0.5226 -0.065976 -0.76374 -0.20519 l-5.0539 -2.9268 l-5.0382 2.9118 c-0.22981 0.13858 -0.49922 0.21838 -0.7872 0.21838 c-0.8448 0 -1.53 -0.6852 -1.53 -1.53 c0 -0.57598 0.31858 -1.0776 0.78894 -1.3386 l5.514 -3.1872 c0.36539 -0.21117 0.7092 -0.31676 1.0531 -0.31676 s0.68766 0.10559 1.0531 0.31676 l3.243 1.8744 l0 -3.2004 l-4.296 -2.4834 l-10.121 5.8506 l0 20.038 l3.5082 -2.028 c0.23039 -0.13858 0.49981 -0.21838 0.7878 -0.21838 c0.8448 0 1.53 0.6852 1.53 1.53 c0 0.57598 -0.32279 1.0698 -0.78894 1.3392 l-5.8074 3.3546 c-0.23338 0.13441 -0.49858 0.20584 -0.768 0.20584 z"></path>
		//       </g>
		//     </svg>
		//     <style jsx>{`
		//     span {
		//       padding: 0.5rem 0.5rem 0.5rem 0;
		//       mask-image: linear-gradient(
		//         60deg,
		//         black 25%,
		//         rgba(0, 0, 0, 0.2) 50%,
		//         black 75%
		//       );
		//       mask-size: 400%;
		//       mask-position: 0%;
		//     }
		//     span:hover {
		//       mask-position: 100%;
		//       transition: mask-position 1s ease, -webkit-mask-position 1s ease;
		//     }
		//     span:td-logo {
		//       width: 25%;
		//       height: 25%;
		//     }
		//     svg {
		//       width: 90%;
		//       height: auto;
		//       margin-left: -120px;
		//       margin-top: 65px;
		//     }
		//   `}</style>
		//   </>
		// ),
		<strong>
			<span>Graux</span>
		</strong>
	),
	project: {
		link: "https://github.com/YugandharrPatil/graux-docs",
	},
	chat: {
		link: "https://discord.com/invite/RnAJH24w",
	},
	docsRepositoryBase: "https://github.com/YugandharrPatil/graux-docs",
	footer: {
		text: "© 2024 Graux Docs",
	},
};

export default config;
