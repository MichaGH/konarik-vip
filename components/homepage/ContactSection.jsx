import Link from 'next/link'

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-zinc-100"
		>
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
				<h2 className="select-none font-serif text-[18vw] font-semibold uppercase leading-none text-white/[0.03]">
					Contact
				</h2>
			</div>

			<div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center md:px-10 md:py-32">
				
				<p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
					Contact
				</p>

				<h2 className="mt-6 font-serif text-4xl leading-[0.95] tracking-[-0.02em] text-zinc-100 md:text-6xl">
					For selected collaborations and private inquiries.
				</h2>

				<p className="mt-8 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
					If the matter is relevant, considered, and aligned, feel free to
					reach out directly. Business inquiries, selected collaborations,
					and private contact are welcome.
				</p>

				<Link
					href="mailto:konarik@tennischem.com"
					className="mt-12 font-serif text-3xl leading-[1.05] tracking-[-0.02em] text-zinc-100 transition duration-300 hover:text-zinc-300 md:text-4xl lg:text-[2.75rem]"
				>
					konarik@tennischem.com
				</Link>

				<div className="mt-16 h-px w-24 bg-white/10" />
			</div>
		</section>
	)
}