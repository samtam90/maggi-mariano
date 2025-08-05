import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Gatteo",
  canonical: links.servizi["disidratazione-fanghi"]["gatteo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Gatteo",
  locationNames: { label: "Gatteo", href: "gatteo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
