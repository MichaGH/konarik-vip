const focusItems = [
	{
		number: '01',
		title: 'Strategic Vision',
		text: 'A long-term approach shaped by clarity, structure, and deliberate positioning.',
	},
	{
		number: '02',
		title: 'Business Presence',
		text: 'A personal brand built to communicate confidence, credibility, and refined identity.',
	},
	{
		number: '03',
		title: 'Execution',
		text: 'Focused action guided by discipline, consistency, and attention to detail.',
	},
	{
		number: '04',
		title: 'Partnerships',
		text: 'Meaningful business relationships built on trust, alignment, and shared standards.',
	},
]

export default function FocusSection() {
	return (
		<section className="border-t border-white/10 bg-zinc-950 py-28 md:py-36">
			<div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
				<div className="max-w-2xl">
					<p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500 md:text-xs">
						Focus
					</p>

					<h2 className="mt-6 font-serif text-4xl leading-tight text-zinc-100 md:text-6xl">
						A profile defined by
						<br />
						precision and intent.
					</h2>
				</div>

				<div className="mt-16 border-t border-white/10">
					{focusItems.map((item) => (
						<div
							key={item.number}
							className="grid gap-6 border-b border-white/10 py-8 md:grid-cols-[120px_1fr_1.2fr] md:gap-10 md:py-10"
						>
							<div className="text-xs tracking-[0.35em] text-zinc-600">
								{item.number}
							</div>

							<h3 className="font-serif text-2xl text-zinc-100 md:text-3xl">
								{item.title}
							</h3>

							<p className="max-w-xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}