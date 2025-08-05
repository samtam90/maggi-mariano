import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel Viscardo",
  canonical: links.servizi["noleggio-bagni-chimici"]["castel-viscardo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castel Viscardo",
  locationNames: { label: "Castel Viscardo", href: "castel-viscardo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
