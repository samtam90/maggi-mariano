import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marradi",
  canonical: links.servizi["noleggio-bagni-chimici"]["marradi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Marradi",
  locationNames: { label: "Marradi", href: "marradi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
