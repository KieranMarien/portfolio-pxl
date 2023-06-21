import Navbar from '@/components/navbar'
import Iframe from 'react-iframe'
export default function Home() {
    // @ts-ignore
    return (
        <main>
            <Navbar></Navbar>

<div style={{ width: "99%" }}>
  <div
    style={{
      position: "relative",
      paddingBottom: "56.25%",
      paddingTop: 0,
      height: 0
    }}
  >
    {/* 
// @ts-ignore */}
    <iframe
      title="MINIMAL PRESENTATION"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
      src="https://view.genial.ly/648efa15eb7be6001719f21a"
      allowFullScreen={true}
      scrolling="yes"
      width={1200}
      height={675}
      frameBorder={0}
    />{" "}
  </div>{" "}
</div>
        </main>

    )

}