import { Manrope } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/reduxProvider";

const manrope = Manrope({
  subsets: ["latin"],
});
export const metadata = {
  title: "Quizzy",
  description: "take your chance!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="min-h-screen bg-[#06130F] text-[#F4F1E8] py-6 min-w-screen flex justify-center items-center">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
