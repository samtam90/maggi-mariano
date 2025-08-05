import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sovicille",
  canonical: links.servizi["pulizia-fognature"]["sovicille"],
});
export default withBaseProps({
  title: "Pulizia fognature Sovicille",
  locationNames: { label: "Sovicille", href: "sovicille" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
