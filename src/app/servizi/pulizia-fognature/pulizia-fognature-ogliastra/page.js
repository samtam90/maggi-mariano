import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ogliastra",
  canonical: links.servizi["pulizia-fognature"]["ogliastra"],
});
export default withBaseProps({
  title: "Pulizia fognature Ogliastra",
  locationNames: { label: "Ogliastra", href: "ogliastra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["ogliastra"],
      name: "Ogliastra",
  }),
});
