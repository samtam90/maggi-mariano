import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Savona",
  canonical: links.servizi["pulizia-fognature"]["savona"],
});
export default withBaseProps({
  title: "Pulizia fognature Savona",
  locationNames: { label: "Savona", href: "savona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
