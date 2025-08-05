import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castelfranco Piandiscò",
  canonical: links.servizi["pulizia-fognature"]["castelfranco-piandisco"],
});
export default withBaseProps({
  title: "Pulizia fognature Castelfranco Piandiscò",
  locationNames: { label: "Castelfranco Piandiscò", href: "castelfranco-piandisco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
