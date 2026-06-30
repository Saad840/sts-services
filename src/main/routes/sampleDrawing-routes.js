import { sampleDrawingsPage } from "../../pages/sample-drawings.js";

export function resolveSampleDrawingRoute(current) {
  return current === "/sample-drawings/" ? sampleDrawingsPage() : undefined;
}
