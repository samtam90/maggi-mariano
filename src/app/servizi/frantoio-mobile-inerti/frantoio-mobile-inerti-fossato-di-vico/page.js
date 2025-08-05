import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Fossato di Vico",
  canonical: links.servizi["frantoio-mobile-inerti"]["fossato-di-vico"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Fossato di Vico",
  locationNames: { label: "Fossato di Vico", href: "fossato-di-vico" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
