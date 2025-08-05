import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Campello sul Clitunno",
  canonical: links.servizi["noleggio-bagni-chimici"]["campello-sul-clitunno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Campello sul Clitunno",
  locationNames: { label: "Campello sul Clitunno", href: "campello-sul-clitunno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
