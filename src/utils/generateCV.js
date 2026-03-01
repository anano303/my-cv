import jsPDF from "jspdf";
import FiraGORegular from "../FiraGO-Regular.ttf";
import FiraGOBold from "../FiraGO-Bold.ttf";
import FiraGOMedium from "../FiraGO-Medium.ttf";
import FiraGOSemiBold from "../FiraGO-SemiBold.ttf";

// Convert font file to base64 for jsPDF embedding
async function loadFontAsBase64(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1];
      resolve(base64);
    };
    reader.readAsDataURL(blob);
  });
}

export async function generateCV(language = "en") {
  const isGe = language === "ge";
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = 210;
  const margin = 16;
  const colRight = 78;
  const contentW = pageW - margin * 2;

  // Load and register FiraGO fonts
  const [regular, bold, medium, semibold] = await Promise.all([
    loadFontAsBase64(FiraGORegular),
    loadFontAsBase64(FiraGOBold),
    loadFontAsBase64(FiraGOMedium),
    loadFontAsBase64(FiraGOSemiBold),
  ]);

  doc.addFileToVFS("FiraGO-Regular.ttf", regular);
  doc.addFont("FiraGO-Regular.ttf", "FiraGO", "normal");
  doc.addFileToVFS("FiraGO-Bold.ttf", bold);
  doc.addFont("FiraGO-Bold.ttf", "FiraGO", "bold");
  doc.addFileToVFS("FiraGO-Medium.ttf", medium);
  doc.addFont("FiraGO-Medium.ttf", "FiraGO", "medium");
  doc.addFileToVFS("FiraGO-SemiBold.ttf", semibold);
  doc.addFont("FiraGO-SemiBold.ttf", "FiraGO", "semibold");

  const accent = [79, 70, 229]; // indigo accent
  const dark = [17, 24, 39];
  const gray = [107, 114, 128];
  const lightBg = [243, 244, 246];

  let y = 0;

  // ── Header bar ──
  doc.setFillColor(...accent);
  doc.rect(0, 0, pageW, 38, "F");
  doc.setFont("FiraGO", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("Ani Beroshvili", margin, 16);
  doc.setFont("FiraGO", "normal");
  doc.setFontSize(11);
  doc.text("Full-Stack Developer", margin, 24);
  doc.setFontSize(8.5);
  doc.text(
    "beroshviliani100@gmail.com  |  +995 577 300 480  |  github.com/anano303",
    margin,
    32,
  );
  y = 44;

  // ── Helper functions ──
  function sectionTitle(title) {
    doc.setFillColor(...lightBg);
    doc.rect(margin, y - 4, contentW, 7, "F");
    doc.setFont("FiraGO", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...accent);
    doc.text(title.toUpperCase(), margin + 2, y + 0.5);
    y += 8;
  }

  function bodyText(text, indent = 0) {
    doc.setFont("FiraGO", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...dark);
    const lines = doc.splitTextToSize(text, contentW - indent);
    doc.text(lines, margin + indent, y);
    y += lines.length * 3.4 + 1;
  }

  function expEntry(period, company, role) {
    doc.setFont("FiraGO", "medium");
    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    doc.text(period, margin, y);
    doc.setFont("FiraGO", "semibold");
    doc.setFontSize(8.5);
    doc.setTextColor(...dark);
    doc.text(company, colRight, y);
    y += 3.6;
    doc.setFont("FiraGO", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    const roleLines = doc.splitTextToSize(role, contentW - (colRight - margin));
    doc.text(roleLines, colRight, y);
    y += roleLines.length * 3.2 + 2.5;
  }

  function eduEntry(period, institution, course) {
    doc.setFont("FiraGO", "medium");
    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    doc.text(period, margin, y);
    doc.setFont("FiraGO", "semibold");
    doc.setFontSize(8.5);
    doc.setTextColor(...dark);
    doc.text(institution, colRight, y);
    y += 3.6;
    doc.setFont("FiraGO", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    doc.text(course, colRight, y);
    y += 5.5;
  }

  // ── Summary ──
  sectionTitle(isGe ? "პროფილი" : "PROFILE");
  bodyText(
    isGe
      ? "მაქვს 15 წელზე მეტი გამოცდილება გაყიდვებსა და ბიზნეს მენეჯმენტში. 2022 წლიდან Full-Stack დეველოპერი — ექომერს მარკეტპლეისი, აუქციონების სისტემა, რეფერალური პროგრამები. ასევე ბოლო 2 წელია ფრონტ-ენდ დეველოპმენტს ვასწავლი სტუდენტებს."
      : "Over 15 years of experience in sales & business management. Since 2022, a Full-Stack Developer building e-commerce marketplaces, auction systems, and referral programs. Also teaching front-end development to students for the past 2 years.",
  );
  y += 1;

  // ── Tech Experience ──
  sectionTitle(isGe ? "სამუშაო გამოცდილება — IT" : "WORK EXPERIENCE — TECH");
  const today = isGe ? "დღემდე" : "Present";
  expEntry(
    `2025/02 – ${today}`,
    "SoulArt",
    isGe
      ? "Full-Stack დეველოპერი — გადახდები, ჰოსტინგი, რეფერალური სისტემები, ანალიტიკა, აუქციონები"
      : "Full-Stack Developer — Payments, Hosting, Referral Systems, Analytics, Auctions",
  );
  expEntry(
    `2025/01 – ${today}`,
    "ShopIt",
    isGe
      ? "Full-Stack დეველოპერი — ექომერს მარკეტპლეისი, გადახდები, ონლაინ მაღაზიების მართვა"
      : "Full-Stack Developer — E-commerce Marketplace, Payments, Online Store Management",
  );
  expEntry(
    "2024 – 2025/05",
    "RE:EDUCATE",
    isGe
      ? "ბექ-ენდ დეველოპერი / Node.js, Express.js, Nest.js"
      : "Back-End Developer / Node.js, Express.js, Nest.js",
  );
  expEntry(
    `2024 – ${today}`,
    isGe ? "აიტი აკადემია სტეპი" : "IT Academy STEP",
    isGe
      ? "Front-End დეველოპერი, ანგულარი ლექტორი"
      : "Front-End Developer, Angular Lecturer",
  );
  expEntry(
    `2023 – ${today}`,
    isGe ? "კომპანია ბესთსოფთი" : "BestSoft Company",
    isGe ? "Front-End დეველოპერი" : "Front-End Developer",
  );
  expEntry(
    `2022 – ${today}`,
    isGe ? "ფრილანსერი" : "Freelancer",
    isGe ? "Full-Stack დეველოპერი" : "Full-Stack Developer",
  );

  // ── Key Projects ──
  sectionTitle(isGe ? "პროექტები" : "KEY PROJECTS");

  function projectEntry(name, url, fullUrl, desc) {
    // Project name - bold
    doc.setFont("FiraGO", "semibold");
    doc.setFontSize(8.5);
    doc.setTextColor(...dark);
    doc.text(name, margin, y);
    y += 3.5;
    // Description - gray italic style
    doc.setFont("FiraGO", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    const descLines = doc.splitTextToSize(desc, contentW);
    doc.text(descLines, margin, y);
    y += descLines.length * 3.2;
    // Link - accent color, clickable
    doc.setFont("FiraGO", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...accent);
    doc.textWithLink(url, margin, y, { url: fullUrl });
    // Underline the link
    const linkW = doc.getTextWidth(url);
    doc.setDrawColor(...accent);
    doc.setLineWidth(0.2);
    doc.line(margin, y + 0.5, margin + linkW, y + 0.5);
    y += 4.5;
  }

  projectEntry(
    "SoulArt",
    "soulart.ge",
    "https://soulart.ge/",
    isGe
      ? "ექომერს პლატფორმა მხატვრებისთვის — აუქციონები, გადახდები, რეფერალური სისტემა, ანალიტიკა (Next.js, Nest.js, MongoDB, AWS, Socket)"
      : "E-commerce platform for painters — Auctions, Payments, Referral System, Analytics (Next.js, Nest.js, MongoDB, AWS, Socket)",
  );
  projectEntry(
    "ShopIt — E-commerce Marketplace",
    "shopit.ge",
    "https://shopit.ge/",
    isGe
      ? "ექომერს მარკეტპლეისი (Shopify-ის მსგავსი) — ონლაინ მაღაზიების მართვა, გადახდები (Next.js, Nest.js, Docker, AWS, Stripe)"
      : "E-commerce marketplace (Shopify-like) — Online store management, Payments (Next.js, Nest.js, Docker, AWS, Stripe)",
  );
  projectEntry(
    "My Hunter",
    "myhunter.ge",
    "https://www.myhunter.ge/",
    isGe
      ? "ექომერს პლატფორმა ადმინ პანელით — კატეგორიები, შეკვეთები, AI ჩატი (Next.js, Nest.js, TypeScript, Docker, AWS)"
      : "E-commerce with admin panel — Categories, Orders, AI Chat (Next.js, Nest.js, TypeScript, Docker, AWS)",
  );
  projectEntry(
    "Prime Property Insurance",
    "insure.myprime.ge",
    "https://insure.myprime.ge/",
    isGe
      ? "ქონების დაზღვევის პორტალი — პრემიების კალკულაცია, პოლისების მართვა (React, Node.js, REST API)"
      : "Property insurance portal — Premium calculation, Policy management (React, Node.js, REST API)",
  );
  projectEntry(
    "TravelPrime — Agent Portal",
    "insure.myprime.ge/travel",
    "https://insure.myprime.ge/travel/en#geomed",
    isGe
      ? "სამოგზაურო დაზღვევის აგენტის პორტალი — ავტორიზაცია, Geomed ინტეგრაცია, აგენტის დეშბორდი (Next.js, Vercel, Role-Based Access)"
      : "Travel insurance agent portal — Auth, Geomed API integration, Agent dashboard (Next.js, Vercel, Role-Based Access)",
  );

  // "More projects" link
  y += 1;
  doc.setFont("FiraGO", "semibold");
  doc.setFontSize(7.5);
  doc.setTextColor(...accent);
  const moreText = isGe ? "▸ მეტი პროექტი: " : "▸ More projects: ";
  doc.text(moreText, margin, y);
  const moreTextW = doc.getTextWidth(moreText);
  const portfolioUrl = "github.com/anano303";
  doc.setFont("FiraGO", "normal");
  doc.textWithLink(portfolioUrl, margin + moreTextW, y, {
    url: "https://github.com/anano303?tab=repositories",
  });
  const linkW2 = doc.getTextWidth(portfolioUrl);
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.2);
  doc.line(margin + moreTextW, y + 0.5, margin + moreTextW + linkW2, y + 0.5);
  y += 5;

  // ── Skills ──
  sectionTitle(isGe ? "უნარები" : "SKILLS");
  const skillList =
    "HTML  •  CSS  •  SCSS  •  Bootstrap  •  JavaScript  •  TypeScript  •  React  •  Angular  •  Next.js  •  Express.js  •  Nest.js  •  MongoDB  •  Docker  •  Cloudinary  •  AWS";
  bodyText(skillList);
  y += 1;

  // ── Education ──
  sectionTitle(isGe ? "განათლება" : "EDUCATION");
  eduEntry(
    "2023 – 2024",
    isGe ? "სქილვილი" : "SkillWill",
    isGe
      ? "ფრონთ-ენდ დეველოპმენტი / რეაქთი, რეაქთ-ნეითივი"
      : "Front-End Development / React, React-Native",
  );
  eduEntry(
    "2023 – 2024",
    isGe ? "აიტი აკადემია სტეპი" : "IT Academy STEP",
    isGe
      ? "ფრონტ-ენდ-დეველოპმენტი / ანგულარი"
      : "Front-End Development / Angular",
  );
  eduEntry(
    "2022 – 2023",
    isGe ? "ბითქემფი" : "BitCamp",
    isGe ? "ფრონტ-ენდ-დეველოპმენტი / რეაქთი" : "Front-End Development / React",
  );
  eduEntry(
    "2013 – 2015",
    isGe
      ? "საქართველოს ტექნიკური უნივერსიტეტი"
      : "Georgian Technical University",
    isGe
      ? "ბიზნეს-ადმინისტრირების მაგისტრი"
      : "Master of Business Administration",
  );
  eduEntry(
    "2009 – 2013",
    isGe
      ? "საქართველოს ტექნიკური უნივერსიტეტი"
      : "Georgian Technical University",
    isGe
      ? "ბიზნეს-ადმინისტრირება, ბაკალავრი"
      : "Business Administration, Bachelor",
  );

  // ── Footer line ──
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.5);
  doc.line(margin, 284, pageW - margin, 284);
  doc.setFont("FiraGO", "normal");
  doc.setFontSize(7);
  doc.setTextColor(...gray);
  doc.text(
    isGe
      ? "შექმნილია aniberoshvili.com – საიტიდან"
      : "Generated from aniberoshvili.com",
    pageW / 2,
    289,
    { align: "center" },
  );

  doc.save(`Ani_Beroshvili_CV_${language.toUpperCase()}.pdf`);
}
