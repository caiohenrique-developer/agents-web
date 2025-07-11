import { Link } from "react-router-dom";

export const CreateRoom = () => {
	return (
		<div>
			<h1>Create Room</h1>

			<Link className="underline" to="/room-detail">
				Access room detail
			</Link>
		</div>
	);
};
