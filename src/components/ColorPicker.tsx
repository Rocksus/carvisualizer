import React, {useState} from 'react'
import { ChromePicker, CustomPicker } from 'react-color';
import tinycolor from 'tinycolor2';
import { Saturation, EditableInput, Hue } from 'react-color/lib/components/common'

type Props = {
    hexCode: string
    handleChange: (newColor: string) => void
}

const ColorPicker = ({hexCode, handleChange } : Props) => {
    const color = tinycolor(hexCode);
    let [state, setState] = useState({
        hsl: {
            h:color.toHsl().h,
            s:color.toHsl().s,
            l:color.toHsl().l,
        },
        hsv: {
            h: color.toHsv().h,
            s: color.toHsv().s,
            v: color.toHsv().v,
        },
        hex: color.toHex(),
    });

    return (
        <div>
            <div className="h-60 w-full flex flex-col">
                <div className="w-full pb-8 h-24 relative overflow-hidden">
                    <Saturation
                        hsl={state.hsl}
                        hsv={state.hsv}
                        color={state.hex}
                        // pointer={ CustomPointer }
                        onChange={ (hsv) => {
                            const color = tinycolor({
                                h: hsv.h,
                                s: hsv.s,
                                v: hsv.v,
                            });
                            handleChange(color.toHexString());
                            setState(prevState=>({
                            ...prevState,
                                hsv: {
                                h:color.toHsv().h,
                                s:color.toHsv().s,
                                v:color.toHsv().v,
                                },
                            })) 
                          } }
                        />
                </div>

                <div className="relative h-8 mb-4">
                        <Hue
                            hsl={state.hsl}
                            color={state.hex}
                            // pointer={ CustomSlider }
                            onChange={ (hsl) => {
                                const color = tinycolor({
                                    h:hsl.h,
                                    s:hsl.s,
                                    l:hsl.l,
                                    });
                                handleChange(color.toHexString());
                                setState(prevState=>({
                                ...prevState,
                                    hsl: {
                                    h:color.toHsl().h,
                                    s:color.toHsl().s,
                                    l:color.toHsl().l,
                                    },
                                }))  
                            }}
                            direction={'horizontal'}
                        />
                </div>
            </div>
        </div>
    )
}

export default CustomPicker(ColorPicker);