import React from 'react'
import { ChromePicker, CustomPicker } from 'react-color';
import tinycolor from 'tinycolor2';
import { Saturation, EditableInput, Hue } from 'react-color/lib/components/common'

class ColorPicker extends React.Component {
    state = {
        hsl: {
            h: 0,
            s: 0,
            l: 0
        },
        hsv: {
            h: 0,
            s: 0,
            v: 0
        },
        hex: 'aaaaaa'
    };

    componentWillMount(){
        const color = tinycolor(this.props.hexCode);
        this.setState({
          hsv: color.toHsv(),
          hsl: color.toHsl(),
          hex: color.toHex(),
        });
      }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.hexCode !== this.state.hex){
            const color = tinycolor(nextProps.hexCode);
            this.setState({
            hsv: color.toHsv(),
            hsl: color.toHsl(),
            hex: color.toHex(),
            });
        }
    }

    handleHueChange = hue => {
        this.setState({
          hsl: hue,
        })
      }
    
    handleSaturationChange = hsv => {
    const color = tinycolor(hsv);
    this.props.onChange(color.toHex())
    }

    render() {
        return (
            <div>
                <div>
                    <Saturation
                        hsl={ this.state.hsl }
                        hsv={ this.state.hsv }
                        // pointer={ CustomPointer }
                        onChange={ this.handleSaturationChange }
                        />
                </div>

                <div className="h-10">
                        <Hue
                            hsl={this.state.hsl}
                            // pointer={ CustomSlider }
                            onChange={ this.handleHueChange }
                            direction={'horizontal'}
                        />
                </div>
            </div>
        );
    }
}

export default CustomPicker(ColorPicker);