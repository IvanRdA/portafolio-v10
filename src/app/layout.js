import "@/styles/globals.css";

export const metadata = {
  title: "IVÁN RODRÍGUEZ - FULLSTACK DEVELOPER",
  description: "Portafolio web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-br from-blue-chill-400 to-blue-chill-600 text-blue-chill-50 cursor-default overflow-x-auto h-[100%] md:h-[100vh] w-[100%] md:w-[100vw]`}
      >
        {children}
      </body>
    </html>
  );
}
