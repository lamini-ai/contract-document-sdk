import React from "react";
export function fetchInfer(
  token: string,
  question: string,
  selectedModel: string,
  setModelResponse: any,
  selectedInferenceMode: string
) {
  console.log("Selected Model:", selectedModel);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");
  const api = selectedInferenceMode;
  const body = {
    in_value: {
      question: question,
    },
    model_name: selectedModel,
  };
  fetch(`${api}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: myHeaders,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((json) => {
      const result = json["answer"];
      setModelResponse(result);
    })
    .catch((error) => {
      if (error.status === 503) {
        setModelResponse(
          "Model is still loading... Please try again in a few minutes."
        );
      } else {
        setModelResponse(
          "Oops, something went wrong. I couldn’t provide you with a response. Please try again."
        );
      }
    });
}
