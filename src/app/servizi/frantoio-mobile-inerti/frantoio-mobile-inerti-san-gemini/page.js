import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti San Gemini",
  canonical: links.servizi["frantoio-mobile-inerti"]["san-gemini"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti San Gemini",
  locationNames: { label: "San Gemini", href: "san-gemini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
