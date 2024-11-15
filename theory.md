### Introduction
<br>
Logic gates are the basic building blocks of any digital system. Logic gates are electronic circuits having one or more than one input and only one output. The relationship between the input and the output is based on a certain logic. Based on this, logic gates are named as<br>

1) AND gate<br>
2) OR gate<br>
3) NOT gate<br>
4) NAND gate<br>
5) NOR gate<br>
6) Ex-OR gate<br>
7) Ex-NOR gate<br>

### 1) AND gate
<br>
The AND gate is an electronic circuit that gives a high output (1) only if all its inputs are high. A dot (.) is used to show the AND operation i.e. A.B or can be written as AB<br>

<center><b>Y= A.B</b><br>
<img src="images/and.png"  width="325" height="150"> <br> <b>Figure-1:Logic Symbol of AND Gate</b> <br>    
<img src="images/AA.png"  width="300" height="200"> <br><b>Figure-2:Truth Table of AND Gate</b></p> <br></center>
A simple 2-input logic AND gate can be constructed using RTL (Resistor-Transistor-Logic) switches connected together as shown below with the inputs connected directly to the transistor bases. Both transistors must be saturated “ON” for an output at Q.</b></p><br>
<center><img src="images/and1.gif"  width="325" height="250"> <br>
<b>Figure-3:AND Gate through RTL logic</b></p> </center>
   
  
<br><br>


### 2) OR gate
The OR gate is an electronic circuit that gives a high output (1) if one or more of its inputs are high.  A plus (+) is used to show the OR operation.<br><br>
<center><b>Y= A+B</b></p><br>
<img src="images/or.png"  width="325" height="150"><br><b>Figure-4:Logic Symbol of OR Gate</b> <br>
<img src="images/truth_or.png"  width="300" height="200"> <br> <b>Figure-5:Truth Table of OR Gate</b><br></center>

OR gate can be realized by DRL (Diode-Resistance-Logic) or by TTL (Transistor-Transistor-Logic). Presently, we will learn how to implement the OR gate using DRL (Diode-Resistance-Logic). To realise OR gate, we will use a diode at every input of the OR gate. The anode part of diode is connected with input while the cathode part is joined together and a resistor, connected with the cathode is grounded. In this case, we have taken two inputs which can be seen in the circuit below.<br>

When both the inputs are at logic 0 or low state then the diodes D1 and D2 become reverse biased. Since the anode terminal of diode is at lower voltage level than the cathode terminal, so diode will act as open circuit so there is no voltage across resistor and hence output voltage is same as ground. When either of the diodes is at logic 1 or high state then the diode corresponding to that input is forward bias. Since this time anode is at high voltage than cathode therefore current will flow through forward biased diode and this current then appears on resistor causing high voltage at output terminal also. Hence at output we get high or logic 1 or +5V. So, if any or both inputs are high, the output will be high or “1”.<br>
<center><img src="images/dior.gif"  width="150" height="250"><br> <b>Figure-6:OR Gate through DRL logic</b></p></center><br> 
      
  
### 3) NOT gate
<br>
The NOT gate is an electronic circuit that produces an inverted version of the input at its output.  It is also known as an inverter.  If the input variable is A, the inverted output is known as NOT A.  This is also shown as A' or A with a bar over the top, as shown at the outputs.
<br><br>
<center><b>Y= A'</b><br>

<img src="images/not.png"  width="325" height="150"><br> <b>Figure-7:Logic Symbol of NOT Gate</b><br>
<img src="images/truth_not.png"  width="300" height="200"> <br><b>Figure-8:Truth Table of NOT Gate</b><br><br><br></center>

NOT gate can be realized through transistor.The input is connected through resistor R2 to the transistor’s base. When no voltage is present on the input, the transistor turns off. When the transistor is off, no current flows through the collector-emitter path. Thus, current from the supply voltage (Vcc) flows through resistor R1 to the output. In this way, the circuit’s output is high when its input is low.

When voltage is present at the input, the transistor turns on, allowing current to flow through the collector-emitter circuit directly to ground. This ground path creates a shortcut that bypasses the output, which causes the output to go low.

