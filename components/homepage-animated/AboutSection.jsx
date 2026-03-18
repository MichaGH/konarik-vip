'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function AboutSection() {
	const sectionRef = useRef(null)
	const bgWordRef = useRef(null)
	const imageWrapRef = useRef(null)
	const imageRef = useRef(null)
	const labelRef = useRef(null)
	const titleRef = useRef(null)
	const textRef = useRef(null)
	const lineRef = useRef(null)
	const statsRef = useRef([])

	useGSAP(
		() => {
			statsRef.current = statsRef.current.filter(Boolean)

			const titleSplit = new SplitText(titleRef.current, {
				type: 'lines',
				linesClass: 'about-line',
			})

			gsap.set(bgWordRef.current, {
				y: 40,
				opacity: 0,
			})

			gsap.set(imageWrapRef.current, {
				y: 40,
				opacity: 0,
			})

			gsap.set(imageRef.current, {
				scale: 1.08,
			})

			gsap.set(labelRef.current, {
				y: 20,
				opacity: 0,
			})

			gsap.set(titleSplit.lines, {
				yPercent: 110,
				opacity: 0,
			})

			gsap.set([textRef.current, lineRef.current, ...statsRef.current], {
				y: 28,
				opacity: 0,
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 72%',
					end: 'bottom bottom',
					toggleActions: 'play none none reverse',
                    markers: true
				},
				defaults: {
					ease: 'power3.out',
				},
			})

			tl.to(bgWordRef.current, {
				y: 0,
				opacity: 1,
				duration: 1,
			})
				.to(
					imageWrapRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.9,
					},
					0.08
				)
				.to(
					imageRef.current,
					{
						scale: 1,
						duration: 1.4,
						ease: 'power2.out',
					},
					0.08
				)
				.to(
					labelRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.45,
					},
					0.2
				)
				.to(
					titleSplit.lines,
					{
						yPercent: 0,
						opacity: 1,
						duration: 0.75,
						stagger: 0.08,
						ease: 'power4.out',
					},
					0.28
				)
				.to(
					textRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.55,
					},
					0.42
				)
				.to(
					lineRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.45,
					},
					0.52
				)
				.to(
					statsRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.45,
						stagger: 0.1,
					},
					0.58
				)

			gsap.to(imageRef.current, {
				yPercent: -6,
				ease: 'none',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			})

			return () => {
				titleSplit.revert()
			}
		},
		{ scope: sectionRef }
	)

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] text-zinc-100"
		>
			{/* BACKGROUND WORD */}
			<div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
				<h2
					ref={bgWordRef}
					className="select-none font-serif text-[18vw] font-semibold uppercase leading-none text-white/[0.03]"
				>
					About
				</h2>
			</div>

			<div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
				<div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
					{/* IMAGE */}
					<div ref={imageWrapRef} className="relative">
						<div className="relative aspect-[4/5] w-full overflow-hidden">
							<div ref={imageRef} className="relative h-full w-full">
								<Image
									src="/images/photos/3.jpg"
									alt="Nicolas Konarik portrait"
									fill
									className="object-cover object-center"
									sizes="(max-width: 1024px) 100vw, 55vw"
								/>
							</div>

							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505]/80" />
							<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent" />
							<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
							<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
						</div>
					</div>

					{/* TEXT */}
					<div className="relative lg:-ml-12">
						<div className="max-w-lg">
							<p
								ref={labelRef}
								className="text-[11px] uppercase tracking-[0.35em] text-zinc-500"
							>
								About
							</p>

							<h2
								ref={titleRef}
								className="mt-4 font-serif text-4xl leading-[1] tracking-[-0.02em] md:text-6xl"
							>
								Focused on building and moving things forward.
							</h2>

							<div ref={textRef} className="mt-7 flex gap-5">
								<div
									ref={lineRef}
									className="mt-1 h-20 w-px shrink-0 bg-white/10"
								/>

								<p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
									Nicolas Konarik works with a clear direction and a practical
									approach. The focus is on making decisions, executing, and
									keeping things moving.
								</p>
							</div>

							<div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
								<div ref={(el) => (statsRef.current[0] = el)}>
									<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
										Work
									</p>
									<p className="mt-2 text-sm text-zinc-300">Business</p>
								</div>

								<div ref={(el) => (statsRef.current[1] = el)}>
									<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
										Style
									</p>
									<p className="mt-2 text-sm text-zinc-300">Direct</p>
								</div>

								<div ref={(el) => (statsRef.current[2] = el)}>
									<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
										Pace
									</p>
									<p className="mt-2 text-sm text-zinc-300">Consistent</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}