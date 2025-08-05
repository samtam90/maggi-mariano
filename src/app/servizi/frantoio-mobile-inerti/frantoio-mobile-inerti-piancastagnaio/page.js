import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Piancastagnaio",
  canonical: links.servizi["frantoio-mobile-inerti"]["piancastagnaio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Piancastagnaio",
  locationNames: { label: "Piancastagnaio", href: "piancastagnaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
