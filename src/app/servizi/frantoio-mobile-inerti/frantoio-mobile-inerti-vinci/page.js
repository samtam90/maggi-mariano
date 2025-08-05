import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Vinci",
  canonical: links.servizi["frantoio-mobile-inerti"]["vinci"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Vinci",
  locationNames: { label: "Vinci", href: "vinci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
