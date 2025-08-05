import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cesa in valdichiana",
  canonical: links.servizi["disidratazione-fanghi"]["cesa-in-valdichiana"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cesa in valdichiana",
  locationNames: { label: "Cesa in valdichiana", href: "cesa-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
