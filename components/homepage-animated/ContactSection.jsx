import Link from 'next/link'

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="border-t border-white/10 bg-zinc-950 py-28 md:py-36"
		>
			<div className="mx-auto max-w-4xl px-6 text-center md:px-10">
				<p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500 md:text-xs">
					Contact
				</p>

				<h2 className="mt-6 font-serif text-4xl leading-tight text-zinc-100 md:text-6xl">
					Private inquiry
				</h2>

				<p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-zinc-300 md:text-base">
					For selected collaborations, business inquiries, or private contact,
					please reach out directly.
				</p>

				<div className="mx-auto mt-10 h-px w-24 bg-white/15" />

				<div className="mt-10 space-y-4">
					<Link
						href="mailto:info@konarik.vip"
						className="block font-serif text-2xl text-zinc-100 transition duration-300 hover:text-zinc-300 md:text-3xl"
					>
						info@konarik.vip
					</Link>

					<p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
						Business Presentation · konarik.vip
					</p>
				</div>
			</div>
		</section>
	)
}