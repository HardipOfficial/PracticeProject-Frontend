import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const PromptNode = ({ id }) => {
    const [prompt, setPrompt] = useState("");

    return (
        <BaseNode
            title="📝 Prompt"
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` },
                { type: "source", position: Position.Right, id: `${id}-output` },
            ]}
        >
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
            />
        </BaseNode>
    );
};