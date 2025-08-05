import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Genova",
  canonical: links.servizi["disidratazione-fanghi"]["genova"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Genova",
  locationNames: { label: "Genova", href: "genova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["genova"],
      name: "Genova",
  }),
});
