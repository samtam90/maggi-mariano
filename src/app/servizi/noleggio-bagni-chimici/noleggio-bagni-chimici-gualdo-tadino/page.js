import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gualdo Tadino",
  canonical: links.servizi["noleggio-bagni-chimici"]["gualdo-tadino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Gualdo Tadino",
  locationNames: { label: "Gualdo Tadino", href: "gualdo-tadino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
