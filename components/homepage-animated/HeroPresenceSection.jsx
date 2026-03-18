'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Image from 'next/image'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function HeroPresenceSection() {
	const wrapperRef = useRef(null)
	const heroRef = useRef(null)
	const heroContentRef = useRef(null)
	const titleRef = useRef(null)
	const subtitleRef = useRef(null)
	const topRef = useRef(null)
	const imageWrapRef = useRef(null)
	const imageRef = useRef(null)
	const presenceRef = useRef(null)
	const presenceHeadingRef = useRef(null)
	const presenceIntroRef = useRef(null)
	const cardsRef = useRef([])

	const principles = [
		{
			number: '01',
			title: 'Discipline',
			text: 'A steady approach grounded in consistency, restraint, and high standards.',
		},
		{
			number: '02',
			title: 'Precision',
			text: 'An eye for detail that shapes how things are built, presented, and remembered.',
		},
		{
			number: '03',
			title: 'Vision',
			text: 'A long-range perspective guided by judgment, direction, and timing.',
		},
	]

	useGSAP(
		() => {
			cardsRef.current = cardsRef.current.filter(Boolean)

			let transitionTl
			let transitionTrigger

			// -----------------------------
			// SPLIT TEXT
			// -----------------------------
			const titleSplit = new SplitText(titleRef.current, {
				type: 'chars',
				charsClass: 'hero-char',
			})

			const subtitleSplit = new SplitText(subtitleRef.current, {
				type: 'lines',
				linesClass: 'hero-line',
			})

			// -----------------------------
			// INITIAL STATES
			// -----------------------------
			gsap.set(titleSplit.chars, {
				yPercent: 110,
				opacity: 0,
				willChange: 'transform, opacity',
			})

			gsap.set(subtitleSplit.lines, {
				yPercent: 120,
				opacity: 0,
				willChange: 'transform, opacity',
			})

			gsap.set(topRef.current, {
				y: 18,
				opacity: 0,
				willChange: 'transform, opacity',
			})

			gsap.set(imageWrapRef.current, {
				scale: 1.06,
				opacity: 0,
				willChange: 'transform, opacity',
			})

			gsap.set(imageRef.current, {
				scale: 1.08,
				willChange: 'transform, opacity',
			})

			gsap.set(presenceRef.current, {
				yPercent: 100,
				willChange: 'transform',
			})

			gsap.set(
				[
					presenceHeadingRef.current,
					presenceIntroRef.current,
					...cardsRef.current,
				],
				{
					y: 60,
					opacity: 0,
					willChange: 'transform, opacity',
				}
			)

			// -----------------------------
			// INTRO TIMELINE (AUTO PLAYS)
			// -----------------------------
			const introTl = gsap.timeline({
				defaults: {
					ease: 'power3.out',
				},
				onComplete: () => {
					// -----------------------------
					// TRANSITION TIMELINE (PAUSED)
					// plays fully once user scrolls down a bit
					// -----------------------------
					transitionTl = gsap.timeline({ paused: true })

					transitionTl
						.to(
							presenceRef.current,
							{
								yPercent: 0,
								duration: 1.05,
								ease: 'power3.inOut',
							},
							0
						)
						.to(
							imageRef.current,
							{
								scale: 1.12,
								opacity: 0.55,
								duration: 1.05,
								ease: 'power3.inOut',
							},
							0
						)
						.to(
							heroContentRef.current,
							{
								y: -60,
								opacity: 0.18,
								duration: 0.8,
								ease: 'power2.out',
							},
							0.05
						)
						.to(
							presenceHeadingRef.current,
							{
								y: 0,
								opacity: 1,
								duration: 0.45,
								ease: 'power2.out',
							},
							0.72
						)
						.to(
							presenceIntroRef.current,
							{
								y: 0,
								opacity: 1,
								duration: 0.45,
								ease: 'power2.out',
							},
							0.84
						)
						.to(
							cardsRef.current,
							{
								y: 0,
								opacity: 1,
								stagger: 0.12,
								duration: 0.45,
								ease: 'power2.out',
							},
							0.98
						)

					transitionTrigger = ScrollTrigger.create({
						trigger: wrapperRef.current,
						start: 'top+=1 top',
						end: '+=100%',
						pin: true,
						anticipatePin: 1,
						onEnter: () => transitionTl.play(),
						onLeaveBack: () => transitionTl.reverse(),
					})

					ScrollTrigger.refresh()
				},
			})

			introTl
				.to(imageWrapRef.current, {
					opacity: 1,
					scale: 1,
					duration: 0.9,
					ease: 'power2.out',
				})
				.to(
					imageRef.current,
					{
						scale: 1,
						duration: 1.4,
						ease: 'power3.out',
					},
					0
				)
				.to(
					topRef.current,
					{
						y: 0,
						opacity: 1,
						duration: 0.45,
					},
					0.08
				)
				.to(
					titleSplit.chars,
					{
						yPercent: 0,
						opacity: 1,
						duration: 0.6,
						stagger: 0.018,
						ease: 'power4.out',
					},
					0.16
				)
				.to(
					subtitleSplit.lines,
					{
						yPercent: 0,
						opacity: 1,
						duration: 0.55,
						stagger: 0.08,
						ease: 'power3.out',
					},
					0.42
				)

			return () => {
				if (transitionTrigger) transitionTrigger.kill()
				if (transitionTl) transitionTl.kill()
				titleSplit.revert()
				subtitleSplit.revert()
			}
		},
		{ scope: wrapperRef }
	)

	return (
		<section
			ref={wrapperRef}
			className="relative h-screen overflow-hidden bg-black text-zinc-100"
		>
			{/* HERO LAYER */}
			<div ref={heroRef} className="absolute inset-0 z-10">
				<div className="mx-auto grid h-full max-w-7xl grid-cols-1 lg:grid-cols-2">
					<div
						ref={heroContentRef}
						className="relative z-10 flex items-center px-6 py-24 md:px-10 lg:px-16"
					>
						<div className="max-w-2xl">
							<div className="mt-10">
								<p
									ref={topRef}
									className="text-sm uppercase tracking-[0.35em] text-zinc-300 md:text-base"
								>
									Discipline. Clarity. Vision.
								</p>

								<h1
									ref={titleRef}
									className="mt-5 whitespace-nowrap font-serif text-5xl leading-[0.9] tracking-[-0.02em] text-zinc-100 md:text-7xl lg:text-7xl"
								>
									Nicolas Konarik
								</h1>

								<p
									ref={subtitleRef}
									className="mt-6 max-w-lg text-sm leading-7 text-zinc-400 md:text-2xl md:leading-8"
								>
									Built on precision and deliberate execution.
								</p>
							</div>
						</div>
					</div>

					<div
						ref={imageWrapRef}
						className="relative min-h-[55vh] overflow-hidden lg:min-h-screen"
					>
						<div ref={imageRef} className="relative h-full w-full">
							<Image
								src="/images/photos/2.png"
								alt="Nicolas Konarik portrait"
								fill
								priority
								className="object-cover object-center opacity-90"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* PRESENCE LAYER */}
			<div ref={presenceRef} className="absolute inset-0 z-20 bg-[#090909]">
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<h2 className="select-none font-serif text-[16vw] font-semibold uppercase leading-none text-white/[0.035]">
						Presence
					</h2>
				</div>

				<div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-24 md:px-10 lg:px-16">
					<div className="max-w-5xl">
						<div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
							<div ref={presenceHeadingRef}>
								<p className="max-w-xs text-sm uppercase tracking-[0.3em] text-zinc-400 md:text-base">
									More than visibility.
									<br />A defined presence.
								</p>
							</div>

							<div ref={presenceIntroRef}>
								<p className="max-w-3xl font-serif text-3xl leading-tight text-zinc-100 md:text-5xl md:leading-[1.08]">
									A business profile shaped by judgment, consistency, and
									a clear sense of direction.
								</p>
							</div>
						</div>

						<div className="mt-16 h-px w-full bg-white/10" />

						<div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
							{principles.map((item, index) => (
								<div
									key={item.number}
									ref={(el) => (cardsRef.current[index] = el)}
									className="group"
								>
									<p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600 md:text-xs">
										{item.number}
									</p>

									<h3 className="mt-4 font-serif text-2xl text-zinc-100 md:text-3xl">
										{item.title}
									</h3>

									<p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}