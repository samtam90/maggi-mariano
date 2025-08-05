import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Capolona",
  canonical: links.servizi["pulizia-fognature"]["capolona"],
});
export default withBaseProps({
  title: "Pulizia fognature Capolona",
  locationNames: { label: "Capolona", href: "capolona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
