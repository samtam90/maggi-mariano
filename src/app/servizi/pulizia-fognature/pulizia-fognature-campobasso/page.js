import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Campobasso",
  canonical: links.servizi["pulizia-fognature"]["campobasso"],
});
export default withBaseProps({
  title: "Pulizia fognature Campobasso",
  locationNames: { label: "Campobasso", href: "campobasso" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["campobasso"],
      name: "Campobasso",
  }),
});
