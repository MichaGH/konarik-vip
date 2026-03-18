'use client'

import HeroSection from '@/components/homepage/HeroSection'
import AboutSection from '@/components/homepage/AboutSection'
import ContactSection from '@/components/homepage/ContactSection'
import PresenceSection from '@/components/homepage/PresenceSection'
import ProjectsSection from '@/components/homepage/ProjectsSection'
import SmoothScroll from '@/components/SmoothScroll'


export default function HomePage() {
	return (
		<>
			<SmoothScroll />

			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main className="bg-black text-zinc-100 overflow-x-hidden">
						{/* <HeroPresenceSection /> */}
						<HeroSection />
						<PresenceSection />
						<AboutSection />
						<ProjectsSection />
						<ContactSection />
					</main>
				</div>
			</div>
		</>
	)
}