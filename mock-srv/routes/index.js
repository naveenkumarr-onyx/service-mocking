"use strict";

export default async function (fastify) {
  fastify.get("/", async function (request, reply) {
    return { data: "DATA HERE" }; // Replace with actual data or logic
  });
}
