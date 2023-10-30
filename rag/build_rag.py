from lamini import RetrievalAugmentedRunner

import os


def main():
    """Create a new question answering model tuned on provided documents."""
    current_directory = os.path.dirname(os.path.abspath(__file__))
    parent_directory = os.path.dirname(current_directory)

    # Create a new runner
    runner = RetrievalAugmentedRunner(
        model_name="meta-llama/Llama-2-7b-chat-hf",
        config={"local": {"key": "test_token", "url": "http://localhost:8001"}},
    )

    # Load the documents
    input_dir = parent_directory + "/data"
    print("Loading data from", input_dir)
    runner.load_data(parent_directory + "/data")

    # Train the model
    runner.train()

    # Save the model
    runner.index.save_index(parent_directory + "/models")


if __name__ == "__main__":
    main()
