import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Scheggia e Pascelupo",
  canonical: links.servizi["noleggio-bagni-chimici"]["scheggia-e-pascelupo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Scheggia e Pascelupo",
  locationNames: { label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
