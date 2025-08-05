import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Ferrara",
  canonical: links.servizi["centrifugazione-fanghi"]["ferrara"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Ferrara",
  locationNames: { label: "Ferrara", href: "ferrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["ferrara"],
      name: "Ferrara",
  }),
});
