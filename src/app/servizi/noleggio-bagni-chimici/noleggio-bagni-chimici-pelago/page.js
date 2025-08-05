import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pelago",
  canonical: links.servizi["noleggio-bagni-chimici"]["pelago"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pelago",
  locationNames: { label: "Pelago", href: "pelago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
