import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Marciano della Chiana",
  canonical: links.servizi["pulizia-fognature"]["marciano-della-chiana"],
});
export default withBaseProps({
  title: "Pulizia fognature Marciano della Chiana",
  locationNames: { label: "Marciano della Chiana", href: "marciano-della-chiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
