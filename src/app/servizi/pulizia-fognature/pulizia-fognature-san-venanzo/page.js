import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature San Venanzo",
  canonical: links.servizi["pulizia-fognature"]["san-venanzo"],
});
export default withBaseProps({
  title: "Pulizia fognature San Venanzo",
  locationNames: { label: "San Venanzo", href: "san-venanzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
