'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function ProjectsSection() {
	const sectionRef = useRef(null)
	const topRef = useRef(null)
	const titleRef = useRef(null)
	const mainCardRef = useRef(null)
	const sideCard1Ref = useRef(null)
	const sideCard2Ref = useRef(null)
	const comingSoonRef = useRef(null)
	const bgWordRef = useRef(null)

	useGSAP(
		() => {
			const titleSplit = new SplitText(titleRef.current, {
				type: 'chars',
				charsClass: 'projects-char',
			})

			gsap.set(topRef.current, { y: 24, opacity: 0 })
			gsap.set(titleSplit.chars, { yPercent: 110, opacity: 0 })
			gsap.set(bgWordRef.current, { scale: 1.08, opacity: 0 })
			gsap.set(mainCardRef.current, { y: 60, opacity: 0, scale: 0.985 })
			gsap.set([sideCard1Ref.current, sideCard2Ref.current], {
				y: 50,
				opacity: 0,
				scale: 0.985,
			})
			gsap.set(comingSoonRef.current, {
				y: 40,
				opacity: 0,
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 72%',
					end: 'bottom bottom',
					toggleActions: 'play none none reverse',
				},
				defaults: {
					ease: 'power3.out',
				},
			})

			tl.to(
				bgWordRef.current,
				{
					opacity: 1,
					scale: 1,
					duration: 1.1,
				},
				0
			)
				.to(
					topRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.55,
					},
					0.08
				)
				.to(
					titleSplit.chars,
					{
						yPercent: 0,
						opacity: 1,
						duration: 0.65,
						stagger: 0.018,
						ease: 'power4.out',
					},
					0.16
				)
				.to(
					mainCardRef.current,
					{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 0.8,
					},
					0.35
				)
				.to(
					[sideCard1Ref.current, sideCard2Ref.current],
					{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 0.7,
						stagger: 0.12,
					},
					0.48
				)
				.to(
					comingSoonRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.7,
					},
					0.7
				)

			return () => {
				titleSplit.revert()
			}
		},
		{ scope: sectionRef }
	)

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden bg-[#050505] text-zinc-100"
		>
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
				<h2
					ref={bgWordRef}
					className="select-none font-serif text-[18vw] font-semibold uppercase leading-none text-white/[0.03]"
				>
					Projects
				</h2>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
				<div className="max-w-2xl">
					<p
						ref={topRef}
						className="text-[11px] uppercase tracking-[0.35em] text-zinc-500"
					>
						Projects
					</p>

					<h2
						ref={titleRef}
						className="mt-4 font-serif text-4xl leading-[1] tracking-[-0.02em] md:text-6xl"
					>
						Selected work.
					</h2>
				</div>

				<div className="mt-14 grid gap-6 lg:grid-cols-12">
					<a
						ref={mainCardRef}
						href="https://www.thegrandpoints.com"
						target="_blank"
						rel="noreferrer"
						className="group relative overflow-hidden bg-black lg:col-span-7"
					>
						<div className="relative aspect-[16/11] w-full overflow-hidden">
							<Image
								src="/images/projects/thegrandpoints.webp"
								alt="The Grand Points"
								fill
								className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
						</div>

						<div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
							<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
								Webdesign & Marketing
							</p>

							<div>
								<h3 className="font-serif text-3xl text-zinc-100 md:text-4xl">
									The Grand Points
								</h3>

								<p className="mt-3 max-w-lg text-sm text-zinc-400 md:text-base">
									Modern Webdesign and Marketing
								</p>
							</div>
						</div>
					</a>

					<div className="grid gap-6 lg:col-span-5">
						<a
							ref={sideCard1Ref}
							href="https://chemten.com"
							target="_blank"
							rel="noreferrer"
							className="group relative overflow-hidden border border-white/10 bg-white/[0.02]"
						>
							<div className="grid h-full md:grid-cols-[1.2fr_0.8fr]">
								<div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:min-h-[260px]">
									<Image
										src="/images/projects/chemten.webp"
										alt="Chemten"
										fill
										className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
									/>
								</div>

								<div className="flex flex-col justify-between p-5 md:p-6">
									<div>
										<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
											Chemical Manufacturing
										</p>

										<h3 className="mt-2 font-serif text-2xl text-zinc-100">
											Chemten
										</h3>

										<p className="mt-3 text-sm text-zinc-400">
											Chemical Manufacturing Company
										</p>
									</div>
								</div>
							</div>
						</a>

						<a
							ref={sideCard2Ref}
							href="https://ivanenkotennisacademy.com"
							target="_blank"
							rel="noreferrer"
							className="group relative overflow-hidden border border-white/10 bg-white/[0.02]"
						>
							<div className="grid h-full md:grid-cols-[1.2fr_0.8fr]">
								<div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:min-h-[260px]">
									<Image
										src="/images/projects/ivanenko2.webp"
										alt="Ivanenko Tennis Academy"
										fill
										className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
									/>
								</div>

								<div className="flex flex-col justify-between p-5 md:p-6">
									<div>
										<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
											Tennis Academy
										</p>

										<h3 className="mt-2 font-serif text-2xl text-zinc-100">
											Ivanenko Academy
										</h3>

										<p className="mt-3 text-sm text-zinc-400">
											Tennis Academy for upcoming Pros in Vienna
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>

				<div ref={comingSoonRef} className="mt-12">
					<div className="relative overflow-hidden border border-white/10 bg-white/[0.02]">
						<div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_1fr] md:p-8">
							<div>
								<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
									E-commerce
								</p>

								<h3 className="mt-3 font-serif text-3xl text-zinc-100">
									Yung Lore
								</h3>

								<p className="mt-3 text-sm text-zinc-400">
									Online store currently in development.
								</p>
							</div>

							<div className="flex justify-end">
								<span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
									Coming soon
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}