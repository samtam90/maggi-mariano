import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti San Venanzo",
  canonical: links.servizi["frantoio-mobile-inerti"]["san-venanzo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti San Venanzo",
  locationNames: { label: "San Venanzo", href: "san-venanzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
