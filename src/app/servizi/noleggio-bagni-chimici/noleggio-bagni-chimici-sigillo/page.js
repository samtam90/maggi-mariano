import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sigillo",
  canonical: links.servizi["noleggio-bagni-chimici"]["sigillo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sigillo",
  locationNames: { label: "Sigillo", href: "sigillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
