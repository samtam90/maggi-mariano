import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Nuoro",
  canonical: links.servizi["pulizia-fognature"]["nuoro"],
});
export default withBaseProps({
  title: "Pulizia fognature Nuoro",
  locationNames: { label: "Nuoro", href: "nuoro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["nuoro"],
      name: "Nuoro",
  }),
});
