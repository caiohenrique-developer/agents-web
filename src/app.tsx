import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { RoomDetail } from "./pages/room-detail";

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route index element={<CreateRoom />} />
					<Route path="/room-detail/:roomID" element={<RoomDetail />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}
