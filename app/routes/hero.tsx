import { useEffect, useRef, useState } from "react";

const Hero = () => {
    const slides = [
        "/images/Macbook-Air-staging.dennislawgh.com.png",
        "/images/Macbook-Air-staging.dennislawgh.com.png",
        "/images/Macbook-Air-staging.dennislawgh.com.png",
    ];
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (timerRef.current) window.clearInterval(timerRef.current);
        timerRef.current = window.setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length);
        }, 5000);
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [slides.length]);

    const goTo = (idx: number) => {
        setCurrent((idx + slides.length) % slides.length);
    };
    return (
        <section
            style={{
                background: "#ffffff",
                color: "#0b1220",
                padding: "48px 16px 0 16px",
                position: "relative",
                overflow: "hidden",
                minHeight: "100vh",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                }}
            >
                <img
                    src="/images/Group-333.svg"
                    alt=""
                    aria-hidden
                    style={{
                        position: "absolute",
                        right: "-10vw",
                        top: "-18vh",
                        width: "min(1200px, 95vw)",
                        height: "auto",
                        opacity: 0.9,
                        zIndex: 0,
                        userSelect: "none",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        left: -180,
                        bottom: -120,
                        width: 360,
                        height: 360,
                        background: "linear-gradient(145deg,#5b72f2,#0ea5e9)",
                        borderRadius: 360,
                        filter: "blur(18px)",
                        opacity: 0.35,
                    }}
                />
                <img
                    src="/images/Group-79.svg"
                    alt=""
                    aria-hidden
                    style={{
                        position: "absolute",
                        left: -120,
                        bottom: -60,
                        width: 360,
                        height: "auto",
                        opacity: 0.9,
                        zIndex: 0,
                        userSelect: "none",
                    }}
                />
            </div>

            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1.1fr 0.9fr",
                    gap: 48,
                    alignItems: "center",
                    padding: "0 16px",
                }}
            >
                <div style={{ padding: "24px 0 64px 0" }}>
                    <div style={{ marginBottom: 16 }}>
                        <span
                            style={{
                                display: "inline-block",
                                padding: "6px 12px",
                                borderRadius: 9999,
                                background: "#0b1220",
                                color: "#ffffff",
                                fontSize: 12,
                                letterSpacing: 0.4,
                                textTransform: "uppercase",
                            }}
                        >
                            Best Business
                        </span>
                        <span style={{ marginLeft: 8, color: "#6b7280", fontSize: 12 }}>Business</span>
                    </div>

                    <h1
                        style={{
                            fontSize: 48,
                            lineHeight: 1.15,
                            margin: 0,
                            fontWeight: 800,
                            letterSpacing: -0.5,
                        }}
                    >
                        We’re Equally Excited About Dennislaw v4
                    </h1>
                    <p
                        style={{
                            margin: "16px 0 0 0",
                            color: "#4b5563",
                            fontSize: 18,
                            maxWidth: 640,
                        }}
                    >
                        Our mission is to deliver faster legal search, deep case analysis, and a
                        refined workspace for professionals. Explore the new experience today.
                    </p>

                    <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
                        <a
                            href="https://app.dennislawgh.com"
                            style={{
                                display: "inline-block",
                                padding: "12px 18px",
                                background: "#0ea5e9",
                                color: "#ffffff",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            Try Dennislaw v4
                        </a>
                        <a
                            href="https://dennislawgh.com/"
                            style={{
                                display: "inline-block",
                                padding: "12px 18px",
                                background: "transparent",
                                color: "#0b1220",
                                borderRadius: 8,
                                textDecoration: "none",
                                border: "1px solid #d1d5db",
                                fontWeight: 500,
                            }}
                        >
                            Continue on v3
                        </a>
                    </div>
                </div>

                <div 
                style={{
                    position: "relative",
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    alignSelf: "stretch",
                    justifySelf: "center",
                    zIndex: 1,
                }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "min(700px, 95vw)",
                            height: 400,
                            borderRadius: 24,
                            overflow: "hidden",
                            zIndex: 1,
                          
                            margin: "0 auto",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                transform: `translateX(-${current * 100}%)`,
                                transition: "transform 500ms ease",
                            }}
                        >
                            {slides.map((src, idx) => (
                                <div key={idx} style={{ position: "relative", flex: "0 0 100%", height: "100%" }}>
                                    <img
                                        src={src}
                                        alt="Dennislaw preview"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                            borderRadius: 24,
                                        }}
                                        loading={idx === 0 ? "eager" : "lazy"}
                                    />
                                    {src.includes("Macbook-Air") && (
                                        <img
                                            src="/images/mobile.png"
                                            alt="Mobile preview"
                                            style={{
                                                position: "absolute",
                                                right: 16,
                                                bottom: 16,
                                                width: 120,
                                                height: 240,
                                                objectFit: "cover",
                                                borderRadius: 16,
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            aria-label="Previous slide"
                            onClick={() => goTo(current - 1)}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: 8,
                                transform: "translateY(-50%)",
                                background: "rgba(0,0,0,0.4)",
                                color: "#fff",
                                border: "none",
                                borderRadius: 9999,
                                width: 32,
                                height: 32,
                                cursor: "pointer",
                            }}
                        >
                            ‹
                        </button>
                        <button
                            aria-label="Next slide"
                            onClick={() => goTo(current + 1)}
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: 8,
                                transform: "translateY(-50%)",
                                border: "none",
                                borderRadius: 9999,
                                width: 32,
                                height: 32,
                                cursor: "pointer",
                            }}
                        >
                            ›
                        </button>

                        <div
                            style={{
                                position: "absolute",
                                bottom: 10,
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "flex",
                                gap: 6,
                            }}
                        >
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: 9999,
                                        border: "none",
                                        background: i === current ? "#0ea5e9" : "#e5e7eb",
                                        cursor: "pointer",
                                        padding: 0,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero