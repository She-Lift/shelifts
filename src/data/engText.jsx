import { BsBarChart } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaCalendarAlt, FaDumbbell, FaInstagram, FaRegHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

const engText = {
  "header": {
    "button": "BOOK YOUR SPOT",
    "nav": ["START", "TRAINING", "MEMBERSHIP", "CONTACT", "ABOUT"]
  },
  "footer": {
    "title": ["READY TO TAKE THE NEXT STEP?", "Book your spot today."],
    "button": "BOOK YOUR SPOT →"
  },
  "about": {
    "title": ["Stronger women,", "together."],
    "subText": "SHE LIFTS is a girls-only strength club where we train for strength, build self-confidence, and create a community that uplifts - for real.",
    "aboutSections": [
      {
        label: "THE FOUNDER",
        title: "Hi, my name is",
        italicTitle: "Kristin.",
        paragraphs: [
          "I am a personal trainer with over 15 years of experience in strength training.",
          "I started SHE LIFTS to create a space where women can do strength training together in an environment that feels safe, motivating, and personal."
        ]
      },
      {
        label: "MY VISION",
        title: "More than just",
        italicTitle: "exercise.",
        paragraphs: [
          "SHE LIFTS is for women who want to get stronger, build muscle, develop their technique, and feel more confident in the gym.",
          "I believe that strength is not just physical, but also mental. It’s about challenging yourself, supporting one another, and having fun along the way."
        ]
      },
      {
        label: "HOW WE TRAIN",
        title: "Small groups,",
        italicTitle: "big results.",
        paragraphs: [
          "Training takes place in small groups with 8 participants, ensuring that each person receives individual coaching while we track their progress.",
          "Whether you are a beginner or experienced, you receive coaching, guidance, and a community that motivates you to keep developing."
        ]
      }
    ],
    "endText": "BECOME PART OF SHE LIFTS"
  },
  "contact": {
    "title": "CONTACT",
    "sub1": ["G", "et in touch"],
    "sub2": ["Do you have questions about membership or training, or would you like to get in touch with us?", "Fill out the form and we will respond as soon as we can."],
    "form": ["Name *", "E-post *", "Subject *", "Message *"],
    "button": "SEND MESSAGE →",
    "iconSection": [
      {
        "icon": <CiMail className="text-6xl" />,
        "title": "E-POST",
        "text": "info@shelifts.se"
      },
      {
        "icon": <FaInstagram className="text-6xl" />,
        "title": "INSTAGRAM",
        "text": "@shelifts.se"
      },
      {
        "icon": <IoLocationOutline className="text-6xl" />,
        "title": "PLACE",
        "text": "Malmö, Limhamn"
      }
    ]
  },
  "error": "",
  "home": {
    "button": "BOOK YOUR SPOT →",
    "iconSection": [
      {
        "icon": <FaDumbbell className="text-6xl" />,
        "title": "SMALL GROUPS",
        "text": "MAX 8 PARTICIPANTS"
      },
      {
        "icon": <FaRegHeart className="text-6xl" />,
        "title": "PERSONAL COACHING",
        "text": "INDIVIDUAL GUIDANCE"
      },
      {
        "icon": <FaPeopleGroup className="text-6xl" />,
        "title": "GIRLS ONLY",
        "text": "SAFE AND MOTIVATING ENVIRONMENT"
      },
      {
        "icon": <FaCalendarAlt className="text-6xl" />,
        "title": "3-MONTH BLOCK",
        "text": "CLEAR DEVELOPMENT"
      }
    ]
  },
  "member": {
    "title": "MEMBERSHIP",
    "header": ["Select your ", "tra", "ining block."],
    "sub1": [
      "Same girls | Same coach | Clear progression",
      "Our memberships are designed to provide you with continuity, structure, and results—in a safe and motivating environment."
    ],
    "membershipCards": [
      {
        "name": "BASE",
        "amount": "2 SESSIONS / WEEK",
        "info": "For those who want to build strength and progress with a personal trainer once a week.",
        "price": "2 995 kr",
        "time": "for 12 weeks"
      },
      {
        "name": "FULL",
        "amount": "3 SESSIONS / WEEK",
        "info": "For those who want to prioritize their training and make SHE LIFTS a natural part of their everyday life.",
        "price": "4 595 kr",
        "time": "for 12 weeks"
      }
    ],
    "cardSub": "MEMBERSHIP",
    "cardIcons": [
      {
        "icon": <FaPeopleGroup className="text-6xl" />,
        "text": ["MAX 8 ", "PARTICIPANT"],
      },
      {
        "icon": <BsBarChart className="text-6xl" />,
        "text": ["PERSONAL  ", "COACHING"],
      },
      {
        "icon": <GoGear className="text-6xl" />,
        "text": ["STRUCTURED ", "TRAINING"],
      }
    ],
    "button": "BOOK YOUR SPOT →",
    "title2": "FAQ",
    "header2": "Do you have any questions?",
    "questions": [
      {
        "question": "How does the payment work?",
        "answer": "Comming soon."
      },
      {
        "question": "Can I change my time slot during my training block?",
        "answer": "Comming soon."
      },
      {
        "question": "What happens if I miss a session?",
        "answer": "Comming soon."
      },
      {
        "question": "How many are there in each group?",
        "answer": "Comming soon."
      },
      {
        "question": "Do I need to have previous experience with strength training?",
        "answer": "Comming soon."
      },
      {
        "question": "What is included in the membership?",
        "answer": "Comming soon."
      }
    ]
  },
  "training": {
    "title": "TRÄNING",
    "header": ["Starkare kropp,", "star", "kare du."],
    "sub1": "På SHE LIFTS tränar vi styrketräning i små grupper där du får det bästa av två världar - personlig coaching och gemenskap.",
    "sub2": "Du följer ett strukturerat träningsupplägg med fokus på att bygga syrka, muskler och självförtroende. Vi tränar tillsammans, men du får fortfarande den individuella vägledning du behöver för att utvecklas.",
    "title2": "SÅ FUNGERAR DET",
    "numberSection": [
      {
        "number": "01",
        "subject": ["SMÅ", "GRUPPER"],
        "text": "Max 6 kvinnor per grupp. Det gör att jag kan se dig, korrigera din teknik och följa din utveckling - samtidigt som du får energi och gemenskapen från att träna tillsammans med andra."
      },
      {
        "number": "02",
        "subject": ["PER", "SONLIG COACHING"],
        "text": "Du får individuell vägledning varje pass. Jag hjälper dig med teknik, belastning, övningsutförande och progression.Målet är inte bara att du ska träna hårt - utan att du ska träna rätt."
      },
      {
        "number": "03",
        "subject": ["STR", "UKTURERAD TRÄNING"],
        "text": "Träningen är placerad i block så att du kan bygga styrka, utvecklas och faktiskt se dina resultat över tid."
      }
    ],
    "title3": ["Mer än ", "bara träning."],
    "sub3": "SHE LIFTS är för kvinnor som vill bygga muskler, bli starkare och känna sig mer självsäkra - både i gymmet och i vardagen.",
    "": "",
    "iconSection": [
      {
        "icon": <FaDumbbell className="text-6xl" />,
        "title": "BYGG MUSKLER",
        "text": ["Fokuserad och ", "effektiv styrketräning"]
      },
      {
        "icon": <GrLineChart className="text-6xl" />,
        "title": "BLI STARKARE",
        "text": ["Tydlig och progression ", "som utmanar dig."]
      },
      {
        "icon": <GoGear className="text-6xl" />,
        "title": "LÄR DIG TEKNIK",
        "text": ["Trygg och effektiv träning ", "med personlig coaching."]
      },
      {
        "icon": <FaPeopleGroup className="text-6xl" />,
        "title": "HA KUL",
        "text": ["Träning blir bättre ", "när man gör den tillsammans."]
      }
    ],
    "title4": "TRE MÅNADER",
    "header2": ["En tydlig ", "re", "sa framåt."],
    "sub4": "Hos SHE LIFTS tränar du i 3-månadersblock. Det ger oss tid att faktiskt bygga något - istället för att bara gå från pass till pass.",
    "steps": [
      {
        "number": "01",
        "title": "START",
        "description": "Vi lär känna din nivå och sätter grunden."
      },
      {
        "number": "02",
        "title": "BYGG",
        "description": "Vi ökar belastningen, förbättrar tekniken och bygger styrka."
      },
      {
        "number": "03",
        "title": "UTVECKLAS",
        "description": "Vi följer dina resultat och fortsätter utmana dig."
      }
    ],
  }
};

export default engText;