import React, { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("IDLE");

  const submit = async (event) => {
    event.preventDefault();
    if (status === "SENDING") return;
    setStatus("SENDING");
    try {
      const response = await fetch("https://formspree.io/f/xovqarqp", {
        method: "POST",
        body: new FormData(formRef.current),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Message could not be sent");
      formRef.current.reset();
      setStatus("SUCCESS");
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <form className="contact-form" ref={formRef} onSubmit={submit}>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Alex Morgan" required />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@example.com"
            required
          />
        </label>
      </div>
      <label>
        <span>What are you building?</span>
        <textarea
          name="message"
          rows="5"
          placeholder="A short description of your idea, role, or project…"
          required
        />
      </label>
      <div className="form-submit">
        <p role="status">
          {status === "SUCCESS"
            ? "Message received. I’ll get back to you soon."
            : status === "ERROR"
            ? "Something went wrong. You can email me directly."
            : "Usually replies within 1–2 days."}
        </p>
        <button type="submit" disabled={status === "SENDING"}>
          {status === "SENDING" ? "Sending…" : "Send message ↗"}
        </button>
      </div>
    </form>
  );
}
