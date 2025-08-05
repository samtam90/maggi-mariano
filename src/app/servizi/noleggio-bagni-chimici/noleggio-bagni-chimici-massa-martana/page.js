import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Massa Martana",
  canonical: links.servizi["noleggio-bagni-chimici"]["massa-martana"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Massa Martana",
  locationNames: { label: "Massa Martana", href: "massa-martana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
