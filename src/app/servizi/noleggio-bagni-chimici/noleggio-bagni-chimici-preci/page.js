import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Preci",
  canonical: links.servizi["noleggio-bagni-chimici"]["preci"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Preci",
  locationNames: { label: "Preci", href: "preci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
