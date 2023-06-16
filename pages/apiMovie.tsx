import axios from "axios";

//Récupération des films les plus populaires avec axios
export async function getMovies(endpoint: string, option?: string | undefined) {
	const API_URL = "https://api.themoviedb.org/3/";
	const API_KEY = process.env.API_KEY;
	try {
		const response = await axios.get(
			`${API_URL}${endpoint}?api_key=${"25758be3027c5ef9a34b230192b215bd"}&language=fr-FR&page=1${
				option ? option : ""
			}`,
		);
		// en cas de réussite de la requête
		// console.log(response);
		return response.data;
	} catch (error) {
		// en cas d’échec de la requête
		console.error(error);
	}
}

const myRated = {
	getHomeMovies: async () => {
		return [
			{
				slug: "originals",
				title: "Prochaines sorties",
				items: await getMovies("movie/upcoming"),
			},
			{
				slug: "toprated",
				title: "En vedette",
				items: await getMovies("movie/top_rated"),
			},
			{
				slug: "action",
				title: "Précédents films",
				items: await getMovies("movie/now_playing"),
			},
			{
				slug: "comedy",
				title: "Populaires",
				items: await getMovies("movie/popular"),
			},
			{
				slug: "horror",
				title: "Séries populaires",
				items: await getMovies("tv/popular"),
			},
			{
				slug: "romance",
				title: "Romance",
				items: await getMovies( "discover/movie","&with_genres=35"),
			},
			{
				slug: "documentary",
				title: "Documentaires",
				items: await getMovies("discover/movie","&with_genres=99"),
			},
			{
				slug: "documentary",
				title: "Now Playing",
				items: await getMovies("movie/now_playing"),
			},
			{
				slug: "documentary",
				title: "Movies similar",
				items: await getMovies("movie/502356/similar"),
			},
		];
	},
};

export default myRated;
