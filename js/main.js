//Array of object variables containing the zodiac

var zodiacSigns = [
  {
    sign: "aries",
    birthdate: "March 21-April 19",
    zodiac: "Aries are fire signs and those born under this element are regarded in astrology as adventurous, active and outgoing. It won't matter where you go or how remote or unusual it is - from the Outback to the Antarctic - you can be sure that an Aries has been there before you (or at the very least you will meet one along the way! ",
    image: "img/aries.jpg"
  },
  {
    sign: "taurus",
    birthdate: "April 20-May 20",
    zodiac: "Underneath their cool, calm and collected exterior, Taureans differ greatly from all the other signs of the zodiac. Taureans manage to discreetly stay apart from the crowd, even though they have a well-earned reputation for being socialisers. They will let others get close, but only so close as they want them. Some claim that trying to get your point across to a Taurean, should they not want to hear you, is rather similar to talking to the trees - they simply won't budge. And, there is no such thing as an open-book Taurean. ",
    image: "img/taurus.jpg"
  },
  {
    sign: "gemini",
    birthdate: "May 20-June 21",
    zodiac: "Mercury Ruled and multi-talented In ancient Greek mythology, Gemini's ruler - Mercury, was the light-footed messenger of the gods who darted back and forth across the heavens delivering news - which might explain why those born under the sign of the 'Twins' are always on the move; thirsty for knowledge and new experiences. Terminally curious and sometimes even mischievous, Geminis are multi-faceted souls who enjoy knowing a little bit of everything but generally not too much about one particular subject. It's just that variety is the spice of their lives! And no one is better at multi-tasking than the quixotic Gemini.",
    image: "img/gemini.jpg"
  },
  {
    sign: "cancer",
    birthdate: "June 21-July 22",
    zodiac: "Those born under the sign of Cancer, ruled by the mysterious Moon, are one of the zodiac's enigmas. It is fair to say that most Cancers are a bundle of contradictions. Compassionate and caring with friends, family and lovers, yet they can cut to the bone with their jealous remarks and ever-changing moods. Endearingly eccentric on one hand, and on the other, insecure about how others see them. Like their astrological symbol - the Crab - Cancers can appear hard and insensitive on the outside. However, for those of us who know and love a 'Moon Child', we understand that deep below lies a softness and sensitivity that makes them so very special. Nurturing, protection and caring for others underline the life principles of this water sign.",
    image: "img/cancer.jpg"
  },
  {
    sign: "leo",
    birthdate: "July 23-August 22",
    zodiac: "Love triumphs over all for this sign, which is ruled by the heart and operates from this dimension too. Leo's are born fortunate. Charismatic and positive-thinking they attract not only an abundance of friends and opportunities, but manage to survive life's stormy times with style and good humour. Their ruling planet is the Sun, and this is often reflected in their sunny and happy nature.",
    image: "img/leo.jpg"
  },
  {
    sign: "virgo",
    birthdate: "August 23-September 22",
    zodiac: "Virgos are often put down badly by many astrologers and written up as being fussy and narrow-minded. But when a Virgo shines, there is practically no sign to match their inner light. An in-tune Virgo is a treat to meet. They are efficient, have strong ethics and need to see the practical worth of any undertaking. When a Virgo is confident within themselves they are the most successful, structured and creative of all the signs. They set very high standards in anything they consider important and can be critical of others whose standards don’t reach their own. ",
    image: "img/virgo.jpg"
  },
  {
    sign: "libra",
    birthdate: "September 23-October 22",
    zodiac: "The Sun in Libra at the time of birth indicates that the deep behavioural patterns that characterise the life expression are shared activities aimed at seeking harmony and co-operation in relationships with others. The Libran’s life is coloured by an urge to bring harmony and balance not only into their own personal one-to-one dealings but into their immediate surroundings. As well, more than any other Sun sign, the essence of Libra is discovering one’s self in connection with another.",
    image: "img/libra.jpg"
  },
  {
    sign: "scorpio",
    birthdate: "October 23-November 21",
    zodiac: "Reputed to be the 'most powerful' sign of the zodiac, Scorpios lead fate filled lives and have intense and dramatic personal relationships. Even as children Scorpios are often found to be wise beyond their years. Many astrologers call this the sign of the 'oldest souls'. Old and wise beyond the average, Scorpios often know all the answers, except sometimes; they too often have difficulty finding what they need to develop their own happiness. ",
    image: "img/scorpio.jpg"
  },
  {
    sign: "sagittarius",
    birthdate: "November 22-December 21",
    zodiac: "Ruled by the benefic planet Jupiter, Sagittarians possess a natural exuberance, sense of adventure and love of life that makes them one of the most optimistic zodiac signs of all. Like their astrological symbol - the Archer - Sagittarians are renowned for aiming their sights towards whatever it is they find alluring - a love partner, dream job, vacation - and making it their own. They believe that anything is possible - and because of this belief system, Sagittarians are adept at seeking out their very own pot of gold at the end of the rainbow. ",
    image: "img/sagittarius.jpg"
  },
  {
    sign: "capricorn",
    birthdate: "December 22-January 19",
    zodiac: "The one thing a Capricorn must always try to do is balance work with play; otherwise they can become too one-sided and work can replace true personal emotional fulfilment. Continually climbing the eternal mountain of success, Capricornians rise to the occasion when faced with a new task or deadline. Even if something comes to a grinding halt, their ambition to reach the ultimate keeps them moving forever onwards and upwards (prompted by the strict influence of ruling planet Saturn). Although conservative and cautious, Goats are willing to try unusual approaches on their road to success in business or in love. Romantically, they desire a permanent relationship with someone who'll give them the affection they crave (and often neglect to give themselves!) ",
    image: "img/capricorn.jpg"
  },
  {
    sign: "aquarius",
    birthdate: "January 20- February 18",
    zodiac: "Special note for Aquarians: At the Dawn of the Age of Aquarius, at this time, ready or not, your sign is regarded as the zodiac's leader. You are the trendsetter for the future and because of this high responsibility, many born under your sign will be undergoing at this time, the pressure of personal change (particularly in your values and what makes you content and happy). Yours has always been a philanthropic sign. Now more than ever these qualities will be highlighted.",
    image: "img/aquarius.jpg"
  },
  {
    sign: "pisces",
    birthdate: "February 19-March 20",
    zodiac: "Mysterious and alluring individuals, most Pisces are extremely talented, but even though they are gifted in many ways, they still manage to spend most of their lives battling 'confusing' conditions. Pisces is the sign symbolised by the image of two fish. Their symbol depicts one fish heading upward, the other pulling downward. This mirrors how Pisceans are frequently torn between two pathways in life, or actually do live two very different existences at the same time.",
    image: "img/pisces.jpg"
  }
]

//function for finding the right zodiac and give the right info.
function getZodiac() {
  var usersign = document.getElementById("zodiac").value;

for(i = 0; i < zodiacSigns.length; i++){
  //if statement to match correct input to correct zodiac
  if(usersign === zodiacSigns[i].sign){

    document.getElementById("signName").textContent = zodiacSigns[i].sign;
    document.getElementById("zodiacPic").src = zodiacSigns[i].image;
    document.getElementById("birthdate").textContent = zodiacSigns[i].birthdate;
    document.getElementById("zodiacsign").textContent = zodiacSigns[i].zodiac;
    }
  }
}
