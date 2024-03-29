import "@/styles/globals.css";

export const metadata = {
  title: "IVÁN RODRÍGUEZ - FULLSTACK DEVELOPER",
  description: "Portafolio web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`h-screen w-screen bg-gradient-to-br from-blue-chill-400 to-blue-chill-600 text-blue-chill-50 cursor-default`}
      >
        {children}
      </body>
    </html>
  );
}
