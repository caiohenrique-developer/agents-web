import { Navigate, useParams } from "react-router-dom";

import { QuestionForm } from "@/components/question-form";
import { QuestionItem } from "@/components/question-item";
// import { QuestionList } from "@/components/question-list";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Radio } from "lucide-react";
import { Link } from "react-router-dom";

type RoomParams = { roomID: string };

export function RoomDetail() {
	const { roomID } = useParams<RoomParams>();

	if (!roomID) {
		return <Navigate replace to="/" />;
	}

	return (
		<div className="min-h-screen bg-zinc-950">
			<div className="container mx-auto max-w-4xl px-4 py-8">
				<div className="mb-8">
					<div className="mb-4 flex items-center justify-between">
						<Link to="/">
							<Button variant="outline" className="cursor-pointer">
								<ArrowLeft className="mr-2 size-4" />
								Voltar ao Início
							</Button>
						</Link>
						<Link to={`/room/${roomID}/audio`}>
							<Button
								className="flex items-center gap-2 cursor-pointer"
								variant="secondary"
							>
								<Radio className="size-4" />
								Gravar Áudio
							</Button>
						</Link>
					</div>
					<h1 className="mb-2 font-bold text-3xl text-foreground">
						Sala de Perguntas
					</h1>
					<p className="text-muted-foreground">
						Faça perguntas e receba respostas com IA
					</p>
				</div>

				<div className="mb-8">
					<QuestionForm roomId={roomID} />
				</div>

				{/* <QuestionList roomId={roomID} /> */}

				<QuestionItem
					question={{
						id: "string",
						question: "string",
						createdAt: "string",
						answer: "string",
						isGeneratingAnswer: true,
					}}
				/>
			</div>
		</div>
	);
}
