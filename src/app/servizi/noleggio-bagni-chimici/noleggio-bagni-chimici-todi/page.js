import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Todi",
  canonical: links.servizi["noleggio-bagni-chimici"]["todi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Todi",
  locationNames: { label: "Todi", href: "todi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
