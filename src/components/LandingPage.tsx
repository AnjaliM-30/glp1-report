import React, { useState } from "react";

const COUNTRIES = [
  "United States","United Kingdom","Canada","Australia","Germany",
  "France","India","Netherlands","Sweden","Spain","Italy",
  "New Zealand","Ireland","South Africa","Singapore","UAE","Other"
];

interface Props {
  onSubmit: (form: { firstName: string; email: string; phone: string; country: string }) => void;
  loading: boolean;
  error: string;
}

export default function LandingPage({ onSubmit, loading, error }: Props) {
  const [form, setForm] = useState({ firstName:"", email:"", phone:"", country:"" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));
  const valid = form.firstName && form.email && form.phone && form.country;

  return (
    <div style={{ minHeight:"100vh", background:"#f9f9f9", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 16px" }}>
      <div style={{ background:"linear-gradient(135deg,#1e1b4b,#4c1d95)", borderRadius:16, padding:"48px 36px 40px", maxWidth:600, width:"100%", color:"#fff", marginBottom:24 }}>
        <div style={{ display:"inline-block", background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.25)", borderRadius:20, padding:"4px 14px", fontSize:10, fontFamily:"sans-serif", letterSpacing:2, textTransform:"uppercase", marginBottom:18 }}>Free Research Report · 2025</div>
        <h1 style={{ fontSize:"clamp(22px,4vw,32px)", fontWeight:800, lineHeight:1.25, margin:"0 0 14px" }}>
          Jabs, Doubts and Dinner Plates:<br/>
          <span style={{ color:"#A78BFA" }}>The Unfiltered Truth About GLP-1</span><br/>
          From 500 Real Users
        </h1>
        <p style={{ fontSize:14, lineHeight:1.8, color:"rgba(255,255,255,0.75)", margin:"0 0 28px", maxWidth:520 }}>
          We talked to 500 real people. Before they started, while they were on it, and after they quit. We are giving it away completely free.
        </p>
        <div style={{ display:"flex", gap:28, flexWrap:"wrap" }}>
          {[["500","Real users"],["3","Journey phases"],["30+","Topics"],["$0","Cost"]].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontSize:26, fontWeight:800, color:"#A78BFA" }}>{n}</div>
              <div style={{ fontSize:10, fontFamily:"sans-serif", letterSpacing:1.5, textTransform:"uppercase", color:"rgba(255,255,255,0.45)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background:"#fff", borderRadius:14, padding:"32px 28px", maxWidth:600, width:"100%", boxShadow:"0 2px 24px rgba(0,0,0,0.07)" }}>
        <p style={{ fontSize:10, fontFamily:"sans-serif", letterSpacing:2, textTransform:"uppercase", color:"#7C3AED", fontWeight:700, marginBottom:8 }}>Get Instant Access</p>
        <h2 style={{ fontSize:20, fontWeight:700, marginBottom:6, color:"#1e1b4b" }}>Unlock the Free Report</h2>
        <p style={{ fontSize:13, color:"#6B7280", marginBottom:24, lineHeight:1.7 }}>No payment. No spam. Just fill your details and read the full study instantly.</p>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <input placeholder="Your first name" value={form.firstName} onChange={set("firstName")} style={{ padding:"12px 14px", borderRadius:8, border:"1.5px solid #E5E7EB", fontSize:14, fontFamily:"sans-serif", outline:"none", color:"#111", background:"#FAFAFA" }} />
          <input placeholder="Your email address" type="email" value={form.email} onChange={set("email")} style={{ padding:"12px 14px", borderRadius:8, border:"1.5px solid #E5E7EB", fontSize:14, fontFamily:"sans-serif", outline:"none", color:"#111", background:"#FAFAFA" }} />
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <input placeholder="Phone number" type="tel" value={form.phone} onChange={set("phone")} style={{ padding:"12px 14px", borderRadius:8, border:"1.5px solid #E5E7EB", fontSize:14, fontFamily:"sans-serif", outline:"none", color:"#111", background:"#FAFAFA" }} />
            <select value={form.country} onChange={set("country")} style={{ padding:"12px 14px", borderRadius:8, border:"1.5px solid #E5E7EB", fontSize:14, fontFamily:"sans-serif", outline:"none", color: form.country ? "#111" : "#9CA3AF", background:"#FAFAFA" }}>
              <option value="">Country</option>
              {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          {error && <p style={{ fontSize:12, color:"#DC2626", margin:0 }}>{error}</p>}
          <button onClick={() => valid && onSubmit(form)} disabled={!valid || loading}
            style={{ background: valid ? "#7C3AED" : "#C4B5FD", color:"#fff", border:"none", borderRadius:8, padding:"15px", fontSize:15, fontWeight:700, cursor: valid ? "pointer" : "not-allowed", fontFamily:"sans-serif", marginTop:4 }}>
            {loading ? "Unlocking..." : "Read the Free Report Now"}
          </button>
        </div>
        <p style={{ fontSize:11, color:"#9CA3AF", marginTop:14, fontFamily:"sans-serif", textAlign:"center" }}>No spam. No credit card. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
