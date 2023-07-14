import React, { useEffect, useState } from "react";

export const Slider = ({
  value,
  scaleColor,
  leftScaleColor,
  rightScaleColor,
  pointerSize,
  pointerColor,
  pointerColorRange,
  sliderWidth,
  gapBetween,
  valueColorAuto,
}) => {
  const [hoverValue, setHoverValue] = useState(null); // State variable for hover value
  const [sValue, setSValue] = useState(null); // State variable for sValue
  const [textColor, setTextColor] = useState(null); // State variable for sValue

  useEffect(() => {
    const checkSValue = () => {
      if (value === undefined || value < -10 || value > 10) {
        console.log(
          "SliderPN: Slider_value should be between -10 and 10",
          value
        );
        return 50;
      }
      return 50 + (value / 2) * 10;
    };

    const calculatedSValue = checkSValue();
    setSValue(calculatedSValue); // Store the sValue in state
  }, [value]);

  useEffect(() => {
    if (pointerColorRange) {
      if (sValue === 50) {
        pointerColor = "#000"; // Set black color when sValue is 50
      } else {
        pointerColor =
          sValue > 50
            ? `rgb(0, ${148 + (sValue - 50) * 2}, 0)`
            : `rgb(${155 - (sValue - 50) * 2}, 0, 0)`;
      }
    }

    let fontColorHover = "";
    if (valueColorAuto) {
      if (sValue === 50) {
        fontColorHover = "#000"; // Set black color when sValue is 50
      } else {
        fontColorHover =
          sValue > 50
            ? `rgb(0, ${148 + (sValue - 50) * 2}, 0)`
            : `rgb(${155 - (sValue - 50) * 2}, 0, 0)`;
      }
    }
    setTextColor(fontColorHover);

    const sliderPointer = document.getElementById("sliderPointer");
    const scale = document.getElementById("scale");

    if (sliderPointer) {
      sliderPointer.style.left = `${sValue}%`;
      sliderPointer.style.color = pointerColor;
      sliderPointer.style.fontSize = pointerSize;
    }

    if (scale) {
      scale.style.gap = gapBetween;
    }
  }, [
    sValue,
    pointerColorRange,
    pointerSize,
    scaleColor,
    leftScaleColor,
    rightScaleColor,
    gapBetween,
    pointerColor,
  ]);

  const sliderPointerStyle = {
    left: `${sValue}%`,
  };

  const sliderPnCntStyle = {
    width: sliderWidth,
  };

  const leftScaleStyle = {
    backgroundColor: scaleColor ? scaleColor : leftScaleColor,
  };

  const rightScaleStyle = {
    backgroundColor: scaleColor ? scaleColor : rightScaleColor,
  };

  return (
    <div className="slider_pn">
      <div className="slider_pn_cnt" style={sliderPnCntStyle}>
        <div className="slider_pn_scale">
          <div id="scale" className="scale">
            <span
              className="left_scale"
              id="leftScale"
              style={leftScaleStyle}
            ></span>
            <span
              className="right_scale"
              id="rightScale"
              style={rightScaleStyle}
            ></span>
          </div>
        </div>
        <div className="slider_pn_pointer">
          <span
            id="sliderPointer"
            style={sliderPointerStyle}
            data-type="&#9650; "
            onMouseEnter={() => setHoverValue(sValue)}
            onMouseLeave={() => setHoverValue(null)}
          ></span>
          {hoverValue !== null && (
            <article
              className="hover_value"
              style={{ left: `${sValue}%`, color: textColor }}
            >
              {sValue}
            </article>
          )}
        </div>
      </div>
    </div>
  );
};
