import { useRef, useState } from "react";
function SendMessage() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  let timeoutID = useRef(null);

  function handleSend() {
    setIsSending(true);
    console.log(`send : ${timeoutID.current}`)
    timeoutID.current = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
    console.log(`undo : ${timeoutID.current}`)
  }
  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}

export default SendMessage;
