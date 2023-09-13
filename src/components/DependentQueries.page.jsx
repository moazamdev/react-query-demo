import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
	return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchChannelById = (id) => {
	return axios.get(`http://localhost:4000/channels/${id}`);
};

export function DependentQueriesPage({ email }) {
	const { data: user } = useQuery(["user", email], () =>
		fetchUserByEmail(email)
	);

	const channelId = user?.data.channelId;

	const { data: channel } = useQuery(
		["channel", channelId],
		() => fetchChannelById(channelId),
		{
			enabled: !!channelId,
		}
	);
    console.log(channel)

	return (
		<>
			<div>Dependent Queries Page</div>
			{channel?.data.courses.map((course) => {
				return <h2 key={course.id}>{course}</h2>;
			})}
		</>
	);
}
