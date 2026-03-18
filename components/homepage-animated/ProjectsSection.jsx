import Image from 'next/image'

export default function ProjectsSection() {
	return (
		<section className="relative overflow-hidden bg-[#050505] text-zinc-100">
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
				<h2 className="select-none font-serif text-[18vw] font-semibold uppercase leading-none text-white/[0.03]">
					Projects
				</h2>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
				<div className="max-w-2xl">
					<p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
						Projects
					</p>

					<h2 className="mt-4 font-serif text-4xl leading-[1] tracking-[-0.02em] md:text-6xl">
						Selected work.
					</h2>
				</div>

				{/* MAIN + SIDE */}
				<div className="mt-14 grid gap-6 lg:grid-cols-12">
					{/* MAIN PROJECT */}
					<a
						href="https://www.thegrandpoints.com"
						target="_blank"
						className="group relative overflow-hidden bg-black lg:col-span-7"
					>
						<div className="relative aspect-[16/11] w-full overflow-hidden">
							<Image
								src="/images/projects/thegrandpoints.jpg"
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
									Website presentation for a webdesign and marketing company.
								</p>
							</div>
						</div>
					</a>

					{/* SIDE PROJECTS */}
					<div className="grid gap-6 lg:col-span-5">
						{/* Chemten */}
						<a
							href="https://chemten.com"
							target="_blank"
							className="group relative overflow-hidden border border-white/10 bg-white/[0.02]"
						>
							<div className="grid md:grid-cols-[1fr_1fr]">
								<div className="relative min-h-[200px]">
									<Image
										src="/images/projects/chemten.jpg"
										alt="Chemten"
										fill
										className="object-cover object-center"
									/>
								</div>

								<div className="flex flex-col justify-between p-5">
									<div>
										<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
											Chemical Manufacturing
										</p>

										<h3 className="mt-2 font-serif text-2xl text-zinc-100">
											Chemten
										</h3>
									</div>
								</div>
							</div>
						</a>

						{/* Ivanenko */}
						<a
							href="https://ivanenkotennisacademy.com"
							target="_blank"
							className="group relative overflow-hidden border border-white/10 bg-white/[0.02]"
						>
							<div className="grid md:grid-cols-[1fr_1fr]">
								<div className="relative min-h-[200px]">
									<Image
										src="/images/projects/ivanenko.jpg"
										alt="Ivanenko Tennis Academy"
										fill
										className="object-cover object-center"
									/>
								</div>

								<div className="flex flex-col justify-between p-5">
									<div>
										<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
											Tennis Academy
										</p>

										<h3 className="mt-2 font-serif text-2xl text-zinc-100">
											Ivanenko Academy
										</h3>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>

				{/* COMING SOON */}
				<div className="mt-12">
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