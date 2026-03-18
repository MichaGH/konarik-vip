'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Image from 'next/image'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function HeroSection() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const topRef = useRef(null)
    const imageWrapRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {
        const titleSplit = new SplitText(titleRef.current, {
            type: 'chars',
            charsClass: 'hero-char',
        })

        const subtitleSplit = new SplitText(subtitleRef.current, {
            type: 'lines',
            linesClass: 'hero-line',
        })

        gsap.set(titleSplit.chars, { yPercent: 110, opacity: 0 })
        gsap.set(subtitleSplit.lines, { yPercent: 120, opacity: 0 })
        gsap.set(topRef.current, { y: 20, opacity: 0 })
        gsap.set(imageWrapRef.current, { scale: 1.06, opacity: 0 })
        gsap.set(imageRef.current, { scale: 1.08 })

        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
        })

        tl.to(imageWrapRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.9,
        })
            .to(
                imageRef.current,
                { scale: 1, duration: 1.4, ease: 'power3.out' },
                0
            )
            .to(
                topRef.current,
                { y: 0, opacity: 1, duration: 0.5 },
                0.1
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
                0.2
            )
            .to(
                subtitleSplit.lines,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                },
                0.4
            )

        return () => {
            titleSplit.revert()
            subtitleSplit.revert()
        }
    }, { scope: sectionRef })

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-transparent lg:bg-[#080808] text-zinc-100"
        >
            <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 text-center md:px-10 lg:min-h-0 lg:justify-start lg:px-16 lg:text-left">
                    <div className="max-w-2xl">
                        <p
                            ref={topRef}
                            className="text-sm uppercase tracking-[0.35em] text-zinc-300"
                        >
                            Discipline. Clarity. Vision.
                        </p>

                        <h1
                            ref={titleRef}
                            className="mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.02em] md:text-7xl"
                        >
                            Nicolas Konarik
                        </h1>

                        <p
                            ref={subtitleRef}
                            className="mt-6 max-w-lg text-sm text-zinc-400 md:text-xl"
                        >
                            Built on precision and deliberate execution.
                        </p>
                    </div>
                </div>

                <div
                    ref={imageWrapRef}
                    className="absolute inset-0 z-0 overflow-hidden lg:relative lg:inset-auto lg:col-start-2 lg:min-h-screen"
                >
                    <div ref={imageRef} className="relative h-full w-full">
                        <Image
                            src="/images/photos/2.webp"
                            alt="Nicolas Konarik portrait"
                            fill
                            priority
                            className="object-cover object-center opacity-90"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080808] to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080808] to-transparent" />

                        <div className="pointer-events-none absolute inset-x-0 top-0 h-50 bg-gradient-to-b from-[#080808] to-transparent" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    )
}