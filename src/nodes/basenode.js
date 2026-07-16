import { Handle, Position } from "reactflow";

export const BaseNode = ({
    title,
    children,
    handles = [],
    width = 220,
    minHeight = 120,
}) => {
    return (
        <div
            style={{
                width,
                minHeight,
                border: "1px solid #cbd5e1",
                borderRadius: 10,
                background: "#fff",
                padding: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                position: "relative",
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

            <h4
                style={{
                    margin: "0 0 10px",
                    fontSize: "16px",
                }}
            >
                {title}
            </h4>

            {children}
        </div>
    );
};