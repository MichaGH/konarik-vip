import Link from 'next/link'

export default function Navbar() {
	return (
		<header className="fixed left-0 top-0 z-50 w-full">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-16">
				<Link
					href="/"
					className="text-xs uppercase tracking-[0.4em] text-zinc-200"
				>
					Konarik
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					<Link
						href="#about"
						className="text-[11px] uppercase tracking-[0.3em] text-zinc-400 transition hover:text-zinc-200"
					>
						About
					</Link>
					<Link
						href="#contact"
						className="text-[11px] uppercase tracking-[0.3em] text-zinc-400 transition hover:text-zinc-200"
					>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	)
}