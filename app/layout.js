import { Merriweather, Montserrat } from "next/font/google";
import "./globals.css";
export const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});
export const merriweather = Merriweather({
	subsets: ["latin"],
	variable: "--font-merriweather", // CSS variable
});

export const metadata = 
 {
		title: "Nicolas Konarik — Business Profile",
		description:
			"Official business profile of Nicolas Konarik. Focused on precision, discipline, and high-level execution across selected projects and collaborations.",
		keywords: [
			"Nicolas Konarik",
			"konarik.vip",
			"business profile",
			"web development",
			"digital projects",
			"branding",
			"portfolio",
		],
		authors: [{ name: "Nicolas Konarik", url: "https://konarik.vip" }],
		publisher: "Nicolas Konarik",
		creator: "Nicolas Konarik",

		robots: {
			index: true,
			follow: true,
			nocache: false,
		},

		openGraph: {
			title: "Nicolas Konarik — Business Profile",
			description:
				"Selected work, business profile, and contact. A focused presentation of projects, direction, and execution.",
			url: "https://konarik.vip",
			siteName: "konarik.vip",
			locale: "en_US",
			type: "website",
			images: [
				{
					url: "https://konarik.vip/images/og-image.png", // adjust if needed
					width: 1200,
					height: 630,
					alt: "Nicolas Konarik — Business Profile",
				},
			],
		},

		twitter: {
			card: "summary_large_image",
			title: "Nicolas Konarik — Business Profile",
			description:
				"Selected work and business profile of Nicolas Konarik.",
			images: ["https://konarik.vip/images/og-image.png"], // adjust if needed
		},

		alternates: {
			canonical: "https://konarik.vip",
		},

		icons: { icon: "/favicon.ico" },
		manifest: "/manifest.json",
		appleWebApp: { capable: true, statusBarStyle: "default" },
	};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${merriweather.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
