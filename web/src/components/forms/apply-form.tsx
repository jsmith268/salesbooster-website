"use client";

import * as React from "react";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type Tier = "pro" | "enterprise";

export function ApplyForm({ tier }: { tier: Tier }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [v, setV] = React.useState({
    name: "",
    email: "",
    company: "",
    role: "",
    notes: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-12 text-center max-w-lg mx-auto">
        <div
          className="mx-auto grid h-16 w-16 place-items-center rounded-full"
          style={{ background: "color-mix(in oklch, var(--accent) 22%, transparent)" }}
        >
          <Check className="h-7 w-7" style={{ color: "var(--accent-deep)" }} strokeWidth={2.5} />
        </div>
        <h3 className="mt-6 font-display text-3xl sm:text-4xl tracking-[-0.025em] text-balance">
          Got it.
        </h3>
        <p className="mt-3 text-[var(--ink-muted)] text-pretty">
          Someone on the team will reach out within five business days. If we're not the right fit yet, we'll say so. No silence.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name">
          <Input required value={v.name} onChange={(e) => setV((s) => ({ ...s, name: e.target.value }))} />
        </Field>
        <Field label="Work email">
          <Input required type="email" value={v.email} onChange={(e) => setV((s) => ({ ...s, email: e.target.value }))} />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Company">
          <Input required value={v.company} onChange={(e) => setV((s) => ({ ...s, company: e.target.value }))} />
        </Field>
        <Field label="Your role">
          <Input required value={v.role} onChange={(e) => setV((s) => ({ ...s, role: e.target.value }))} />
        </Field>
      </div>
      <Field label="Anything we should know?" hint="Optional. What's broken, how urgent it is, who else needs to weigh in.">
        <Textarea
          rows={5}
          value={v.notes}
          onChange={(e) => setV((s) => ({ ...s, notes: e.target.value }))}
        />
      </Field>

      <div className="pt-2">
        <Button type="submit" size="lg" variant="primary" className="w-full sm:w-auto">
          {tier === "enterprise" ? "Request founding-customer review" : "Submit my application"}
        </Button>
        <p className="mt-3 text-xs text-[var(--ink-subtle)]">
          Reviewed weekly. We come back with an answer either way.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-2 block">{label}</Label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-[var(--ink-subtle)]">{hint}</p>}
    </div>
  );
}
