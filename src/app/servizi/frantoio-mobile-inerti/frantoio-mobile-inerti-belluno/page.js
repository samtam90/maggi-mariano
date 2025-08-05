import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Belluno",
  canonical: links.servizi["frantoio-mobile-inerti"]["belluno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Belluno",
  locationNames: { label: "Belluno", href: "belluno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
