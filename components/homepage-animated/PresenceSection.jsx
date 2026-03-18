export default function PresenceSection() {
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

	return (
		<section
			id="presence"
			className="relative min-h-screen overflow-hidden bg-[#090909] text-zinc-100 border-deev"
		>
			{/* BACKGROUND WORD */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
				<h2 className="select-none font-serif text-[16vw] font-semibold uppercase leading-none tracking-[-0.04em] text-white/[0.035]">
					Presence
				</h2>
			</div>

			<div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 md:px-10 lg:px-16">
				<div className="max-w-5xl">
					<div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
						<div>
							<p className="max-w-xs text-sm uppercase tracking-[0.3em] text-zinc-400 md:text-base">
								More than visibility.
								<br />
								A defined presence.
							</p>
						</div>

						<div>
							<p className="max-w-3xl font-serif text-3xl leading-tight text-zinc-100 md:text-5xl md:leading-[1.08]">
								A business profile shaped by judgment, consistency, and a clear
								sense of direction.
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-end">

                    </div>
				</div>
			</div>
		</section>
	)
}