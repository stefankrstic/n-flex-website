import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from "@/components/Services";
import About from "@/components/About";
import Products from "@/components/Products";
import Blog from "@/components/Blog";

export default function App() {
    return (
        <main>
            <Navbar />
            <Home />
            <Services />
            <About />
            <Products />
            <Blog />
        </main>
    );
}
