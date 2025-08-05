import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Torgiano",
  canonical: links.servizi["noleggio-bagni-chimici"]["torgiano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Torgiano",
  locationNames: { label: "Torgiano", href: "torgiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
