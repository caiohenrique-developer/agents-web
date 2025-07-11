import { Navigate, useParams } from "react-router-dom";

type RoomParams = { roomID: string };

export const RoomDetail = () => {
	const { roomID } = useParams<RoomParams>();

	if (!roomID) {
		return <Navigate to="/" replace />;
	}

	return <h1>Room details {JSON.stringify(roomID)}</h1>;
};
