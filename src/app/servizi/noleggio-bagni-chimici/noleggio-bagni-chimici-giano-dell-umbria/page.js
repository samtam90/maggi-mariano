import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Giano dell'Umbria",
  canonical: links.servizi["noleggio-bagni-chimici"]["giano-dell-umbria"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Giano dell'Umbria",
  locationNames: { label: "Giano dell'Umbria", href: "giano-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
