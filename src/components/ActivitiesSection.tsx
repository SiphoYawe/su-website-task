import CTAButton from "./CTAButton";
import Image from "next/image";

const ActivitiesSection = () => {
	return (
		<section className="relative w-full bg-white py-8 sm:py-16 lg:py-24 overflow-hidden">
			<div className="container mx-auto px-4 lg:px-8 max-w-7xl">
				{/* Header Section with Overlapping Ovals - Centered */}
				<div className="relative flex flex-col items-center justify-center mb-12 lg:mb-16 w-full">
					{/* Purple "Activities and Opportunities" oval */}
					<div className="relative z-10 bg-[#cdc6fc] rounded-full px-14 sm:px-16 md:px-24 lg:px-32 py-14 sm:py-12 md:py-20 lg:py-24 ml-4 sm:ml-8 md:ml-[80px] lg:ml-[160px]">
						{/* Orange "Discover Your Communities" oval - positioned absolute relative to purple */}
						<div className="absolute z-20 bg-[#f6a60e] rounded-full px-8 sm:px-8 md:px-10 lg:px-16 py-8 sm:py-6 md:py-8 lg:py-12 left-[-100px] sm:left-[-100px] md:left-[-160px] lg:left-[-280px] top-[-30px] sm:top-[-35px] md:top-[-50px] lg:top-[-60px]">
							<h2
								className="font-inter font-medium text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl text-black text-center tracking-tighter"
								style={{ lineHeight: "0.8" }}>
								Discover Your
								<br />
								Communities
							</h2>
						</div>
						<h2
							className="font-inter font-medium text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl text-black text-center tracking-tighter"
							style={{ lineHeight: "0.8" }}>
							Activities and
							<br />
							Opportunities
						</h2>
					</div>
				</div>

				{/* Main Content Section */}
				<div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-3 items-start h-full">
					{/* Left Side - Content Text */}
					<div className="flex-1 lg:flex-[0.6] flex flex-col w-full">
						{/* Light green content container */}
						<div className="bg-[#e5fea3] rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 lg:p-8 flex-grow w-full">
							<div className="space-y-4">
								<p className="font-nunito font-semibold text-base lg:text-lg text-gray-800 leading-relaxed">
									We have hundreds of student communities ready to welcome you
									into them.
								</p>
								<p className="font-nunito font-semibold text-base lg:text-lg text-gray-800 leading-relaxed">
									Our 370 student societies, covering everything from baking to
									beekeeping, are the heart of student life and a great way to
									meet new friends, develop new skills, keep up with current
									hobbies or find something completely new.
								</p>
								<p className="font-nunito font-semibold text-base lg:text-lg text-gray-800 leading-relaxed">
									Our communities are diverse and inclusive and during your time
									here you&apos;ll probably be part of many. If you feel
									something is missing you can even create your own!
								</p>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-row gap-2 xs:gap-4 mt-4 w-full items-stretch">
							<CTAButton
								primaryText="ACTIVITIES &"
								secondaryText="OPPORTUNITIES"
								href="https://su.sheffield.ac.uk/activities"
								className="flex-1"
							/>
							<CTAButton
								primaryText="FIND SOCIETIES"
								secondaryText="& SPORTS CLUBS"
								href="https://su.sheffield.ac.uk/activities/find-student-groups"
								className="flex-1"
							/>
						</div>
					</div>

					{/* Right Side - Activities and Opportunities Image */}
					<div className="flex-1 lg:flex-[0.4] flex items-center justify-center">
						<div className="relative flex items-center justify-center">
							<Image
								src="/images/activitiesAndOppLead.png"
								alt="Student activities and opportunities"
								width={450}
								height={400}
								className=" object-contain "
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActivitiesSection;
