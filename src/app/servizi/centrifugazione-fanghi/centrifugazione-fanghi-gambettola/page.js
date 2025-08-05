import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Gambettola",
  canonical: links.servizi["centrifugazione-fanghi"]["gambettola"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Gambettola",
  locationNames: { label: "Gambettola", href: "gambettola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
