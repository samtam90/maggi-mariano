import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Bucine",
  canonical: links.servizi["frantoio-mobile-inerti"]["bucine"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Bucine",
  locationNames: { label: "Bucine", href: "bucine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
