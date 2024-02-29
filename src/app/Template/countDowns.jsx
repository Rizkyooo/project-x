import Countdown from "react-countdown";
import rendererCountDown from "./countDown";
export default function CountDowns() {
    return (
        <Countdown
          date={new Date("2025-02-29T00:00:00")}
          renderer={rendererCountDown}
        ></Countdown>
    );
}