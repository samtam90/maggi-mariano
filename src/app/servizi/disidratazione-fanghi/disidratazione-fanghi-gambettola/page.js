import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Gambettola",
  canonical: links.servizi["disidratazione-fanghi"]["gambettola"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Gambettola",
  locationNames: { label: "Gambettola", href: "gambettola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
