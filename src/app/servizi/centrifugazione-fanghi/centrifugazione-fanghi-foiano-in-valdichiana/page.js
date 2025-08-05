import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Foiano in Valdichiana",
  canonical: links.servizi["centrifugazione-fanghi"]["foiano-in-valdichiana"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Foiano in Valdichiana",
  locationNames: { label: "Foiano in Valdichiana", href: "foiano-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
