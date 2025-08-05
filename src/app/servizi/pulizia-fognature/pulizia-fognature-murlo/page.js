import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Murlo",
  canonical: links.servizi["pulizia-fognature"]["murlo"],
});
export default withBaseProps({
  title: "Pulizia fognature Murlo",
  locationNames: { label: "Murlo", href: "murlo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
