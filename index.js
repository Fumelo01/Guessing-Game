

console.clear();




//Number guessing game art form
console.log('\n\n✩░▒▓▆▅▃▂▁𝐍𝐔𝐌𝐁𝐄𝐑 𝐆𝐔𝐄𝐒𝐒𝐈𝐍𝐆 𝐆𝐀𝐌𝐄▁▂▃▅▆▓▒░✩\n\n\n')

console.log('What would you like to be called today? ')
let user = prompt()
console.log('\nWelcome ' + user + '!!!')

let j = prompt(" \nEnter 'i' to see about info \nPress the enter key to continue with game\n")
if (j == 'i') {

  console.log('\n╔════╗─────╔══╦╗─╔╦═══╗\n╚══╗═║─────╚╣╠╣║─║║╔═╗║\n──╔╝╔╬╗╔╦═╦╗║║║╚═╝║║─╚╝\n─╔╝╔╝║║║║╔╬╣║║╚══╗║║╔═╗\n╔╝═╚═╣╚╝║║║╠╣╠╗──║║╚╩═║\n╚════╩══╩╝╚╩══╝──╚╩═══╝')
  console.log('🇮​​​​​🇳​​​​​🇹​​​​​🇪​​​​​🇷​​​​​🇳​​​​​ :  🇦​​​​​🇩​​​​​🇪​​​​​🇳​​​​​🇺​​​​​🇬​​​​​🇦​​​​​ 🇴​​​​​🇱​​​​​🇺​​​​​🇼​​​​​🇦​​​​​🇫​​​​​🇺​​​​​🇳​​​​​🇲​​​​​🇮​​​​​🇱​​​​​🇦​​​​​🇾​​​​​🇴​​​​​')
  console.log('\n     For every level, The program makes a random number within the range you are given, You are to predict what this number is going to be. \n     There are a total of 10 levels in this game. Each level offers a maximum  of three (3) attempts.\n     If you fail to predict the correct number within three (3) attempts, you will be forced to exit the game')
  console.log('     For every level you win, you gain a total of 25 points for every unused attempt.')
  console.log('     Pass levels in fewer attempts to get a higher score.');
  console.log('\n                𝐆𝐨𝐨𝐝 𝐥𝐮𝐜𝐤 ' + user + '❗\n');



  prompt('\nContinue to  game:');
}







let range = '';


let lev = 0;
range = 2;
let guess = '';
let i = 3;
let nxtlevel = 0
const num = (range) => { return Math.floor(Math.random() * range) + 1 };
let a;
let score = 0;

//levels with escape characteracters where necessary
const lev0 = " _                    _     _____\n| |                  | |   |  _  |\n| |     _____   _____| |   | |/' |\n| |    / _ \\ \\ / / _ \\ |   |  /| |\n| |___|  __/\\ V /  __/ |   \\ |_/ /\n\\_____/\\___| \\_/ \\___|_|    \\___/"
const lev1 = ' _                    _     __\n| |                  | |   /  |\n| |     _____   _____| |   `| |\n| |    / _ \\ \\ / / _ \\ |    | |\n| |___|  __/\\ V /  __/ |   _| |_\n\\_____/\\___| \\_/ \\___|_|   \\___/'
const lev2 = " _                    _     _____\n| |                  | |   / __  \\\n| |     _____   _____| |   `' / /'\n| |    / _ \\ \\ / / _ \\ |     / /\n| |___|  __/\\ V /  __/ |   ./ /___\n\\_____/\\___| \\_/ \\___|_|   \\_____/"
const lev3 = ' _                    _     _____\n| |                  | |   |____ |\n| |     _____   _____| |       / /\n| |    / _ \\ \\ / / _ \\ |       \\ \\\n| |___|  __/\\ V /  __/ |   .___/ /\n\\_____/\\___| \\_/ \\___|_|   \\____/'
const lev4 = ' _                    _       ___\n| |                  | |     /   |\n| |     _____   _____| |    / /| |\n| |    / _ \\ \\ / / _ \\ |   / /_| |\n| |___|  __/\\ V /  __/ |   \\___  |\n\\_____/\\___| \\_/ \\___|_|       |_/'
const lev5 = ' _                    _     _____\n| |                  | |   |  ___|\n| |     _____   _____| |   |___ \\\n| |    / _ \\ \\ / / _ \\ |       \\ \\\n| |___|  __/\\ V /  __/ |   /\\__/ /\n\\_____/\\___| \\_/ \\___|_|   \\____/'
const lev6 = ' _                    _      ____\n| |                  | |    / ___|\n| |     _____   _____| |   / /___\n| |    / _ \\ \\ / / _ \\ |   | ___ \\\n| |___|  __/\\ V /  __/ |   | \\_/ |\n\\_____/\\___| \\_/ \\___|_|   \\_____/'
const lev7 = ' _                    _     ______\n| |                  | |   |___  /\n| |     _____   _____| |      / /\n| |    / _ \\ \\ / / _ \\ |     / /\n| |___|  __/\\ V /  __/ |   ./ /\n\\_____/\\___| \\_/ \\___|_|   \\_/'
const lev8 = ' _                    _     _____\n| |                  | |   |  _  |\n| |     _____   _____| |    \\ V /\n| |    / _ \\ \\ / / _ \\ |    / _ \\\n| |___|  __/\\ V /  __/ |   | |_| |\n\\_____/\\___| \\_/ \\___|_|   \\_____/'
const lev9 = ' _                    _     _____\n| |                  | |   |  _  |\n| |     _____   _____| |   | |_| |\n| |    / _ \\ \\ / / _ \\ |   \\____ |\n| |___|  __/\\ V /  __/ |   .___/ /\n\\_____/\\___| \\_/ \\___|_|   \\____/'
const lev10 = " _                    _     __  _____\n| |                  | |   /  ||  _  |\n| |     _____   _____| |   `| || |/' |\n| |    / _ \\ \\ / / _ \\ |    | ||  /| |\n| |___|  __/\\ V /  __/ |   _| |\\ |_/ /\n\\_____/\\___| \\_/ \\___|_|   \\___/\\___/"


