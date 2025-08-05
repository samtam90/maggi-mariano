import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Collazzone",
  canonical: links.servizi["noleggio-bagni-chimici"]["collazzone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Collazzone",
  locationNames: { label: "Collazzone", href: "collazzone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
