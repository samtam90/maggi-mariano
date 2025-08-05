import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castiglion Fibocchi",
  canonical: links.servizi["disidratazione-fanghi"]["castiglion-fibocchi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castiglion Fibocchi",
  locationNames: { label: "Castiglion Fibocchi", href: "castiglion-fibocchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
