import { Wand } from "lucide-react";
import { Button } from "./components/ui/button";

export function App() {
	return (
		<>
			<h1>Hello World</h1>

			<Button>Example button</Button>

			<div>
				<Button variant="destructive" size="icon">
					<Wand />
				</Button>
			</div>
		</>
	);
}
