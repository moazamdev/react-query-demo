import React from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = (id) => {
	return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const DynamicParalledQueriesPage = ({ ids }) => {
	const queryResults = useQueries({
		queries: ids.map((id) => {
			return {
				queryKey: ["super-hero", id],
				queryFn: () => fetchSuperHeroes(id),
				staleTime: twentyFourHoursInMs,
				// refetchInterval: Infinity,
				// refetchInBackground: false,
			};
		}),
	});
	// console.log(queryResults);
	return (
		<div>
			Dynamic Parallel Queries Page
			{queryResults.map((result) => {
				const { isLoading, data, isError, error } = result;
				if (isLoading) {
					return <h1>Loading...</h1>;
				}
				if (isError) {
					return <h1>{error.message}</h1>;
				}
				return (
					<h2 key={data?.data.id}>
						{data?.data.id} - {data?.data.name} -{" "}
						{data?.data.alterEgo}
					</h2>
				);
			})}
		</div>
	);
};
