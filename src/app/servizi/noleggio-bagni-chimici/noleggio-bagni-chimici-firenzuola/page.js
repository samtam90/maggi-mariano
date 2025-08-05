import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Firenzuola",
  canonical: links.servizi["noleggio-bagni-chimici"]["firenzuola"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Firenzuola",
  locationNames: { label: "Firenzuola", href: "firenzuola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
