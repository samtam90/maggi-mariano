import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montepulciano",
  canonical: links.servizi["pulizia-fognature"]["montepulciano"],
});
export default withBaseProps({
  title: "Pulizia fognature Montepulciano",
  locationNames: { label: "Montepulciano", href: "montepulciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
