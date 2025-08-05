import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montevarchi",
  canonical: links.servizi["frantoio-mobile-inerti"]["montevarchi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montevarchi",
  locationNames: { label: "Montevarchi", href: "montevarchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
