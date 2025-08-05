import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Greve in Chianti",
  canonical: links.servizi["noleggio-bagni-chimici"]["greve-in-chianti"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Greve in Chianti",
  locationNames: { label: "Greve in Chianti", href: "greve-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
