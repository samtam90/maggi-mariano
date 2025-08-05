import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi San Gemini",
  canonical: links.servizi["disidratazione-fanghi"]["san-gemini"],
});
export default withBaseProps({
  title: "Disidratazione fanghi San Gemini",
  locationNames: { label: "San Gemini", href: "san-gemini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
