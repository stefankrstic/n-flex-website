import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from "@/components/Services";
import About from "@/components/About";

export default function App() {
    return (
        <main>
            <Navbar />
            <Home />
            <Services />
            <About />
        </main>
    );
}
