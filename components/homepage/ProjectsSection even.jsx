import Image from 'next/image'

const projects = [
	{
		title: 'The Grand Points',
		category: 'Webdesign & Marketing',
		status: 'Live',
		href: 'https://www.thegrandpoints.com',
		description:
			'Website presentation for a webdesign and marketing company.',
		image: '/images/projects/thegrandpoints.jpg',
	},
	{
		title: 'Chemten',
		category: 'Chemical Manufacturing',
		status: 'Live',
		href: 'https://chemten.com',
		description:
			'Corporate website for a chemical manufacturing company.',
		image: '/images/projects/chemten.jpg',
	},
	{
		title: 'Ivanenko Tennis Academy',
		category: 'Tennis Academy',
		status: 'Live',
		href: 'https://ivanenkotennisacademy.com',
		description:
			'Presentation website for a tennis academy based in Vienna.',
		image: '/images/projects/ivanenko.jpg',
	},
	{
		title: 'Yung Lore',
		category: 'E-commerce',
		status: 'Coming soon',
		href: 'https://yunglore.com',
		description:
			'Online store currently in development.',
		image: '/images/projects/yunglore.jpg',
	},
]

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

					<p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
						A selection of current projects across business, industry,
						sport, and e-commerce.
					</p>
				</div>

				<div className="mt-14 grid gap-6 md:grid-cols-2">
					{projects.map((project) => (
						<a
							key={project.title}
							href={project.href}
							target="_blank"
							rel="noreferrer"
							className="group relative overflow-hidden bg-black"
						>
							<div className="relative aspect-[1.15/1] w-full overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>

								<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent" />
								<div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505]/60 to-transparent" />
								<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505]/70 to-transparent" />
							</div>

							<div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7">
								<div className="flex items-start justify-between gap-4">
									<p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
										{project.category}
									</p>

									<span
										className={`text-[10px] uppercase tracking-[0.28em] ${
											project.status === 'Coming soon'
												? 'text-zinc-300'
												: 'text-zinc-500'
										}`}
									>
										{project.status}
									</span>
								</div>

								<div>
									<h3 className="font-serif text-2xl text-zinc-100 md:text-3xl">
										{project.title}
									</h3>

									<p className="mt-3 max-w-md text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
										{project.description}
									</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}