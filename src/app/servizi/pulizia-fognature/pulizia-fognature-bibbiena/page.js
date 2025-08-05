import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bibbiena",
  canonical: links.servizi["pulizia-fognature"]["bibbiena"],
});
export default withBaseProps({
  title: "Pulizia fognature Bibbiena",
  locationNames: { label: "Bibbiena", href: "bibbiena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
