import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow min-h-screen lg:ml-64 transition-all duration-300">
          <Navbar />
          <main className="flex-grow container mx-auto p-6">{children}</main>
          <Footer className="mt-auto" />
        </div>
      </body>
    </html>
  );
}
