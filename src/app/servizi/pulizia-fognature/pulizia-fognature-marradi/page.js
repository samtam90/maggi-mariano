import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Marradi",
  canonical: links.servizi["pulizia-fognature"]["marradi"],
});
export default withBaseProps({
  title: "Pulizia fognature Marradi",
  locationNames: { label: "Marradi", href: "marradi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
