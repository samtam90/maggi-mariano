import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Lecce",
  canonical: links.servizi["pulizia-fognature"]["lecce"],
});
export default withBaseProps({
  title: "Pulizia fognature Lecce",
  locationNames: { label: "Lecce", href: "lecce" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
