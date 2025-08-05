import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Assisi",
  canonical: links.servizi["noleggio-bagni-chimici"]["assisi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Assisi",
  locationNames: { label: "Assisi", href: "assisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
