import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Calvi dell'Umbria",
  canonical: links.servizi["frantoio-mobile-inerti"]["calvi-dell-umbria"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Calvi dell'Umbria",
  locationNames: { label: "Calvi dell'Umbria", href: "calvi-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
