import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
	return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
	return axios.get("http://localhost:4000/friends");
};

export const ParalledQueriesPage = () => {
	const { data: superheroes } = useQuery(["superheroes"], fetchSuperHeroes);
	const { data: friends } = useQuery(["friends"], fetchFriends);

	return (
		<div>
			Parallel Queries Page
			{superheroes?.data.map((superhero) => {
				return <h2 key={superhero.id}>{superhero.name}</h2>;
			})}
			{friends?.data.map((friend) => {
				return <h6 key={friend.id}>{friend.name}</h6>;
			})}
		</div>
	);
};
