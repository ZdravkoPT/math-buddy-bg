import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  getLovableAiGatewayResponseHeaders,
} from "@/lib/ai/run-id.server";

const Input = z.object({
  lang: z.enum(["bg", "en"]),
  hard: z.string().max(1500),
  weak: z.array(z.string().max(100)).max(20),
  hoursPerWeek: z.number().min(1).max(60),
  weeks: z.number().min(1).max(52),
});

export const Route = createFileRoute("/api/matura-plan")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const parsed = Input.safeParse(await request.json().catch(() => null));
        if (!parsed.success) return new Response("Invalid input", { status: 400 });
        const d = parsed.data;
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return new Response("AI is not configured", { status: 500 });

        const system =
          d.lang === "bg"
            ? "Ти си опитен учител по математика в България и подготвяш ученици за ДЗИ (матура) по математика. Пиши на български, кратко и ясно, без LaTeX — използвай обикновени символи (², √, π). Отговорът е план в Markdown: кратко обобщение, после седмица по седмица с конкретни теми, формули за запомняне, типове задачи и колко минути на ден. Накрая 5 съвета за изпита. До 600 думи."
            : "You are an experienced Bulgarian math teacher preparing students for the Bulgarian matura (DZI) in math. Write in English, short and clear, no LaTeX — use plain symbols (², √, π). Answer as a Markdown plan: short summary, then week by week with concrete topics, formulas to memorise, task types and minutes per day. End with 5 exam tips. Max 600 words.";
        const user = `Трудни теми (думите на ученика): ${d.hard || "-"}\nСлаби теми от пробната матура: ${d.weak.join(", ") || "-"}\nВреме: ${d.hoursPerWeek} часа седмично, ${d.weeks} седмици до изпита.`;

        const gateway = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));
        try {
          const res = await gateway.fetch("https://ai.gateway.lovable.dev/v1/responses", {
            method: "POST",
            signal: request.signal,
            headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "fetch" },
            body: JSON.stringify({
              model: "openai/gpt-6-astra",
              instructions: system,
              input: user,
              stream: true,
              store: false,
              reasoning: { effort: "low", summary: "auto" },
              include: ["reasoning.encrypted_content"],
            }),
          });
          const headers = getLovableAiGatewayResponseHeaders(res.headers);
          headers.set("Content-Type", res.headers.get("Content-Type") ?? "text/event-stream");
          headers.set("Cache-Control", "no-cache, no-transform");
          return new Response(res.body, { status: res.status, headers });
        } catch (e) {
          if (request.signal.aborted) return new Response(null, { status: 499 });
          throw e;
        }
      },
    },
  },
});
