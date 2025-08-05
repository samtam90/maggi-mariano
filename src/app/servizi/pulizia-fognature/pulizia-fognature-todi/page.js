import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Todi",
  canonical: links.servizi["pulizia-fognature"]["todi"],
});
export default withBaseProps({
  title: "Pulizia fognature Todi",
  locationNames: { label: "Todi", href: "todi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
