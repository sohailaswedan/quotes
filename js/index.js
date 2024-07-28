quotes=[`“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
`“So many books, so little time.”
― Frank Zappa`,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,
`“You only live once, but if you do it right, once is enough.”
― Mae West`,
`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
― C.S. Lewis, The Four Loves`,
`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
― Maya Angelou`];
var quoteDisplay=document.getElementById("quote");
function displayQuote()
{
    var num = Math.floor(Math.random()*quotes.length);
    quoteDisplay.innerHTML=quotes[num];
}
