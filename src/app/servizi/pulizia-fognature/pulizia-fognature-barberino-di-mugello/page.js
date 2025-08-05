import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Barberino di Mugello",
  canonical: links.servizi["pulizia-fognature"]["barberino-di-mugello"],
});
export default withBaseProps({
  title: "Pulizia fognature Barberino di Mugello",
  locationNames: { label: "Barberino di Mugello", href: "barberino-di-mugello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