In this way, the output is high when the input is low and low when the input is high.</b></p><br>
<center><img src="images/nott.jpg"  width="350" height="250"> <br>
<b>Figure-9:NOT Gate through Transistor</b></p> <br></center>
      
  

### 4) NAND gate
This is a NOT-AND gate which is equal to an AND gate followed by a NOT gate.  The outputs of all NAND gates are high if any of the inputs are low. The symbol is an AND gate with a small circle on the output. The small circle represents inversion.<br><br>
<center><b>Y= <span style="text-decoration: overline;">AB</span></b></p></center><br>
<center><img src="images/nand.png"  width="325" height="150" align="center"><br><b>Figure-10:Logic Symbol of NAND Gate</b><br>
<img src="images/truth_nand.png"  width="300" height="200"><br><b>Figure-11:Truth Table of NAND Gate</b> <br></center>

A simple 2-input logic NAND gate can be constructed using RTL (Resistor-transistor-logic) switches connected together as shown below with the inputs connected directly to the transistor bases. Either transistor must be cut-off or “OFF” for an output at Q.</b></p><br>


<center><img src="images/nandr.gif"  width="350" height="250"> <br><b>Figure-12:NAND gate through RTL Logic.</b></p> <br></center>


### 5) NOR gate
<br>
This is a NOT-OR gate which is equal to an OR gate followed by a NOT gate.  The outputs of all NOR gates are low if any of the inputs are high.
The symbol is an OR gate with a small circle on the output. The small circle represents inversion.
<br><br>
<center><b>Y= <span style="text-decoration: overline;">A+B</span></b></p><br>
<img src="images/nor.png"  width="325" height="150"><br><b>Figure-13:Logic Symbol of NOR gate</b><br>
<img src="images/truth_nor.png"  width="300" height="200"> <br><b>Figure-14:Truth Table of NOR gate</b><br></center>

A simple 2-input logic NOR gate can be constructed using RTL (Resistor-transistor-logic) switches connected together as shown below with the inputs connected directly to the transistor bases. Both transistors must be cut-off or “OFF” for an output at Q.<br>

<center><img src="images/norr.gif"  width="320" height="250"> <br>
<b>Figure-15:NOR gate through RTL Logic.</b></center>
       
<br>


### 6) Ex-OR gate
<br>
The 'Exclusive-OR' gate is a circuit which will give a high output if either, but not both of its two inputs are high.  An encircled plus sign (⊕) is used to show the Ex-OR operation.
<br><br>
<center><b>Y= A⊕B</b><br>

<img src="images/xor.png"  width="325" height="150"> <br><b>Figure-16:Logic Symbol of Ex-OR gate</b><br>
<img src="images/truth_xor.png"  width="300" height="200"> <br><b>Figure-17:Truth Table of Ex-OR gate</b><br></center>

Ex-OR gate is created from AND, NAND and OR gates.The output is high only when both the inputs are different.</b></p><br>

<center><img src="images/xorr.png"  width="420" height="350"><br> <b>Figure-18:Ex-OR gate through RTL Logic.</b></p> <br></center>


### 7) Ex-NOR gate 
<br>
The 'Exclusive-NOR' gate circuit does the opposite to the EX-OR gate. It will give a low output if either, but not both of its two inputs are high. The symbol is an EX-OR gate with a small circle on the output. The small circle represents inversion.<br><br>
<center><p align="center" style="font-size:120%; margin-top:2%" ><b>Y= <span style="text-decoration: overline;">A⊕B</span></b></p><br><br>
<br>
<img src="images/xnor.png"  width="325" height="150"><br> <b>Figure-19:Logic Symbol of Ex-NOR gate</b><br>
<img src="images/truth_xnor.png"  width="300" height="200"><br> <b>Figure-20:Truth Table of Ex-NOR gate</b><br></center>


Ex-NOR gate is created from AND, NOT and OR gates.The output is high only when both the inputs are same.
<center><br><img src="images/xnorr.jpg"  width="420" height="350"> <br>
      
<b>Figure-21:Ex-NOR gate through RTL Logic.</b></p> </center>






