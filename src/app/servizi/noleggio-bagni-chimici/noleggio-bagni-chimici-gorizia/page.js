import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gorizia",
  canonical: links.servizi["noleggio-bagni-chimici"]["gorizia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Gorizia",
  locationNames: { label: "Gorizia", href: "gorizia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["gorizia"],
      name: "Gorizia",
  }),
});
