import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Chiusi della Verna",
  canonical: links.servizi["frantoio-mobile-inerti"]["chiusi-della-verna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Chiusi della Verna",
  locationNames: { label: "Chiusi della Verna", href: "chiusi-della-verna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
