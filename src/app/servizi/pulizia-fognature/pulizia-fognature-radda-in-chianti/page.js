import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Radda in Chianti",
  canonical: links.servizi["pulizia-fognature"]["radda-in-chianti"],
});
export default withBaseProps({
  title: "Pulizia fognature Radda in Chianti",
  locationNames: { label: "Radda in Chianti", href: "radda-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
