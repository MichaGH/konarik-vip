'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function PresenceSection() {
	const sectionRef = useRef(null)
	const headingRef = useRef(null)
	const introRef = useRef(null)
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

	useGSAP(() => {
		cardsRef.current = cardsRef.current.filter(Boolean)

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		})

		tl.from(headingRef.current, {
			y: 40,
			opacity: 0,
			duration: 0.5,
		})
			.from(
				introRef.current,
				{
					y: 40,
					opacity: 0,
					duration: 0.6,
				},
				0.1
			)
			.from(
				cardsRef.current,
				{
					y: 40,
					opacity: 0,
					stagger: 0.12,
					duration: 0.5,
				},
				0.2
			)
	}, { scope: sectionRef })

	return (
		<section
			ref={sectionRef}
			className="relative bg-[#090909] py-24 text-zinc-100 md:py-32"
		>
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
				<h2 className="select-none font-serif text-[16vw] font-semibold uppercase text-white/[0.035]">
					Presence
				</h2>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
				<div className="mx-auto max-w-5xl text-center lg:text-left">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
						
						<div ref={headingRef} className="flex justify-center lg:block">
							<p className="max-w-xs text-sm uppercase tracking-[0.3em] text-zinc-400">
								More than visibility.
								<br />A defined presence.
							</p>
						</div>

						<div ref={introRef}>
							<p className="font-serif text-3xl leading-tight md:text-5xl">
								A business profile shaped by judgment, consistency, and a clear
								sense of direction.
							</p>
						</div>
					</div>

					<div className="mt-16 h-px w-full bg-white/10" />

					<div className="mt-10 grid gap-8 text-center md:grid-cols-3 md:text-left">
						{principles.map((item, index) => (
							<div
								key={item.number}
								ref={(el) => (cardsRef.current[index] = el)}
							>
								<p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
									{item.number}
								</p>

								<h3 className="mt-4 font-serif text-2xl md:text-3xl">
									{item.title}
								</h3>

								<p className="mt-4 text-sm text-zinc-400 md:text-base">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}