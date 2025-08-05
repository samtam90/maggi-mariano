import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pietralunga",
  canonical: links.servizi["frantoio-mobile-inerti"]["pietralunga"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pietralunga",
  locationNames: { label: "Pietralunga", href: "pietralunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
