'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import Image from 'next/image'

gsap.registerPlugin(useGSAP, SplitText)

export default function HeroSection() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const topRef = useRef(null)
    const imageWrapRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(
        () => {
            const titleSplit = new SplitText(titleRef.current, {
                type: 'chars',
                charsClass: 'hero-char',
            })

            const subtitleSplit = new SplitText(subtitleRef.current, {
                type: 'lines',
                linesClass: 'hero-line',
            })

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
                willChange: 'transform',
            })

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                },
            })

            tl.to(imageWrapRef.current, {
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
                titleSplit.revert()
                subtitleSplit.revert()
            }
        },
        { scope: sectionRef }
    )

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-custom-gray-1"
        >
            <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10 flex items-center px-6 py-24 md:px-10 lg:px-16">
                    <div className="max-w-2xl">
                        <div className="mt-10">
                            <p
                                ref={topRef}
                                className="hero-top text-sm uppercase tracking-[0.35em] text-zinc-300 md:text-base"							>
                                Discipline. Clarity. Vision.
                            </p>

                            <h1
                                ref={titleRef}
                                className="title mt-5  whitespace-nowrap font-serif text-5xl leading-[0.9] tracking-[-0.02em] text-zinc-100 md:text-7xl lg:text-7xl"
                            >
                                Nicolas Konarik
                            </h1>

                            <p
                                ref={subtitleRef}
                                className="subtitle mt-6 max-w-lg text-sm leading-7 text-zinc-400 md:text-2xl md:leading-8"
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
        </section>
    )
}