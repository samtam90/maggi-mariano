import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gualdo Cattaneo",
  canonical: links.servizi["noleggio-bagni-chimici"]["gualdo-cattaneo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Gualdo Cattaneo",
  locationNames: { label: "Gualdo Cattaneo", href: "gualdo-cattaneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
