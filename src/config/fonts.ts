import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";

export const instrumentSans = Instrument_Sans({
    variable: "--font-instrument-sans",
    subsets: ["latin"],
});

export const ibmMono = IBM_Plex_Mono({
    variable: "--font-ibm-mono",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});