let art = [lev0, lev1, lev2, lev3, lev4, lev5, lev6, lev7, lev8, lev9, lev10];




do {
  /* code */
  console.clear();
  console.log('\n\n✩░▒▓▆▅▃▂▁𝐍𝐔𝐌𝐁𝐄𝐑 𝐆𝐔𝐄𝐒𝐒𝐈𝐍𝐆 𝐆𝐀𝐌𝐄▁▂▃▅▆▓▒░✩')

  //Number guessing game art form
  console.log('\n \n \n')
  console.log(art[lev])
  a = num(range);
  nxtlevel = lev + 1;

  do {


    if (i <= 0) {
      console.log('\nSorry ' + user + ', You have made too many wrong guesses for one level');
      console.log('\n The number is => ' + a);
      console.log('\nYour total score is ' + score)
      console.log('\n\n  𝕆𝕠𝕡𝕤𝕚𝕖𝕤❕\n\n');
      //game
      console.log('░██████╗░░█████╗░███╗░░░███╗███████╗\n██╔════╝░██╔══██╗████╗░████║██╔════╝\n██║░░██╗░███████║██╔████╔██║█████╗░░\n██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░\n╚██████╔╝██║░░██║██║░╚═╝░██║███████╗\n░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝\n')
      //over
      console.log(' ░█████╗░██╗░░░██╗███████╗██████╗░\n ██╔══██╗██║░░░██║██╔════╝██╔══██╗\n ██║░░██║╚██╗░██╔╝█████╗░░██████╔╝\n ██║░░██║░╚████╔╝░██╔══╝░░██╔══██╗\n ╚█████╔╝░░╚██╔╝░░███████╗██║░░██║\n ░╚════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝\n\n')
      process.exit(0)
    }

    console.log('\n Guess a number between 1 and ' + range);
    guess = prompt();
    //console.log('\n The number is => ' + a);

    if (a == guess) {
      score = score + (i * 25);
      console.log('Congrats!!! You guessed correctly');
      console.log('\n The number is => ' + a);
      console.log('\nCurrent score: ' + score)
      console.log('You will now be moved to Level ' + nxtlevel + '\n');
      prompt('Press the Enter key to continue');
      break;
    } else {
      i--;
      console.log('Oops, You guessed wrongly');
      console.log('You have ' + i + ' attempts remaining');
    }



  } while (a != guess);

  //console.log (num(range));
  lev++;
  range++;

  i = 3;
} while (lev < 11);


console.log('\nYour total score is ' + score)
console.log('\nCongratulations  for completing all levels.\nYou ' + user + ' are a champion\n\n')
//you
console.log('  ██╗░░░██╗░█████╗░██╗░░░██╗\n  ╚██╗░██╔╝██╔══██╗██║░░░██║\n  ░╚████╔╝░██║░░██║██║░░░██║\n  ░░╚██╔╝░░██║░░██║██║░░░██║\n  ░░░██║░░░╚█████╔╝╚██████╔╝\n  ░░░╚═╝░░░░╚════╝░░╚═════╝░\n')
//won
console.log('░██╗░░░░░░░██╗░█████╗░███╗░░██╗\n░██║░░██╗░░██║██╔══██╗████╗░██║\n░╚██╗████╗██╔╝██║░░██║██╔██╗██║\n░░████╔═████║░██║░░██║██║╚████║\n░░╚██╔╝░╚██╔╝░╚█████╔╝██║░╚███║\n░░░╚═╝░░░╚═╝░░░╚════╝░╚═╝░░╚══╝\n\n')














