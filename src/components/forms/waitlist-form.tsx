"use client";

import * as React from "react";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type FieldKey = "email" | "company" | "role" | "fsm" | "locations";

const FSM_OPTIONS = [
  "Housecall Pro",
  "ServiceTitan",
  "Jobber",
  "Service Fusion",
  "FieldEdge",
  "Other",
  "None / paper",
];

const ROLE_OPTIONS = [
  "Owner / GM",
  "Operations lead",
  "Sales / dispatch",
  "Marketing",
  "Other",
];

export function WaitlistForm({ defaultPlan }: { defaultPlan?: string }) {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [v, setV] = React.useState({
    email: "",
    company: "",
    role: "",
    fsm: "",
    locations: "",
    plan: defaultPlan ?? "",
  });

  const fields: { key: FieldKey; label: string; hint: string; type: "input" | "choice"; options?: string[]; placeholder?: string }[] = [
    { key: "email", label: "Where should we reach you?", hint: "Used once: to let you know when access opens.", type: "input", placeholder: "you@operator.com" },
    { key: "company", label: "Company name.", hint: "What should we call you?", type: "input", placeholder: "Sunrise HVAC" },
    { key: "role", label: "Your role.", hint: "Helps us shape the rollout for you.", type: "choice", options: ROLE_OPTIONS },
    { key: "fsm", label: "What FSM are you on?", hint: "Housecall Pro, ServiceTitan, Jobber, and Service Fusion are first-class today. Others can be on-boarded by request.", type: "choice", options: FSM_OPTIONS },
    { key: "locations", label: "How many locations?", hint: "A rough number is fine.", type: "input", placeholder: "3" },
  ];

  const total = fields.length;
  const current = fields[step];

  function next(e?: React.FormEvent) {
    e?.preventDefault();
    if (step < total - 1) setStep(step + 1);
    else setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-12 text-center max-w-lg mx-auto">
        <div
          className="mx-auto grid h-16 w-16 place-items-center rounded-full"
          style={{ background: "color-mix(in oklch, var(--success) 16%, transparent)" }}
        >
          <Check className="h-7 w-7" style={{ color: "var(--success)" }} strokeWidth={2.5} />
        </div>
        <h3 className="mt-6 font-display text-3xl sm:text-4xl tracking-[-0.025em] text-balance">
          You're in.
        </h3>
        <p className="mt-3 text-[var(--ink-muted)] text-pretty">
          We&rsquo;ll reach out when access opens for {v.company || "your company"}. Your 50%-off launch rate is locked from this moment — for the life of your account.
        </p>
        <p className="mt-2 text-sm text-[var(--ink-subtle)]">
          Want to skip the line? <a href="/apply" className="font-semibold text-[var(--brand)] hover:text-[var(--brand-bright)] underline-offset-2 hover:underline">Apply for early access →</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={next} className="max-w-lg mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-9">
        {fields.map((_, i) => (
          <span
            key={i}
            className="h-1 flex-1 rounded-full transition-colors duration-300"
            style={{
              background:
                i <= step ? "var(--ink)" : "var(--border-strong)",
            }}
          />
        ))}
      </div>

      <div className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--ink-subtle)]">
        Step {step + 1} of {total}
      </div>

      <Label
        htmlFor={current.key}
        id={`${current.key}-label`}
        className="block font-display text-2xl sm:text-4xl tracking-[-0.025em] text-balance leading-[1.05]"
      >
        {current.label}
      </Label>
      <p className="mt-2 text-[var(--ink-muted)]">{current.hint}</p>

      <div className="mt-7">
        {current.type === "input" ? (
          <Input
            id={current.key}
            autoFocus
            required
            type={current.key === "email" ? "email" : "text"}
            placeholder={current.placeholder}
            value={v[current.key]}
            onChange={(e) => setV((s) => ({ ...s, [current.key]: e.target.value }))}
          />
        ) : (
          <div
            role="radiogroup"
            aria-labelledby={`${current.key}-label`}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
          >
            {current.options!.map((opt) => {
              const selected = v[current.key] === opt;
              return (
                <button
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  key={opt}
                  onClick={() => setV((s) => ({ ...s, [current.key]: opt }))}
                  className={`text-left h-12 px-4 rounded-[var(--radius)] border transition-colors text-sm font-medium ${
                    selected
                      ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--ink-on-dark)]"
                      : "border-[var(--border-strong)] hover:border-[var(--ink)]"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-9 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        <Button type="submit" size="lg" variant="primary" disabled={!v[current.key]}>
          {step < total - 1 ? "Continue" : "Reserve my spot"}
        </Button>
      </div>
    </form>
  );
}
