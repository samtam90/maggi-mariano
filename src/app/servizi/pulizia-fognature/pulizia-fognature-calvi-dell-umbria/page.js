import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Calvi dell'Umbria",
  canonical: links.servizi["pulizia-fognature"]["calvi-dell-umbria"],
});
export default withBaseProps({
  title: "Pulizia fognature Calvi dell'Umbria",
  locationNames: { label: "Calvi dell'Umbria", href: "calvi-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
