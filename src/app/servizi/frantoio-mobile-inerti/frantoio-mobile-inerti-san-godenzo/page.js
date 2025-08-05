import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti San Godenzo",
  canonical: links.servizi["frantoio-mobile-inerti"]["san-godenzo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti San Godenzo",
  locationNames: { label: "San Godenzo", href: "san-godenzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
