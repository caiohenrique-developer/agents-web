import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const isRecordingSupported =
	!!navigator.mediaDevices &&
	typeof navigator.mediaDevices.getUserMedia === "function" &&
	typeof window.MediaRecorder === "function";

type RoomParams = { roomID: string };

export function RecordRoomAudio() {
	const [isRecording, setIsRecording] = useState(false);

	const recorder = useRef<MediaRecorder | null>(null);

	const { roomID } = useParams<RoomParams>();

	if (!roomID) {
		return <Navigate replace to="/" />;
	}

	const handleUploadAudio = async (audio: Blob) => {
		const formData = new FormData();

		formData.append("file", audio, "audio.webm");

		const response = await fetch(
			`/http://localhost:3333/rooms/${roomID}/audio`,
			{
				method: "POST",
				body: formData,
			},
		);

		const result = await response.json();

		console.log("Audio uploaded:", result);
	};

	const handleStartRecording = async () => {
		if (!isRecordingSupported) {
			alert("Gravação de áudio não é suportada neste navegador.");
			return;
		}

		setIsRecording(true);

		const audio = await navigator.mediaDevices.getUserMedia({
			audio: {
				echoCancellation: true,
				noiseSuppression: true,
				sampleRate: 44_100,
			},
		});

		recorder.current = new MediaRecorder(audio, {
			mimeType: "audio/webm",
			audioBitsPerSecond: 64_000,
		});

		recorder.current.ondataavailable = (event) => {
			if (event.data.size > 0) {
				handleUploadAudio(event.data);
			}
		};

		recorder.current.onstart = () => {
			console.log("Recording started");
		};

		recorder.current.onstop = () => {
			console.log("Recording paused/stopped");
			// setIsRecording(false);
		};

		recorder.current.start();
		console.log("Recorder started:", recorder.current);
	};

	const handleStopRecording = () => {
		if (recorder.current && recorder.current.state !== "inactive") {
			recorder.current.stop();
			setIsRecording(false);
		}
	};

	return (
		<div className="flex h-screen flex-col items-center justify-center gap-3">
			{isRecording ? (
				<Button onClick={handleStopRecording} className="cursor-pointer">
					Pausar gravação
				</Button>
			) : (
				<Button onClick={handleStartRecording} className="cursor-pointer">
					Gravar áudio
				</Button>
			)}
			{isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
		</div>
	);
}
