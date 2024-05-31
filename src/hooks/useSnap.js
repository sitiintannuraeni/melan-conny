import { useState } from "react";
import { useEffect } from "react";

function useSnap() {
  const [snap, setSnap] = useState("");
  useEffect(() => {
    const myMidtransClientKey = MIDTRANS_CLIENT_ID;
    const script = document.createElement("script");
    script.src = `${MIDTRANS_API_URL}/snap/snap.js`;
    script.setAttribute("data-client-key", myMidtransClientKey);
    script.onload = () => {
      setSnap(window.snap);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
export default useSnap;
