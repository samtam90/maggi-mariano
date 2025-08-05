import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Fossato di Vico",
  canonical: links.servizi["pulizia-fognature"]["fossato-di-vico"],
});
export default withBaseProps({
  title: "Pulizia fognature Fossato di Vico",
  locationNames: { label: "Fossato di Vico", href: "fossato-di-vico" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
