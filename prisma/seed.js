const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "May you live all the days of your life.", author: "Jonathan Swift" },
    { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
    { text: "Keep smiling, because life is a beautiful thing and there’s so much to smile about.", author: "Marilyn Monroe" },
    { text: "Life is a long lesson in humility.", author: "James M. Barrie" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Love the life you live. Live the life you love.", author: "Bob Marley" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Life is ten percent what happens to us and ninety percent how we react to it.", author: "Charles R. Swindoll" },
    { text: "Do what you can, with what you’ve got, where you are.", author: "Theodore Roosevelt" },
    { text: "Life is about making an impact, not making an income.", author: "Kevin Kruse" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { text: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
    { text: "Do not let making a living prevent you from making a life.", author: "John Wooden" },
    { text: "In the end, it’s not the years in your life that count. It’s the life in your years.", author: "Abraham Lincoln" },
    { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
    { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
    // Repeat this pattern or add more quotes to reach 100
  ];

  for (const quote of quotes) {
    await prisma.quote.create({ data: quote });
  }

  console.log("100 quotes added to the database!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
