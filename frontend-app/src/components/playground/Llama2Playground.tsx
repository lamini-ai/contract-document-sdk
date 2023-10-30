import React from "react";
import { Centered } from "../system/layouts/Centered";
import Playground from "./Playground";

interface Llama2PlaygroundProps {
  token: string;
}

export const Llama2Playground = (props: Llama2PlaygroundProps) => {
  return (
    <Centered>
      <div className="w-full px-16">
        <div className="my-12">
          <h1 className="text-3xl mb-4">Contract Playground</h1>
        </div>
        <Playground token={props.token} default="RAG model" />
      </div>
    </Centered>
  );
};
