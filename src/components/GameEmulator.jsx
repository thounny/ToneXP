'use client';
import React, { useEffect } from "react";

export default function GameEmulator({ game }) {
  useEffect(() => {
    window.EJS_player = "#game";
    window.EJS_gameUrl = `https://tonexp.s3.us-east-2.amazonaws.com/rom/${game?.game_url}`;
    window.EJS_core = `${game?.categories[0]?.core}`;
    console.log("Core:", game?.categories[0]?.core);

    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";

    const script = document.createElement("script");
    script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script
      document.body.removeChild(script);
    };
  }, [game]);

  return (
    <div className="bg-main flex justify-center rounded-xl">
      <div style={{ width: "640px", height: "480px", maxWidth: "100%" }}>
        <div id="game"></div>
      </div>
    </div>
  );
}
