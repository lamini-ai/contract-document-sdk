import React from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";

interface SendMessageProps {
    message: string;
    setMessage: (message: string) => void;
    onSendMessage: () => void;
}

export const SendMessage = (props: SendMessageProps) => {
    return (
        <Sheet className="w-full rounded-[16px] bg-[#2b2b2b]">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}
                className="flex w-full bg-[#2b2b2b] rounded-[12px]"
                >
                <Input
                    value={props.message}
                    size="md"
                    variant="solid"
                    placeholder="Type your question here…"
                    className="w-full rounded-[16px] bg-[#2b2b2b]"
                    focusIndicatorStyle={{
                        border: 'none'
                      }}
                    sx={{
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 0,
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 0,
                        fontFamily: "DM Sans",
                        fontSize: "14px",
                        backgroundColor: '#2b2b2b',
                        borderRadius: 12,
                    }}
                    onChange={(e) => props.setMessage(e.target.value)}
                />
                <Button
                    sx={{
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 4,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 4,
                        color: "#FF6C71",
                        fontFamily: "DM Sans",
                        fontSize: "14px",
                    }}
                    onClick={() => {
                        props.onSendMessage();
                        props.setMessage("");
                    }}
                    variant="plain"
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </Sheet>
    );
};
