import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const ImageNode = ({ id }) => {
    return (
        <BaseNode
            title="🖼 Image"
            handles={[
                { type: "target", position: Position.Left, id: `${id}-prompt` },
                { type: "source", position: Position.Right, id: `${id}-image` },
            ]}
        >
            <div>Generate Image</div>
        </BaseNode>
    );
};