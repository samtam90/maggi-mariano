import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Lecce",
  canonical: links.servizi["frantoio-mobile-inerti"]["lecce"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Lecce",
  locationNames: { label: "Lecce", href: "lecce" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
