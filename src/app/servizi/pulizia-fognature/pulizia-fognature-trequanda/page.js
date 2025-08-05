import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Trequanda",
  canonical: links.servizi["pulizia-fognature"]["trequanda"],
});
export default withBaseProps({
  title: "Pulizia fognature Trequanda",
  locationNames: { label: "Trequanda", href: "trequanda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
