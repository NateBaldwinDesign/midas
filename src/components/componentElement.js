import React from "react";
import { useRecoilState } from 'recoil';
import createSvgIcon from "../utilities/createSvgIcon";
import "../styles/component.css";

const ComponentElement = (props) => {
  const componentMinHeight = props.componentMinHeight;
  const paddingX = props.paddingX;
  const paddingY = props.paddingY;
  const typeSize = props.typeSize;
  const iconSize = props.iconSize;
  const gapSize = props.gapSize;
  const spec = props.spec;
  const iconPadding = props.iconPadding;
  const componentLineHeight = props.componentLineHeight;
  const componentLabel = "Component label"
  const computedHeight = paddingY * 2 + Number(componentLineHeight) * typeSize;
  
  const biggestHeight = (computedHeight > componentMinHeight) ? computedHeight : componentMinHeight;
  const radius = (props.radius > (biggestHeight / 2)) ? (biggestHeight / 2) : props.radius;

  const specAnnotations = (
    <>
      <div className="specHeight specs">
        {" "}
        {`Height: ${Math.round(
          computedHeight
        )}px \n (Min: ${Math.round(componentMinHeight)})px`}{" "}
      </div>
      <div className="specType specs"> {`Font: ${Math.round(typeSize)}px`} </div>
      <div className="specIcon specs"> {`Icon: ${Math.round(iconSize)}px`} </div>
      <div className="specPaddingX specs"> {`Pad-X: ${Math.round(paddingX)}px`} </div>
      <div className="specPaddingY specs"> {`Pad-Y: ${Math.round(paddingY)}px`} </div>
      <div className="specGap specs"> {`Gap: ${Math.round(gapSize)}px`} </div>
      <div className="specRadius specs"> {`R: ${Math.round(radius)}px`} </div>
    </>
  );
  const showSpecs = spec ? specAnnotations : "";

  const paddingElementFixedSize = '10';

  return (
    <div className={spec ? "componentSpecWrapper" : "componentWrapper"}>
      <div className={spec ? "componentSpecItemWrapper" : ""}>
        <div
          style={{
            minWidth: `${componentMinHeight}px`,
            minHeight: `${componentMinHeight}px`,
            fontSize: `${typeSize}px`,
            lineHeight: `${componentLineHeight}`,
            borderRadius: `${radius}px`
          }}
          className="component"
        >
          <div
            className={spec ? "paddingUnit padTop" : "padTop"}
            style={{
              height: `${paddingY}px`,
              width: `${paddingElementFixedSize}px`,
            }}
          ></div>
          <div
            className={spec ? "paddingUnit padBottom" : "padBottom"}
            style={{
              height: `${paddingY}px`,
              width: `${paddingElementFixedSize}px`,
            }}
          ></div>
          <div
            className={spec ? "paddingUnit padLeft" : "padLeft"}
            style={{
              height: `${paddingElementFixedSize}px`,
              width: `${paddingX}px`,
            }}
          ></div>
          <div
            className={spec ? "paddingUnit padRight" : "padRight"}
            style={{
              height: `${paddingElementFixedSize}px`,
              width: `${paddingX}px`,
            }}
          ></div>
          <div
            className={spec ? "paddingUnit compRadius" : "compRadius"}
            style={{
              height: `${radius * 2}px`,
              width: `${radius * 2}px`,
              borderRadius: `${radius}px`
            }}
          ></div>
          <div
            className={spec ? "paddingUnit textIconGap" : "textIconGap"}
            style={{
              width: `${gapSize}px`,
              height: `${gapSize / 2}px`,
            }}
          ></div>
          <div className={spec ? "componentIconSpec" : "componentIcon"}>
            {createSvgIcon(iconSize, iconSize, iconPadding)}
          </div>
          <div className={spec ? "componentTextSpec" : "componentText"}>
            {componentLabel}
          </div>
        </div>
      </div>
      {showSpecs}
    </div>
  );
};

export default ComponentElement;
