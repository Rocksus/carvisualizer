"use client"
import { AppCanvas } from '@/components/Canvas'
import ColorPicker from '@/components/ColorPicker'
import { useState } from 'react';

export default function VisualizerPage() {
  const [color, setColor] = useState("#f5a122");

    return (
        <div className="h-screen bg-black">
          <AppCanvas carColor={color}/>
          <ColorPicker  hexCode={color} handleChange={(newColor) => {
            setColor(newColor)
          }}/>
        </div>
    );
}