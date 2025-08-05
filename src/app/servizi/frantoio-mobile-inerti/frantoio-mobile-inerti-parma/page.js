import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Parma",
  canonical: links.servizi["frantoio-mobile-inerti"]["parma"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Parma",
  locationNames: { label: "Parma", href: "parma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["parma"],
      name: "Parma",
  }),
});
