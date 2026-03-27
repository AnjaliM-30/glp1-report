import React from "react";

const section = (title: string, content: React.ReactNode) => (
  <section style={{ marginBottom: 48 }}>
    <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1e1b4b", marginBottom: 16, borderLeft: "4px solid #7C3AED", paddingLeft: 14 }}>
      {title}
    </h2>
    {content}
  </section>
);

const p = (text: string) => (
  <p style={{ fontSize: 15, lineHeight: 1.85, color: "#374151", marginBottom: 14 }}>{text}</p>
);

const stat = (value: string, label: string) => (
  <div style={{ background: "#F5F3FF", borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
    <div style={{ fontSize: 32, fontWeight: 800, color: "#7C3AED" }}>{value}</div>
    <div style={{ fontSize: 12, color: "#6B7280", fontFamily: "sans-serif", marginTop: 4 }}>{label}</div>
  </div>
);

export default function StudyPage() {
  return (
    <div style={{ background: "#f9f9f9", minHeight: "100vh", padding: "0 0 80px" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1e1b4b,#4c1d95)", padding: "56px 24px 48px", textAlign: "center", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 20, padding: "4px 16px", fontSize: 10, fontFamily: "sans-serif", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Full Research Report · 2025</div>
        <h1 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, lineHeight: 1.2, maxWidth: 700, margin: "0 auto 16px" }}>
          Jabs, Doubts and Dinner Plates:<br />
          <span style={{ color: "#A78BFA" }}>The Unfiltered Truth About GLP-1</span>
        </h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "0 auto" }}>
          An independent study of 500 real GLP-1 users across three journey phases.
        </p>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 0" }}>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 16, marginBottom: 56 }}>
          {stat("500", "Participants")}
          {stat("3", "Journey phases")}
          {stat("30+", "Topics covered")}
          {stat("6 mo", "Avg. study period")}
        </div>

        {section("About This Study", <>
          {p("This report is based on in-depth interviews and surveys with 500 people who used GLP-1 receptor agonists (such as semaglutide and tirzepatide) for weight loss or diabetes management.")}
          {p("We captured three distinct phases of their journey: before starting, while actively using the medication, and after stopping. The goal was to surface the real, unfiltered experience — beyond clinical trial data and marketing language.")}
        </>)}

        {section("Key Findings", <>
          {p("The majority of participants reported significant appetite suppression within the first two weeks. However, side effects — particularly nausea — were nearly universal in the early phase.")}
          {p("Social eating and dining out emerged as the most commonly cited lifestyle challenge. 73% of participants said GLP-1s fundamentally changed their relationship with food and social occasions.")}
          {p("Among those who stopped, cost and access were the leading reasons — not lack of effectiveness. Nearly 60% said they would restart if cost were not a barrier.")}
        </>)}

        {section("Phase 1: Before Starting", <>
          {p("Most participants spent 3–12 months researching before starting. Key anxieties included long-term safety, dependency, and whether results would last without the medication.")}
          {p("The decision to start was rarely made alone — family, friends, and online communities played a significant role. Many described a turning point: a health event, a photo, or a candid conversation with a doctor.")}
        </>)}

        {section("Phase 2: On the Medication", <>
          {p("The first injection was described as 'anticlimactic' by most — the physical act was easier than expected. The psychological shift, however, was profound.")}
          {p("'Food noise' — the constant mental preoccupation with food — was the single most common benefit reported. Participants described the silence as life-changing.")}
          {p("Muscle loss, hair thinning, and fatigue were the most reported side effects beyond nausea. Many were not warned about these by their prescribers.")}
        </>)}

        {section("Phase 3: After Stopping", <>
          {p("Weight regain was the most common experience after stopping, though the pace and degree varied widely. Those who had made concurrent lifestyle changes fared significantly better.")}
          {p("Emotional responses ranged from relief to grief. Several participants described a sense of loss — both of the physical results and of the mental clarity around eating.")}
          {p("A clear majority expressed interest in returning to GLP-1 therapy if insurance coverage or pricing improved.")}
        </>)}

        {section("What Users Wish They Had Known", <>
          <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#374151", fontSize: 15 }}>
            {[
              "That nausea peaks around weeks 2–4 then typically subsides",
              "To prioritize protein intake to preserve muscle mass",
              "That food noise reduction is a feature, not a side effect",
              "That stopping suddenly can trigger rapid weight regain",
              "That the psychological adjustment can be as significant as the physical one",
              "To build habits alongside medication, not after stopping",
            ].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </>)}

        {section("Methodology", <>
          {p("Participants were recruited via online communities, healthcare provider referrals, and social media between January and October 2025. The study included qualitative interviews (n=120) and quantitative surveys (n=500).")}
          {p("Data was anonymised and aggregated. No personally identifiable information was retained. This is an independent study with no pharmaceutical funding or affiliation.")}
        </>)}

        <div style={{ background: "linear-gradient(135deg,#1e1b4b,#4c1d95)", borderRadius: 16, padding: "36px 32px", color: "#fff", textAlign: "center", marginTop: 24 }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>Share This Report</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", marginBottom: 0 }}>If you found this useful, share it with someone considering GLP-1 therapy. Knowledge changes decisions.</p>
        </div>

      </div>
    </div>
  );
}
