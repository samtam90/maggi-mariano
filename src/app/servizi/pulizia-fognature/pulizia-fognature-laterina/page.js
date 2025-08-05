import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Laterina",
  canonical: links.servizi["pulizia-fognature"]["laterina"],
});
export default withBaseProps({
  title: "Pulizia fognature Laterina",
  locationNames: { label: "Laterina", href: "laterina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
