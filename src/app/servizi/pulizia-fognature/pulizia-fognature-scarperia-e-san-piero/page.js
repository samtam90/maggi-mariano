import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Scarperia e San Piero",
  canonical: links.servizi["pulizia-fognature"]["scarperia-e-san-piero"],
});
export default withBaseProps({
  title: "Pulizia fognature Scarperia e San Piero",
  locationNames: { label: "Scarperia e San Piero", href: "scarperia-e-san-piero" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
