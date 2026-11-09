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
    hashtag: "#PriyankaWedsSabyasachi",
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

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, request the honour of your presence as two souls unite under a starry sky to begin their journey of love and togetherness.",
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
    },
    {
      name: "THE SACRED UNION",
      subtitle: "Wedding ceremony",
      icon: "heart",
      date: "Friday, 29th January 2027",
      dayLabel: "Friday",
      dayNum: "29",
      monthLabel: "January 2027",
      time: "Baraat: 6:00 PM · Pheras: 8:00 PM",
      venue: "Vivanta, Jamshedpur",
      address: "Golmuri Rd, Punjabi Refugee Colony, Golmuri, Jamshedpur, Jharkhand 831003",
      mapsUrl: "https://maps.app.goo.gl/JAtRZ7v5vmvfTYrz8",
      note: "The sacred vows, seven holy pheras, and the blessed beginning of eternal togetherness.",
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
    },
  ],

  program: [
    { name: "Baraat Arrival", time: "6:00 PM" },
    { name: "Pheras & Sacred Vows", time: "8:00 PM" },
  ],

  music: {
    url: "editable/assets/bgm.mp3",
    title: "Made In Heaven - Theme",
    artist: "Gaurav Raina & Komorebi",
    startSeconds: 40,
    spotifyUrl: "https://open.spotify.com/track/5uSgmJU6MeoFTIYaJQOV5K",
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
  },
};
