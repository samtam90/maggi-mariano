import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Dovadola",
  canonical: links.servizi["centrifugazione-fanghi"]["dovadola"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Dovadola",
  locationNames: { label: "Dovadola", href: "dovadola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
