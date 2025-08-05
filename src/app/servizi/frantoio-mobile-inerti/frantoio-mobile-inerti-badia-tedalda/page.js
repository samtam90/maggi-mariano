import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Badia Tedalda",
  canonical: links.servizi["frantoio-mobile-inerti"]["badia-tedalda"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Badia Tedalda",
  locationNames: { label: "Badia Tedalda", href: "badia-tedalda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
