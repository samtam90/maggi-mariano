import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Poppi",
  canonical: links.servizi["pulizia-fognature"]["poppi"],
});
export default withBaseProps({
  title: "Pulizia fognature Poppi",
  locationNames: { label: "Poppi", href: "poppi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
