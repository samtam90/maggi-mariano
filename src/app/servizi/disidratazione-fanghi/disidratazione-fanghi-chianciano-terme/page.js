import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Chianciano Terme",
  canonical: links.servizi["disidratazione-fanghi"]["chianciano-terme"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Chianciano Terme",
  locationNames: { label: "Chianciano Terme", href: "chianciano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
