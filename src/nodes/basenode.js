import { Handle } from "reactflow";
import "./BaseNode.css";

export const BaseNode = ({
    title,
    children,
    handles = [],
    width = 220,
    minHeight = 120,
}) => {
    return (
        <div
            className="base-node"
            style={{
                width,
                minHeight,
            }}
        >
            {handles.map((handle) => (
                <Handle
                    key={handle.id}
                    type={handle.type}
                    position={handle.position}
                    id={handle.id}
                    style={handle.style}
                />
            ))}

            <div className="base-node-header">
                {title}
            </div>

            <div className="base-node-content">
                {children}
            </div>
        </div>
    );
};