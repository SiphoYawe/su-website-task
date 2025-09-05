"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoAdd } from "react-icons/io5";

interface FAQItem {
	id: number;
	question: string;
	answer: string;
	hasLinks?: boolean;
}

interface TestimonialItem {
	id: number;
	quote: string;
}

const faqData: FAQItem[] = [
	{
		id: 1,
		question: "What Is Sheffield Students' Union?",
		answer:
			"Sheffield Students' Union is your representative body at the University of Sheffield. We're here to support you throughout your student journey, providing services, activities, and advocacy to enhance your university experience.",
	},
	{
		id: 2,
		question: "What Is Welcome Week?",
		answer:
			"Welcome Week is your introduction to university life! It's a week packed with events, activities, and opportunities to meet new people, explore the campus, and get familiar with everything Sheffield has to offer.",
	},
	{
		id: 3,
		question: "Where can I find Official Freshers Week Nights Out?",
		answer:
			"You can find all official Freshers Week events and nights out on our website and social media channels. We organize safe, inclusive events that are perfect for meeting new friends and experiencing Sheffield's nightlife.",
	},
	{
		id: 4,
		question: "I'm a bit anxious about it all. Will I be okay?",
		answer:
			"Absolutely! It's completely normal to feel anxious about starting university. We have dedicated support services, peer mentoring, and a welcoming community ready to help you settle in at your own pace. Remember, everyone is in the same boat!",
	},
	{
		id: 5,
		question: "Got a question?",
		answer:
			"Email 'Welcome Question' to studentsunion@sheffield.ac.uk or DM our Instagram",
		hasLinks: true,
	},
];

const testimonialData: TestimonialItem[] = [
	{
		id: 1,
		quote:
			"'Don't feel as though you need to live a typical 'university experience.' Everyone's journey is unique, and taking time for yourself to explore the city, settle into campus and find your group is just as important as learning! There's no pressure to go to clubs, drink, do sports etc... you can experience university at your own pace!'",
	},
	{
		id: 2,
		quote:
			"'It's great to get involved, but remember you don't have to get involved in everything! Being a fresher is a very exciting time with lots of things going on, which you should definitely check out, however it can sometimes be exhausting to try and do everything. Basically, it's okay to have a restful night in, and you probably should. :)'",
	},
];

const FAQAccordion = () => {
	const [openItem, setOpenItem] = useState<number | null>(null);

	const toggleItem = (id: number) => {
		setOpenItem(openItem === id ? null : id);
	};

	return (
		<section className="relative w-full bg-white py-2 lg:py-6 mb-32 lg:mb-40">
			<div className="container mx-auto px-4 lg:px-8 max-w-7xl">
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start relative">
					{/* Left Side - Student Testimonials */}
					<div className="flex-1 lg:max-w-lg lg:flex-shrink-0 pt-16 lg:pt-20">
						<div className="flex flex-col space-y-8 lg:space-y-12">
							{testimonialData.map((testimonial) => (
								<div key={testimonial.id} className="flex flex-col">
									{/* Testimonial with gray background matching reference */}
									<div className="bg-[#F3F3F3] rounded-2xl lg:rounded-3xl p-5 lg:p-7 pb-8 lg:pb-10 relative">
										<p className="text-base lg:text-lg leading-relaxed text-gray-800 font-nunito">
											<span className="font-black">Sheff Students Say</span>{" "}
											{testimonial.quote}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Side - FAQ Accordion with Full Green Background */}
					<div className="flex-1 relative">
						{/* FAQ Container with Full Green Background */}
						<div
							className="rounded-[40px] lg:rounded-[50px] py-4 lg:py-6 px-6 lg:px-12"
							style={{ backgroundColor: "rgba(0, 210, 100, 0.1)" }}>
							<div className="space-y-0">
								{faqData.map((item, index) => (
									<div
										key={item.id}
										className={`${
											index > 0 ? "border-t border-gray-400" : ""
										}`}>
										{/* FAQ Item Header */}
										<div
											className={`flex items-center justify-between py-3 lg:py-4 ${
												item.id === 5 ? "" : "cursor-pointer group"
											}`}
											onClick={item.id === 5 ? undefined : () => toggleItem(item.id)}>
											{/* Question */}
											<div className="flex-1 pr-4 lg:pr-6">
												<h3 className={`text-lg lg:text-xl xl:text-2xl font-medium text-gray-900 leading-tight font-nunito ${
													item.id === 5 ? "" : "group-hover:text-gray-700"
												} transition-colors`}>
													{item.question}
												</h3>
											</div>

											{/* Plus Icon - Only show for collapsible items */}
											{item.id !== 5 && (
												<div className="flex-shrink-0 ml-4">
													<motion.div
														animate={{
															rotate: openItem === item.id ? 45 : 0,
														}}
														transition={{
															duration: 0.2,
															ease: "easeInOut",
														}}
														className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
														<IoAdd className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900 stroke-2" />
													</motion.div>
												</div>
											)}
										</div>

										{/* Answer - Always show for "Got a question?", animated for others */}
										{item.id === 5 ? (
											<div className="pb-2 lg:pb-3 pr-8 lg:pr-16">
												{item.hasLinks ? (
													<p className="text-sm lg:text-base leading-relaxed text-gray-800 font-nunito">
														Email Welcome Question to{" "}
														<a
															href="mailto:studentsunion@sheffield.ac.uk"
															className="underline hover:no-underline transition-all">
															studentsunion@sheffield.ac.uk
														</a>{" "}
														or DM our{" "}
														<a
															href="https://www.instagram.com/sheffieldsu/"
															target="_blank"
															rel="noopener noreferrer"
															className="underline hover:no-underline transition-all">
															Instagram
														</a>
													</p>
												) : (
													<p className="text-sm lg:text-base leading-relaxed text-gray-800 font-nunito">
														{item.answer}
													</p>
												)}
											</div>
										) : (
											<AnimatePresence>
												{openItem === item.id && (
													<motion.div
														initial={{ height: 0, opacity: 0 }}
														animate={{ height: "auto", opacity: 1 }}
														exit={{ height: 0, opacity: 0 }}
														transition={{
															duration: 0.3,
															ease: "easeInOut",
														}}
														className="overflow-hidden">
														<div className="pb-2 lg:pb-3 pr-8 lg:pr-16">
															{item.hasLinks ? (
																<p className="text-sm lg:text-base leading-relaxed text-gray-800 font-nunito">
																	Email Welcome Question to{" "}
																	<a
																		href="mailto:studentsunion@sheffield.ac.uk"
																		className="underline hover:no-underline transition-all">
																		studentsunion@sheffield.ac.uk
																	</a>{" "}
																	or DM our{" "}
																	<a
																		href="https://www.instagram.com/sheffieldsu/"
																		target="_blank"
																		rel="noopener noreferrer"
																		className="underline hover:no-underline transition-all">
																		Instagram
																	</a>
																</p>
															) : (
																<p className="text-sm lg:text-base leading-relaxed text-gray-800 font-nunito">
																	{item.answer}
																</p>
															)}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQAccordion;
