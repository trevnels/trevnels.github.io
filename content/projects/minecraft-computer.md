+++
title = "Minecraft Computer"
date = 2019-07-16
description = "A Turing-complete 8-bit computer built in the game <em>Minecraft</em>."
[taxonomies]
tags = ["asm", "hardware"]
[extra]
thumbnail = "/images/computer.png"
featured = true
+++

{% figure(img=true, caption='The fully built computer, pictured computing the Fibonacci sequence (if you look closely, the display reads 233.)') %}
/images/computer.png
{% end %}

Above, you can see the 8-bit computer that I designed and built in the video game _Minecraft_ using its redstone logic system. A line of redstone can either be on or off, much like how computers work at the lowest level. The computer runs a basic assembly instruction set of my own creation, and these instructions are hand-loaded into RAM before boot. The computer is capable of basic arithmetic, looping, conditional branching, and more. One of the more elaborate programs I wrote is seen executing above -- it computes the Fibonacci sequence and displays the current value on the 7-segment display, halting the CPU when the sequence overflows.

## Instruction Set
Each instruction is 8 bits long, and are stored in RAM as 3 bits of opcode followed by 5 bits of data, which is usually a memory address. The instruction set is as follows:

| Opcode | Mnemonic | Description |
|--------|----------|-------------|
| 000    | `NOP`    | No operation |
| 001    | `LDA`    | Load into register A from memory address |
| 010    | `ADD`    | Add contents of memory address to register A |
| 011    | `SUB`    | Subtract contents of memory address from register A |
| 100    | `STO`    | Store register A at memory address |
| 101    | `JMP`    | Unconditional jump to memory address |
| 110    | `JMC`    | Jump to memory address if carry flag is set (can also be configured to be the zero flag depending on the program's requirements)  |
| 111    | `HLT`    | Halt |

The individual microcode operations comprising each instruction are stored in ROM, a large grid of redstone torches which controls which control lines should be on or off during each step of an instruction. Instructions can range from 2 to 5 clock cycles long, depending on the operation being performed. Combining this with the low clock speed due to redstone's inherent propagation delay, programs can take a *painfully* long time to execute -- though they do run!

While 32 bytes of RAM and an instruction set this small is definitely on the minimalist side, it is still capable of a surprising amount when running some clever hand-written assembly. 

## ALU
The ALU contains two registers, A and B, which are 8 bits wide. A is directly interacted with by user code (`LDA`, `STO`), while B is used implicitly during `ADD` and `SUB` operations. The result of a calculation is automatically placed back in the A register to allow efficient chaining of multiple operations. The ALU also contains a carry flag, which is set if the result of an operation is greater than 255 or less than 0.

{% figure(img=true, caption="A close-up shot of the ALU during construction. The program counter is also visible off to the left.") %}
/images/computer_alu.png
{% end %}

## Future

I am planning a second version of this computer, which will be closer to something like a MOS 6502, or even maybe RISC-V. It will also likely have a GPU to allow for drawing, graphing, and other things not possible on a 7-segment display.
