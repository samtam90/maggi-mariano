import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Agrigento",
  canonical: links.servizi["pulizia-fognature"]["agrigento"],
});
export default withBaseProps({
  title: "Pulizia fognature Agrigento",
  locationNames: { label: "Agrigento", href: "agrigento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});
