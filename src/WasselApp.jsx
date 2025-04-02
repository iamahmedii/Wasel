import { useState } from "react";
import backgroundImage from "./bahrain-bg.jpg"; // Add your Bahrain-themed background image to 'public' or 'src'

export default function WasselApp() {
  const [blockNumber, setBlockNumber] = useState("");
  const [repInfo, setRepInfo] = useState(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mockRep = {
    name: "Fatima Al Hasan",
    district: "Northern Governorate - District 5",
    phone: "+973 1234 5678",
    email: "fatima@parliament.bh",
  };

  const handleLookup = () => {
    if (blockNumber.trim()) {
      setRepInfo(mockRep);
    }
  };

  const handleSubmit = () => {
    if (message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem",
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(245, 245, 245, 0.85)",
      }}
    >
      <div
        style={{
          maxWidth: "750px",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
          border: "3px solid #d32f2f",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(to right, #d32f2f, #fbc02d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🇧🇭 Wassel – تواصل مع ممثلك النيابي
        </h1>

        <div style={{ marginTop: "2rem" }}>
          <label style={{ fontWeight: "600", color: "#444" }}>
            أدخل رقم البلوك الخاص بك
          </label>
          <input
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "6px",
              border: "2px solid #ffc107",
              borderRadius: "10px",
              backgroundColor: "#fff8e1",
              fontSize: "16px",
            }}
            placeholder="مثال: 521"
            value={blockNumber}
            onChange={(e) => setBlockNumber(e.target.value)}
          />
          <button
            onClick={handleLookup}
            style={{
              marginTop: "12px",
              padding: "12px 24px",
              backgroundColor: "#0288d1",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            اعثر على ممثلي
          </button>
        </div>

        {repInfo && (
          <div
            style={{
              marginTop: "2rem",
              background: "#e3f2fd",
              padding: "1.5rem",
              borderRadius: "14px",
              border: "2px solid #0288d1",
              color: "#01579b",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
              🧕 ممثلك النيابي:
            </h2>
            <p>
              <strong>الاسم:</strong> {repInfo.name}
            </p>
            <p>
              <strong>المنطقة:</strong> {repInfo.district}
            </p>
            <p>
              <strong>البريد الإلكتروني:</strong> {repInfo.email}
            </p>
            <p>
              <strong>الهاتف:</strong> {repInfo.phone}
            </p>
          </div>
        )}

        {repInfo && !submitted && (
          <div style={{ marginTop: "2rem" }}>
            <label style={{ fontWeight: "600", color: "#444" }}>
              اكتب مشكلتك أو اقتراحك
            </label>
            <textarea
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                border: "2px solid #4caf50",
                borderRadius: "10px",
                backgroundColor: "#e8f5e9",
                fontSize: "16px",
              }}
              placeholder="اكتب هنا..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              style={{
                marginTop: "12px",
                padding: "12px 24px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              إرسال للممثل النيابي
            </button>
          </div>
        )}

        {submitted && (
          <div
            style={{
              marginTop: "2rem",
              color: "#2e7d32",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
              backgroundColor: "#c8e6c9",
              padding: "1rem",
              borderRadius: "12px",
            }}
          >
            ✅ تم إرسال رسالتك! سيتواصل معك الممثل قريبًا.
          </div>
        )}
      </div>
    </div>
  );
}
