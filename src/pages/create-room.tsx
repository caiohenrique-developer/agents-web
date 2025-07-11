import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
	id: string;
	name: string;
}>;

export const CreateRoom = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["get-rooms"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3333/rooms");
			const result: GetRoomsAPIResponse = await response.json();

			return result;
		},
	});

	return (
		<div>
			{isLoading && <p>Loading rooms...</p>}

			{data?.map((room) => {
				return (
					<Link
						key={room.id}
						className="border p-4 mb-2 block"
						to={`/room-detail/${room.id}`}
					>
						<h2 className="text-lg font-bold">{room.name}</h2>
						<p>Room ID: {room.id}</p>
					</Link>
				);
			})}
		</div>
	);
};
