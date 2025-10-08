export default function Positions() {
  return (
    <>
      {/* Relative */}
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray" style={{ padding: 8 }}>
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>

          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>

          <div className="wd-bg-color-red wd-dimension-square">Square</div>
        </div>
      </div>

      {/*  Absolute */}
      <div id="wd-css-position-absolute" style={{ marginTop: 24 }}>
        <h2>Absolute position</h2>
        <div
          className="wd-pos-relative"
          style={{ height: 160, background: "#eee" }}
        >
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
        </div>
        <div id="wd-css-position-fixed" style={{ marginTop: 24 }}>
          <h2>Fixed position</h2>
          <p>
            Checkout the blue square that says &quot;Fixed position&quot; stuck
            all the way on the right and halfway down the page. It doesn&apos;t
            scroll with the rest of the page. Its position is <code>fixed</code>
            .
          </p>
          <div
            className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              textAlign: "center",
              padding: 4,
            }}
          >
            Fixed position
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
