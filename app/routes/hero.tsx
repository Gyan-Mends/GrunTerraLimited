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
                <img
                    src="/images/Group-333-blue.svg"
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
                            Dennislaw New Look is Here!!!
                        </span>
                       
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
                        <style>{`
                            .dlx-carousel { position: relative; width: 100%; height: 100%; }
                            .dlx-carousel input { display: none; }
                            .dlx-track { display: flex; width: 100%; height: 100%; transition: transform 500ms ease; animation: dlxAuto 15s infinite; }
                            @keyframes dlxAuto {
                                0%, 25% { transform: translateX(0); }
                                33%, 58% { transform: translateX(-100%); }
                                66%, 91% { transform: translateX(-200%); }
                                100% { transform: translateX(0); }
                            }
                            .dlx-carousel:hover .dlx-track { animation-play-state: paused; }
                            #dlx-s1:checked ~ .dlx-track { transform: translateX(0); }
                            #dlx-s2:checked ~ .dlx-track { transform: translateX(-100%); }
                            #dlx-s3:checked ~ .dlx-track { transform: translateX(-200%); }
                            .dlx-slide { position: relative; flex: 0 0 100%; height: 100%; }
                            .dlx-slide img.base { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 24px; }
                            .dlx-slide img.phone { position: absolute; right: 16px; bottom: 16px; width: 120px; height: 240px; object-fit: cover; border-radius: 16px; }
                            .dlx-dots { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; }
                            .dlx-dots label { width: 8px; height: 8px; border-radius: 9999px; background: #e5e7eb; cursor: pointer; }
                            #dlx-s1:checked ~ .dlx-dots label[for="dlx-s1"],
                            #dlx-s2:checked ~ .dlx-dots label[for="dlx-s2"],
                            #dlx-s3:checked ~ .dlx-dots label[for="dlx-s3"] { background: #0ea5e9; }
                            .dlx-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border-radius: 9999px; background: rgba(0,0,0,0.4); color: #fff; display: grid; place-items: center; cursor: pointer; }
                            .dlx-arrow.prev { left: 8px; }
                            .dlx-arrow.next { right: 8px; }
                        `}</style>
                        <div className="dlx-carousel">
                            <input type="radio" name="dlx" id="dlx-s1" defaultChecked />
                            <input type="radio" name="dlx" id="dlx-s2" />
                            <input type="radio" name="dlx" id="dlx-s3" />
                            <div className="dlx-track">
                                <div className="dlx-slide">
                                    <img className="base" src="/images/subject.png" alt="Laptop preview" />
                                    <img className="phone" src="/images/subject-mobile.png" alt="Mobile overlay" />
                                </div>
                                <div className="dlx-slide">
                                <img className="base" src="/images/lap.png" alt="Laptop preview" />
                                <img className="phone" src="/images/lap-mobile.png" alt="Mobile overlay" />
                                </div>
                                <div className="dlx-slide">
                                <img className="base" src="/images/subject.png" alt="Laptop preview" />
                                <img className="phone" src="/images/subject-mobile.png" alt="Mobile overlay" />
                                </div>
                            </div>
                            <div className="dlx-dots">
                                <label htmlFor="dlx-s1" />
                                <label htmlFor="dlx-s2" />
                                <label htmlFor="dlx-s3" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero