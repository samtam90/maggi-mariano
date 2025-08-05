import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Chianciano Terme",
  canonical: links.servizi["centrifugazione-fanghi"]["chianciano-terme"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Chianciano Terme",
  locationNames: { label: "Chianciano Terme", href: "chianciano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
