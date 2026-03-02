import localFont from "next/font/local";

export const sans = localFont({
  src: [
    { path: "../public/fonts/albert-sans_normal_400.ttf", weight: "400" },
    {
      path: "../public/fonts/albert-sans_italic_400.ttf",
      weight: "400",
      style: "italic",
    },
    { path: "../public/fonts/albert-sans_normal_500.ttf", weight: "500" },
    {
      path: "../public/fonts/albert-sans_italic_500.ttf",
      weight: "500",
      style: "italic",
    },
    { path: "../public/fonts/albert-sans_normal_600.ttf", weight: "600" },
    {
      path: "../public/fonts/albert-sans_italic_600.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-sans",
});

export const serif = localFont({
  src: [
    { path: "../public/fonts/epilogue_300.ttf", weight: "300" },
    {
      path: "../public/fonts/epilogue_300italic.ttf",
      weight: "300",
      style: "italic",
    },
    { path: "../public/fonts/epilogue_500.ttf", weight: "500" },
    {
      path: "../public/fonts/epilogue_500italic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-serif",
});
