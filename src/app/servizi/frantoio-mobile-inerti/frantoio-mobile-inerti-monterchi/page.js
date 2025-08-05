import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Monterchi",
  canonical: links.servizi["frantoio-mobile-inerti"]["monterchi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Monterchi",
  locationNames: { label: "Monterchi", href: "monterchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
