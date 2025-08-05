import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Umbertide",
  canonical: links.servizi["frantoio-mobile-inerti"]["umbertide"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Umbertide",
  locationNames: { label: "Umbertide", href: "umbertide" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
