import { BsBarChart } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaCalendarAlt, FaDumbbell, FaInstagram, FaRegHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

const sweText = {
  "header": {
    "button": "BOKA DIN PLATS",
    "nav": ["START", "TRÄNING", "MEDLEMSKAP", "KONTAKT", "OM MIG"]
  },
  "footer": {
    "title": ["REDO ATT TA NÄSTA STEG?", "Boka din plats idag."],
    "button": "BOKA DIN PLATS →"
  },
  "about": {
    "title": ["Starkare kvinnor,", "tillsammans."],
    "subText": "SHE LIFTS är en girls only strength club där vi tränar styrka, bygger självförtroende och skapar en gemenskap som lyfter – på riktigt.",
    "aboutSections": [
      {
        label: "GRUNDAREN",
        title: "Hej, jag heter",
        italicTitle: "Kristin.",
        paragraphs: [
          "Jag är personlig tränare med över 15 års erfarenhet av styrketräning.",
          "Jag startade SHE LIFTS för att skapa en plats där kvinnor kan träna styrka tillsammans i en miljö som känns trygg, motiverande och personlig."
        ]
      },
      {
        label: "MIN VISION",
        title: "Mer än bara",
        italicTitle: "träning.",
        paragraphs: [
          "SHE LIFTS är för kvinnor som vill bli starkare, bygga muskler, utveckla sin teknik och känna sig mer självsäkra i gymmet.",
          "Jag tror att styrka inte bara är fysiskt, utan också mentalt. Här handlar det om att utmana sig själv, stötta varandra och ha kul på vägen."
        ]
      },
      {
        label: "SÅ TRÄNAR VI",
        title: "Små grupper,",
        italicTitle: "stora resultat.",
        paragraphs: [
          "Träningen sker i små grupper med 8 deltagare, vilket gör att varje person får individuell coaching samtidigt som vi följer upp progression.",
          "Oavsett om du är nybörjare eller erfaren får du coaching, vägledning och en gemenskap som motiverar dig att fortsätta utvecklas."
        ]
      }
    ],
    "endText": "BLI EN DEL AV SHE LIFTS"
  },
  "contact": {
    "title": "KONTAKT",
    "sub1": ["H", "ör av dig."],
    "sub2": ["Har du frågor om medlemskap, träning eller vill komma i kontakt med oss?", "Fyll i formuläret så svarar vi så snart vi kan."],
    "form": ["Namn *", "E-post *", "Ämne *", "Meddelande *"],
    "button": "SKICKA MEDDELANDE →",
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
        "title": "PLATS",
        "text": "Malmö, Limhamn"
      }
    ]
  },
  "error": "",
  "home": {
    "button": "BOKA DIN PLATS →",
    "iconSection": [
      {
        "icon": <FaDumbbell className="text-6xl" />,
        "title": "SMÅ GRUPPER",
        "text": "MAX 8 DELTAGARE"
      },
      {
        "icon": <FaRegHeart className="text-6xl" />,
        "title": "PERSONLIG COACHING",
        "text": "INDIVIDUELL VÄGLEDNING"
      },
      {
        "icon": <FaPeopleGroup className="text-6xl" />,
        "title": "GIRLS ONLY",
        "text": "TRYGG OCH MOTIVERANDE MILJÖ"
      },
      {
        "icon": <FaCalendarAlt className="text-6xl" />,
        "title": "3 MÅNADERS BLOCK",
        "text": "TYDLIG UTVECKLING"
      }
    ]
  },
  "member": {
    "title": "MEDLEMSKAP",
    "header": ["Välj ditt", "trä", "ningsblock."],
    "sub1": [
      "Samma tjejer | Samma coach | Tydlig progression",
      "Våra medlemskap är skapade för att ge dig kontinuitet, struktur och resultat - i en trygg och motiverande miljö."
    ],
    "membershipCards": [
      {
        "name": "BAS",
        "amount": "2 PASS / VECKAN",
        "info": "För dig som vill bygga styrka och utvecklas med personlig tränare en gång  veckan.",
        "price": "2 995 kr",
        "time": "för 12 veckor"
      },
      {
        "name": "FULL",
        "amount": "3 PASS / VECKAN",
        "info": "För dig som vill prioritera din träning och göra SHE LIFTS till en självklar del av din vardag.",
        "price": "4 595 kr",
        "time": "för 12 veckor"
      }
    ],
    "cardSub": "MEDLEMSKAP",
    "cardIcons": [
      {
        "icon": <FaPeopleGroup className="text-6xl" />,
        "text": ["MAX 8 ", "DELTAGARE"],
      },
      {
        "icon": <BsBarChart className="text-6xl" />,
        "text": ["PERSONLIG ", "COACHING"],
      },
      {
        "icon": <GoGear className="text-6xl" />,
        "text": ["STRUKTURERAD ", "TRÄNING"],
      }
    ],
    "button": "BOKA DIN PLATS →",
    "title2": "VANLIGA FRÅGOR",
    "header2": "Har du frågor?",
    "questions": [
      {
        "question": "Hur fungerar betalningen?",
        "answer": "Här skriver du hur betalningen fungerar."
      },
      {
        "question": "Kan jag byta tid under mitt träningsblock?",
        "answer": "Här beskriver du reglerna för att byta tid."
      },
      {
        "question": "Vad händer om jag missar ett pass?",
        "answer": "Här skriver du vad som gäller vid frånvaro."
      },
      {
        "question": "Hur många är det i varje grupp?",
        "answer": "Vi tränar i små grupper med max 6 deltagare."
      },
      {
        "question": "Behöver jag ha tidigare erfarenhet av styrketräning?",
        "answer": "Här beskriver du vilka förkunskaper som behövs."
      },
      {
        "question": "Vad ingår i medlemskapet?",
        "answer": "Här beskriver du vad medlemskapet innehåller."
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
  },
};

export default sweText;