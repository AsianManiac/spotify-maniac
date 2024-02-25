"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface VolumeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const VolumeSlider = ({ value = 1, onChange }: VolumeSliderProps) => {
  const handleChange = (value: number[]) => {
    onChange?.(value[0]);
  };
  return (
    <RadixSlider.Root
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
      className={"relative flex w-full touch-none select-none items-center"}
    >
      <RadixSlider.Track
        className={
          "relative h-1 w-full grow overflow-hidden rounded-full bg-secondary"
        }
      >
        <RadixSlider.Range className={"absolute h-full bg-primary"} />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className={
          "block h-3 w-3 cursor-pointer rounded-full border-[1px] border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }
      />
    </RadixSlider.Root>
  );
};

export default VolumeSlider;
