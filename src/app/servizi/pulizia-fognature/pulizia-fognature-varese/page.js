import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Varese",
  canonical: links.servizi["pulizia-fognature"]["varese"],
});
export default withBaseProps({
  title: "Pulizia fognature Varese",
  locationNames: { label: "Varese", href: "varese" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["varese"],
      name: "Varese",
  }),
});
