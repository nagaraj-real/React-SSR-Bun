import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { DashBoard } from "./Dashboard";

Bun.serve({
  port: 8080,
  async fetch(req) {
    const stream = await renderToReadableStream(React.createElement(DashBoard));
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});
