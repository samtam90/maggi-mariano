import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Radicofani",
  canonical: links.servizi["pulizia-fognature"]["radicofani"],
});
export default withBaseProps({
  title: "Pulizia fognature Radicofani",
  locationNames: { label: "Radicofani", href: "radicofani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
