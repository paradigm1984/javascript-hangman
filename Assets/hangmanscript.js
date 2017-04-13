/* ========================== VARIABLES ========================== */

var words = ["Apple", "Banana", "Orange", "Peach", "Kiwi"];

// chooses a random word from the array above
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
var s=[];

var count = 0;

// it will fill with the users input once they enter it
var answerArray = [];

var letter;



/* ========================== FUNCTIONS ========================== */


function startUp()
{

/* the iterator will start at 0, then check if the iterator is smaller
the length of the random word selected */
	for (i = 0; i < randomWord.length; i++)
	{
		/* the answer array choice will be equal to the space in the
		html */

		s.push(" _ ")
		console.log(s)
		

	/* calling on var s will join the answer */
	//s = answerArray.join(" _ ")	
	document.getElementById("answers").innerHTML = s.join(" ");
	
	}
};	

/* ============================ LOGIC =========================== */


// here i was trying to link the letterGuess function to the onKeyUp press
document.getElementById("letter").onkeyup = function letterGuess()
{

	/* this is pretty much saying if theres a word, becasue a word has to have
	more than 0 characters */ 

	for (i = 0; i < randomWord.length; i++)
	{	
		// if the random word equals the letter pressed
		if (randomWord[i] === letter)
		{
			//assign it to that letter
			answerArray[i] = letter;
											// trying to somehow push this to the empty fields
			document.getElementById("letter").innerHTML = answerArray.push();
			console.log("AYYYYYYY");
		}

	
	//how many times it takes to guess
	count++
	document.getElementById("counter").innerHTML = count;
			
	};

	if(count>5)
	{
		alert("CAREFUL");
	};

};


/*

Pete helped me get the first part. with the function startup, we were able to
get the element "answers" to populate. it runs a for loop to count how many spaces
there are in the word and then puts a blank space for each letter with the s.push

I was watching a video tutorial following it along. for the function letter, the for
loop does the same thing but this time to check if the key that youre pressing is
one of the letters. not sure how to initiate this. the first function we initiated 
on startup in the HTML. I tried doing <element onKeyUp="letter()"> in the HTML. From
how im making this out it could make sense? I think the if statement is saying if any 
the letters (represented by i) match the letter pressed, add it to the answer array. I think
in order to get the correctly guessed to show up in the space where the underscores are,
I would have to somehow link it after the for loop in the letterGuess function?? maybe with the
.push function?

At least I got the website to be responsive ¯\_(ツ)_/¯

*/




