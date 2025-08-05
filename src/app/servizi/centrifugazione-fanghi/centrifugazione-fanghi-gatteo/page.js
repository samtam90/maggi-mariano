import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Gatteo",
  canonical: links.servizi["centrifugazione-fanghi"]["gatteo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Gatteo",
  locationNames: { label: "Gatteo", href: "gatteo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
