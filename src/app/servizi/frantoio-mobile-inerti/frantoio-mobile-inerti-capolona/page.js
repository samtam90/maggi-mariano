import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Capolona",
  canonical: links.servizi["frantoio-mobile-inerti"]["capolona"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Capolona",
  locationNames: { label: "Capolona", href: "capolona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
