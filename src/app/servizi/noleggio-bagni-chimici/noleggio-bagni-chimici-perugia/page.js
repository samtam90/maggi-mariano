import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Perugia",
  canonical: links.servizi["noleggio-bagni-chimici"]["perugia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
