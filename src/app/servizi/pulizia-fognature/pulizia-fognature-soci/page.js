import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Soci",
  canonical: links.servizi["pulizia-fognature"]["soci"],
});
export default withBaseProps({
  title: "Pulizia fognature Soci",
  locationNames: { label: "Soci", href: "soci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
