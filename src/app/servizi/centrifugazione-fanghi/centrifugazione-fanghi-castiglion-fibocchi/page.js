import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Castiglion Fibocchi",
  canonical: links.servizi["centrifugazione-fanghi"]["castiglion-fibocchi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Castiglion Fibocchi",
  locationNames: { label: "Castiglion Fibocchi", href: "castiglion-fibocchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
