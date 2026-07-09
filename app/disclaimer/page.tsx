import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Better Health For All content is for general information only and is not a substitute for professional medical advice.",
};

export default function DisclaimerPage() {
  return (
    <Container className="max-w-content py-14 sm:py-20">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Medical Disclaimer
      </h1>
      <p className="mt-2 font-body text-sm text-ink-soft">Last updated: July 2026</p>

      <div className="prose prose-lg mt-8 max-w-none font-body">
        <p>
          The information on Better Health For All, including text,
          graphics, and downloadable meal plans or checklists, is for
          general informational and educational purposes only. It is not
          intended to be, and should not be taken as, medical advice.
        </p>

        <h2>Not a substitute for professional care</h2>
        <p>
          Nothing on this site should replace the advice of a physician,
          registered dietitian, or other qualified health provider. Always
          seek the advice of a professional before starting a new diet,
          exercise program, or supplement, especially if you are pregnant,
          nursing, managing a chronic condition, or taking medication.
        </p>

        <h2>No guarantees</h2>
        <p>
          Results from any tip, routine, or plan described on this site will
          vary from person to person. We do not guarantee a specific
          outcome, timeline, or amount of weight lost or gained.
        </p>

        <h2>In an emergency</h2>
        <p>
          If you believe you are experiencing a medical emergency, call your
          local emergency number or go to the nearest emergency room
          immediately. Do not rely on this site for emergency guidance.
        </p>

        <h2>Use at your own risk</h2>
        <p>
          By using this site, you agree that Better Health For All is not
          liable for any decision you make based on its content. When in
          doubt, check with a doctor.
        </p>
      </div>
    </Container>
  );
}
