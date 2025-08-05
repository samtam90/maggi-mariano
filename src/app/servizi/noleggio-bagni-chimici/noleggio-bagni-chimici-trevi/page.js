import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trevi",
  canonical: links.servizi["noleggio-bagni-chimici"]["trevi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Trevi",
  locationNames: { label: "Trevi", href: "trevi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
