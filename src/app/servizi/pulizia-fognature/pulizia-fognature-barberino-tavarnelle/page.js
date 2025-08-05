import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Barberino Tavarnelle",
  canonical: links.servizi["pulizia-fognature"]["barberino-tavarnelle"],
});
export default withBaseProps({
  title: "Pulizia fognature Barberino Tavarnelle",
  locationNames: { label: "Barberino Tavarnelle", href: "barberino-tavarnelle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
