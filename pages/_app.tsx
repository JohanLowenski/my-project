import React from "react";
import { useEffect, useState } from "react";
import ApiMovie from "./apiMovie";
import MovieSection from "./components/movieSection";
import "../styles/globals.css";



interface Response {
	title: string;
	items: {
		results: {
			id: number;
			original_title: string;
			poster_path: string;
			title: string;
			overview: string;
		}[];
	};
}
function App() {
	const [videosList, setVideosList] = useState<Response[]>([]);
	useEffect(() => {
		const fetchVideos = async () => {
			const response = await ApiMovie.getHomeMovies();
			// console.log(response);
			setVideosList(response);
		};
		fetchVideos();
	}, []);
	return (
		<div className="App">
			<section>
				{videosList.map((item) => (
					<MovieSection key={item.title ?? item.title}  title={item.title} items={item.items} />
				))}
			</section>
		</div>
	);
}

export default App;
