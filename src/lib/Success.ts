export const SUCCESS_STATS = [
  { value: "8,000+", label: "Students placed" },
  { value: "11", label: "Countries" },
  { value: "95%", label: "Visa success rate" },
  { value: "4.9", label: "Google rating" },
];

export type SuccessReview = {
  name: string;
  result: string;
  course?: string;
  quote: string;
};

export const SUCCESS_REVIEWS: SuccessReview[] = [
  {
    name: "Rakshitha",
    result: "IELTS Band 8.0",
    quote:
      "Grateful to Abroad Scholars for guiding me to an overall 8.0 in IELTS! Their expert trainers and tailored mentoring truly set them apart. If you're aiming for top scores, they're the best choice!",
  },
  {
    name: "Dyana Pariskha",
    result: "₹7L Scholarship · Dundee",
    quote:
      "Dhyana from Abroad Scholars guided me throughout the process and helped me secure admission to the University of Dundee along with a ₹7L scholarship.",
  },
  {
    name: "Monish Kumar",
    result: "GRE Success",
    quote:
      "Monish from Abroad Scholars provided excellent training and guidance for my GRE preparation, which helped me achieve a strong score.",
  },
  {
    name: "Jagadev",
    result: "GRE Top Score",
    quote:
      "Jagadev from Abroad Scholars supported me with focused GRE preparation and valuable strategies that led to great results.",
  },
  {
    name: "Priya M.", // sample
    result: "Admit · University of Toronto",
    course: "MBA",
    quote:
      "From shortlisting to my visa, the team kept everything on track. I'm now studying my MBA in Canada — something I wasn't sure was even possible a year ago.",
  },
  {
    name: "Arun K.", // sample
    result: "Admit · Trinity College Dublin",
    course: "MSc Computer Science",
    quote:
      "My SOP and applications were handled so professionally. I had a clear plan at every stage and ended up with multiple offers to choose from.",
  },
  {
    name: "Sandhya R.", // sample
    result: "Admit · Northeastern, USA",
    course: "MS Data Science",
    quote:
      "Honest advice from day one. They told me exactly where I'd get in and helped me get there — including sorting my education loan.",
  },
  {
    name: "Karthik S.", // sample
    result: "Visa approved · Australia",
    course: "Master of IT",
    quote:
      "The mock visa interviews made all the difference. I walked in confident and got my visa approved without any stress.",
  },
];

export const SUCCESS_VIDEOS = [
  { videoId: "fgIQOMLZHBU", label: "Student Review" },
  { videoId: "hDNY-53db_8", label: "IELTS 7.0" },
  { videoId: "2QPHKRa8N64", label: "IELTS 7.0" },
  { videoId: "-LcoHDQ_Vyo", label: "IELTS 8.0" },
  { videoId: "AVOvvyGAUTs", label: "IELTS 8.0" },
  { videoId: "R7ThSdxJmao", label: "IELTS 8.0" },
  { videoId: "VGGo88MmhcM", label: "IELTS 8.0" },
];

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Abroad+Scholar/@13.0849714,80.2139796,16z/data=!4m6!3m5!1s0x3a5265e5507597a1:0xa3a181aaabcd9fe7!8m2!3d13.0849793!4d80.2162509!16s%2Fg%2F11x2n066db?entry=ttu";
