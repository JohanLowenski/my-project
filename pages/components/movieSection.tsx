import React from "react";

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
function MovieSection({ title, items }: Response) {
	console.log(title, items);
	return (
		<div className="movieRow">
			<h2 className="text-5xl font-bold text-center bg-slate-500">{title}</h2>
			<div className="movieRow">
				<div className="flex flex-wrap row-auto">
					{items?.results &&
						items.results.length > 0 &&
						items.results.map(
							(item: 
								{
									id: number;
									original_title: string;
									poster_path: string;
									title: string;
									overview: string;
								},
								) => (
								<div className="max-w-lg p-4 m-auto" key={item.id}>
                                 <div className="relative">
								 <img
										className="rounded-lg shadow-lg h-90 w-90"
										alt={item.original_title}
										src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
									/>
										<h3 className="font-bold">{item.title}</h3>
									<div className="absolute max-w-xs top-1 left-1">
										<p className="text-red-300">{item.overview}</p>
									</div>
								 </div>
								</div>
							),
						)}
				</div>
			</div>
		</div>
	);
}

export default MovieSection;
