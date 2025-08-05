import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Carbonia Iglesias",
  canonical: links.servizi["frantoio-mobile-inerti"]["carbonia-iglesias"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Carbonia Iglesias",
  locationNames: { label: "Carbonia Iglesias", href: "carbonia-iglesias" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["carbonia-iglesias"],
      name: "Carbonia Iglesias",
  }),
});
