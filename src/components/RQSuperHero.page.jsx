import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHeroPage = () => {
	const { heroId } = useParams();
	const { isLoading, data, isError, error } = useSuperHeroData(heroId);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>{error.message}</h1>;
	}

	return (
		<div>
			{data?.data.id} - {data?.data.name} - {data?.data.alterEgo}
		</div>
	);
};
