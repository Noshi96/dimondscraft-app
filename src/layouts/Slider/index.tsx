import styled from 'styled-components'
import React, { useLayoutEffect, useRef, useState } from "react";

interface CustomStyledElement {
    offsetX: number
    sliderWidth: number
    sliderContentWidth: number
}

interface SliderProps {
    children: JSX.Element[];
}

const Slider = ({ children }: SliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const sliderContentRef = useRef<HTMLDivElement>(null);

    const myRefs = useRef([]);

    const [offset, setOffset] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [sliderContentWidth, setSliderContentWidth] = useState(0);

    useLayoutEffect(() => {
        setSliderWidth(sliderRef?.current?.offsetWidth || 0);
        setSliderContentWidth(sliderContentRef?.current?.offsetWidth || 0);

        // console.log(sliderContentRef?.current)
        // console.log(sliderContentRef?.current?.offsetLeft)
    }, []);

    const changeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOffset(parseInt(event.target.value));
    };


    return (
        <SliderWrapper ref={sliderRef}>
            <SliderContent offsetX={offset} sliderWidth={sliderWidth} sliderContentWidth={sliderContentWidth}
                           ref={sliderContentRef}>

                { children.map((element, i) => (
                    <SliderElement
                        key={i}
                        ref={myRefs.current[i]}
                    >
                        {element}
                    </SliderElement>
                ))}

            </SliderContent>
            <SliderControls>
                <LineBlock>
                    <Line></Line>
                </LineBlock>
                <Range
                    type='range'
                    onChange={changeWidth}
                    step={1}
                    value={offset}>
                </Range>
                <LineBlock>
                    <Line onClick={() => {}}></Line>
                </LineBlock>
            </SliderControls>
        </SliderWrapper>
    )
}

const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

const LineBlock = styled.div`
  height: 22px;
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Line = styled.div`
  height: 0;
  border: 1px solid white;
  width: 100%;
`

const Range = styled.input`
    width: calc(100% - 44px);
`

const SliderControls = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  //https://www.cssportal.com/style-input-range/

  input[type=range] {
    height: 22px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    background: transparent;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #D8DDE3;
    border-radius: 0px;
    border: 0px solid #000000;
  }

  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 16px;
    width: 40px;
    border-radius: 0px;
    background: #FFFFFF;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #D8DDE3;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #D8DDE3;
    border-radius: 0px;
    border: 0px solid #000000;
  }

  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 16px;
    width: 40px;
    border-radius: 0px;
    background: #FFFFFF;
    cursor: pointer;
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type=range]::-ms-fill-lower {
    background: #D8DDE3;
    border: 0px solid #000000;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }

  input[type=range]::-ms-fill-upper {
    background: #D8DDE3;
    border: 0px solid #000000;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }

  input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 16px;
    width: 40px;
    border-radius: 0px;
    background: #FFFFFF;
    cursor: pointer;
  }

  input[type=range]:focus::-ms-fill-lower {
    background: #D8DDE3;
  }

  input[type=range]:focus::-ms-fill-upper {
    background: #D8DDE3;
  }

`

// @ts-ignore
const SliderContent = styled.div<CustomStyledElement>`
  width: fit-content;
  display: flex;
  overflow: hidden;
  transform: translateX(${({
                             offsetX,
                             sliderWidth,
                             sliderContentWidth
                           }) => (-(sliderContentWidth * 0.01 * offsetX - sliderWidth * 0.01 * offsetX) + 'px')});
  transition: all 0.3s linear;
`

const SliderElement = styled.div`
  margin-right: 50px;
  flex-shrink: 0;

  &:last-child {
    margin-right: 0;
  }
`

export default Slider;
