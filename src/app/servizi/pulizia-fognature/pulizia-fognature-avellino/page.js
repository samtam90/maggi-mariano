import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Avellino",
  canonical: links.servizi["pulizia-fognature"]["avellino"],
});
export default withBaseProps({
  title: "Pulizia fognature Avellino",
  locationNames: { label: "Avellino", href: "avellino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["avellino"],
      name: "Avellino",
  }),
});
