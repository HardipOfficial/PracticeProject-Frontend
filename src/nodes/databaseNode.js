import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id }) => {
    const [table, setTable] = useState("");

    return (
        <BaseNode
            title="🗄 Database"
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` },
                { type: "source", position: Position.Right, id: `${id}-output` },
            ]}
        >
            <label>
                Table
                <input
                    value={table}
                    onChange={(e) => setTable(e.target.value)}
                />
            </label>
        </BaseNode>
    );
};