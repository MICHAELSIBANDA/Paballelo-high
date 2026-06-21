export type Language = 'en' | 'xh' | 'af' | 'tn';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
  { code: 'tn', name: 'Setswana', nativeName: 'Setswana' },
];

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      academics: 'Academics',
      sportsculture: 'Sports & Culture',
      admissions: 'Admissions',
      news: 'News & Events',
      gallery: 'Gallery',
      contact: 'Contact',
      apply: 'Apply Now',
    },
    // Gallery
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments From Our School Community',
      description: 'A glimpse into life at Paballelo High School - our learners, events, celebrations, sports, and cultural activities. Photos from our Facebook community.',
      backHome: 'Back to Home',
      viewFacebook: 'See More on Facebook',
      emptyTitle: 'Photos Coming Soon',
      emptyText: 'We are gathering the latest photos from our Facebook page. Check back soon to see moments from our school community.',
      categories: {
        all: 'All',
        events: 'Events',
        sports: 'Sports',
        culture: 'Culture',
        academics: 'Academics',
        community: 'Community',
      },
    },
    // Hero
    hero: {
      title: 'We Shall Mount Up',
      subtitle: 'With Wings Like Eagles',
      description: 'Paballelo High School is committed to academic excellence, leadership development, sports participation, and community empowerment while preparing learners for a successful future.',
      cta: 'Explore Our School',
      secondary: 'View Our Achievements',
    },
    // Stats
    stats: {
      students: 'Learners',
      teachers: 'Teachers',
      passRate: '2025 Matric Pass Rate',
      activities: 'Extracurricular Activities',
      years: 'Years Serving Community',
    },
    // About
    about: {
      title: 'About Paballelo High School',
      subtitle: 'Building Leaders for Tomorrow',
      description: 'Paballelo High School is an Urban Public school based in Paballelo Township, Upington, Northern Cape. We serve learners from Grade 8 to Grade 12 and are one of the leading public secondary schools in the region. The school has played a significant role in educating and empowering generations of learners from the local community through quality education, discipline, sports, culture, and leadership development.',
      mission: 'Our Mission',
      missionText: 'To provide accessible, quality education that empowers learners academically, socially, and morally while preparing them for higher education and the workplace.',
      vision: 'Our Vision',
      visionText: 'To become a center of educational excellence in the Northern Cape, producing responsible, disciplined, and successful citizens.',
      learnMore: 'Learn More About Us',
    },
    // History
    history: {
      title: 'Our History',
      description: 'Paballelo High School has served the Upington and Paballelo community for decades as one of the townships major educational institutions. Over the years, the school has become known for resilience despite socio-economic challenges, academic improvement, learner discipline, community involvement, sports participation, and cultural excellence.',
    },
    // Academics
    academics: {
      title: 'Academic Excellence',
      subtitle: 'Comprehensive Curriculum for Success',
      description: 'Our academic programs are designed to challenge and inspire learners while preparing them for success in higher education and the workplace. We achieved an 86.7% matric pass rate in 2025.',
      subjects: 'Core Subjects',
      subjectsList: ['Mathematics', 'Mathematical Literacy', 'Physical Sciences', 'Life Sciences', 'English', 'Afrikaans', 'IsiXhosa', 'Setswana', 'Geography', 'History', 'Business Studies', 'Accounting', 'Economics', 'Tourism', 'CAT'],
      extracurricular: 'Extra-curricular',
      extracurricularList: ['Soccer', 'Netball', 'Athletics', 'Volleyball', 'Rugby', 'Chess', 'Choir', 'Drama', 'Poetry', 'Debate', 'Traditional Dance', 'Public Speaking'],
      support: 'Academic Support Programs',
      supportList: ['Afternoon classes', 'Saturday classes', 'Matric camps', 'Career guidance', 'Study groups', 'Teacher mentorship'],
    },
    // Sports & Culture
    sportsculture: {
      title: 'Sports & Culture',
      subtitle: 'Developing Well-Rounded Learners',
      sports: 'Sports Offered',
      sportsList: ['Soccer', 'Netball', 'Athletics', 'Volleyball', 'Cross Country', 'Chess', 'School Tournaments'],
      culture: 'Cultural Activities',
      cultureList: ['Choir', 'Drama', 'Poetry', 'Debate', 'Traditional Dance', 'Public Speaking', 'Heritage Day Celebrations'],
    },
    // Admissions
    admissions: {
      title: 'Join Our School',
      subtitle: 'Start Your Journey With Us',
      description: 'We welcome applications from learners who are committed to academic excellence and personal growth. Our admissions process is designed to identify motivated learners who will thrive in our environment.',
      requirements: 'Requirements',
      requirementsList: ['Previous academic records', 'Birth certificate', 'ID photographs', 'Parent/Guardian ID', 'Proof of residence'],
      deadline: 'Application Deadline',
      deadlineText: 'Applications for the upcoming academic year close on 30 September.',
      applyNow: 'Start Your Application',
    },
    // News
    news: {
      title: 'News & Events',
      subtitle: 'Stay Connected With Our Community',
      readMore: 'Read More',
      viewAll: 'View All News',
    },
    // Contact
    contact: {
      title: 'Get In Touch',
      subtitle: 'We Would Love to Hear From You',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Office Hours',
      hoursText: 'Monday - Friday: 07:30 - 16:00',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
      },
    },
    // Footer
    footer: {
      tagline: 'Empowering Learners Through Education, Discipline, and Excellence',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    // Common
    common: {
      language: 'Language',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },
    // Principal
    principal: {
      title: 'Principal Message',
      message: 'Welcome to Paballelo High School, a school dedicated to empowering learners through education, discipline, leadership, and community values. We strive to create opportunities for every learner to succeed academically and socially.',
    },
    // Achievements
    achievements: {
      title: 'Achievements',
      subtitle: 'Our Achievements',
      description: 'Celebrating excellence in academics, sports, and personal development',
      viewAll: 'View All Achievements',
      category: {
        academic: 'Academic',
        extracurricular: 'Extra-Curricular',
        student: 'Student',
      },
    },
    // Staff
    staff: {
      title: 'Our Team',
      subtitle: 'Meet Our Staff',
      description: 'Dedicated professionals working together for educational excellence',
      meetTeam: 'Meet Our Team',
    },
    // School Structure
    schoolStructure: {
      title: 'School Structure',
      subtitle: 'Leadership',
      description: 'Our school leadership team',
      viewStaff: 'View Staff Page',
    },
  },
  xh: {
    // Navigation
    nav: {
      home: 'Ikhaya',
      about: 'Ngathi',
      academics: 'Imfundo',
      sportsculture: 'Imidlalo Nenkcubeko',
      admissions: 'Ubhaliso',
      news: 'Iindaba Neziganeko',
      gallery: 'Igalari',
      contact: 'Qhagamshelana',
      apply: 'Faka Isicelo',
    },
    // Gallery
    gallery: {
      title: 'Igalari',
      subtitle: 'Imizuzu Yoluntu Lwesikolo Sethu',
      description: 'Ukujonga ubomi eSikolo Samabanga Aphakamileyo sasePaballelo - abafundi bethu, iziganeko, imibhiyozo, imidlalo, kunye nemisebenzi yenkcubeko. Iifoto ezivela kuluntu lwethu lwaseFacebook.',
      backHome: 'Buyela Ekhaya',
      viewFacebook: 'Bona Okungakumbi kuFacebook',
      emptyTitle: 'Iifoto Ziyeza Kungekudala',
      emptyText: 'Siqokelela iifoto zakutsha nje kwiphepha lethu leFacebook. Buyela kungekudala ukubona imizuzu yoluntu lwesikolo sethu.',
      categories: {
        all: 'Konke',
        events: 'Iziganeko',
        sports: 'Imidlalo',
        culture: 'Inkcubeko',
        academics: 'Imfundo',
        community: 'Uluntu',
      },
    },
    // Hero
    hero: {
      title: 'We Shall Mount Up',
      subtitle: 'With Wings Like Eagles',
      description: 'Isikolo Samabanga Aphakamileyo sasePaballelo sizinikele kubuchule bemfundo, uphuhliso lwabokhokheli, ukuthatha inxaxheba kwezemidlalo, kunye nokunikela amandla uluntu ngelixa silungiselela abafundi ikamva eliphumeleleyo.',
      cta: 'Phonononga Isikolo Sethu',
      secondary: 'Jonga Izinto Esizifezileyo',
    },
    // Stats
    stats: {
      students: 'Abafundi',
      teachers: 'Ootitshala',
      passRate: 'Izinga Lokupasa KweMatriki 2025',
      activities: 'Imisebenzi Yangaphandle',
      years: 'Iminyaka Sikhonza Uluntu',
    },
    // About
    about: {
      title: 'Ngethelo Samabanga Aphakamileyo sasePaballelo',
      subtitle: 'Sakha Iinkokheli Zangomso',
      description: 'Sifumaneka entliziyweni yelokishi yasePaballelo eUpington, Isikolo Samabanga Aphakamileyo sasePaballelo sesinye sezikolo zikarhulumente eziphambili eMntla Koloni. Isikolo sidlale indima ebalulekileyo ekufundiseni nasekukhuthazeni izizukulwana zabafundi abasuka kuluntu lwasekuhlaleni ngemfundo esemgangathweni, isidima, imidlalo, inkcubeko, nophuhliso lwabokhokheli.',
      mission: 'Injongo Yethu',
      missionText: 'Ukunikela imfundo efumanekayo nesemagqabini ekhuthaza abafundi ngokwemfundo, ngokwentlalo, nangokoziphatha ngelixa sibalungiselela imfundo ephakamileyo nendawo yokusebenza.',
      vision: 'Umbono Wethu',
      visionText: 'Ukuba yiziko lobuchule bemfundo eMntla Koloni, elivelisa abemi abanoxanduva, abanoziphatha, nabaphumeleleyo.',
      learnMore: 'Funda Ngaphezulu Ngathi',
    },
    // History
    history: {
      title: 'Imbali Yethu',
      description: 'Isikolo Samabanga Aphakamileyo sasePaballelo sikhonze uluntu lwaseUpington nasePaballelo iminyaka emininzi njengenye yeendawo zemfundo eziphambili zelokishi.',
    },
    // Academics
    academics: {
      title: 'Ubuchule Kwimfundo',
      subtitle: 'Iikharikhulamu Ezipheleleyo Zempumelelo',
      description: 'Iinkqubo zethu zemfundo zenzelwe ukucela umngeni nokutshiswa kwabafundi ngelixa sibalungiselela impumelelo kwimfundo ephakamileyo nendawo yokusebenza. Sifumene izinga lokupasa lika-86.7% ngonyaka ka-2025.',
      subjects: 'Izifundo Ezisisiseko',
      subjectsList: ['Imathematika', 'Ukufunda Kwemathematika', 'Isayensi Yezinto Eziphilayo', 'Isayensi Yobomi', 'IsiNgesi', 'IsiBhulu', 'IsiXhosa', 'Setswana', 'IJografi', 'Imbali', 'Izifundo ZeShishini', 'I-Akhawunting', 'I-Ekonomi', 'Uhambo', 'CAT'],
      extracurricular: 'Imisebenzi Yangaphandle',
      extracurricularList: ['Ibhola', 'Unetibholi', 'Ukugijima', 'Uvolibholi', 'IRagbi', 'Itshesi', 'Ikwayara', 'Idrama', 'Imibongo', 'Intetho', 'Umdaniso Wesintu', 'Ukuthetha Esidlangalaleni'],
      support: 'Iinkqubo Zenkxaso Yemfundo',
      supportList: ['Iiklasi zasemva kwemini', 'Iiklasi zangeMgqibelo', 'Iikampu zeMatriki', 'Isikhokelo somsebenzi', 'Amaqela okufunda', 'Ukuxhaswa ngootitshala'],
    },
    // Sports & Culture
    sportsculture: {
      title: 'Imidlalo Nenkcubeko',
      subtitle: 'Siphuhlisa Abafundi Abapheleleyo',
      sports: 'Imidlalo Enikezelwayo',
      sportsList: ['Ibhola', 'Unetibholi', 'Ukugijima', 'Uvolibholi', 'Ukugijima Kwehlathi', 'Itshesi', 'Iitumente Zesikolo'],
      culture: 'Imisebenzi Yenkcubeko',
      cultureList: ['Ikwayara', 'Idrama', 'Imibongo', 'Intetho', 'Umdaniso Wesintu', 'Ukuthetha Esidlangalaleni', 'Imibhiyozo Yosuku Lwemveli'],
    },
    // Admissions
    admissions: {
      title: 'Joyina Isikolo Sethu',
      subtitle: 'Qala Uhambo Lwakho Nathi',
      description: 'Samkela izicelo kubafundi abazinikele kubuchule bemfundo nokukhula komntu. Inkqubo yethu yokwamkela yenzelwe ukuchonga abafundi abakhutheleyo abaya kuphumelela kwindawo yethu.',
      requirements: 'Izidingo',
      requirementsList: ['Iirekhodi zemfundo yangaphambili', 'Isatifikethi sokuzalwa', 'Iifoto ze-ID', 'I-ID yomzali/umgcini', 'Ubungqina bendawo yokuhlala'],
      deadline: 'Umhla Wokuvala Kwezicelo',
      deadlineText: 'Izicelo zonyaka wemfundo ozayo zivalwa ngomhla wama-30 kuSeptemba.',
      applyNow: 'Qala Isicelo Sakho',
    },
    // News
    news: {
      title: 'Iindaba Neziganeko',
      subtitle: 'Hlala Unxibelelwano Noluntu Lwethu',
      readMore: 'Funda Ngaphezulu',
      viewAll: 'Jonga Zonke Iindaba',
    },
    // Contact
    contact: {
      title: 'Sifumane',
      subtitle: 'Singathanda Ukuva Kuwe',
      address: 'Idilesi',
      phone: 'Ifowuni',
      email: 'I-imeyili',
      hours: 'Iiyure Ze-ofisi',
      hoursText: 'UMvulo - ULwesihlanu: 07:30 - 16:00',
      form: {
        name: 'Igama Elipheleleyo',
        email: 'Idilesi Ye-imeyili',
        subject: 'Isihloko',
        message: 'Umyalezo Wakho',
        send: 'Thumela Umyalezo',
      },
    },
    // Footer
    footer: {
      tagline: 'Sinika Amandla Abafundi Ngemfundo, Isidima, Nobuchule',
      quickLinks: 'Amakhonkco Akhawulezayo',
      contactInfo: 'Inkcazelo Yoqhagamshelwano',
      followUs: 'Silandele',
      rights: 'Onke amalungelo agcinwe.',
      privacy: 'Umgaqo-nkqubo Wabucala',
      terms: 'Imiqathango Yenkonzo',
    },
    // Common
    common: {
      language: 'Ulwimi',
      darkMode: 'Imowudi Emnyama',
      lightMode: 'Imowudi Ekhanyayo',
    },
    // Principal
    principal: {
      title: 'Umyalezo Wenqununu',
      message: 'Wamkelekile kwisikolo samabanga aphakamileyo sasePaballelo, isikolo esizinikele ekunikeni amandla abafundi ngemfundo, isidima, ubunkokeli, kunye namaxabiso oluntu.',
    },
    // Achievements
    achievements: {
      title: 'Izinto Esizifezileyo',
      subtitle: 'Izinto Esizifezileyo',
      description: 'Ibhiyozo zokuphumelela kwimfundo, imidlalo, nokukhula komntu',
      viewAll: 'Jonga Zonke Izinto Esizifezileyo',
      category: {
        academic: 'Imfundo',
        extracurricular: 'Imisebenzi Yangaphandle',
        student: 'Umfundi',
      },
    },
    // Staff
    staff: {
      title: 'Iqala Lethu',
      subtitle: 'Jonga Abasebenzi Bethu',
      description: 'Abasebenzi abazinikeleyo abasebenza kunye ukuphumelela kwimfundo',
      meetTeam: 'Jonga Iqala Lethu',
    },
    // School Structure
    schoolStructure: {
      title: 'Ubume Besikolo',
      subtitle: 'Abokhokheli',
      description: 'Iqala labokhokheli besikolo sethu',
      viewStaff: 'Jonga Ikhasa Labasebenzi',
    },
  },
  af: {
    // Navigation
    nav: {
      home: 'Tuis',
      about: 'Oor Ons',
      academics: 'Akademie',
      sportsculture: 'Sport & Kultuur',
      admissions: 'Toelating',
      news: 'Nuus & Gebeure',
      gallery: 'Galery',
      contact: 'Kontak',
      apply: 'Doen Aansoek',
    },
    // Gallery
    gallery: {
      title: 'Galery',
      subtitle: 'Oomblikke Uit Ons Skoolgemeenskap',
      description: 'n Blik op die lewe by Paballelo Hoerskool - ons leerders, gebeure, vieringe, sport en kulturele aktiwiteite. Fotos uit ons Facebook-gemeenskap.',
      backHome: 'Terug na Tuis',
      viewFacebook: 'Sien Meer op Facebook',
      emptyTitle: 'Fotos Kom Binnekort',
      emptyText: 'Ons versamel die nuutste fotos van ons Facebook-bladsy. Kom binnekort terug om oomblikke uit ons skoolgemeenskap te sien.',
      categories: {
        all: 'Alles',
        events: 'Gebeure',
        sports: 'Sport',
        culture: 'Kultuur',
        academics: 'Akademie',
        community: 'Gemeenskap',
      },
    },
    // Hero
    hero: {
      title: 'We Shall Mount Up',
      subtitle: 'With Wings Like Eagles',
      description: 'Paballelo Hoerskool is toegewy aan akademiese uitnemendheid, leierskapsontwikkeling, sportdeelname en gemeenskapsbemagtiging terwyl leerders voorberei word vir n suksesvolle toekoms.',
      cta: 'Verken Ons Skool',
      secondary: 'Bekyk Ons Prestasies',
    },
    // Stats
    stats: {
      students: 'Leerders',
      teachers: 'Onderwysers',
      passRate: '2025 Matriek Slaagsyfer',
      activities: 'Buitemuurse Aktiwiteite',
      years: 'Jare van Gemeenskapsdiens',
    },
    // About
    about: {
      title: 'Oor Paballelo Hoerskool',
      subtitle: 'Bou Leiers vir More',
      description: 'Gelee in die hart van Paballelo Township in Upington, is Paballelo Hoerskool een van die voorste openbare sekondere skole in die Noord-Kaap. Die skool het n beduidende rol gespeel in die opvoeding en bemagtiging van geslagte leerders uit die plaaslike gemeenskap deur kwaliteit onderwys, dissipline, sport, kultuur en leierskapsontwikkeling.',
      mission: 'Ons Missie',
      missionText: 'Om toeganklike, kwaliteit onderwys te verskaf wat leerders akademies, sosiaal en moreel bemagtig terwyl hulle voorberei word vir hoer onderwys en die werkplek.',
      vision: 'Ons Visie',
      visionText: 'Om n sentrum van opvoedkundige uitnemendheid in die Noord-Kaap te word, wat verantwoordelike, gedissiplineerde en suksesvolle burgers produseer.',
      learnMore: 'Leer Meer Oor Ons',
    },
    // History
    history: {
      title: 'Ons Geskiedenis',
      description: 'Paballelo Hoerskool het die Upington en Paballelo gemeenskap vir dekades gedien as een van die township se groot opvoedkundige instellings.',
    },
    // Academics
    academics: {
      title: 'Akademiese Uitnemendheid',
      subtitle: 'Omvattende Kurrikulum vir Sukses',
      description: 'Ons akademiese programme is ontwerp om leerders uit te daag en te inspireer terwyl hulle voorberei word vir sukses in hoer onderwys en die werkplek. Ons het n 86.7% matriek slaagsyfer in 2025 behaal.',
      subjects: 'Kernvakke',
      subjectsList: ['Wiskunde', 'Wiskundige Geletterdheid', 'Fisiese Wetenskappe', 'Lewenswetenskappe', 'Engels', 'Afrikaans', 'IsiXhosa', 'Setswana', 'Geografie', 'Geskiedenis', 'Besigheidstudies', 'Rekeningkunde', 'Ekonomie', 'Toerisme', 'CAT'],
      extracurricular: 'Buitemuurse',
      extracurricularList: ['Sokker', 'Netbal', 'Atletiek', 'Vlugbal', 'Rugby', 'Skaak', 'Koor', 'Drama', 'Poesie', 'Debat', 'Tradisionele Dans', 'Openbare Redevoering'],
      support: 'Akademiese Ondersteuningsprogramme',
      supportList: ['Middagklasse', 'Saterdagklasse', 'Matriekkampe', 'Loopbaanvoorligting', 'Studiegroepe', 'Onderwysermentorskap'],
    },
    // Sports & Culture
    sportsculture: {
      title: 'Sport & Kultuur',
      subtitle: 'Ontwikkel Afgeronde Leerders',
      sports: 'Sport Aangebied',
      sportsList: ['Sokker', 'Netbal', 'Atletiek', 'Vlugbal', 'Veldloop', 'Skaak', 'Skooltoernooie'],
      culture: 'Kulturele Aktiwiteite',
      cultureList: ['Koor', 'Drama', 'Poesie', 'Debat', 'Tradisionele Dans', 'Openbare Redevoering', 'Erfenisdag Vieringe'],
    },
    // Admissions
    admissions: {
      title: 'Sluit Aan by Ons Skool',
      subtitle: 'Begin Jou Reis Met Ons',
      description: 'Ons verwelkom aansoeke van leerders wat toegewy is aan akademiese uitnemendheid en persoonlike groei. Ons toelatingsproses is ontwerp om gemotiveerde leerders te identifiseer wat in ons omgewing sal floreer.',
      requirements: 'Vereistes',
      requirementsList: ['Vorige akademiese rekords', 'Geboortesertifikaat', 'ID-fotos', 'Ouer/Voog ID', 'Bewys van adres'],
      deadline: 'Aansoeksperdatum',
      deadlineText: 'Aansoeke vir die komende akademiese jaar sluit op 30 September.',
      applyNow: 'Begin Jou Aansoek',
    },
    // News
    news: {
      title: 'Nuus & Gebeure',
      subtitle: 'Bly Verbind Met Ons Gemeenskap',
      readMore: 'Lees Meer',
      viewAll: 'Bekyk Alle Nuus',
    },
    // Contact
    contact: {
      title: 'Kontak Ons',
      subtitle: 'Ons Wil Graag Van Jou Hoor',
      address: 'Adres',
      phone: 'Telefoon',
      email: 'E-pos',
      hours: 'Kantoorure',
      hoursText: 'Maandag - Vrydag: 07:30 - 16:00',
      form: {
        name: 'Volle Naam',
        email: 'E-posadres',
        subject: 'Onderwerp',
        message: 'Jou Boodskap',
        send: 'Stuur Boodskap',
      },
    },
    // Footer
    footer: {
      tagline: 'Bemagtiging van Leerders Deur Onderwys, Dissipline en Uitnemendheid',
      quickLinks: 'Vinnige Skakels',
      contactInfo: 'Kontakbesonderhede',
      followUs: 'Volg Ons',
      rights: 'Alle regte voorbehou.',
      privacy: 'Privaatheidsbeleid',
      terms: 'Diensvoorwaardes',
    },
    // Common
    common: {
      language: 'Taal',
      darkMode: 'Donker Modus',
      lightMode: 'Ligte Modus',
    },
    // Principal
    principal: {
      title: 'Hoof se Boodskap',
      message: 'Welkom by Paballelo Hoerskool, n skool toegewy aan die bemagtiging van leerders deur onderwys, dissipline, leierskap en gemeenskapswaardes.',
    },
    // Achievements
    achievements: {
      title: 'Prestasies',
      subtitle: 'Ons Prestasies',
      description: 'Viering van uitnemendheid in akademie, sport en persoonlike ontwikkeling',
      viewAll: 'Bekyk Alle Prestasies',
      category: {
        academic: 'Akademies',
        extracurricular: 'Buitemuurs',
        student: 'Leerder',
      },
    },
    // Staff
    staff: {
      title: 'Ons Span',
      subtitle: 'Ontmoet Ons Personeel',
      description: 'Toegewyde professionele wat saamwerk vir akademiese uitnemendheid',
      meetTeam: 'Ontmoet Ons Span',
    },
    // School Structure
    schoolStructure: {
      title: 'Skoolstruktuur',
      subtitle: 'Leierskap',
      description: 'Ons skool leierskapspan',
      viewStaff: 'Bekyk Personeel Bladsy',
    },
  },
  tn: {
    // Navigation
    nav: {
      home: 'Gae',
      about: 'Ka Rona',
      academics: 'Thuto',
      sportsculture: 'Metshameko le Setso',
      admissions: 'Kamogelo',
      news: 'Dikgang le Ditiragalo',
      gallery: 'Pokoso ya Ditshwantsho',
      contact: 'Ikgolaganye',
      apply: 'Dira Kopo',
    },
    // Gallery
    gallery: {
      title: 'Pokoso ya Ditshwantsho',
      subtitle: 'Dinako tsa Setshaba sa Sekolo sa Rona',
      description: 'Tebelelo ya botshelo kwa Sekolong se Segolo sa Paballelo - baithuti ba rona, ditiragalo, meletlo, metshameko, le ditiro tsa setso. Ditshwantsho go tswa mo setshabeng sa rona sa Facebook.',
      backHome: 'Boela Gae',
      viewFacebook: 'Bona Gole Gontsi mo Facebook',
      emptyTitle: 'Ditshwantsho di a Tla',
      emptyText: 'Re kgobokanya ditshwantsho tse di sa tswang go nna mo tsebeng ya rona ya Facebook. Boela gape go bona dinako tsa setshaba sa sekolo sa rona.',
      categories: {
        all: 'Tsotlhe',
        events: 'Ditiragalo',
        sports: 'Metshameko',
        culture: 'Setso',
        academics: 'Thuto',
        community: 'Setshaba',
      },
    },
    // Hero
    hero: {
      title: 'We Shall Mount Up',
      subtitle: 'With Wings Like Eagles',
      description: 'Sekolo se segolo sa Paballelo se ikemiseditse go tlisa bokgoni mo thutong, boeteledipele, metshameko le tlhabololo ya setchaba fa re baakanyetsa baithuti isago e e atlegileng.',
      cta: 'Tlhotlhomisa Sekolo sa Rona',
      secondary: 'Bona Dikatlego tsa Rona',
    },
    // Stats
    stats: {
      students: 'Baithuti',
      teachers: 'Barutabana',
      passRate: 'Sekgala sa go Pasa ga 2025',
      activities: 'Ditiro tsa Kwa Ntle',
      years: 'Dingwaga tsa Tirelo',
    },
    // About
    about: {
      title: 'Ka Sekolo se Segolo sa Paballelo',
      subtitle: 'Re Aga Baeteledipele ba Kamoso',
      description: 'Se se fitlhelwang mo pelong ya Paballelo Township kwa Upington, Sekolo se Segolo sa Paballelo ke sengwe sa dikolo tse di eteletsweng pele tsa mmuso mo Kapa Bokone. Sekolo se tshamekile karolo e e botlhokwa mo go ruteng le go matlafatsa ditswalwa tsa baithuti go tswa mo setsheng ka thuto e e boleng, taolo, metshameko, setso, le tlhabololo ya boeteledipele.',
      mission: 'Maikaelelo a Rona',
      missionText: 'Go fana ka thuto e e fitlhelelang le e e boleng e e matlafatsang baithuti ka thuto, ka loago, le ka maitsholo fa re ba baakanyetsa thuto e e kwa godimo le lefelo la tiro.',
      vision: 'Pono ya Rona',
      visionText: 'Go nna lefelo la bokgoni jwa thuto mo Kapa Bokone, le le tlhagisang badudi ba ba ikarabelelang, ba ba laolwang, le ba ba atlegileng.',
      learnMore: 'Ithute Gole Gontsi ka Rona',
    },
    // History
    history: {
      title: 'Histori ya Rona',
      description: 'Sekolo se Segolo sa Paballelo se direla setshaba sa Upington le Paballelo dingwaga di le dintsi jaaka sengwe sa ditheo tsa thuto tse dikgolo tsa toropo.',
    },
    // Academics
    academics: {
      title: 'Bokgoni jwa Thuto',
      subtitle: 'Kharikhulamu e e Feletseng ya Katlego',
      description: 'Mananeo a rona a thuto a dirilwe go tlhatlosa le go kgothatsa baithuti fa re ntse re ba baakanyetsa katlego mo thutong e e kwa godimo le lefelo la tiro. Re fitlhetse sekgala sa go pasa sa 86.7% ka 2025.',
      subjects: 'Dithuto tsa Motheo',
      subjectsList: ['Dipalo', 'Bokgoni jwa Dipalo', 'Saense ya Fisiki', 'Saense ya Bophelo', 'Sekgoa', 'Seaforikanse', 'IsiXhosa', 'Setswana', 'Jeokerafi', 'Histori', 'Dithuto tsa Kgwebo', 'Akhaonteng', 'Ikonomi', 'Bojanala', 'CAT'],
      extracurricular: 'Ditiro tsa Kwa Ntle',
      extracurricularList: ['Bolo ya Dinao', 'Netball', 'Tsamaiso', 'Volleyball', 'Ragbi', 'Chess', 'Khwaere', 'Drama', 'Thothokiso', 'Ngangisano', 'Motantsho wa Setso', 'Go Bua mo Phatlhalatseng'],
      support: 'Mananeo a Tshegetso ya Thuto',
      supportList: ['Diklase tsa motshegare', 'Diklase tsa Sateretaga', 'Dikampo tsa Matriki', 'Kaelo ya Profešene', 'Ditlhopha tsa thuto', 'Tshegetso ya Barutabana'],
    },
    // Sports & Culture
    sportsculture: {
      title: 'Metshameko le Setso',
      subtitle: 'Re Tlhabolola Baithuti ba ba Feletseng',
      sports: 'Metshameko e e Fanwang',
      sportsList: ['Bolo ya Dinao', 'Netball', 'Tsamaiso', 'Volleyball', 'Ragbi', 'Chess', 'Dikopano tsa Sekolo'],
      culture: 'Ditiro tsa Setso',
      cultureList: ['Khwaere', 'Drama', 'Thothokiso', 'Ngangisano', 'Motantsho wa Setso', 'Go Bua mo Phatlhalatseng', 'Meletlo ya Letsatsi la Boswa'],
    },
    // Admissions
    admissions: {
      title: 'Tsenela Sekolo sa Rona',
      subtitle: 'Simolola Loeto lwa Gago le Rona',
      description: 'Re amogela dikopo go tswa go baithuti ba ba ikemiseditseng bokgoni jwa thuto le kgolo ya motho. Tsamaiso ya rona ya kamogelo e dirilwe go lemoga baithuti ba ba kgothaletsweng ba ba tla nnang le katlego mo tikologong ya rona.',
      requirements: 'Ditlhokego',
      requirementsList: ['Direkoto tsa thuto tse di fetileng', 'Setifikeiti sa matsalo', 'Difoto tsa ID', 'ID ya Motsadi/Motlhokomedi', 'Bopaki jwa bodulo'],
      deadline: 'Letlha la Bofelo la Dikopo',
      deadlineText: 'Dikopo tsa ngwaga wa thuto o o tlang di tswalwa ka la 30 Lwetse.',
      applyNow: 'Simolola Kopo ya Gago',
    },
    // News
    news: {
      title: 'Dikgang le Ditiragalo',
      subtitle: 'Dula o Golagane le Setshaba sa Rona',
      readMore: 'Bala Gole Gontsi',
      viewAll: 'Bona Dikgang Tsotlhe',
    },
    // Contact
    contact: {
      title: 'Ikgolaganye le Rona',
      subtitle: 'Re Ka Rata go Utlwa go Tswa go Wena',
      address: 'Aterese',
      phone: 'Mogala',
      email: 'Imeili',
      hours: 'Diura tsa Ofisi',
      hoursText: 'Mosupologo - Labotlhano: 07:30 - 16:00',
      form: {
        name: 'Leina le le Feletseng',
        email: 'Aterese ya Imeili',
        subject: 'Setlhogo',
        message: 'Molaetsa wa Gago',
        send: 'Romela Molaetsa',
      },
    },
    // Footer
    footer: {
      tagline: 'Re Matlafatsa Baithuti ka Thuto, Taolo, le Bokgoni',
      quickLinks: 'Dikgolagano tse di Bonako',
      contactInfo: 'Tshedimosetso ya Kgolagano',
      followUs: 'Re Latele',
      rights: 'Ditshwanelo tsotlhe di boloketswe.',
      privacy: 'Pholisi ya Sephiri',
      terms: 'Melawana ya Tirelo',
    },
    // Common
    common: {
      language: 'Puo',
      darkMode: 'Mokgwa wa Lefifi',
      lightMode: 'Mokgwa wa Lesedi',
    },
    // Principal
    principal: {
      title: 'Molaetsa wa Mokaedi',
      message: 'O amogelesegile mo Sekolong se Segolo sa Paballelo, sekolo se se ikemiseditseng go matlafatsa baithuti ka thuto, taolo, boeteledipele, le ditlhokego tsa setshaba.',
    },
    // Achievements
    achievements: {
      title: 'Dikatlego',
      subtitle: 'Dikatlego tsa Rona',
      description: 'Go tshosang bokgoni mo thutong, metshameko le tlhabololo ya motho',
      viewAll: 'Bona Dikatlego Tsotlhe',
      category: {
        academic: 'Thuto',
        extracurricular: 'Ditiro tsa Kwa Ntle',
        student: 'Moithuti',
      },
    },
    // Staff
    staff: {
      title: 'Setlhopha sa Rona',
      subtitle: 'Ikgolaganye le Barutabana ba Rona',
      description: 'Baeteledipele ba ba dirisang mmogo go tlisa bokgoni jwa thuto',
      meetTeam: 'Ikgolaganye le Setlhopha sa Rona',
    },
    // School Structure
    schoolStructure: {
      title: 'Tshemo ya Sekolo',
      subtitle: 'Boeteledipele',
      description: 'Setlhopha sa boeteledipele sa sekolo sa rona',
      viewStaff: 'Bona Letlakala la Barutabana',
    },
  },
};

export type TranslationKey = keyof typeof translations.en;
