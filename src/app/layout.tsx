import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    style: "normal",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
