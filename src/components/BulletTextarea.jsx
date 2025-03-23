import { useRef, useEffect } from "react";

export const BulletTextarea = ({ value = [], onChange}) => {
  const divRef = useRef(null);

  // Initialize content
  useEffect(() => {
    if (divRef.current) {
      divRef.current.innerHTML = value.length
        ? value.map(line => `<div>${line}</div>`).join("")
        : "<div><br /></div>"; // default empty bullet
    }
  }, [value]);

  // Extract valid lines (ignores pure whitespace)
  const extractLines = () => {
    const children = Array.from(divRef.current.children);
    return children
      .map(child => child.innerText.trim())
      .filter(line => line !== ""); // ignore empty lines
  };

  const handleInput = () => {
    const lines = extractLines();
    onChange(lines.length ? lines : [""]);
  };

  const handleKeyDown = (e) => {
    const selection = window.getSelection();
    const currentLine = selection.anchorNode?.textContent?.trim();

    if (e.key === "Enter") {
      if (!currentLine || currentLine === "") {
        e.preventDefault(); // prevent new bullet for empty lines
      }
    }
  };

  return (
    <div
      ref={divRef}
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base cursor-text [&>div]:list-item pl-7 min-h-[3rem]"
      spellCheck={false}
    />
  );
};
