import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Verona",
  canonical: links.servizi["pulizia-fognature"]["verona"],
});
export default withBaseProps({
  title: "Pulizia fognature Verona",
  locationNames: { label: "Verona", href: "verona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["verona"],
      name: "Verona",
  }),
});
