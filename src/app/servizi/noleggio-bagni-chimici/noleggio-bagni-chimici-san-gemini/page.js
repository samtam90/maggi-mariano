import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Gemini",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-gemini"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici San Gemini",
  locationNames: { label: "San Gemini", href: "san-gemini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
