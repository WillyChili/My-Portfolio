export default function EchoCover() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0A0A0A 0%, #0D1512 50%, #0A0A0A 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Mint glow behind phone */}
      <div
        style={{
          position: "absolute",
          width: "60%",
          height: "120%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(44,213,156,0.22) 0%, rgba(44,213,156,0.06) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Fine grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(232,229,224,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(232,229,224,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Phone container with perspective */}
      <div
        style={{
          position: "relative",
          height: "88%",
          maxHeight: "560px",
          aspectRatio: "9.35 / 20.24",
          transform: "rotate(-2deg)",
          filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.6)) drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
        }}
      >
        {/* Outer frame, titanium bezel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "14%",
            background: "linear-gradient(145deg, #2a2a2c 0%, #1a1a1c 40%, #0a0a0c 100%)",
            padding: "3.5%",
            boxSizing: "border-box",
          }}
        >
          {/* Inner subtle highlight */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "14%",
              background: "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.04) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Screen bezel, inner black frame */}
          <div
            style={{
              position: "absolute",
              inset: "1.8%",
              borderRadius: "12%",
              background: "#000",
              overflow: "hidden",
            }}
          >
            {/* Actual screen content */}
            <img
              src="/echo/home-notes.jpeg"
              alt="Echo app, daily notes screen"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Dynamic Island */}
            <div
              style={{
                position: "absolute",
                top: "1.8%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "35%",
                height: "3.5%",
                background: "#000",
                borderRadius: "999px",
                zIndex: 3,
              }}
            />

            {/* Screen glare, very subtle diagonal reflection */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.03) 100%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </div>

          {/* Side buttons, right side power */}
          <div
            style={{
              position: "absolute",
              right: "-1px",
              top: "22%",
              width: "3px",
              height: "10%",
              background: "linear-gradient(90deg, #1a1a1c 0%, #0a0a0c 100%)",
              borderRadius: "0 2px 2px 0",
            }}
          />

          {/* Side buttons, left side volume up */}
          <div
            style={{
              position: "absolute",
              left: "-1px",
              top: "18%",
              width: "3px",
              height: "6%",
              background: "linear-gradient(-90deg, #1a1a1c 0%, #0a0a0c 100%)",
              borderRadius: "2px 0 0 2px",
            }}
          />

          {/* Side buttons, left side volume down */}
          <div
            style={{
              position: "absolute",
              left: "-1px",
              top: "27%",
              width: "3px",
              height: "6%",
              background: "linear-gradient(-90deg, #1a1a1c 0%, #0a0a0c 100%)",
              borderRadius: "2px 0 0 2px",
            }}
          />

          {/* Side buttons, left side action button (mute) */}
          <div
            style={{
              position: "absolute",
              left: "-1px",
              top: "12%",
              width: "3px",
              height: "3.5%",
              background: "linear-gradient(-90deg, #1a1a1c 0%, #0a0a0c 100%)",
              borderRadius: "2px 0 0 2px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
