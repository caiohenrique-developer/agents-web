import { useRoomQuestions } from "@/http/use-room-questions";
import { QuestionItem } from "./question-item";

type QuestionListProps = { roomId: string };

export function QuestionList({ roomId }: QuestionListProps) {
	const { data } = useRoomQuestions(roomId);

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-foreground">
					Perguntas & Respostas
				</h2>
			</div>

			{data?.map((question) => (
				<QuestionItem key={question.id} question={question} />
			))}
		</div>
	);
}
