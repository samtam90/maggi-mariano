import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Città della Pieve",
  canonical: links.servizi["centrifugazione-fanghi"]["citta-della-pieve"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Città della Pieve",
  locationNames: { label: "Città della Pieve", href: "citta-della-pieve" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
