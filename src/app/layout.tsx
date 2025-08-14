import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const instrumentSans = Instrument_Sans({
    variable: "--font-instrument-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${instrumentSans.variable} bg-neutral-950 antialiased`}>
                <Sidebar />
                <main className="pl-[19rem] w-full h-screen">{children}</main>
            </body>
        </html>
    );
}
