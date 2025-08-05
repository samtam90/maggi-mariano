import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Alviano",
  canonical: links.servizi["pulizia-fognature"]["alviano"],
});
export default withBaseProps({
  title: "Pulizia fognature Alviano",
  locationNames: { label: "Alviano", href: "alviano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
