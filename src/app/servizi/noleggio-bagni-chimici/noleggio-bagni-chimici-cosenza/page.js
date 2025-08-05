import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cosenza",
  canonical: links.servizi["noleggio-bagni-chimici"]["cosenza"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cosenza",
  locationNames: { label: "Cosenza", href: "cosenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["cosenza"],
      name: "Cosenza",
  }),
});
