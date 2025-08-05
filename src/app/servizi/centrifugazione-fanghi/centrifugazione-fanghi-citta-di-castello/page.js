import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Città di Castello",
  canonical: links.servizi["centrifugazione-fanghi"]["citta-di-castello"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Città di Castello",
  locationNames: { label: "Città di Castello", href: "citta-di-castello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
