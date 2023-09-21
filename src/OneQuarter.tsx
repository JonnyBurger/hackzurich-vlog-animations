import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export const OneQuarter: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const posterizedFrame = Math.floor(frame / 4) * 4;

	const translateX = interpolate(
		spring({
			fps,
			frame: posterizedFrame,
			config: {
				damping: 200,
			},
			delay: 120,
		}),
		[0, 1],
		[0, -1000]
	);

	const noTimeLeft = interpolate(
		spring({
			fps,
			frame: posterizedFrame,
			config: {
				damping: 200,
			},
			delay: 20,
		}),
		[0, 1],
		[-1000, 0]
	);

	const arrowLeft = interpolate(
		spring({
			fps,
			frame: posterizedFrame,
			config: {
				damping: 200,
			},
			delay: 25,
		}),
		[0, 1],
		[-1000, 0]
	);

	const scale2 = spring({
		fps,
		frame: posterizedFrame,
		config: {
			damping: 200,
		},
		delay: 25,
	});
	const scale3 = spring({
		fps,
		frame: posterizedFrame,
		config: {
			damping: 200,
		},
		delay: 40,
	});

	const teams2 = interpolate(scale2, [0, 1], [-1000, 0]);

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				transform: `translateX(${translateX}px)`,
			}}
		>
			<g id="Slide 4:3 - 56">
				<g
					id="Group 15"
					style={{
						transform: `translateX(${noTimeLeft}px)`,
					}}
				>
					<g id="109" filter="url(#filter0_d_79_1222)">
						<path
							d="M141.864 310V247.503H114.331V223.903H118.993C125.791 223.903 131.424 222.155 135.892 218.659C140.456 215.162 143.03 210.598 143.613 204.965H174.351V310H141.864ZM243.028 311.311C234.578 311.311 226.906 310.097 220.01 307.669C213.212 305.241 207.288 301.745 202.237 297.18C197.284 292.518 193.497 286.885 190.874 280.281C188.252 273.58 186.941 265.956 186.941 257.41C186.941 248.863 188.252 241.288 190.874 234.683C193.594 227.982 197.43 222.349 202.383 217.785C207.336 213.22 213.26 209.772 220.156 207.441C227.052 205.013 234.724 203.799 243.173 203.799C251.623 203.799 259.295 205.013 266.191 207.441C273.086 209.772 279.011 213.268 283.964 217.93C288.917 222.495 292.705 228.128 295.327 234.829C297.949 241.433 299.26 249.009 299.26 257.555C299.26 266.102 297.901 273.726 295.181 280.427C292.559 287.128 288.771 292.761 283.818 297.326C278.865 301.89 272.941 305.387 266.045 307.815C259.15 310.146 251.477 311.311 243.028 311.311ZM243.028 285.38C246.524 285.38 249.729 284.894 252.643 283.923C255.556 282.952 258.033 281.398 260.072 279.262C262.209 277.028 263.811 274.163 264.88 270.666C266.045 267.073 266.628 262.703 266.628 257.555C266.628 252.408 266.045 248.086 264.88 244.59C263.811 240.996 262.209 238.131 260.072 235.995C258.033 233.761 255.556 232.158 252.643 231.187C249.729 230.216 246.524 229.73 243.028 229.73C239.531 229.73 236.326 230.216 233.413 231.187C230.596 232.158 228.12 233.761 225.983 235.995C223.944 238.131 222.341 240.996 221.176 244.59C220.107 248.086 219.573 252.408 219.573 257.555C219.573 262.703 220.107 267.073 221.176 270.666C222.341 274.163 223.944 277.028 225.983 279.262C228.12 281.398 230.596 282.952 233.413 283.923C236.326 284.894 239.531 285.38 243.028 285.38ZM357.527 311.311C348.883 311.311 341.162 310.194 334.363 307.96C327.565 305.727 321.981 302.328 317.61 297.763C313.337 293.198 310.52 287.371 309.161 280.281H341.065C341.939 282.029 343.104 283.389 344.561 284.36C346.115 285.332 347.912 286.011 349.951 286.4C352.088 286.691 354.37 286.837 356.798 286.837C360.003 286.837 362.868 286.4 365.393 285.526C367.918 284.555 370.104 283.195 371.949 281.447C373.794 279.601 375.154 277.416 376.028 274.891C376.902 272.269 377.242 269.307 377.048 266.005L375.591 265.713C373.357 268.336 369.812 270.472 364.956 272.123C360.1 273.677 354.807 274.454 349.077 274.454C340.045 274.454 332.47 273.046 326.351 270.229C320.232 267.413 315.619 263.528 312.511 258.575C309.404 253.525 307.85 247.698 307.85 241.093C307.85 233.032 309.889 226.234 313.968 220.698C318.047 215.162 323.826 210.938 331.304 208.024C338.782 205.11 347.572 203.654 357.672 203.654C364.665 203.654 371.269 204.479 377.485 206.13C383.7 207.781 389.188 210.598 393.947 214.58C398.803 218.464 402.59 223.855 405.31 230.75C408.126 237.548 409.534 246.144 409.534 256.535C409.534 266.345 408.223 274.745 405.601 281.738C402.979 288.634 399.288 294.267 394.529 298.637C389.868 303.007 384.38 306.212 378.067 308.252C371.755 310.291 364.908 311.311 357.527 311.311ZM356.798 252.602C360.683 252.602 363.839 252.068 366.267 251C368.792 249.931 370.686 248.474 371.949 246.629C373.211 244.687 373.843 242.502 373.843 240.074C373.843 237.354 373.114 235.12 371.658 233.372C370.298 231.527 368.355 230.167 365.83 229.293C363.402 228.419 360.489 227.982 357.09 227.982C353.302 227.982 350.145 228.516 347.62 229.585C345.192 230.556 343.347 231.964 342.084 233.809C340.822 235.558 340.191 237.694 340.191 240.219C340.191 242.939 340.822 245.221 342.084 247.066C343.444 248.912 345.338 250.32 347.766 251.291C350.291 252.165 353.302 252.602 356.798 252.602Z"
							fill="white"
						/>
					</g>
					<g id="teams" filter="url(#filter1_d_79_1222)">
						<path
							d="M142.517 379C139.98 379 137.753 378.586 135.837 377.757C133.921 376.877 132.419 375.582 131.331 373.873C130.296 372.164 129.778 369.989 129.778 367.348V349.559H122.554V336.742H129.778V327.032L146.634 323.847V336.742H156.655V349.559H146.634V361.677C146.634 362.765 146.867 363.516 147.334 363.93C147.851 364.344 148.68 364.552 149.819 364.552H156.655V379H142.517ZM185.982 379.777C180.648 379.777 176.013 378.922 172.078 377.213C168.194 375.504 165.164 373.045 162.989 369.834C160.866 366.623 159.804 362.739 159.804 358.182C159.804 353.417 160.892 349.404 163.067 346.141C165.294 342.827 168.349 340.315 172.233 338.606C176.169 336.846 180.7 335.965 185.827 335.965C191.472 335.965 196.236 336.975 200.12 338.995C204.056 341.014 206.982 343.94 208.898 347.773C210.814 351.605 211.565 356.24 211.151 361.677H176.971C177.023 363.076 177.412 364.293 178.137 365.328C178.913 366.364 180.001 367.167 181.399 367.736C182.797 368.254 184.481 368.513 186.448 368.513C188.572 368.513 190.436 368.202 192.041 367.581C193.647 366.908 194.683 366.079 195.149 365.095H211.306C210.995 367.995 209.701 370.559 207.422 372.786C205.143 375.012 202.166 376.747 198.489 377.99C194.812 379.181 190.643 379.777 185.982 379.777ZM176.505 353.521L175.962 352.744H194.993L194.294 353.443C194.191 352.252 193.828 351.191 193.207 350.258C192.585 349.326 191.653 348.601 190.41 348.083C189.219 347.565 187.665 347.307 185.749 347.307C184.04 347.307 182.539 347.54 181.244 348.006C179.949 348.42 178.888 349.093 178.059 350.025C177.282 350.958 176.764 352.123 176.505 353.521ZM235.158 379.777C232.103 379.777 229.306 379.285 226.769 378.301C224.283 377.265 222.134 375.789 220.321 373.873C218.509 371.957 217.11 369.653 216.126 366.96C215.142 364.267 214.651 361.263 214.651 357.949C214.651 353.443 215.505 349.559 217.214 346.297C218.923 343.034 221.305 340.523 224.361 338.762C227.468 337.001 231.067 336.121 235.158 336.121C237.696 336.121 239.897 336.38 241.761 336.897C243.625 337.415 245.205 338.14 246.499 339.072C247.846 339.953 248.907 341.014 249.684 342.257H250.306L250.772 336.742H267.085V379H249.917V373.64H249.296C248.001 375.556 246.085 377.058 243.547 378.146C241.01 379.233 238.213 379.777 235.158 379.777ZM240.673 366.96C242.589 366.96 244.221 366.597 245.567 365.872C246.965 365.147 248.027 364.137 248.752 362.843C249.477 361.548 249.84 360.072 249.84 358.415V357.483C249.84 355.774 249.477 354.298 248.752 353.055C248.027 351.76 246.965 350.75 245.567 350.025C244.221 349.3 242.589 348.938 240.673 348.938C238.964 348.938 237.437 349.274 236.09 349.948C234.796 350.621 233.76 351.631 232.983 352.977C232.258 354.324 231.895 355.981 231.895 357.949C231.895 359.917 232.258 361.574 232.983 362.92C233.708 364.267 234.718 365.277 236.013 365.95C237.359 366.623 238.913 366.96 240.673 366.96ZM273.783 379V336.742H290.174L290.95 342.956H291.727C293.074 340.678 294.938 338.943 297.32 337.752C299.754 336.561 302.577 335.965 305.787 335.965C309.205 335.965 312.183 336.664 314.721 338.063C317.258 339.409 319.174 341.532 320.469 344.432H321.246C322.955 341.325 325.156 339.15 327.848 337.907C330.541 336.613 333.623 335.965 337.092 335.965C340.717 335.965 343.825 336.69 346.414 338.14C349.055 339.539 351.075 341.714 352.473 344.665C353.871 347.565 354.57 351.32 354.57 355.929V379H337.403V358.104C337.403 356.292 337.222 354.686 336.859 353.288C336.497 351.89 335.824 350.802 334.84 350.025C333.908 349.197 332.535 348.782 330.723 348.782C329.014 348.782 327.564 349.145 326.373 349.87C325.181 350.595 324.275 351.605 323.654 352.9C323.032 354.142 322.722 355.592 322.722 357.25V379H305.632V357.949C305.632 356.188 305.451 354.634 305.088 353.288C304.778 351.89 304.13 350.802 303.146 350.025C302.162 349.197 300.738 348.782 298.874 348.782C297.165 348.782 295.715 349.171 294.524 349.948C293.384 350.673 292.504 351.683 291.883 352.977C291.261 354.22 290.95 355.644 290.95 357.25V379H273.783ZM381.318 379.777C373.705 379.777 367.931 378.508 363.995 375.97C360.059 373.381 357.884 369.886 357.47 365.484H374.249C374.508 366.934 375.233 368.021 376.424 368.746C377.615 369.419 379.428 369.756 381.862 369.756C383.985 369.756 385.564 369.497 386.6 368.979C387.688 368.461 388.231 367.711 388.231 366.727C388.231 365.898 387.998 365.302 387.532 364.94C387.066 364.526 386.263 364.241 385.124 364.085C384.037 363.878 382.457 363.697 380.386 363.542C376.45 363.179 373.11 362.687 370.365 362.066C367.62 361.444 365.393 360.642 363.684 359.658C361.975 358.674 360.733 357.431 359.956 355.929C359.231 354.427 358.868 352.589 358.868 350.414C358.868 347.514 359.749 345.002 361.509 342.879C363.27 340.704 365.834 339.021 369.2 337.83C372.618 336.587 376.761 335.965 381.629 335.965C385.771 335.965 389.422 336.483 392.581 337.519C395.792 338.555 398.356 340.108 400.272 342.18C402.24 344.199 403.379 346.711 403.69 349.715H387.532C387.377 348.886 387.04 348.213 386.522 347.695C386.005 347.125 385.331 346.711 384.503 346.452C383.674 346.141 382.69 345.986 381.551 345.986C379.687 345.986 378.211 346.219 377.123 346.685C376.036 347.151 375.492 347.902 375.492 348.938C375.492 349.663 375.751 350.233 376.269 350.647C376.838 351.009 377.745 351.294 378.987 351.501C380.282 351.657 381.991 351.838 384.114 352.045C388.05 352.356 391.364 352.822 394.057 353.443C396.75 354.013 398.899 354.816 400.505 355.851C402.11 356.887 403.275 358.208 404 359.813C404.725 361.367 405.088 363.309 405.088 365.639C405.088 369.886 403.146 373.303 399.262 375.893C395.43 378.482 389.448 379.777 381.318 379.777Z"
							fill="#00FF1A"
						/>
					</g>
				</g>
				<g
					id="Group 16"
					style={{
						transform: `translateX(${teams2}px)`,
					}}
				>
					<g
						id="25"
						filter="url(#filter2_d_79_1222)"
						style={{
							transformOrigin: '50% 50%',
							transformBox: 'fill-box',
							transform: `scale(${scale3})`,
						}}
					>
						<path
							d="M118.259 793.713V786.829C118.259 778.484 119.719 771.113 122.64 764.715C125.56 758.318 129.454 752.685 134.322 747.817C139.19 742.81 144.545 738.36 150.386 734.465C156.227 730.432 162.069 726.747 167.91 723.409C173.751 719.932 179.106 716.594 183.974 713.395C188.841 710.196 192.736 706.858 195.656 703.381C198.577 699.904 200.037 696.079 200.037 691.907C200.037 688.291 199.133 685.44 197.325 683.354C195.656 681.128 193.57 679.529 191.067 678.555C188.702 677.582 186.477 677.095 184.391 677.095C180.079 677.095 176.463 677.86 173.543 679.39C170.622 680.92 168.327 683.145 166.658 686.066C165.128 688.847 164.085 692.185 163.529 696.079H118.884C120.275 683.562 123.752 673.34 129.315 665.412C134.879 657.346 142.389 651.365 151.846 647.471C161.304 643.577 172.639 641.63 185.851 641.63C198.786 641.63 209.773 643.716 218.813 647.888C227.853 651.922 234.738 657.624 239.466 664.995C244.195 672.366 246.56 680.989 246.56 690.864C246.56 696.984 245.586 702.547 243.639 707.554C241.692 712.421 239.049 716.941 235.711 721.114C232.512 725.147 228.827 728.763 224.654 731.962C220.621 735.161 216.379 738.082 211.929 740.724C207.617 743.367 203.375 745.8 199.203 748.026C195.031 750.112 191.275 752.059 187.937 753.867C184.6 755.536 181.957 757.205 180.01 758.874H246.351V793.713H118.259ZM329.505 795.8C314.346 795.8 301.828 793.783 291.954 789.75C282.218 785.716 274.847 780.084 269.84 772.851C264.833 765.619 261.982 757.344 261.287 748.026H307.809C308.365 751.225 309.617 753.798 311.564 755.745C313.65 757.692 316.223 759.083 319.283 759.917C322.482 760.752 326.098 761.169 330.131 761.169C337.781 761.169 343.552 759.5 347.447 756.162C351.341 752.824 353.288 748.443 353.288 743.019C353.288 739.125 352.314 735.926 350.367 733.422C348.559 730.78 345.986 728.833 342.648 727.581C339.31 726.19 335.416 725.495 330.966 725.495C325.263 725.495 320.187 726.538 315.736 728.624C311.286 730.71 308.087 733.492 306.14 736.969H263.79L269.006 643.299H389.379V679.599H311.355L309.269 700.669L311.147 701.295C314.207 698.931 318.796 696.984 324.916 695.454C331.174 693.924 337.363 693.159 343.483 693.159C352.106 693.159 359.825 694.202 366.64 696.288C373.594 698.374 379.574 701.573 384.581 705.885C389.588 710.057 393.412 715.272 396.055 721.531C398.697 727.79 400.019 735.091 400.019 743.436C400.019 755.119 397.028 764.854 391.048 772.643C385.068 780.292 376.723 786.064 366.014 789.958C355.444 793.852 343.274 795.8 329.505 795.8Z"
							fill="white"
						/>
					</g>
					<g id="teams_2" filter="url(#filter3_d_79_1222)">
						<path
							d="M142.517 879C139.98 879 137.753 878.586 135.837 877.757C133.921 876.877 132.419 875.582 131.331 873.873C130.296 872.164 129.778 869.989 129.778 867.348V849.559H122.554V836.742H129.778V827.032L146.634 823.847V836.742H156.655V849.559H146.634V861.677C146.634 862.765 146.867 863.516 147.334 863.93C147.851 864.344 148.68 864.552 149.819 864.552H156.655V879H142.517ZM185.982 879.777C180.648 879.777 176.013 878.922 172.078 877.213C168.194 875.504 165.164 873.045 162.989 869.834C160.866 866.623 159.804 862.739 159.804 858.182C159.804 853.417 160.892 849.404 163.067 846.141C165.294 842.827 168.349 840.315 172.233 838.606C176.169 836.846 180.7 835.965 185.827 835.965C191.472 835.965 196.236 836.975 200.12 838.995C204.056 841.014 206.982 843.94 208.898 847.773C210.814 851.605 211.565 856.24 211.151 861.677H176.971C177.023 863.076 177.412 864.293 178.137 865.328C178.913 866.364 180.001 867.167 181.399 867.736C182.797 868.254 184.481 868.513 186.448 868.513C188.572 868.513 190.436 868.202 192.041 867.581C193.647 866.908 194.683 866.079 195.149 865.095H211.306C210.995 867.995 209.701 870.559 207.422 872.786C205.143 875.012 202.166 876.747 198.489 877.99C194.812 879.181 190.643 879.777 185.982 879.777ZM176.505 853.521L175.962 852.744H194.993L194.294 853.443C194.191 852.252 193.828 851.191 193.207 850.258C192.585 849.326 191.653 848.601 190.41 848.083C189.219 847.565 187.665 847.307 185.749 847.307C184.04 847.307 182.539 847.54 181.244 848.006C179.949 848.42 178.888 849.093 178.059 850.025C177.282 850.958 176.764 852.123 176.505 853.521ZM235.158 879.777C232.103 879.777 229.306 879.285 226.769 878.301C224.283 877.265 222.134 875.789 220.321 873.873C218.509 871.957 217.11 869.653 216.126 866.96C215.142 864.267 214.651 861.263 214.651 857.949C214.651 853.443 215.505 849.559 217.214 846.297C218.923 843.034 221.305 840.523 224.361 838.762C227.468 837.001 231.067 836.121 235.158 836.121C237.696 836.121 239.897 836.38 241.761 836.897C243.625 837.415 245.205 838.14 246.499 839.072C247.846 839.953 248.907 841.014 249.684 842.257H250.306L250.772 836.742H267.085V879H249.917V873.64H249.296C248.001 875.556 246.085 877.058 243.547 878.146C241.01 879.233 238.213 879.777 235.158 879.777ZM240.673 866.96C242.589 866.96 244.221 866.597 245.567 865.872C246.965 865.147 248.027 864.137 248.752 862.843C249.477 861.548 249.84 860.072 249.84 858.415V857.483C249.84 855.774 249.477 854.298 248.752 853.055C248.027 851.76 246.965 850.75 245.567 850.025C244.221 849.3 242.589 848.938 240.673 848.938C238.964 848.938 237.437 849.274 236.09 849.948C234.796 850.621 233.76 851.631 232.983 852.977C232.258 854.324 231.895 855.981 231.895 857.949C231.895 859.917 232.258 861.574 232.983 862.92C233.708 864.267 234.718 865.277 236.013 865.95C237.359 866.623 238.913 866.96 240.673 866.96ZM273.783 879V836.742H290.174L290.95 842.956H291.727C293.074 840.678 294.938 838.943 297.32 837.752C299.754 836.561 302.577 835.965 305.787 835.965C309.205 835.965 312.183 836.664 314.721 838.063C317.258 839.409 319.174 841.532 320.469 844.432H321.246C322.955 841.325 325.156 839.15 327.848 837.907C330.541 836.613 333.623 835.965 337.092 835.965C340.717 835.965 343.825 836.69 346.414 838.14C349.055 839.539 351.075 841.714 352.473 844.665C353.871 847.565 354.57 851.32 354.57 855.929V879H337.403V858.104C337.403 856.292 337.222 854.686 336.859 853.288C336.497 851.89 335.824 850.802 334.84 850.025C333.908 849.197 332.535 848.782 330.723 848.782C329.014 848.782 327.564 849.145 326.373 849.87C325.181 850.595 324.275 851.605 323.654 852.9C323.032 854.142 322.722 855.592 322.722 857.25V879H305.632V857.949C305.632 856.188 305.451 854.634 305.088 853.288C304.778 851.89 304.13 850.802 303.146 850.025C302.162 849.197 300.738 848.782 298.874 848.782C297.165 848.782 295.715 849.171 294.524 849.948C293.384 850.673 292.504 851.683 291.883 852.977C291.261 854.22 290.95 855.644 290.95 857.25V879H273.783ZM381.318 879.777C373.705 879.777 367.931 878.508 363.995 875.97C360.059 873.381 357.884 869.886 357.47 865.484H374.249C374.508 866.934 375.233 868.021 376.424 868.746C377.615 869.419 379.428 869.756 381.862 869.756C383.985 869.756 385.564 869.497 386.6 868.979C387.688 868.461 388.231 867.711 388.231 866.727C388.231 865.898 387.998 865.302 387.532 864.94C387.066 864.526 386.263 864.241 385.124 864.085C384.037 863.878 382.457 863.697 380.386 863.542C376.45 863.179 373.11 862.687 370.365 862.066C367.62 861.444 365.393 860.642 363.684 859.658C361.975 858.674 360.733 857.431 359.956 855.929C359.231 854.427 358.868 852.589 358.868 850.414C358.868 847.514 359.749 845.002 361.509 842.879C363.27 840.704 365.834 839.021 369.2 837.83C372.618 836.587 376.761 835.965 381.629 835.965C385.771 835.965 389.422 836.483 392.581 837.519C395.792 838.555 398.356 840.108 400.272 842.18C402.24 844.199 403.379 846.711 403.69 849.715H387.532C387.377 848.886 387.04 848.213 386.522 847.695C386.005 847.125 385.331 846.711 384.503 846.452C383.674 846.141 382.69 845.986 381.551 845.986C379.687 845.986 378.211 846.219 377.123 846.685C376.036 847.151 375.492 847.902 375.492 848.938C375.492 849.663 375.751 850.233 376.269 850.647C376.838 851.009 377.745 851.294 378.987 851.501C380.282 851.657 381.991 851.838 384.114 852.045C388.05 852.356 391.364 852.822 394.057 853.443C396.75 854.013 398.899 854.816 400.505 855.851C402.11 856.887 403.275 858.208 404 859.813C404.725 861.367 405.088 863.309 405.088 865.639C405.088 869.886 403.146 873.303 399.262 875.893C395.43 878.482 389.448 879.777 381.318 879.777Z"
							fill="#00FF1A"
						/>
					</g>
				</g>
				<g
					id="Arrow 2"
					filter="url(#filter4_d_79_1222)"
					style={{
						transform: `translateX(${arrowLeft}px)`,
					}}
				>
					<path
						d="M257 594L288.754 539L225.246 539L257 594ZM251.5 441L251.5 544.5L262.5 544.5L262.5 441L251.5 441Z"
						fill="white"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_d_79_1222"
					x="88.3281"
					y="181.654"
					width="347.203"
					height="159.657"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="13" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_79_1222"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_79_1222"
						result="shape"
					/>
				</filter>
				<filter
					id="filter1_d_79_1222"
					x="96.5547"
					y="301.847"
					width="334.531"
					height="107.93"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="13" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_79_1222"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_79_1222"
						result="shape"
					/>
				</filter>
				<filter
					id="filter2_d_79_1222"
					x="92.2578"
					y="619.63"
					width="333.758"
					height="206.17"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="13" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_79_1222"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_79_1222"
						result="shape"
					/>
				</filter>
				<filter
					id="filter3_d_79_1222"
					x="96.5547"
					y="801.847"
					width="334.531"
					height="107.93"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="13" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_79_1222"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_79_1222"
						result="shape"
					/>
				</filter>
				<filter
					id="filter4_d_79_1222"
					x="199.242"
					y="419"
					width="115.516"
					height="205"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="13" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_79_1222"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_79_1222"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};