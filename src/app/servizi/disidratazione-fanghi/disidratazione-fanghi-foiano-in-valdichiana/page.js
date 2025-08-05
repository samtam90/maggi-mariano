import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Foiano in Valdichiana",
  canonical: links.servizi["disidratazione-fanghi"]["foiano-in-valdichiana"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Foiano in Valdichiana",
  locationNames: { label: "Foiano in Valdichiana", href: "foiano-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
