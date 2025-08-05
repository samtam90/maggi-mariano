import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Loro ciuffenna",
  canonical: links.servizi["frantoio-mobile-inerti"]["loro-ciuffenna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Loro ciuffenna",
  locationNames: { label: "Loro ciuffenna", href: "loro-ciuffenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
