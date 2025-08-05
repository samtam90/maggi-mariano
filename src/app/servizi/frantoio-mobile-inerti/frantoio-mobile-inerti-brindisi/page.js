import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Brindisi",
  canonical: links.servizi["frantoio-mobile-inerti"]["brindisi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Brindisi",
  locationNames: { label: "Brindisi", href: "brindisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["brindisi"],
      name: "Brindisi",
  }),
});
