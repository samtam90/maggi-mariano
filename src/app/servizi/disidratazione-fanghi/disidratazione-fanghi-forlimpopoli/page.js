import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Forlimpopoli",
  canonical: links.servizi["disidratazione-fanghi"]["forlimpopoli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Forlimpopoli",
  locationNames: { label: "Forlimpopoli", href: "forlimpopoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
