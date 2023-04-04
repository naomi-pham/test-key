import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
// import styles from './index.css';

(() => {
	const container = document.getElementsByClassName('root');

	for (let i = 0; i < container.length; i++) {
		let intent = container[i].dataset.review;
		if (!container[i].classList.contains('root-rendered')) {
			let shadowDom = container[i].attachShadow({ mode: 'open' });
			container[i].classList.add('root-rendered');

			// const fontFile = new FontFace(
			// 	'graphik-regular',
			// 	'url(https://fonts.cozy-cost.just.engineer/GraphikRegular.otf)',
			// );
			// document.fonts.add(fontFile);
			// fontFile.load();

			if (
				!document.querySelector('style[data-description="cozy-widget-fonts"]')
			) {
				const cozyFonts = `@font-face{font-family:"graphik-bold";src:url("https://fonts.cozy-cost.just.engineer/GraphikBlack.otf")}@font-face{font-family:"graphik-semibold";src:url("https://fonts.cozy-cost.just.engineer/GraphikSemibold.otf")}@font-face{font-family:"graphik-medium";src:url("https://fonts.cozy-cost.just.engineer/GraphikMedium.otf")}@font-face{font-family:"graphik-regular";src:url("https://fonts.cozy-cost.just.engineer/GraphikRegular.otf")}`;
				const el = document.createElement('style');
				el.dataset.description = 'cozy-widget-fonts';
				el.appendChild(document.createTextNode(cozyFonts));
				document.head.appendChild(el);
			}

			if (!document.getElementById('cozy-widget-style')) {
				let styleTag = document.createElement('style');
				styleTag.setAttribute('id', 'cozy-widget-style');
				styleTag.textContent = `@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap');*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}@font-face{font-family:"graphik-bold";src:url("https://fonts.cozy-cost.just.engineer/GraphikBlack.otf")}@font-face{font-family:"graphik-semibold";src:url("https://fonts.cozy-cost.just.engineer/GraphikSemibold.otf")}@font-face{font-family:"graphik-medium";src:url("https://fonts.cozy-cost.just.engineer/GraphikMedium.otf")}@font-face{font-family:"graphik-regular";src:url("https://fonts.cozy-cost.just.engineer/GraphikRegular.otf")}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}.cozy-absolute{position:absolute}.cozy-relative{position:relative}.cozy-inset-0{top:0;right:0;bottom:0;left:0}.cozy-bottom-0{bottom:0}.cozy-left-0{left:0}.cozy-right-0{right:0}.cozy-right-2{right:.5rem}.cozy-top-0{top:0}.cozy-top-1\\/2{top:50%}.cozy-mx-auto{margin-left:auto;margin-right:auto}.cozy-ml-2{margin-left:.5rem}.cozy-mt-5{margin-top:1rem}.cozy-mt-1{margin-top:.25rem}.cozy-mt-2{margin-top:.5rem}.cozy-flex{display:flex}.cozy-grid{display:grid}.cozy-hidden{display:none}.cozy-h-5{height:1.25rem}.cozy-h-8{height:2rem}.cozy-h-full{height:100%}.cozy-min-h-\\[200px\\]{min-height:200px}.cozy-min-h-screen{min-height:100vh}.cozy-w-10\\/12{width:83.333333%}.cozy-w-11\\/12{width:91.666667%}.cozy-w-5{width:1.25rem}.cozy-w-8{width:2rem}.cozy-w-fit{width:-moz-fit-content;width:fit-content}.cozy-w-full{width:100%}.cozy-min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.cozy-min-w-full{min-width:100%}.cozy-max-w-3xl{max-width:48rem}.cozy-max-w-xs{max-width:20rem}.-cozy-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cozy-cursor-pointer{cursor:pointer}.cozy-grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.cozy-flex-col{flex-direction:column}.cozy-flex-wrap{flex-wrap:wrap}.cozy-items-end{align-items:flex-end}.cozy-items-center{align-items:center}.cozy-justify-center{justify-content:center}.cozy-gap-0{gap:0}.cozy-gap-0\\.5{gap:.125rem}.cozy-gap-1{gap:.25rem}.cozy-gap-1\\.5{gap:.375rem}.cozy-gap-12{gap:3rem}.cozy-gap-2{gap:.5rem}.cozy-gap-3{gap:.75rem}.cozy-gap-4{gap:1rem}.cozy-gap-5{gap:1.25rem}.cozy-space-y-2>:not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))}.cozy-space-y-5>:not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.cozy-self-stretch{align-self:stretch}.cozy-overflow-hidden{overflow:hidden}.cozy-overflow-x-scroll{overflow-x:scroll}.cozy-overflow-x-hidden {overflow-x: hidden;}.cozy-rounded-xl{border-radius:.75rem}.cozy-rounded{border-radius:.25rem}.cozy-rounded-md{border-radius:.375rem}.cozy-rounded-sm{border-radius:.125rem}.cozy-border{border-width:1px}.cozy-border-2{border-width:2px}.cozy-border-slate-300{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.cozy-border-branding-primary-500 {--tw-border-opacity: 1;border-color: rgb(233 76 137 / var(--tw-border-opacity));}.cozy-border-branding-primary-400 {--tw-border-opacity: 1;border-color: rgb(233 76 137 / var(--tw-border-opacity));}.cozy-bg-branding-primary-500{--tw-border-opacity:1;border-color:rgb(223 76 137 / var(--tw-border-opacity))}.cozy-bg-branding-primary-500{--tw-bg-opacity:1;background-color:rgb(233 76 137 / var(--tw-bg-opacity))}.hover\\:cozy-bg-branding-primary-600:hover{--tw-border-opacity: 1;background-color: rgb(219 71 129 / var(--tw-border-opacity));}.cozy-bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.cozy-bg-light{--tw-bg-opacity:1;background-color:rgb(247 247 248 / var(--tw-bg-opacity))}.cozy-bg-light-neutral-100 {--tw-bg-opacity: 1;background-color: rgb(241 242 244 / var(--tw-bg-opacity));}.cozy-bg-orange-500{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity))}.cozy-bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.cozy-bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.cozy-bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.cozy-bg-yellow-500{--tw-bg-opacity:1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.cozy-bg-zinc-200{--tw-bg-opacity:1;background-color:rgb(228 228 231 / var(--tw-bg-opacity))}.cozy-fill-light-neutral-700{fill:#6b778c}.cozy-fill-none{fill:none}.cozy-p-2{padding:.5rem}.cozy-p-3{padding:.75rem}.cozy-p-4{padding:1rem}.cozy-px-3{padding-left:.75rem;padding-right:.75rem}.cozy-px-2{padding-left:.5rem;padding-right:.5rem}.cozy-px-4{padding-left:1rem;padding-right:1rem}.cozy-py-1{padding-top:.25rem;padding-bottom:.25rem}.cozy-py-2{padding-top:.5rem;padding-bottom:.5rem}.cozy-py-4{padding-top:1rem;padding-bottom:1rem}.cozy-p-6{padding:1.5rem}.cozy-py-8{padding-top:2rem;padding-bottom:2rem}.cozy-pr-1{padding-right:.25rem}.cozy-pt-2{padding-top:.5rem}.cozy-text-center{text-align:center}.cozy-font-graphik {font-family: "graphik-regular";}.cozy-font-graphik-medium{font-family:"graphik-medium"}.cozy-font-graphik-semibold{font-family:"graphik-semibold"}.cozy-font-graphik-bold{font-family:"graphik-bold"}.cozy-text-2xl{font-size:1.5rem;line-height:2rem}.cozy-text-body-2{font-size:1rem;line-height:1.5rem}.cozy-text-title-2{font-size:1.125rem;line-height:1.75rem}.cozy-text-body-2{font-size: 2rem/* 32px */;line-height: 2.5rem/* 40px */;letter-spacing: 0.01em;}.cozy-text-body-2{font-size:.875rem;line-height:1.25rem}.cozy-text-xl{font-size:1.25rem;line-height:1.75rem}.cozy-font-bold{font-weight:700}.cozy-uppercase{text-transform:uppercase}.cozy-text-light-neutral-700{--tw-text-opacity:1;color:rgb(107 119 140 / var(--tw-text-opacity))}.cozy-text-branding-primary-500{--tw-text-opacity:1;color:rgb(233 76 137 / var(--tw-text-opacity))}.cozy-bg-branding-primary-500{--tw-border-opacity:1;color:rgb(233 76 137 / var(--tw-border-opacity))}.cozy-text-light-neutral-800 {--tw-text-opacity: 1;color: rgb(37 56 88 / var(--tw-text-opacity));}.cozy-text-light-neutral-25{--tw-text-opacity:1;color:rgb(247 247 248 / var(--tw-text-opacity))}.cozy-underline{text-decoration-line:underline}.cozy-underline-offset-2{text-underline-offset:2px}.cozy-opacity-0{opacity:0}.cozy-opacity-60{opacity:.6}.cozy-opacity-80{opacity:.8}.cozy-shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / .1),0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.cozy-outline{outline-style:solid}.cozy-ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.cozy-ring-brand{--tw-ring-opacity:1;--tw-ring-color:rgb(233 76 137 / var(--tw-ring-opacity))}.cozy-transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.cozy-transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.cozy-duration-150{transition-duration:150ms}.cozy-duration-200{transition-duration:200ms}.cozy-duration-500{transition-duration:500ms}.cozy-duration-75{transition-duration:75ms}.cozy-ease-in-out{transition-timing-function:cubic-bezier(0.4,0,0.2,1)}.last-of-type\\:cozy-pr-0:last-of-type{padding-right:0}.hover\\:cozy-scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:cozy-scale-125:hover{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:cozy-cursor-pointer:hover{cursor:pointer}.hover\\:cozy-bg-black-500:hover{--tw-bg-opacity:1;background-color:rgb(179 186 197 / var(--tw-bg-opacity))}.hover\\:cozy-bg-branding-primary-500:hover{--tw-bg-opacity:1;background-color:rgb(233 76 137 / var(--tw-bg-opacity))}.hover\\:cozy-bg-branding-primary-100:hover{--tw-bg-opacity:1;background-color:rgb(253 242 247 / var(--tw-bg-opacity))}.hover\\:cozy-shadow-md:hover{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / .1),0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:cozy-shadow-sm:hover{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:cozy-ring-light-neutral-300:hover{--tw-ring-opacity:1;--tw-ring-color:rgb(223 225 230 / var(--tw-ring-opacity))}.focus\\:cozy-bg-white:focus{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.focus\\:cozy-ring-offset-2:focus{--tw-ring-offset-width:2px;}.focus\\:cozy-outline-none:focus{outline: 2px solid transparent;outline-offset: 2px;}.focus\\:cozy-ring-2:focus {--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}.focus\\:cozy-ring-branding-primary-400:focus {--tw-ring-opacity: 1;--tw-ring-color: rgb(240 130 172 / var(--tw-ring-opacity));}.disabled\\:cozy-cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cozy-opacity-20:disabled{opacity:.2}.disabled\\:cozy-opacity-40:disabled{opacity:.4}.cozy-group:hover .group-hover\\:cozy-opacity-50{opacity:.5}.cozy-min-w-\\[50\\%\\]{min-width:50%}@media(min-width:640px){.sm\\:cozy-block {display: block;}.sm\\:cozy-hidden{display: hidden;}.sm\\:-cozy-left-8{left:-2rem}.sm\\:-cozy-right-8{right:-2rem}.sm\\:cozy-min-w-\\[50\\%\\]{min-width:50%}.sm\\:cozy-max-w-sm{max-width:24rem}.sm\\:cozy-max-w-xl{max-width:36rem}.sm\\:cozy-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:cozy-flex-row{flex-direction:row}.sm\\:cozy-bg-light{--tw-bg-opacity:1;background-color:rgb(247 247 248 / var(--tw-bg-opacity))}}@media(min-width:768px){.md\\:cozy-block{display:block}.md\\:cozy-w-auto{width:auto}.md\\:cozy-flex-row {flex-direction: row;}.md\\:cozy-min-w-\\[45\\%\\]{min-width:50%}}@media(min-width:1024px){.lg\\:cozy-max-w-3xl{max-width:48rem}}.lg\\:cozy-max-w-full {max-width: 100%;}.cozy-line-clamp-2{overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}.cozy-line-clamp-5{overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;}.cozy-self-stretch { align-self: stretch;}`;
				shadowDom.appendChild(styleTag);
			}

			const rootContent = createRoot(shadowDom);

			rootContent.render(
				<React.StrictMode>
					<div className="cozy-font-graphik cozy-text-light-neutral-800">
						<App intent={intent} />
					</div>
				</React.StrictMode>,
			);
		}
	}
})();
