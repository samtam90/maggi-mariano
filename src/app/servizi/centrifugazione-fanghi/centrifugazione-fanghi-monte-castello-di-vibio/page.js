import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monte Castello di Vibio",
  canonical: links.servizi["centrifugazione-fanghi"]["monte-castello-di-vibio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monte Castello di Vibio",
  locationNames: { label: "Monte Castello di Vibio", href: "monte-castello-di-vibio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
