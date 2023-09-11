import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const DATA_LENGTH = 4;

export function RQSuperHeroes() {
	const [refetchInterval, setRefetchInterval] = React.useState(3000);

	const onSuccess = (data) => {
		if (data?.data.length === DATA_LENGTH) {
			console.log("data length is 4", data?.data);
			setRefetchInterval(false);
		}
		console.log("perform side effect after data fetching", data);
	};
	const onError = (error) => {
		if (data?.data.length === DATA_LENGTH) {
			console.log("data length is 4", data?.data);
			setRefetchInterval(false);
		}
		console.log("perform side effect after encountering errror", error);
	};
	const { data, isLoading, isError, error, refetch } = useSuperHeroesData(
		onSuccess,
		onError,
		refetchInterval
	);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>{error.message}</h1>;
	}

	return (
		<>
			<h1>RQ Super Heroes</h1>
			{data?.data.map((superHero) => {
				return (
					<div key={superHero.id}>
						<Link to={`/rq-super-heroes/${superHero.id}`}>
							<h2>{superHero.name}</h2>
						</Link>
					</div>
				);
			})}
			<button onClick={refetch}>Fetch Heroes</button>
		</>
	);
}
