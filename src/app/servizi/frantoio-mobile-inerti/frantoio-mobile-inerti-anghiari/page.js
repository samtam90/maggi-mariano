import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Anghiari",
  canonical: links.servizi["frantoio-mobile-inerti"]["anghiari"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Anghiari",
  locationNames: { label: "Anghiari", href: "anghiari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
