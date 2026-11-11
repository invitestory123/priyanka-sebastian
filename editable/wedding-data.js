/**
 * wedding-data.js — Customer-facing editable data layer for midnight-stargaze
 * Wedding of Dr. Priyanka & Dr. Sabyasachi
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Dr. Sabyasachi",
    bride: "Dr. Priyanka",
    groomFull: "Dr. Sabyasachi Chatterjee",
    brideFull: "Dr. Priyanka Mitra",
    groomParents: "Son of Smt. Sumita & Prof. Dhananjoy Chatterjee",
    brideParents: "Daughter of Smt. Soma & Shri Kalyan Mitra",
    hashtag: "#sabpriyahhai",
    monogram: "P · S",
    families: "With love, the Mitra & Chatterjee families",
  },

  wedding: {
    dateISO: "2027-01-29T18:00:00+05:30",
    dateLabel: "Friday, 29th January 2027",
    timeLabel: "Baraat 6:00 PM · Pheras 8:00 PM",
  },

  venue: {
    name: "Vivanta, Jamshedpur",
    address: "Golmuri Rd, Punjabi Refugee Colony, Golmuri, Jamshedpur, Jharkhand 831003",
    mapsQuery: "Vivanta Jamshedpur Golmuri Jharkhand",
    mapsUrl: "https://maps.app.goo.gl/JAtRZ7v5vmvfTYrz8",
  },

  venues: [
    {
      id: "wedding",
      tabLabel: "Wedding · 29 Jan",
      title: "Wedding Ceremony",
      dateLabel: "Friday, 29th January 2027",
      dateISO: "2027-01-29T18:00:00+05:30",
      name: "Vivanta, Jamshedpur",
      address: "Golmuri Rd, Punjabi Refugee Colony, Golmuri, Jamshedpur, Jharkhand 831003",
      mapsQuery: "Vivanta Jamshedpur Golmuri Jharkhand",
      mapsUrl: "https://maps.app.goo.gl/JAtRZ7v5vmvfTYrz8",
    },
    {
      id: "reception",
      tabLabel: "Reception · 1 Feb",
      title: "Reception Night",
      dateLabel: "Monday, 1st February 2027",
      dateISO: "2027-02-01T19:00:00+05:30",
      name: "Sinclairs, Bardhaman",
      address: "Renaissance Township, High Street 1, NH-2, Bardhaman, West Bengal 713104",
      mapsQuery: "Sinclairs Burdwan Renaissance Township Bardhaman West Bengal",
      mapsUrl: "https://maps.app.goo.gl/StHNmRect7d74pd98?g_st=ac",
    },
  ],

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, request the honour of your presence as two hearts unite in a beautiful celebration of love, promises, and forever.",
  },

  events: [
    {
      name: "THE RING AND RHYTHM AFFAIR",
      subtitle: "Engagement and Sangeet",
      icon: "music",
      date: "Thursday, 28th January 2027",
      dayLabel: "Thursday",
      dayNum: "28",
      monthLabel: "January 2027",
      time: "7:00 PM onwards",
      venue: "De'Hamray, Jamshedpur",
      address: "9, New Kalimati Rd, Sakchi, Jamshedpur, Jharkhand 831007",
      mapsUrl: "https://maps.app.goo.gl/argdM2LVBX6wGsiN9",
      note: "An enchanting evening of rings, rhythm, dance, and music to begin our wedding celebrations.",
      bgImage: "./editable/assets/events-bg.webp",
      bgColor: "#000f2e",
      theme: "dark",
      topMask: "linear-gradient(to bottom, black 25%, transparent 37%)",
      botMask: "linear-gradient(to top, black 42%, transparent 54%)",
    },
    {
      name: "THE GOLDEN SOIRÉE",
      subtitle: "Haldi celebration & Poolside revelry",
      icon: "sun",
      date: "Friday, 29th January 2027",
      dayLabel: "Friday",
      dayNum: "29",
      monthLabel: "January 2027",
      time: "10:00 AM onwards",
      venue: "ATC club, Jamshedpur",
      address: "ATC CLUB, Aastha Twin City, Telco, Baridih, Jamshedpur, Jharkhand 831004",
      mapsUrl: "https://maps.app.goo.gl/wJewTUwy2t7yRxJaA",
      note: "Draped in auspicious turmeric hues, joy, and poolside revelry.",
      bgImage: "./editable/assets/haldi-bg.webp",
      bgColor: "#feebca",
      theme: "light",
    },
    {
      name: "THE SACRED UNION",
      subtitle: "Wedding ceremony",
      icon: "heart",
      date: "Friday, 29th January 2027",
      dayLabel: "Friday",
      dayNum: "29",
      monthLabel: "January 2027",
      time: "",
      venue: "Vivanta, Jamshedpur",
      address: "Golmuri Rd, Punjabi Refugee Colony, Golmuri, Jamshedpur, Jharkhand 831003",
      mapsUrl: "https://maps.app.goo.gl/JAtRZ7v5vmvfTYrz8",
      note: "The sacred vows, seven holy pheras, and the blessed beginning of eternal togetherness.",
      bgImage: "./editable/assets/wedding-bg.webp",
      bgColor: "#0d0a27",
      theme: "dark",
      program: [
        { name: "Baraat Arrival", time: "6:00 PM" },
        { name: "Pheras & Sacred Vows", time: "8:00 PM" },
      ],
    },
    {
      name: "THE GRAND GALA",
      subtitle: "Reception night",
      icon: "star",
      date: "Monday, 1st February 2027",
      dayLabel: "Monday",
      dayNum: "01",
      monthLabel: "February 2027",
      time: "7:00 PM onwards",
      venue: "Sinclairs, Bardhaman",
      address: "Renaissance Township, High Street 1, NH-2, Bardhaman, West Bengal 713104",
      mapsUrl: "https://maps.app.goo.gl/StHNmRect7d74pd98?g_st=ac",
      note: "A grand evening feast and celebration to bless the newlyweds as they embark on their new journey.",
      bgImage: "./editable/assets/reception-bg.webp",
      bgColor: "#020d2c",
      theme: "dark",
      topMask: "linear-gradient(to bottom, black 28%, transparent 40%)",
      botMask: "linear-gradient(to top, black 44%, transparent 56%)",
    },
  ],

  program: [
    { name: "Baraat Arrival", time: "6:00 PM" },
    { name: "Pheras & Sacred Vows", time: "8:00 PM" },
  ],

  music: {
    url: "editable/assets/bgm.mp3",
    title: "Tumhi Dekho Naa - Sitar Lofi",
    artist: "Rishab Rikhiram Sharma & Shankar-Ehsaan-Loy",
    startSeconds: 43,
    spotifyUrl: "https://open.spotify.com/track/3fc3piWEXs8OoJ0oTIrs5V",
  },

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  images: {
    couple: "./editable/assets/couple.webp",
    venue: "./editable/assets/venue-palace.webp",
    ganesha: "./editable/assets/ganesha.png",
    eventsBg: "./editable/assets/events-bg.webp",
    receptionBg: "./editable/assets/reception-bg.webp",
  },
};
