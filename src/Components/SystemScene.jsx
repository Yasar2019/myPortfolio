import React, { useEffect, useRef, useState } from "react";

// CSS geometry keeps the scene crisp without a WebGL download or GPU context.
export default function SystemScene() {
  const scene = useRef(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const node = scene.current;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(node);
    const visibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  const move = (event) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const box = event.currentTarget.getBoundingClientRect();
    scene.current.style.setProperty(
      "--look-x",
      `${(event.clientY - box.top - box.height / 2) / -25}deg`
    );
    scene.current.style.setProperty(
      "--look-y",
      `${(event.clientX - box.left - box.width / 2) / 25}deg`
    );
  };
  return (
    <div
      className={`scene ${paused || !visible ? "is-paused" : ""}`}
      ref={scene}
      onPointerMove={move}
      onPointerLeave={() => {
        scene.current.style.setProperty("--look-x", "0deg");
        scene.current.style.setProperty("--look-y", "0deg");
      }}
    >
      <div className="scene-coordinate" aria-hidden="true">
        SYSTEM / 001 <span>AI · CODE · CLOUD</span>
      </div>
      <div className="scene-perspective" aria-hidden="true">
        <div className="scene-look">
          <div className="system-core">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="cube">
              {["front", "back", "right", "left", "top", "bottom"].map((face) => (
                <div className={`cube-face ${face}`} key={face}>
                  <span>&lt;/&gt;</span>
                </div>
              ))}
            </div>
            <div className="satellite satellite-one" />
            <div className="satellite satellite-two" />
          </div>
        </div>
      </div>
      <div className="scene-label label-ai" aria-hidden="true">
        <i /> Intelligence<span>Neural networks</span>
      </div>
      <div className="scene-label label-cloud" aria-hidden="true">
        <i /> Infrastructure<span>Connected systems</span>
      </div>
      <div className="scene-bottom">
        <span>Ideas, connected.</span>
        <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>
          {paused ? "Play motion" : "Pause motion"}
        </button>
      </div>
    </div>
  );
}
