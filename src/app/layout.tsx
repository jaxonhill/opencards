import { instrumentSans } from "@/config/fonts";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${instrumentSans.className} bg-neutral-950 antialiased`}>
                <Sidebar />
                <main className="pl-[19rem] w-full h-screen">{children}</main>
            </body>
        </html>
    );
}
