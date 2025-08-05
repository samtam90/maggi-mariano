import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castelfranco Piandiscò",
  canonical: links.servizi["frantoio-mobile-inerti"]["castelfranco-piandisco"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castelfranco Piandiscò",
  locationNames: { label: "Castelfranco Piandiscò", href: "castelfranco-piandisco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
