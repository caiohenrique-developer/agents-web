import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const createRoomSchema = z.object({
	name: z.string().min(3, { message: "Inclua no mínimo 3 caracteres" }),
	description: z.string(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CreateRoomForm() {
	const createRoomForm = useForm<CreateRoomFormData>({
		resolver: zodResolver(createRoomSchema),
		defaultValues: { name: "", description: "" },
	});

	const handleCreateRoom = (data: CreateRoomFormData) => {
		console.log("Form submitted with data:", data);
		// Aqui você pode adicionar a lógica para enviar os dados do formulário
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Criar sala</CardTitle>

				<CardDescription>
					Crie uma nova sala para começar a fazer perguntas e receber respostas
					da I.A.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form {...createRoomForm}>
					<form
						onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
						className="flex flex-col gap-4"
					>
						<FormField
							control={createRoomForm.control}
							name="name"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Nome da sala</FormLabel>

										<FormControl>
											<Input
												{...field}
												placeholder="Digite o nome da sala..."
											/>
										</FormControl>
									</FormItem>
								);
							}}
						/>

						<FormField
							control={createRoomForm.control}
							name="description"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Descrição</FormLabel>

										<FormControl>
											<Textarea {...field} />
										</FormControl>
									</FormItem>
								);
							}}
						/>

						<Button className="w-full cursor-pointer">Criar sala</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
