import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Foligno",
  canonical: links.servizi["noleggio-bagni-chimici"]["foligno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Foligno",
  locationNames: { label: "Foligno", href: "foligno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
