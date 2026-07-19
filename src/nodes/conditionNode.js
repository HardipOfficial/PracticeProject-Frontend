import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id }) => {
    return (
        <BaseNode
            title="🔀 Condition"
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` },
                { type: "source", position: Position.Right, id: `${id}-true` },
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-false`,
                    style: { top: "70%" },
                },
            ]}
        >
            <div>If / Else Logic</div>
        </BaseNode>
    );
};