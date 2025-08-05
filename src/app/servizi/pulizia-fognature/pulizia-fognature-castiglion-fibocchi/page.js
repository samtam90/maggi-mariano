import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castiglion Fibocchi",
  canonical: links.servizi["pulizia-fognature"]["castiglion-fibocchi"],
});
export default withBaseProps({
  title: "Pulizia fognature Castiglion Fibocchi",
  locationNames: { label: "Castiglion Fibocchi", href: "castiglion-fibocchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
