import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Avatar from "@mui/joy/Avatar";
import pinkLlama from "../../../assets/icon_lamini.png";
import userLogo from "../../../assets/icon_user.png";

export interface ChatHistoryItem {
    entity: string;
    message: string;
}

interface ChatHistoryProps {
    chatHistory: Array<ChatHistoryItem>;
}
const styles = {
    whiteSpace: 'pre', // Preserve line breaks and whitespace
  };
export const ChatHistory = (props: ChatHistoryProps) => {
    return (
        <ScrollArea.Root className="w-full h-[480px] rounded-[16px] overflow-hidden shadow-blackA7 bg-[#2b2b2b] text-[#fff] font-sans text-[14px]">
            <ScrollArea.Viewport className="w-full h-full rounded">
                <div className="p-6 flex flex-col-reverse">
                    {props.chatHistory.map((chat, index) => (
                        <div
                            className="flex w-full mb-4 first:mb-0 font-sans"
                            key={index}
                        >
                            {chat.entity === "system" ? (
                                chat.message === "pending" ? (
                                    <div className="flex w-full">
                                        <div className="mr-2 ">
                                            <Avatar
                                                size="sm"
                                                src={pinkLlama}
                                                sx={{
                                                    width: "24px",
                                                    height: "24px",
                                                }}
                                            />
                                        </div>
                                        <div className="my-auto text-[4px] text-[#FF6C71] align-middle">
                                            <div className="loading"/>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-auto text-[#9E9E9E] text-[12px] whitespace-pre-wrap">
                                        {chat.message}
                                    </div>
                                )
                            ) : (
                                <div className="flex w-full">
                                    <div className="mr-2 ">
                                        {chat.entity === "user" ? (
                                            <Avatar
                                                size="sm"
                                                src={userLogo}
                                                sx={{
                                                    width: "24px",
                                                    height: "24px",
                                                }}
                                            />
                                        ) : (
                                            <Avatar
                                                size="sm"
                                                src={pinkLlama}
                                                sx={{
                                                    width: "24px",
                                                    height: "24px",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="whitespace-pre-wrap">
                                        {chat.message}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
            >
                <ScrollArea.Thumb className="flex-1 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="horizontal"
            >
                <ScrollArea.Thumb className="flex-1 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA8" />
        </ScrollArea.Root>
    );
};
