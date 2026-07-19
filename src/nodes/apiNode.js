import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id }) => {
    const [url, setUrl] = useState("");

    return (
        <BaseNode
            title="🌐 API"
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` },
                { type: "source", position: Position.Right, id: `${id}-output` },
            ]}
        >
            <label>
                URL
                <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://api.example.com"
                />
            </label>
        </BaseNode>
    );
};