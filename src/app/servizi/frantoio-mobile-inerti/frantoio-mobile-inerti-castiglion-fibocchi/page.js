import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castiglion Fibocchi",
  canonical: links.servizi["frantoio-mobile-inerti"]["castiglion-fibocchi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castiglion Fibocchi",
  locationNames: { label: "Castiglion Fibocchi", href: "castiglion-fibocchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
