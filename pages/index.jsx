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
	    
  		<p>Quoting Strings with Single Quotes</p>
	    <pre>{`
			var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
	    `}</pre>

  		<p>Escape Sequences in Strings</p>
	    <pre>{`
			var myStr= 'FirstLine\n\t\\SecondLine\nThirdLine';
	    `}</pre>

  		<p>Concatenating Strings with Plus Operator</p>
	    <pre>{`
			var myStr = "This is the start. "+"This is the end.";
	    `}</pre>

  		<p>Concatenating Strings with the Plus Equals Operator</p>
	    <pre>{`
			var myStr = "This is the first sentence. ";
			myStr += "This is the second sentence.";
	    `}</pre>

  		<p>Constructing Strings with Variables</p>
	    <pre>{`
	    	var myName = "Max";
			var myStr = "My name is " + myName + " and I am well!";
	    `}</pre>

  		<p>Appending Variables to Strings</p>
	    <pre>{`
	    	var someAdjective = "Okay";
			var myStr = "Learning to code is ";
			myStr += someAdjective;
	    `}</pre>

  		<p>Find the Length of a String</p>
	    <pre>{`
	    	// Setup
			var lastNameLength = 0;
			var lastName = "Lovelace";

			// Only change code below this line

			lastNameLength = lastName.length;
	    `}</pre>

  		<p>Find the Length of a String</p>
	    <pre>{`
	    	// Setup
			var lastNameLength = 0;
			var lastName = "Lovelace";

			// Only change code below this line

			lastNameLength = lastName.length;
	    `}</pre>

  		<p>Use Bracket Notation to Find the First Character in a String</p>
	    <pre>{`
	    	// Setup
			var firstLetterOfLastName = "";
			var lastName = "Lovelace";

			// Only change code below this line
			firstLetterOfLastName = lastName[0];
	    `}</pre>

  		<p>Understand String Immutability</p>
	    <pre>{`
			// Setup
			var myStr = "Jello World";

			// Only change code below this line
			myStr = "Hello World"; // Change this line
			// Only change code above this line
	    `}</pre>

  		<p>Use Bracket Notation to Find the Nth Character in a String</p>
	    <pre>{`
			// Setup
			var lastName = "Lovelace";

			// Only change code below this line
			var thirdLetterOfLastName = lastName[2]; // Change this line
	    `}</pre>

  		<p>Use Bracket Notation to Find the Last Character in a String</p>
	    <pre>{`
			// Setup
			var lastName = "Lovelace";

			// Only change code below this line
			var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
	    `}</pre>

  		<p>Use Bracket Notation to Find the Nth-to-Last Character in a String</p>
	    <pre>{`
			// Setup
			var lastName = "Lovelace";

			// Only change code below this line
			var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
	    `}</pre>

  		<p>Word Blanks</p>
	    <pre>{`
			var myNoun = "dog";
			var myAdjective = "big";
			var myVerb = "ran";
			var myAdverb = "quickly";

			// Only change code below this line
			var wordBlanks = 
			  "It was really "
			  + myAdjective
			  + " "
			  + myNoun
			  + ", and we "
			  + myVerb
			  + " ourselves "
			  + myAdverb;
	    `}</pre>

  		<p>Store Multiple Values in one Variable using JavaScript Arrays</p>
	    <pre>{`
			// Only change code below this line
			var myArray = ["store", 3990];
	    `}</pre>

  		<p>Nest one Array within Another Array</p>
	    <pre>{`
			var myArray = [[1,2],[1,2]];
	    `}</pre>

  		<p>Access Array Data with Indexes</p>
	    <pre>{`
			// Setup
			var myArray = [50,60,70];

			// Only change code below this line
			var myData = myArray[0];
	    `}</pre>

  		<p>Modify Array Data With Indexes</p>
	    <pre>{`
			// Setup
			var myArray = [18,64,99];

			// Only change code below this line
			myArray[0] = 45;
	    `}</pre>

  		<p>Access Multi-Dimensional Arrays With Indexes</p>
	    <pre>{`
			// Setup
			var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

			// Only change code below this line
			var myData = myArray[2][1];
	    `}</pre>

  		<p>Manipulate Arrays With push()</p>
	    <pre>{`
			// Setup
			var myArray = [["John", 23], ["cat", 2]];

			// Only change code below this line
			myArray.push(["dog", 3]);
	    `}</pre>
	    
  		<p>Manipulate Arrays With pop()</p>
	    <pre>{`
			// Setup
			var myArray = [["John", 23], ["cat", 2]];

			// Only change code below this line
			var removedFromMyArray = myArray.pop();
	    `}</pre>
	    
  		<p>Manipulate Arrays With shift()</p>
	    <pre>{`
			// Setup
			var myArray = [["John", 23], ["dog", 3]];

			// Only change code below this line
			var removedFromMyArray = myArray.shift();
	    `}</pre>

  		<p>Manipulate Arrays With unshift()</p>
	    <pre>{`
			// Setup
			var myArray = [["John", 23], ["dog", 3]];
			myArray.shift();
			myArray.unshift(["Paul",35]);
	    `}</pre>

	    



	</div>
  )

}