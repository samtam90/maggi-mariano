import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bettona",
  canonical: links.servizi["noleggio-bagni-chimici"]["bettona"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bettona",
  locationNames: { label: "Bettona", href: "bettona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
