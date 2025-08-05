import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Udine",
  canonical: links.servizi["pulizia-fognature"]["udine"],
});
export default withBaseProps({
  title: "Pulizia fognature Udine",
  locationNames: { label: "Udine", href: "udine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["udine"],
      name: "Udine",
  }),
});
