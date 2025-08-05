import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Bevagna",
  canonical: links.servizi["frantoio-mobile-inerti"]["bevagna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Bevagna",
  locationNames: { label: "Bevagna", href: "bevagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
