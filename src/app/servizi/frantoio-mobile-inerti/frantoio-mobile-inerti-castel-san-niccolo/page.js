import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castel San Niccolò",
  canonical: links.servizi["frantoio-mobile-inerti"]["castel-san-niccolo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castel San Niccolò",
  locationNames: { label: "Castel San Niccolò", href: "castel-san-niccolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
