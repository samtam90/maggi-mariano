import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cremona",
  canonical: links.servizi["pulizia-fognature"]["cremona"],
});
export default withBaseProps({
  title: "Pulizia fognature Cremona",
  locationNames: { label: "Cremona", href: "cremona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["cremona"],
      name: "Cremona",
  }),
});
