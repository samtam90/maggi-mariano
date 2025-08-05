import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Torgiano",
  canonical: links.servizi["pulizia-fognature"]["torgiano"],
});
export default withBaseProps({
  title: "Pulizia fognature Torgiano",
  locationNames: { label: "Torgiano", href: "torgiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
