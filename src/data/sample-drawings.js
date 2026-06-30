export const sampleDrawingCategories = [
  "All",
  "Coordination & Revisions",
  "Detail Levels",
  "Detail Samples",
  "Full Sets",
  "Industries"
];

const previewBase = "/assets/sample-drawings/previews/";
const pdfBase = "/assets/sample-drawings/pdfs/";

const sampleDrawingRows = [
  ["Conflict Resolution Example", "Coordination & Revisions", "conflict-resolution-example.jpg", "conflict-resolution-example.pdf", "Typical Detail", "AMACON-PHASE 2", "Show problem-solving ability", "Floor plan vs elevation discrepancy resolution"],
  ["Curtain Wall Elevation", "Detail Samples", "curtain-wall-elevation.jpg", "curtain-wall-elevation.pdf", "Typical Detail", "TLCPL Library", "Prove large-scale coordination capability", "Column line overlays, anchor locations, mullion tagging"],
  ["Design Build Example", "Detail Levels", "design-build-example.jpg", "design-build-example.pdf", "Advanced Detailing", "AMACON-PHASE 2", "Show early-phase collaboration capability", "Concept overlays, live coordination notes"],
  ["Educational Facilities (K-12 & Universities)", "Industries", "educational-facilities-k12-universities.jpg", "educational-facilities-(K-12-&-universities).pdf", "Typical Detail", "CUMBERLAND HIGH SCHOOL", "Shows example of this type of job", "Building Type Example"],
  ["Engineering Coordination Example", "Coordination & Revisions", "engineering-coordination-example.jpg", "engineering-coordination-example.pdf", "Advanced Detailing", "PROJECT 125", "Support drafting vs engineering clarification", "Structural references, anchor coordination, responsibility clarity"],
  ["Enlarged Head/Jamb Detail", "Detail Samples", "enlarged-head-jamb-detail.jpg", "enlarged-head-jamb-detail.pdf", "Typical Detail", "BSU CAP", "Highlight installer clarity & water management", "Sealant joints, movement allowance, transition coordination"],
  ["Enlarged Sill Detail", "Detail Samples", "enlarged-sill-detail.jpg", "enlarged-sill-detail.pdf", "Typical Detail", "PROJECT 125", "Show fabrication-level thinking", "End dams, sealant notes, flashing integration"],
  ["Fastener Detail - Concrete Condition", "Detail Samples", "fastener-detail-concrete-condition.jpg", "fastener-detail-concrete-condition.pdf", "Typical Detail", "TLCPL Library", "Demonstrate fastener specificity & coordination strength", "Fastener type, edge distance, embed depth, surrounding conditions"],
  ["Fastener Detail - Steel Condition", "Detail Samples", "fastener-detail-steel-condition.jpg", "fastener-detail-steel-condition.pdf", "Typical Detail", "TLCPL Library", "Show structural awareness & anchor coordination", "Proper anchor callouts, coordination notes, installation clarity"],
  ["Government & Municipal Buildings", "Industries", "government-municipal-buildings.jpg", "government-&-municipal-buildings.pdf", "Typical Detail", "COVINGTON CITY HALL", "Shows example of this type of job", "Building Type Example"],
  ["Healthcare Facilities (Hospitals & Clinics)", "Industries", "healthcare-facilities-hospitals-clinics.jpg", "healthcare-facilities-(hospitals-&-clinics).pdf", "Typical Detail", "ST. MARTIN HOSPITAL", "Shows example of this type of job", "Building Type Example"],
  ["Hospitality (Hotels)", "Industries", "hospitality-hotels.jpg", "hospitality-(hotels).pdf", "Typical Detail", "BSU VILLAGE HOTEL", "Shows example of this type of job", "Building Type Example"],
  ["Industrial / Manufacturing Facilities", "Industries", "industrial-manufacturing-facilities.jpg", "industrial-manufacturing-facilities.pdf", "Typical Detail", "HYUNDAI", "Shows example of this type of job", "Building Type Example"],
  ["Installation Layout Sheet", "Coordination & Revisions", "installation-layout-sheet.jpg", "installation-layout-sheet.pdf", "Typical Detail", "HENRY FORD-MSU RESEARCH", "Speak directly to field crews", "Layout dimensions, DLO clarity, centerline references"],
  ["Large / High-Profile Project", "Full Sets", "large-high-profile-project.jpg", "-arge-high-profile-project.pdf", "Typical Detail, Advanced Detailing", "OAKBROOK", "Establish authority & scale", "Sheet volume, clean coordination at scale"],
  ["Mixed-Use Developments", "Industries", "mixed-use-developments.jpg", "mixed-use-developments.pdf", "Typical Detail", "320 MARTIN STREET", "Shows example of this type of job", "Building Type Example"],
  ["Multi-Family Residential (Commercial-Scale)", "Industries", "multi-family-residential-commercial-scale.jpg", "multi-family-residential-(commercial-scale).pdf", "Typical Detail", "THE BROOKS APTS", "Shows example of this type of job", "Building Type Example"],
  ["Office Buildings (Mid-Rise & High-Rise)", "Industries", "office-buildings-mid-rise-high-rise.jpg", "office-buildings-(mid-rise-&-high-rise).pdf", "Typical Detail", "OAKBROOK", "Shows example of this type of job", "Building Type Example"],
  ["Quick Draw Example", "Detail Levels", "quick-draw-example.jpg", "quick-draw-example.pdf", "Quick Draw", "TD BANK", "Visually define entry-level tier", "Streamlined details, placeholder fasteners, simplified format"],
  ["Retail & Storefront Developments", "Industries", "retail-storefront-developments.jpg", "retail-&-storefront -developments.pdf", "Typical Detail", "OAKLEY-DISNEY SPRINGS", "Shows example of this type of job", "Building Type Example"],
  ["Revision Example (Before/After)", "Coordination & Revisions", "revision-example-before-after.jpg", "revision-example-(before-after).pdf", "Typical Detail", "MAY HOSIERY BD. C", "Build trust around change management", "Clear clouding, delta tracking, clean updates"],
  ["Storefront Elevation - Full Set", "Full Sets", "storefront-elevation-full-set.jpg", "storefront-elevation-full-set.pdf", "Typical Detail", "Morton Travel Plaza", "Core proof asset, show MP standard quality", "Full dimensioning, IN/OUT dims, column lines, clean layout, annotation clarity"],
  ["Submittal Cover Page + Index", "Full Sets", "submittal-cover-page-index.jpg", "submittal-cover-page+index.pdf", "Typical Detail", "OMVHS", "Prove architect-ready professionalism", "Clean formatting, sheet organization, revision tracking"]
];

export const sampleDrawings = sampleDrawingRows.map(([title, category, preview, pdf, tier, projectName, purpose, highlight]) => ({
  title,
  category,
  image: `${previewBase}${preview}`,
  modal: {
    tier,
    projectName,
    purpose,
    highlight,
    preview: `${previewBase}${preview}`,
    pdf: `${pdfBase}${pdf}`
  }
}));
