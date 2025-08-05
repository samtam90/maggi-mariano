import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Forlimpopoli",
  canonical: links.servizi["centrifugazione-fanghi"]["forlimpopoli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Forlimpopoli",
  locationNames: { label: "Forlimpopoli", href: "forlimpopoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
