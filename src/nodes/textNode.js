// textNode.js

import { useState, useRef, useEffect } from "react";
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textRef = useRef(null);
  const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

  const variables = [...currText.matchAll(variableRegex)].map(
    (match) => match[1]
  );

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = "auto";
      textRef.current.style.height =
        textRef.current.scrollHeight + "px";
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      title="Text"
      handles={[
        ...variables.map((variable, index) => ({
          type: "target",
          position: Position.Left,
          id: `${id}-${variable}`,
          style: {
            top: `${((index + 1) * 100) / (variables.length + 1)}%`,
          },
        })),
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <label>
        Text:
        <textarea
          ref={textRef}
          value={currText}
          onChange={handleTextChange}
          rows={2}
          style={{
            width: "100%",
            resize: "none",
            overflow: "hidden",
          }}
        />
      </label>
    </BaseNode>
  );
}
