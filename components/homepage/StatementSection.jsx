import Image from 'next/image'

export default function StatementSection() {
	return (
		<section className="relative isolate overflow-hidden bg-black py-32 md:py-44">
			<div className="absolute inset-0">
				<Image
					src="/images/nikolas/statement.jpg"
					alt="Nikolas Konarik dramatic portrait"
					fill
					className="object-cover object-center opacity-30"
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-black/75" />
				<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/90" />
			</div>

			<div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10 lg:px-16">
				<p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500 md:text-xs">
					Statement
				</p>

				<blockquote className="mx-auto mt-10 max-w-4xl font-serif text-3xl leading-tight text-zinc-100 md:text-5xl md:leading-tight lg:text-6xl">
					True presence does not ask for attention.
					<br />
					It earns respect.
				</blockquote>

				<div className="mx-auto mt-10 h-px w-24 bg-white/15" />

				<p className="mt-8 text-xs uppercase tracking-[0.35em] text-zinc-400">
					Nikolas Konarik
				</p>
			</div>
		</section>
	)
}