import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montemignaio",
  canonical: links.servizi["frantoio-mobile-inerti"]["montemignaio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montemignaio",
  locationNames: { label: "Montemignaio", href: "montemignaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
