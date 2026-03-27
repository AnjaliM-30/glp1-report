import React, { useState } from "react";
import config from "./config";
import LandingPage from "./components/LandingPage";
import StudyPage from "./components/StudyPage";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleSubmit = async (form: {
    firstName: string;
    email: string;
    phone: string;
    country: string;
  }) => {
    setLoading(true);
    setError("");
    try {
      await fetch(config.GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setUnlocked(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return unlocked
    ? <StudyPage />
    : <LandingPage onSubmit={handleSubmit} loading={loading} error={error} />;
}
