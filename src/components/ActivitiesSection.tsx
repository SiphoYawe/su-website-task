import CTAButton from "./CTAButton";
import Image from "next/image";

const ActivitiesSection = () => {
	return (
		<section className="relative w-full bg-white py-16 lg:py-24">
			<div className="container mx-auto px-4 lg:px-8 max-w-7xl">
				{/* Header Section with Overlapping Ovals - Centered */}
				<div className="relative flex flex-col items-center justify-center mb-6 lg:mb-8 w-full">
					{/* Orange "Discover Your Communities" oval - positioned far left */}
					<div className="relative z-20 bg-[#f6a60e] rounded-full px-8 py-6 lg:px-12 lg:py-8 mb-[-30px] lg:mb-[-40px] ml-0">
						<h2
							className="font-inter font-medium text-xl lg:text-3xl xl:text-4xl text-black text-center"
							style={{ lineHeight: "1" }}>
							Discover Your
							<br />
							Communities
						</h2>
					</div>

					{/* Purple "Activities and Opportunities" oval */}
					<div className="relative z-10 bg-[#cdc6fc] rounded-full px-12 py-8 lg:px-20 lg:py-12 ml-[80px] lg:ml-[160px]">
						<h2
							className="font-inter font-medium text-2xl lg:text-4xl xl:text-5xl text-black text-center"
							style={{ lineHeight: "1" }}>
							Activities and
							<br />
							Opportunities
						</h2>
					</div>
				</div>

				{/* Main Content Section */}
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start h-full">
					{/* Left Side - Content Text */}
					<div className="flex-1 lg:max-w-lg flex flex-col">
						{/* Light green content container */}
						<div className="bg-[#e5fea3] rounded-[30px] p-6 lg:p-8 flex-grow">
							<div className="space-y-4">
								<p className="font-nunito font-semibold text-sm lg:text-base text-gray-800 leading-relaxed">
									We have hundreds of student communities ready to welcome you
									into them.
								</p>
								<p className="font-nunito font-semibold text-sm lg:text-base text-gray-800 leading-relaxed">
									Our 370 student societies, covering everything from baking to
									beekeeping, are the heart of student life and a great way to
									meet new friends, develop new skills, keep up with current
									hobbies or find something completely new.
								</p>
								<p className="font-nunito font-semibold text-sm lg:text-base text-gray-800 leading-relaxed">
									Our communities are diverse and inclusive and during your time
									here you&apos;ll probably be part of many. If you feel
									something is missing you can even create your own!
								</p>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-row gap-4 mt-4 w-full">
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
					<div className="flex-1 flex items-center justify-center">
						<div className="relative flex items-center justify-center">
							<Image
								src="/images/activitiesAndOppLead.png"
								alt="Student activities and opportunities"
								width={400}
								height={350}
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
