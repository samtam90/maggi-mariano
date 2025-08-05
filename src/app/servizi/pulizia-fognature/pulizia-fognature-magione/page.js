import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Magione",
  canonical: links.servizi["pulizia-fognature"]["magione"],
});
export default withBaseProps({
  title: "Pulizia fognature Magione",
  locationNames: { label: "Magione", href: "magione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
