import { useState } from "react";
// import './App.css'

export const App = () => {
  const [text, setText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const handleSubmit = () => {
    if (!text) {
      setFormattedText("");
      return;
    }

    // text(json形式)をフォーマットする
    try {
      const obj = JSON.parse(text);
      setFormattedText(JSON.stringify(obj, null, 4));
    }
    catch (e) {
      setFormattedText("JSON形式ではありません");
      console.log(text);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          value="変換"
          onClick={handleSubmit}
        />
        <textarea
          value={formattedText}
          readOnly
        />
      </form>
    </div>
  );
};
