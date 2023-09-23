+++
title = "Minecraft Computer"
date = 2019-07-16
description = "A Turing-complete 8-bit computer built in the game <em>Minecraft</em>."
[extra]
thumbnail = "/images/computer.png"
thumbnail_color = "oklch(69.64% 0.196 29.5)"
+++

![Computer](/images/computer.png)
Above, you can see the 8-bit computer that I designed and built in the video game _Minecraft_ using its redstone logic system. A line of redstone can either be on or off, much like how computers work at the lowest level. The computer runs a basic assembly instruction set of my own creation, and these instructions are hand-loaded into RAM before boot. The computer is capable of basic arithmetic, looping, conditional branching, and more. Pictured computing the Fibonacci sequence (if you look closely above, the display reads 233.)

![ALU](/images/computer_alu.png)
_A close-up shot of the ALU during construction. You can also see the program counter to the left._

## Specs

- 0.2 Hz Single Core CPU
- 32 bytes of RAM
- 8-bit multi-operation ALU
- 3 digit 7-segment display

## Future

I am planning a second version of this computer, which will be closer to something like a MOS 6502, or even RISC-V. It will also likely have a GPU to allow for drawing, graphing, and other things not possible on a 7-segment display.
