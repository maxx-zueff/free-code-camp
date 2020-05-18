export default function Home() {

  return (
  	<div>

  		<h1>Basic</h1>

  		<p>Comment Your JavaScript Code</p>
	    <pre>{`
			// LOLOL
			/* LOLOL
			 *
			 * 
			 */
	    `}</pre>

  		<p>Declare JavaScript Variables</p>
	    <pre>{`
			var myName;
			var ourName;
	    `}</pre>

  		<p>Storing Values with the Assignment Operator</p>
	    <pre>{`
			// Setup
			var a;
			var b = 2;

			// Only change code below this line

			a = 7;
			b = a;
	    `}</pre>

  		<p>Initializing Variables with the Assignment Operator</p>
	    <pre>{`
			var a = 9;
	    `}</pre>

  		<p>Understanding Uninitialized Variables</p>
	    <pre>{`
			// Only change code below this line
			var a = 5;
			var b = 10;
			var c = 'I am a';
			// Only change code above this line

			a = a + 1;
			b = b + 5;
			c = c + " String!";
	    `}</pre>

  		<p>Understanding Case Sensitivity in Variables</p>
	    <pre>{`
			// Variable declarations
			var studlyCapVar;
			var properCamelCase;
			var titleCaseOver;

			// Variable assignments
			studlyCapVar = 10;
			properCamelCase = "A String";
			titleCaseOver = 9000;
	    `}</pre>

  		<p>Add Two Numbers with JavaScript</p>
	    <pre>{`
			var sum = 10 + 10;
	    `}</pre>

  		<p>Subtract One Number from Another with JavaScript</p>
	    <pre>{`
			var difference = 45 - 33;
	    `}</pre>

  		<p>Multiply Two Numbers with JavaScript</p>
	    <pre>{`
			var product = 8 * 10;
	    `}</pre>

  		<p>Divide One Number by Another with JavaScript</p>
	    <pre>{`
			var quotient = 66 / 33;
	    `}</pre>

  		<p>Increment a Number with JavaScript</p>
	    <pre>{`
			var myVar = 87;

			// Only change code below this line
			myVar++;
	    `}</pre>

  		<p>Decrement a Number with JavaScript</p>
	    <pre>{`
			var myVar = 11;

			// Only change code below this line
			myVar--;
	    `}</pre>

  		<p>Create Decimal Numbers with JavaScript</p>
	    <pre>{`
			var ourDecimal = 5.7;
			let myDecimal = 146.3;
	    `}</pre>

  		<p>Multiply Two Decimals with JavaScript</p>
	    <pre>{`
			var product = 2.0 * 2.5;
	    `}</pre>

  		<p>Divide One Decimal by Another with JavaScript</p>
	    <pre>{`
			var quotient = 4.4 / 2.0;
	    `}</pre>

  		<p>Finding a Remainder in JavaScript</p>
	    <pre>{`
			var remainder = 8 % 3;
	    `}</pre>

  		<p>Compound Assignment With Augmented Addition</p>
	    <pre>{`
			var a = 3;
			var b = 17;
			var c = 12;

			// Only change code below this line
			a += 12;
			b += 9;
			c += 7;
	    `}</pre>

  		<p>Compound Assignment With Augmented Subtraction</p>
	    <pre>{`
			var a = 11;
			var b = 9;
			var c = 3;

			// Only change code below this line
			a -= 6;
			b -= 15;
			c -= 1;
	    `}</pre>
	    
  		<p>Compound Assignment With Augmented Multiplication</p>
	    <pre>{`
			var a = 5;
			var b = 12;
			var c = 4.6;

			// Only change code below this line
			a *= 5;
			b *= 3;
			c *= 10;
	    `}</pre>
	    
  		<p>Compound Assignment With Augmented Division</p>
	    <pre>{`
			var a = 48;
			var b = 108;
			var c = 33;

			// Only change code below this line
			a /= 12;
			b /= 4;
			c /= 11;
	    `}</pre>
	    
  		<p>Declare String Variables</p>
	    <pre>{`
			let myFirstName = "Max";
			let myLastName = "Zueff";
	    `}</pre>
	    
  		<p>Escaping Literal Quotes in Strings</p>
	    <pre>{`
			var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
	    `}</pre>


	</div>
  )

}