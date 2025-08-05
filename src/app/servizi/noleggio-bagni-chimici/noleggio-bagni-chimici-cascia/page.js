import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cascia",
  canonical: links.servizi["noleggio-bagni-chimici"]["cascia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cascia",
  locationNames: { label: "Cascia", href: "cascia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
