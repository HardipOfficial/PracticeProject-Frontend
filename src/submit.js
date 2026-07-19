import { useStore } from "./store";

export const SubmitButton = () => {

    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async () => {

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/pipelines/parse",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nodes,
                        edges,
                    }),
                }
            );

            const data = await response.json();

            alert(
                `Pipeline Analysis

Nodes : ${data.num_nodes}

Edges : ${data.num_edges}

Is DAG : ${data.is_dag ? "✅ Yes" : "❌ No"}`
            );

        } catch (error) {

            console.error(error);

            alert("Could not connect to backend.");

        }

    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
            }}
        >
            <button
                onClick={handleSubmit}
                style={{
                    padding: "10px 28px",
                    borderRadius: 8,
                    border: "none",
                    background: "#2563eb",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: 600,
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
};