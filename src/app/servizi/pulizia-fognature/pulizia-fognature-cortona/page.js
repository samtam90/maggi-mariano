import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cortona",
  canonical: links.servizi["pulizia-fognature"]["cortona"],
});
export default withBaseProps({
  title: "Pulizia fognature Cortona",
  locationNames: { label: "Cortona", href: "cortona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
