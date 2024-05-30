import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./Components/Navbar";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Home />
				<About />
				<Contact />
				<Gallery />
				<Plans />
				<Trainers />
				<NotFound />
			</BrowserRouter>
		</div>
	);
};

export default App;
