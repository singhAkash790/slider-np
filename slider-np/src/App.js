import { Slider } from "./Slider.js";

function App() {
  return (
    <>
      <Slider
        value="9"
        // pointerSize="50px"
        pointerColorRange={true}
        pointerColor="#cdcdcd"
        scaleColor="#cdcdcd"
        leftScaleColor="#28a745"
        rightScaleColor="blue"
        sliderWidth="500px"
        gapBetween="10px"
        showHoverValue={true}
        valueColorAuto={true}
      />
    </>
  );
}

export default App;
