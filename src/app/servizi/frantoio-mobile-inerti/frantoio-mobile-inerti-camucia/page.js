import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Camucia",
  canonical: links.servizi["frantoio-mobile-inerti"]["camucia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Camucia",
  locationNames: { label: "Camucia", href: "camucia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
