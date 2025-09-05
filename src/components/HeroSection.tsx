import Image from "next/image";

const HeroSection = () => {
	return (
		<section className="w-full bg-white py-8 sm:py-16 px-4 sm:px-8 overflow-hidden">
			<div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-0">
				{/* Large purple oval with text */}
				<div className="relative flex-shrink-0">
					<div
						className="bg-primary-purple rounded-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-28 w-80 h-60 md:w-[480px] md:h-80 lg:w-[600px] lg:h-[400px]">
						<h1
							className="text-white font-inter font-medium leading-none text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter"
							style={{ lineHeight: "0.8" }}>
							<span className="block">Your</span>
							<span className="block">Welcome</span>
							<span className="block">Questions</span>
							<span className="block">Answered</span>
						</h1>
					</div>
				</div>

				{/* Circular image on the right */}
				<div className="relative ml-0 lg:ml-16 flex-shrink-0">
					<div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden">
						<Image
							src="/images/welcomeFAQImage.png"
							alt="Sheffield Students' Union welcome FAQ"
							width={450}
							height={450}
							className="object-cover w-full h-full"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
