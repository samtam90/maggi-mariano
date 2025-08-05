import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Spello",
  canonical: links.servizi["noleggio-bagni-chimici"]["spello"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Spello",
  locationNames: { label: "Spello", href: "spello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
