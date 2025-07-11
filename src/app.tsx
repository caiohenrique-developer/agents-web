import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { RoomDetail } from "./pages/room-detail";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<CreateRoom />} />
				<Route path="/room-detail" element={<RoomDetail />} />
			</Routes>
		</BrowserRouter>
	);
}
