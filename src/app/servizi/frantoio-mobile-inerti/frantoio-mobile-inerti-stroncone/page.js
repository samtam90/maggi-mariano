import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Stroncone",
  canonical: links.servizi["frantoio-mobile-inerti"]["stroncone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Stroncone",
  locationNames: { label: "Stroncone", href: "stroncone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
