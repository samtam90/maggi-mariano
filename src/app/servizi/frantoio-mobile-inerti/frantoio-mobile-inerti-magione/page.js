import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Magione",
  canonical: links.servizi["frantoio-mobile-inerti"]["magione"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Magione",
  locationNames: { label: "Magione", href: "magione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
