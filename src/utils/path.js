export const path = () => {
  const p = window.location.pathname;
  return p.endsWith("/") ? p : `${p}/`;
};

export function titleFromSlug(slug) {
  return slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function titleFromPath(value) {
  return titleFromSlug(value.replace(/^\/|\/$/g, "").split("/").pop() || "Milestone");
}
