import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Subbiano",
  canonical: links.servizi["frantoio-mobile-inerti"]["subbiano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Subbiano",
  locationNames: { label: "Subbiano", href: "subbiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
