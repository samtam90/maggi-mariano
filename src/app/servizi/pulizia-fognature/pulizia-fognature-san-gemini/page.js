import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature San Gemini",
  canonical: links.servizi["pulizia-fognature"]["san-gemini"],
});
export default withBaseProps({
  title: "Pulizia fognature San Gemini",
  locationNames: { label: "San Gemini", href: "san-gemini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
