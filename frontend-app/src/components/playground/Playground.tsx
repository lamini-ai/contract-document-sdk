import React, { useState } from "react";
import { ChatHistory, ChatHistoryItem } from "../system/atoms/ChatHistory";
import { SendMessage } from "../system/atoms/SendMessage";
import { fetchInfer } from "../../utils/fetchInfer";

interface Playground {
  token: string;
  default: string;
}
interface ModelOption {
  value: string;
  label: string;
}

export default function Playground(props: Playground) {
  const [message, setMessage] = React.useState("");
  const options: ModelOption[] = [
    { value: "meta-llama/Llama-2-7b-chat-hf", label: "Llama2-7b-chat" },
    {
      value: "mistralai/Mistral-7B-Instruct-v0.1",
      label: "Mistral-7b-instruct",
    },
  ];
  const inferenceOptions: ModelOption[] = [
    { value: "base", label: "base" },
    {
      value: "rag",
      label: "rag",
    },
  ];
  const [chatHistory, setChatHistory] = React.useState<Array<ChatHistoryItem>>([
    { message: "What would you like to know?", entity: "model" },
  ]);
  const [selectedModel, setSelectedOption] = useState<string>(options[0].value);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModel = e.target.value;
    setSelectedOption(selectedModel);

    // Log the selected value to the console
    console.log("Selected Model:", selectedModel);
  };
  const [selectedInferenceMode, setSelectedModeOption] = useState<string>(
    inferenceOptions[0].value
  );
  const handleSelectModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModel = e.target.value;
    setSelectedModeOption(selectedModel);

    // Log the selected value to the console
    console.log("Selected Inference Mode:", selectedModel);
  };
  const sendMessage = () => {
    setChatHistory([
      { entity: "system", message: "pending" },
      { entity: "user", message },
      ...chatHistory,
    ]);
    const setNextModelResponse = (response: string) => {
      setChatHistory([
        { entity: "model", message: response },
        { entity: "user", message },
        ...chatHistory,
      ]);
    };
    fetchInfer(
      props.token,
      message,
      selectedModel,
      setNextModelResponse,
      selectedInferenceMode
    );
  };
  return (
    <div className={`md:w-full mb-6 ${props.default ? "" : "mx-auto"}`}>
      <div className="flex mb-6 text-black w-full">
        <div className="mr-2 w-full flex">
          <div>
            <p className="text-[16px] mb-2 text-white">Model Selected</p>
            <select
              className="mr-4 bg-[#2b2b2b] rounded border-0 text-white"
              value={selectedModel}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                -- Select a model --
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-[16px] mb-2 text-white">Mode</p>
            <select
              className="mr-4 bg-[#2b2b2b] rounded border-0 text-white"
              value={selectedInferenceMode}
              onChange={handleSelectModeChange}
            >
              <option value="" disabled>
                -- Select a mode --
              </option>
              {inferenceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <ChatHistory chatHistory={chatHistory}></ChatHistory>
      </div>
      <SendMessage
        message={message}
        onSendMessage={sendMessage}
        setMessage={setMessage}
      ></SendMessage>
    </div>
  );
}
