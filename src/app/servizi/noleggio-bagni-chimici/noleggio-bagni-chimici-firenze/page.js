import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Firenze",
  canonical: links.servizi["noleggio-bagni-chimici"]["firenze"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
