import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castel San Niccolò",
  canonical: links.servizi["pulizia-fognature"]["castel-san-niccolo"],
});
export default withBaseProps({
  title: "Pulizia fognature Castel San Niccolò",
  locationNames: { label: "Castel San Niccolò", href: "castel-san-niccolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
