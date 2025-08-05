import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bettona",
  canonical: links.servizi["pulizia-fognature"]["bettona"],
});
export default withBaseProps({
  title: "Pulizia fognature Bettona",
  locationNames: { label: "Bettona", href: "bettona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
