import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ferrara",
  canonical: links.servizi["disidratazione-fanghi"]["ferrara"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ferrara",
  locationNames: { label: "Ferrara", href: "ferrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["ferrara"],
      name: "Ferrara",
  }),
});
