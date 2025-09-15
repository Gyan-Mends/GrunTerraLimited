const Hero = () => {
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
            </div>

            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1.1fr 0.9fr",
                    gap: 24,
                    alignItems: "center",
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
                }}
                >
                    <div
                        style={{
                            position: "relative",
                            background: "#ffffff",
                            border: "1px solid #e5e7eb",
                            borderRadius: 24,
                            overflow: "hidden",
                            boxShadow: "0 20px 40px rgba(2,6,23,0.16)",
                            zIndex: 1,
                        }}
                    >
                        <img
                            src="/images/home-bg-1.jpg"
                            alt="Dennislaw case analysis preview"
                            style={{
                                display: "block",
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                maxHeight: 540,
                            }}
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero